import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import {
  updateDisplayDarkMode,
  updateDisplayDateFormat,
  updateMapDarkMode,
  updatePrivacyEmail,
  updatePrivacyProfile,
} from '../../../actions/SettingsAction';
import { ISettingsReducer } from '../../../reducers/SettingsReducer';
import { updatePrivacyPhoneNumber } from './../../../actions/SettingsAction';
import { InputLine } from './../../../utils/keyValueComponents';
import { capitalizeFirst } from './../../../utils/stringUtils';
import { styles } from './styles';

interface ISettingsPropsWithState extends NavigationInjectedProps {
  state: ISettingsReducer;
  updateDisplayDarkMode: typeof updateDisplayDarkMode;
  updateDisplayDateFormat: typeof updateDisplayDateFormat;
  updatePrivacyPhoneNumber: typeof updatePrivacyPhoneNumber;
  updatePrivacyEmail: typeof updatePrivacyEmail;
  updatePrivacyProfile: typeof updatePrivacyProfile;
  updateMapDarkMode: typeof updateMapDarkMode;
}

export class Settings extends React.Component<ISettingsPropsWithState> {
  constructor(props: ISettingsPropsWithState) {
    super(props);
  }

  render() {
    const settings = [
      {
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.props.state.darkMode,
        setStateCallback: () => this.props.updateDisplayDarkMode(),
      },
      {
        editType: 'dateFormatPicker',
        property: 'Date Format',
        value: this.props.state.dateFormat,
        setStateCallback: (val: string) => this.props.updateDisplayDateFormat(val),
      },
      {
        editType: 'boolean',
        property: 'Phone Number',
        value: this.props.state.phoneNumber,
        setStateCallback: () => this.props.updatePrivacyPhoneNumber(),
      },
      {
        editType: 'boolean',
        property: 'E-mail',
        value: this.props.state.email,
        setStateCallback: () => this.props.updatePrivacyEmail(),
      },
      {
        editType: 'boolean',
        property: 'Profile',
        value: this.props.state.profile,
        setStateCallback: () => this.props.updatePrivacyProfile(),
      },
      {
        editType: 'boolean',
        property: 'Map Dark Mode',
        value: this.props.state.mapDarkMode,
        setStateCallback: () => this.props.updateMapDarkMode(),
      },
    ];
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerArea}>
          <Text style={styles.headerText}>{capitalizeFirst(this.props.navigation.state.routeName)}</Text>
        </View>
        <InputLine {...settings} />
      </ScrollView>
    );
  }
}
