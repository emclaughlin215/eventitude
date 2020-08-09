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
        setStateCallback: () => updateDisplayDarkMode(),
      },
      {
        editType: 'dateFormatPicker',
        property: 'Date Format',
        value: this.props.state.dateFormat,
        setStateCallback: (val: string) => updateDisplayDateFormat(val),
      },
      {
        editType: 'boolean',
        property: 'Phone Number',
        value: this.props.state.phoneNumber,
        setStateCallback: () => updatePrivacyPhoneNumber(),
      },
      {
        editType: 'boolean',
        property: 'E-mail',
        value: this.props.state.email,
        setStateCallback: () => updatePrivacyEmail(),
      },
      {
        editType: 'boolean',
        property: 'Profile',
        value: this.props.state.profile,
        setStateCallback: () => updatePrivacyProfile(),
      },
      {
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.props.state.mapDarkMode,
        setStateCallback: () => updateMapDarkMode(),
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
