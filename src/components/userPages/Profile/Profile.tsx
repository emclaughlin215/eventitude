import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import moment from 'moment';
import { InputLine, DisplayKeyValues } from './../../../utils/keyValueComponents';
import { ImageSelector } from './../../../utils/imageComponents';
import { styles } from './styles';

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      firstName: null,
      lastName: null,
    };
  }

  UNSAFE_componentDidMount = (username = 'emclaughlin') => {
    fetch('http://192.168.1.137:3000/users?username=' + username)
      .then((response) => response.json())
      .then((r) => this.setState({ firstName: r.first_name }));
  };

  toggleEdit = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  handleEditClose = () => {
    this.toggleEdit();
  };

  render() {
    const dateFormat = this.props.settingsState.display.dateFormat;
    const profileProperties = [
      {
        property: 'First Name: ',
        value: this.state.firstName,
        defaultValue: this.state.firstName,
        setStateCallback: (val) => this.props.updateName(val, this.props.state.profile.name.last),
        editType: 'text',
      },
      {
        property: 'Surname',
        value: this.props.state.profile.name.last,
        defaultValue: this.props.state.profile.name.last,
        setStateCallback: (val) => this.props.updateName(this.props.state.profile.name.first, val),
        editType: 'text',
      },
      {
        property: 'Date of Birth',
        value: moment(this.props.state.profile.dob, 'DD-MM-YYYY').format(dateFormat),
        defaultValue: this.props.state.profile.dob,
        setStateCallback: (val) => this.props.updateDob(moment(val, dateFormat).format('DD-MM-YYYY')),
        editType: 'datePicker',
      },
      {
        property: 'Phone Number',
        value: this.props.state.profile.phoneNumber,
        defaultValue: this.props.state.profile.phoneNumber,
        setStateCallback: (val) => this.props.updatePhoneNumber(val),
        editType: 'text',
      },
      {
        property: 'E-mail',
        value: this.props.state.profile.email,
        defaultValue: this.props.state.profile.email,
        setStateCallback: (val) => this.props.updateEmail(val),
        editType: 'text',
      },
    ];
    return (
      <View styles={styles.page}>
        <ImageSelector image={this.props.state.profile.image} size="small" shape="round" />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.editMode}
          onRequestClose={() => {
            this.handleEditClose();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <InputLine properties={profileProperties} />
            </View>
          </View>
        </Modal>
        <DisplayKeyValues properties={profileProperties} />
        <View style={styles.editProfileButtonContainer}>
          <TouchableHighlight
            style={styles.editProfileButton}
            onPress={() => {
              this.toggleEdit();
            }}>
            <Text style={styles.textStyle}>Edit Profile</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
