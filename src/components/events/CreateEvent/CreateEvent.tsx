import React from 'react';

import { View, Text, FlatList } from 'react-native';
import { InputLine } from './../../../utils/keyValueComponents';
import { ImageSelector } from './../../../utils/imageComponents';
import { styles } from './styles';
import moment from 'moment';

import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import { ContactSelector } from './../../../utils/contactComponent';
import { TouchableButton } from './../../../utils/touchableComponents';
import { globalStylesLight } from './../../../utils/globalStyles';

export class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      location: null,
      dateTime: null,
      description: null,
      image: require('../../../resources/images/MyBirthday.jpg'),
      guests: [],
      pageNumber: 0,
      contacts: null,
    };
  }

  componentDidMount = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied') {
          console.log('Insufficient Permissions');
        } else {
          console.log(contacts);
          this.setState({ contacts: contacts });
        }
      });
    });
  };

  addGuest = (guest) => {
    this.setState({
      guests: this.state.guests.push(guest),
    });
  };

  removeGuest = (guest) => {
    this.setState({
      guests: this.state.guests.filter((gs) => gs.recordId !== guest.recordId),
    });
  };

  submitCreateEvent = () => {
    this.props.addEvent(
      this.state.title,
      this.state.dateTime,
      this.state.location,
      this.state.description,
      this.state.image,
      this.state.guests,
    );
    this.state.pageNumber = 0;
    this.props.cancelCallback();
  };

  goBack = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  goNext = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    const pageToButton = {
      0: {
        name: 'Details',
        backText: 'Cancel',
        back: () => this.props.cancelCallback(),
        nextText: 'Next',
        next: () => this.goNext(),
      },
      1: {
        name: 'Photo',
        backText: 'Cancel',
        back: () => this.goBack(),
        nextText: 'Next',
        next: () => this.goNext(),
      },
      2: {
        name: 'Guests',
        backText: 'Cancel',
        back: () => this.goBack(),
        nextText: 'Next',
        next: () => this.goNext(),
      },
      3: {
        name: 'Spotify',
        backText: 'Cancel',
        back: () => this.goBack(),
        nextText: 'Submit',
        next: () => this.submitCreateEvent(),
      },
    };
    const eventProperties = [
      {
        property: 'Title ',
        value: 'Name your event',
        defaultValue: 'Name your event',
        setStateCallback: (val) => this.setState({ title: val }),
        editType: 'text',
      },
      {
        property: 'Location ',
        value: "Where's is happening?",
        defaultValue: "Where's is happening?",
        setStateCallback: (val) => this.setState({ location: val }),
        editType: 'text',
      },
      {
        property: 'Date & Time ',
        value: '',
        defaultValue: '',
        setStateCallback: (val) =>
          this.setState({ dateTime: moment(val, 'HH mm Do MMM YYYY').format('DD-MM-YYYY HH:mm') }),
        editType: 'dateTimePicker',
      },
      {
        property: 'Description ',
        value: "What's going down?",
        defaultValue: "What's going down?",
        setStateCallback: (val) => this.setState({ Description: val }),
        editType: 'longText',
      },
    ];
    return (
      <View style={styles.createEventContainer}>
        <Text style={styles.headerText}>{pageToButton[this.state.pageNumber].name}</Text>
        <View style={styles.editContainer}>
          {this.state.pageNumber === 0 ? (
            <InputLine properties={eventProperties} />
          ) : this.state.pageNumber === 1 ? (
            <View style={styles.imageArea}>
              <ImageSelector
                image={this.state.image}
                size="medium"
                shape="square"
                callbackSetImage={(image) => this.setState({ image: image })}
              />
            </View>
          ) : this.state.pageNumber === 2 ? (
            <View style={styles.imageArea}>
              <FlatList
                data={this.state.contacts}
                renderItem={({ item }) => (
                  <ContactSelector
                    contact={item}
                    guests={this.state.guests}
                    addGuestCallback={(g) => this.addGuest(g)}
                    removeGuestCallback={(g) => this.removeGuests(g)}
                  />
                )}
                keyExtractor={(item) => item.recordID}
              />
            </View>
          ) : (
            <View style={styles.imageArea}>
              <FlatList
                data={this.state.contacts}
                renderItem={({ item }) => <Text> {item.givenName} </Text>}
                keyExtractor={(item) => item.recordID}
              />
            </View>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonArea}>
            <TouchableButton
              callback={() => pageToButton[this.state.pageNumber].back()}
              text={pageToButton[this.state.pageNumber].backText}
              style={globalStylesLight.buttonSecondary}
            />
            <TouchableButton
              callback={() => pageToButton[this.state.pageNumber].next()}
              text={pageToButton[this.state.pageNumber].nextText}
              style={globalStylesLight.buttonPrimary}
            />
          </View>
        </View>
      </View>
    );
  }
}
