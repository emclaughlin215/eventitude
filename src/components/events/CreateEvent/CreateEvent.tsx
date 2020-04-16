import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View, Text, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { InputLine } from './../../../utils/keyValueComponents';
import { addTitle, addLocation, addDateTime, addDescription } from './../../../actions/CreateEventAction';
import { ImageSelector } from './../../../utils/imageComponents';
import { Colors } from '@blueprintjs/core';

export class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      location: null,
      dateTime: null,
      description: null,
      pageNumber: 0,
    };
  }

  cancelCreateEvent = () => {
    this.setState({ pageNumber: this.state.pageNumber - 1 });
  };

  submitCreateEvent = () => {
    this.props.createEventState.addTitle(this.state.title);
    this.props.createEventState.addDateTime(this.state.dateTime);
    this.props.createEventState.addLocation(this.state.location);
    this.props.createEventState.addDescription(this.state.description);
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
        value: 'Title',
        defaultValue: 'Name your event',
        setStateCallback: (val) => this.setState({ title: val }),
        editType: 'text',
      },
      {
        property: 'Location',
        value: '',
        defaultValue: "Where's is happening?",
        setStateCallback: (val) => this.setState({ location: val }),
        editType: 'text',
      },
      {
        property: 'Date & Time',
        value: '',
        defaultValue: '',
        setStateCallback: (val) => this.setState({ dateTime: val }),
        editType: 'dateTimePicker',
      },
      {
        property: 'Description',
        value: '',
        defaultValue: "What's going down?",
        setStateCallback: (val) => this.setState({ Description: val }),
        editType: 'longText',
      },
    ];
    return (
      <View style={styles.createEventContainer}>
        <Text style={styles.headerText}> {this.state.pageNumber === 0 ? '- Details -' : this.state.pageNumber === 1 ? '- Photo -' : this.state.pageNumber === 2 ? '- Guests -' : '- Spotify -'} </Text>
        <View style={styles.editContainer}>
          {this.state.pageNumber === 0 ? (
            <InputLine properties={eventProperties} />
          ) : (
            <View style={styles.imageArea}>
              <ImageSelector image={require('../../../resources/images/MyBirthday.jpg')}  size="medium" shape="square" />
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
    createEventState: state.CreateEventReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addTitle,
      addLocation,
      addDateTime,
      addDescription,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateEvent);
