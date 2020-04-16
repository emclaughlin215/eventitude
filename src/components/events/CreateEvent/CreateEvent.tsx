import React from 'react';

import { View, Text, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { InputLine } from './../../../utils/keyValueComponents';

export class CreateEvent extends React.Component {
  constructor() {
    super();
    this.state = {
      title: null,
      location: null,
      dateTime: null,
      description: null,
    };
  }
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
        <InputLine properties={eventProperties} />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonArea}>
            <TouchableHighlight
              style={styles.saveButton}
              onPress={() => {
                this.goBack();
              }}>
              <Text style={styles.textSave}>Back</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.saveButton}
              onPress={() => {
                this.goNext();
              }}>
              <Text style={styles.textSave}>Next</Text>
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
    marginTop: 30,
    marginBottom: 30,
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
