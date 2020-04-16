import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Colors } from '@blueprintjs/core';
import { Text, View, StyleSheet, Alert, Modal, TouchableHighlight, Image, Dimensions } from 'react-native';
import moment from 'moment';
import { updateDob, updateEmail, updateName, updatePhoneNumber } from './../../actions/UserAction';
import ImagePicker from 'react-native-image-crop-picker';
import { InputLine, DisplayKeyValues } from './../../utils/keyValueComponents';

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      editPhotoMode: false,
      date: null,
      firstName: null,
      surname: null,
      email: null,
      phoneNumber: null,
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      date: this.props.state.profile.dob,
      firstName: this.props.state.profile.name.first,
      surname: this.props.state.profile.name.last,
      email: this.props.state.profile.email,
      phoneNumber: this.props.state.profile.phoneNumber,
    });
  }

  toggleEdit = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  toggleEditPhoto = () => {
    this.setState({ editPhotoMode: !this.state.editPhotoMode });
  };

  selectFromPhotos = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      includeExif: true,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  selectFromCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      width: 300,
      height: 400,
      includeExif: true,
      mediaType: 'photo',
    })
      .then((image) => {
        console.log('received image', image);
      })
      .catch((e) => alert(e));
  };

  renderImage = (image) => {
    return <Image style={styles.image} source={image} />;
  };

  handleEditClose = () => {
    this.toggleEdit();
    this.props.updateDob(this.state.date);
    this.props.updateName(this.state.firstName, this.state.surname);
    this.props.updateEmail(this.state.email);
    this.props.updatePhoneNumber(this.state.phoneNumber);
  };

  render() {
    const profileProperties = [
      {
        property: 'First Name: ',
        value: this.props.state.profile.name.first,
        defaultValue: this.state.firstName,
        setStateCallback: (val) => this.setState({ firstName: val }),
        editType: 'text',
      },
      {
        property: 'Surname',
        value: this.props.state.profile.name.last,
        defaultValue: this.state.surname,
        setStateCallback: (val) => this.setState({ surname: val }),
        editType: 'text',
      },
      {
        property: 'Date of Birth',
        value: moment(this.props.state.profile.dob, 'DD-MM-YYYY').format('DD-MM-YYYY'),
        defaultValue: moment(this.state.date, 'DD-MM-YYYY').format('DD-MM-YYYY'),
        setStateCallback: (val) => this.setState({ date: val }),
        editType: 'datePicker',
      },
      {
        property: 'Phone Number',
        value: this.props.state.profile.phoneNumber,
        defaultValue: this.state.phoneNumber,
        setStateCallback: (val) => this.setState({ phoneNumber: val }),
        editType: 'text',
      },
      {
        property: 'E-mail',
        value: this.props.state.profile.email,
        defaultValue: this.state.email,
        setStateCallback: (val) => this.setState({ email: val }),
        editType: 'text',
      },
    ];
    return (
      <View styles={styles.page}>
        <View style={styles.imageArea}>
          <TouchableHighlight
            onPress={() => {
              this.toggleEditPhoto();
            }}>
            {this.props.state.profile.image ? this.renderImage(this.props.state.profile.image) : null}
          </TouchableHighlight>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.editPhotoMode}
            onRequestClose={() => {
              Alert.alert('Saved changes.');
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableHighlight
                  onPress={() => {
                    this.selectFromPhotos();
                  }}>
                  <Text style={styles.propertyText}> Select From Photos </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.selectFromCamera();
                  }}>
                  <Text style={styles.propertyText}> Select From Camera </Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.toggleEditPhoto();
                  }}>
                  <Text style={styles.propertyText}> Close </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.editMode}
          onRequestClose={() => {
            Alert.alert('Saved changes.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <InputLine properties={profileProperties} />
              <View style={styles.editProfileButtonContainer}>
                <TouchableHighlight
                  style={styles.saveButton}
                  onPress={() => {
                    this.handleEditClose();
                  }}>
                  <Text style={styles.textSave}>Save Changes</Text>
                </TouchableHighlight>
              </View>
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

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  properties: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.WHITE,
  },
  keyValue: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 5,
  },
  propertyText: {
    fontSize: 15,
  },
  image: {
    alignSelf: 'center',
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
    borderRadius: Dimensions.get('window').width / 6,
    top: '40%',
  },
  imageArea: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width,
    backgroundColor: Colors.WHITE,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    paddingTop: 50,
    paddingBottom: 50,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius: 20,
    flexDirection: 'column',
    height: Dimensions.get('window').height / 1.5,
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
  editProfileButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 30,
    paddingTop: 20,
  },
  editProfileButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    alignItems: 'center',
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
    state: state.UserReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      updateDob,
      updateEmail,
      updateName,
      updatePhoneNumber,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
