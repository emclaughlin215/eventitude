import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { capitalizeFirst } from './../../../utils/stringUtils';
import { InputLine } from './../../../utils/keyValueComponents';
import { styles } from './styles';
import { ISettingsReducer, ISettingsAction } from '../../../reducers/SettingsReducer';
import {
  updateMapDarkMode,
  updatePrivacyProfile,
  updatePrivacyEmail,
  updateDisplayDateFormat,
  updateDisplayDarkMode,
} from '../../../actions/SettingsAction';
import { updatePrivacyPhoneNumber } from './../../../actions/SettingsAction';
import { NavigationInjectedProps } from 'react-navigation';

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
        setStateCallback: (val: ISettingsAction) => updateDisplayDateFormat(val),
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
