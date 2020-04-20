import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View, Text, FlatList, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { InputLine } from './../../../utils/keyValueComponents';
import { addEvent } from './../../../actions/CreateEventAction';
import { ImageSelector } from './../../../utils/imageComponents';
import { Colors } from '@blueprintjs/core';
import moment from 'moment';

// import Contacts from 'react-native-contacts';

export class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      location: null,
      dateTime: null,
      description: null,
      image: require('../../../resources/images/MyBirthday.jpg'),
      guests: ['0', '1', '4', '7'],
      pageNumber: 0,
      contacts: null,
    };
  }

  // componentDidMount = () => {
  //   Contacts.getAll((err, contacts) => {
  //     if (err) {
  //       throw err;
  //     }
  //     this.setState({contacts: contacts})
  //   })
  // }

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
        <Text style={styles.headerText}>
          {this.state.pageNumber === 0
            ? '- Details -'
            : this.state.pageNumber === 1
            ? '- Photo -'
            : this.state.pageNumber === 2
            ? '- Guests -'
            : '- Spotify -'}
        </Text>
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
            <TouchableHighlight
              style={styles.saveButton}
              onPress={() => {
                this.state.pageNumber === 0 ? this.props.cancelCallback() : this.goBack();
              }}>
              <Text style={styles.textSave}>{this.state.pageNumber === 0 ? 'Cancel' : 'Back'}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.saveButton}
              onPress={() => {
                this.state.pageNumber === 3 ? this.submitCreateEvent() : this.goNext();
              }}>
              <Text style={styles.textSave}>{this.state.pageNumber === 3 ? 'Create Event' : 'Next'}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createEventContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageArea: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width,
    backgroundColor: Colors.WHITE,
  },
  headerArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 5,
    top: '5%',
  },
  saveButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150,
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    events: state.EventsReducer.events,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addEvent,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEvent);
