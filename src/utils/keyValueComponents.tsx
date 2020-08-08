import React from 'react';
import { View, FlatList, Text, Dimensions, StyleSheet, TextInput, Picker } from 'react-native';
import MyDatePicker from './dateComponents';

export interface IInputLineProperty {
  property: String;
  value: String;
  defaultValue: String;
  setStateCallback: (val: String | Date) => void;
  editType: String;
}

export interface IInputLine {
  properties: IInputLineProperty[];
}

export class InputLine extends React.Component<IInputLine> {
  constructor(props: IInputLine) {
    super(props);
  }
  render() {
    return (
      <View style={styles.properties}>
        <FlatList
          data={this.props.properties}
          renderItem={({ item }) => (
            <View style={styles.keyValue}>
              <Text style={styles.propertyText}>{item.property}</Text>
              {item.editType === 'datePicker' || item.editType === 'dateTimePicker' ? (
                <MyDatePicker
                  defaultValue={item.defaultValue}
                  editType={item.editType}
                  callback={item.setStateCallback}
                />
              ) : item.editType === 'dateFormatPicker' ? (
                <Picker style={styles.picker} selectedValue={item.value} onValueChange={item.setStateCallback}>
                  {[
                    { type: 'DD-MM-YYYY', disp: '31-12-2020' },
                    { type: 'MM-DD-YYYY', disp: '12-31-2020' },
                    { type: 'Do MMM YYYY', disp: '31st Dec 2020' },
                    { type: 'MMM Do YYYY', disp: 'Dec 31st 2020' },
                  ].map((val, index) => (
                    <Picker.Item key={index + 'dfpPickerItem'} label={val.disp} value={val.type} />
                  ))}
                </Picker>
              ) : item.editType === 'boolean' ? (
                <Picker style={styles.picker} selectedValue={item.value} onValueChange={item.setStateCallback}>
                  {[{ v: true, l: 'On' }, { v: false, l: 'Off' }].map((val, index) => (
                    <Picker.Item key={index + 'bPickerValue'} label={val.l} value={val.v} />
                  ))}
                </Picker>
              ) : item.editType === 'longText' ? (
                <View style={styles.keyValue}>
                  <TextInput
                    style={styles.valueText}
                    editable={true}
                    multiline={true}
                    numberOfLines={4}
                    scrollEnabled={true}
                    defaultValue={item.defaultValue}
                    onChangeText={item.setStateCallback}
                  />
                </View>
              ) : item.editType === 'text' ? (
                <View style={styles.keyValue}>
                  <TextInput
                    style={styles.valueText}
                    editable={true}
                    maxLength={40}
                    defaultValue={item.defaultValue}
                    onChangeText={item.setStateCallback}
                  />
                </View>
              ) : (
                console.log('Invalid editType - {}', item.editType)
              )}
            </View>
          )}
          keyExtractor={(item) => item.property}
        />
      </View>
    );
  }
}

export interface IDisplayKeyValue {
  property: String;
  value: String;
  defaultValue: String;
  setStateCallback: (val: String | Date) => void;
  editType: String;
}

export interface IDisplayKeyValues {
  properties: IDisplayKeyValue[];
}

export class DisplayKeyValues extends React.Component<IDisplayKeyValues> {
  constructor(props: IDisplayKeyValues) {
    super(props);
  }
  render() {
    return (
      <View style={styles.properties}>
        <FlatList
          data={this.props.properties}
          renderItem={({ item }) => (
            <View style={styles.keyValue}>
              <Text style={styles.propertyText}>{item.property}</Text>
              <Text style={styles.valueText}>{item.value}</Text>
            </View>
          )}
          keyExtractor={(item: IDisplayKeyValue) => item.property}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  properties: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  keyValue: {
    display: 'flex',
    flexDirection: 'row',
    elevation: 10,
  },
  propertyText: {
    fontSize: 15,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: Dimensions.get('window').width / 2.5,
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
  },
  valueText: {
    fontSize: 15,
    textAlign: 'left',
    width: Dimensions.get('window').width / 1.5,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
  },
  picker: {
    width: Dimensions.get('window').width / 2,
  },
});
