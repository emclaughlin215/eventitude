import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';
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
    this.state = {
      displayDarkMode: null,
      displayDateFormat: null,
      privacyPhoneNumber: null,
      privacyEmail: null,
      privacyProfile: null,
      mapDarkMode: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      displayDarkMode: this.props.state.display.darkMode,
      displayDateFormat: this.props.state.display.dateFormat,
      privacyPhoneNumber: this.props.state.privacy.phoneNumber,
      privacyEmail: this.props.state.privacy.email,
      privacyProfile: this.props.state.privacy.profile,
      mapsDarkMode: this.props.state.map.darkMode,
    });
  }

  handleEditClose = () => {
    this.props.updateDisplayDarkMode();
    this.props.updateDisplayDateFormat(this.state.displayDateFormat);
    this.props.updatePrivacyPhoneNumber();
    this.props.updatePrivacyEmail();
    this.props.updatePrivacyProfile();
    this.props.updateMapDarkMode();
  };

  render() {
    const settings = [
      {
        type: 'display',
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.state.displayDarkMode,
        setStateCallback: (val) => this.setState({ displayDarkMode: val }),
      },
      {
        type: 'display',
        editType: 'dateFormatPicker',
        property: 'Date Format',
        value: this.state.displayDateFormat,
        setStateCallback: (val) => this.setState({ displaydateFormat: val }),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'Phone Number',
        value: this.state.privacyPhoneNumber,
        setStateCallback: (val) => this.setState({ privacyPhoneNumber: val }),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'E-mail',
        value: this.state.privacyEmail,
        setStateCallback: (val) => this.setState({ privacyEmail: val }),
      },
      {
        type: 'privacy',
        editType: 'boolean',
        property: 'Profile',
        value: this.state.privacyProfile,
        setStateCallback: (val) => this.setState({ privacyProfile: val }),
      },
      {
        type: 'map',
        editType: 'boolean',
        property: 'Dark Mode',
        value: this.state.mapDarkMode,
        setStateCallback: (val) => this.setState({ mapDarkMode: val }),
      },
    ];
    const pageSettings = settings.filter((setting) => setting.type === this.props.navigation.state.routeName);
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerArea}>
          <Text style={styles.headerText}>{capitalizeFirst(this.props.navigation.state.routeName)}</Text>
        </View>
        <InputLine properties={pageSettings} />
        <View style={styles.buttonArea}>
          <TouchableHighlight
            style={styles.saveButton}
            onPress={() => {
              this.handleEditClose();
            }}>
            <Text style={styles.textSave}>Save Changes</Text>
          </TouchableHighlight>
        </View>
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
