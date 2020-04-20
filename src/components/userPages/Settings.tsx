import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { capitalizeFirst } from './../../utils/stringUtils';
import {
  updatePrivacyEmail,
  updateMapDarkMode,
  updateDisplayDateFormat,
  updateDisplayDarkMode,
  updatePrivacyPhoneNumber,
  updatePrivacyProfile,
} from './../../actions/SettingsAction';
import { InputLine } from './../../utils/keyValueComponents';

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

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    flexDirection: 'column',
  },
  buttonArea: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
    left: '35%',
  },
  headerText: {
    fontSize: 40,
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
    state: state.SettingsReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateDisplayDarkMode,
      updateDisplayDateFormat,
      updatePrivacyPhoneNumber,
      updatePrivacyEmail,
      updatePrivacyProfile,
      updateMapDarkMode,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
