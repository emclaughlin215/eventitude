import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import moment from 'moment';
import { InputLine, DisplayKeyValues } from './../../../utils/keyValueComponents';
import { ImageSelector } from './../../../utils/imageComponents';
import { styles } from './styles';
import { ISettingsReducer } from '../../../reducers/SettingsReducer';
import { IUserReducer } from '../../../reducers/UserReducer';
import { updateName, updateDob, updatePhoneNumber, updateEmail } from '../../../actions/UserAction';
import { IInputLine } from '../../../utils/keyValueComponents';

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
    const profileProperties: IInputLine = [
      {
        property: 'First Name: ',
        value: this.state.firstName,
        defaultValue: this.state.firstName,
        setStateCallback: (val: string) => updateName(val, this.props.userState.last),
        editType: 'text',
      },
      {
        property: 'Surname',
        value: this.props.userState.last,
        defaultValue: this.props.userState.last,
        setStateCallback: (val: string) => updateName(this.props.userState.first, val),
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
      <View styles={styles.page}>
        <ImageSelector image={this.props.userState.image} size="small" shape="round" />
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
