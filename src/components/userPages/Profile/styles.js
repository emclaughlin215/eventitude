import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@blueprintjs/core';

export const styles = StyleSheet.create({
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
