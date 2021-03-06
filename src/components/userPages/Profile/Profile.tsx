import moment from 'moment';
import React from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';

import { updateDob, updateEmail, updateName, updatePhoneNumber } from '../../../actions/UserAction';
import { ISettingsReducer } from '../../../reducers/SettingsReducer';
import { IUserReducer } from '../../../reducers/UserReducer';
import { ImageSelector } from './../../../utils/imageComponents';
import { DisplayKeyValues, InputLine } from './../../../utils/keyValueComponents';
import { styles } from './styles';

interface IProfileState {
  editMode: boolean;
  firstName: string;
  lastName: string;
}

interface IProfilePropsWithState {
  settingsState: ISettingsReducer;
  userState: IUserReducer;
}

export class Profile extends React.Component<IProfilePropsWithState, IProfileState> {
  constructor(props: IProfilePropsWithState) {
    super(props);
    this.state = {
      editMode: false,
      firstName: '',
      lastName: '',
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
    const dateFormat = this.props.settingsState.dateFormat;
    const first = this.props.userState.first;
    const profileProperties = [
      {
        property: 'First Name: ',
        value: first,
        defaultValue: first,
        setStateCallback: (val: string) => updateName(val, this.props.userState.last),
        editType: 'text',
      },
      {
        property: 'Surname',
        value: this.props.userState.last,
        defaultValue: this.props.userState.last,
        setStateCallback: (val: string) => updateName(first, val),
        editType: 'text',
      },
      {
        property: 'Date of Birth',
        value: moment(this.props.userState.dob, 'DD-MM-YYYY').format(dateFormat),
        defaultValue: this.props.userState.dob,
        setStateCallback: (val: string) => updateDob(moment(val, dateFormat).format('DD-MM-YYYY')),
        editType: 'datePicker',
      },
      {
        property: 'Phone Number',
        value: this.props.userState.phoneNumber,
        defaultValue: this.props.userState.phoneNumber,
        setStateCallback: (val: string) => updatePhoneNumber(val),
        editType: 'text',
      },
      {
        property: 'E-mail',
        value: this.props.userState.email,
        defaultValue: this.props.userState.email,
        setStateCallback: (val: string) => updateEmail(val),
        editType: 'text',
      },
    ];
    return (
      <View style={styles.page}>
        <ImageSelector image={this.props.userState.image} size="small" shape="round" callbackSetImage={() => {}} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.editMode}
          onRequestClose={() => {
            this.handleEditClose();
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <InputLine {...profileProperties} />
            </View>
          </View>
        </Modal>
        <DisplayKeyValues {...profileProperties} />
        <View style={styles.editProfileButtonContainer}>
          <TouchableHighlight
            style={styles.editProfileButton}
            onPress={() => {
              this.toggleEdit();
            }}>
            <Text>Edit Profile</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
