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
import { IEvent } from '../../../reducers/EventsReducer';

export interface ICreateEventProps {
  cancelCallback: () => void;
  addGuest: () => void;
  removeGuest: () => void;
  addEvent: (args: IEvent) => void;
}

interface ICreateEventState {
  title: String;
  location: String;
  dateTime: String;
  description: String;
  image: String;
  guests: Contacts.Contact[];
  pageNumber: number;
  contacts?: Contacts.Contact[];
}

export class CreateEvent extends React.Component<ICreateEventProps, ICreateEventState> {
  constructor(props: ICreateEventProps) {
    super(props);
    this.state = {
      title: '',
      location: '',
      dateTime: '',
      description: '',
      image: require('../../../resources/images/MyBirthday.jpg'),
      guests: [],
      pageNumber: 0,
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

  addGuest = (guest: Contacts.Contact) => {
    let newGuests = this.state.guests;
    newGuests.push(guest);
    this.setState({
      guests: newGuests,
    });
  };

  removeGuest = (guest: Contacts.Contact) => {
    this.setState({
      guests: this.state.guests.filter((gs) => gs.recordID !== guest.recordID),
    });
  };

  submitCreateEvent = () => {
    this.props.addEvent({
      title: this.state.title,
      dateTime: this.state.dateTime,
      location: this.state.location,
      description: this.state.description,
      image: this.state.image,
      guests: this.state.guests,
    });
    this.setState({ pageNumber: 0 });
    this.props.cancelCallback();
  };

  goBack = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  goNext = () => {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };

  render() {
    const pageToButton = [
      {
        name: 'Details',
        backText: 'Cancel',
        back: () => this.props.cancelCallback(),
        nextText: 'Next',
        next: () => this.goNext(),
      },
      {
        name: 'Photo',
        backText: 'Cancel',
        back: () => this.goBack(),
        nextText: 'Next',
        next: () => this.goNext(),
      },
      {
        name: 'Guests',
        backText: 'Cancel',
        back: () => this.goBack(),
        nextText: 'Next',
        next: () => this.goNext(),
      },
      {
        name: 'Spotify',
        backText: 'Cancel',
        back: () => this.goBack(),
        nextText: 'Submit',
        next: () => this.submitCreateEvent(),
      },
    ];
    const eventProperties = [
      {
        property: 'Title ',
        value: 'Name your event',
        defaultValue: 'Name your event',
        setStateCallback: (val: String) => this.setState({ title: val }),
        editType: 'text',
      },
      {
        property: 'Location ',
        value: "Where's is happening?",
        defaultValue: "Where's is happening?",
        setStateCallback: (val: String) => this.setState({ location: val }),
        editType: 'text',
      },
      {
        property: 'Date & Time ',
        value: '',
        defaultValue: '',
        setStateCallback: (val: Date) =>
          this.setState({ dateTime: moment(val, 'HH mm Do MMM YYYY').format('DD-MM-YYYY HH:mm') }),
        editType: 'dateTimePicker',
      },
      {
        property: 'Description ',
        value: "What's going down?",
        defaultValue: "What's going down?",
        setStateCallback: (val: String) => this.setState({ description: val }),
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
                callbackSetImage={(image: String) => this.setState({ image: image })}
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
                    addGuestCallback={(g: String) => this.addGuest(g)}
                    removeGuestCallback={(g: String) => this.removeGuest(g)}
                  />
                )}
                keyExtractor={(item: Contacts.Contact) => item.recordID}
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
              buttonStyle={globalStylesLight.buttonSecondary}
            />
            <TouchableButton
              callback={() => pageToButton[this.state.pageNumber].next()}
              text={pageToButton[this.state.pageNumber].nextText}
              buttonStyle={globalStylesLight.buttonPrimary}
            />
          </View>
        </View>
      </View>
    );
  }
}
