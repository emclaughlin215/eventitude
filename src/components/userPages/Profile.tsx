import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  Modal,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';

class InputLine extends React.Component<props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.InputLine}>
        <Text style={styles.inputTitle}> {this.props.inputTitle}</Text>
        <TextInput style={styles.inputTitle} editable maxLength={40} />
      </View>
    );
  }
}

export class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
    };
  }

  toggleEdit = () => {
    this.setState({editMode: !this.state.editMode});
  };

  render() {
    return (
      <>
        <View style={styles.header}>
          <TouchableHighlight
            style={styles.editProfileButton}
            onPress={() => {
              this.toggleEdit();
            }}>
            <Text style={styles.textStyle}>Edit Profile</Text>
          </TouchableHighlight>
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
              <InputLine inputTitle="First Name:" />
              <InputLine inputTitle="Surname:" />
              <InputLine inputTitle="Telephone Number:" />
              <InputLine inputTitle="E-mail:" />
              <TouchableHighlight
                style={styles.saveButton}
                onPress={() => {
                  this.toggleEdit();
                }}>
                <Text style={styles.textSave}>Save</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <ScrollView>
          <View>
            <Text style={styles.text}>
              Name: {this.props.state.profile.name}
            </Text>
            <Text style={styles.text}>
              Phone Number: {this.props.state.profile.phoneNumber}
            </Text>
            <Text style={styles.text}>
              E-mail: {this.props.state.profile.email}
            </Text>
            <Text style={styles.text}>Image</Text>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  InputLine: {
    flexDirection: 'row',
  },
  InputTitle: {
    justifyContent: 'center',
  },
  InputEntry: {
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  textSave: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 5,
  },
  editProfileButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
    alignItems: 'flex-end',
  },
  saveButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 150,
    alignItems: 'flex-end',
  },
});

const mapStateToProps = state => {
  return {
    state: state.UserReducer,
  };
};

export default connect(mapStateToProps)(Profile);
