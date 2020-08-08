import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { capitalizeFirst } from './../../../utils/stringUtils';
import { InputLine } from './../../../utils/keyValueComponents';
import { styles } from './styles';
import { ISettingsReducer } from '../../../reducers/SettingsReducer';
import {
  updateMapDarkMode,
  updatePrivacyProfile,
  updatePrivacyEmail,
  updateDisplayDateFormat,
  updateDisplayDarkMode,
} from '../../../actions/SettingsAction';
import { updatePrivacyPhoneNumber } from './../../../actions/SettingsAction';

interface ISettingsPropsWithState {
  state: ISettingsReducer;
}

export class Settings extends React.Component<ISettingsPropsWithState> {
  constructor(props: ISettingsPropsWithState) {
    super(props);
  }

  render() {
    const settings = [
      {
        type: 'display',
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.props.state.darkMode,
        setStateCallback: () => updateDisplayDarkMode(),
      },
      {
        type: 'display',
        editType: 'dateFormatPicker',
        property: 'Date Format',
        value: this.props.state.dateFormat,
        setStateCallback: (val: string) => updateDisplayDateFormat(val),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'Phone Number',
        value: this.props.state.phoneNumber,
        setStateCallback: () => updatePrivacyPhoneNumber(),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'E-mail',
        value: this.props.state.email,
        setStateCallback: () => updatePrivacyEmail(),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'Profile',
        value: this.props.state.profile,
        setStateCallback: () => updatePrivacyProfile(),
      },
      {
        type: 'map',
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.props.state.mapDarkMode,
        setStateCallback: () => updateMapDarkMode(),
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
