import React from 'react';
import { Dimensions, Picker, StyleSheet, Text, TextInput, View, VirtualizedList } from 'react-native';

import MyDatePicker from './dateComponents';

export interface IInputLineProperty {
  property: string;
  value?: string | boolean;
  defaultValue?: string;
  editType: string;
  setStateCallback: (val: string) => any;
}

export interface IDateFormatResult {
  type: string;
  disp: string;
}

export interface IInputLine extends Array<IInputLineProperty> {}

export class InputLine extends React.Component<IInputLine> {
  constructor(props: IInputLine) {
    super(props);
  }

  getItemCount = (data: IInputLine): number => {
    return data.length;
  };

  getItem = (data: IInputLineProperty[], index: number) => {
    return data[index];
  };

  render() {
    return (
      <View style={styles.properties}>
        <VirtualizedList<IInputLineProperty>
          data={Object.values(this.props)}
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
                console.log('Invalid editType - {}', item)
              )}
            </View>
          )}
          getItem={this.getItem}
          getItemCount={this.getItemCount}
          keyExtractor={(item: IInputLineProperty) => item.property}
          debug={true}
        />
      </View>
    );
  }
}

export interface IDisplayKeyValue {
  property: string;
  value: string;
  defaultValue: string;
  setStateCallback: (val: string) => any;
  editType: string;
}

export interface IDisplayKeyValues extends Array<IDisplayKeyValue> {}

export class DisplayKeyValues extends React.Component<IDisplayKeyValues> {
  constructor(props: IDisplayKeyValues) {
    super(props);
  }

  getItemCount = (data: IDisplayKeyValues): number => {
    return data.length;
  };

  getItem = (data: IDisplayKeyValue) => {
    return data;
  };

  render() {
    return (
      <View style={styles.properties}>
        <VirtualizedList<IDisplayKeyValue>
          data={this.props}
          renderItem={({ item }) => (
            <View style={styles.keyValue}>
              <Text style={styles.propertyText}>{item.property}</Text>
              <Text style={styles.valueText}>{item.value}</Text>
            </View>
          )}
          getItem={this.getItem}
          getItemCount={this.getItemCount}
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
