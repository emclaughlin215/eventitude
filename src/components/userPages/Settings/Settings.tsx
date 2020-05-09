import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { capitalizeFirst } from './../../../utils/stringUtils';
import { InputLine } from './../../../utils/keyValueComponents';
import { styles } from './styles';

export class Settings extends React.Component {
  constructor() {
    super();
  }

  render() {
    const settings = [
      {
        type: 'display',
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.props.state.display.darkMode,
        setStateCallback: () => this.props.updateDisplayDarkMode(),
      },
      {
        type: 'display',
        editType: 'dateFormatPicker',
        property: 'Date Format',
        value: this.props.state.display.dateFormat,
        setStateCallback: (val) => this.props.updateDisplayDateFormat(val),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'Phone Number',
        value: this.props.state.privacy.phoneNumber,
        setStateCallback: () => this.props.updatePrivacyPhoneNumber(),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'E-mail',
        value: this.props.state.privacy.email,
        setStateCallback: () => this.props.updatePrivacyEmail(),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'Profile',
        value: this.props.state.privacy.profile,
        setStateCallback: () => this.props.updatePrivacyProfile(),
      },
      {
        type: 'map',
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.props.state.map.darkMode,
        setStateCallback: () => this.props.updateMapDarkMode(),
      },
    ];
    const pageSettings = settings.filter((setting) => setting.type === this.props.navigation.state.routeName);
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerArea}>
          <Text style={styles.headerText}>{capitalizeFirst(this.props.navigation.state.routeName)}</Text>
        </View>
        <InputLine properties={pageSettings} />
      </ScrollView>
    );
  }
}
