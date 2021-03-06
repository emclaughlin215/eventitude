import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '@blueprintjs/core';

export const styles = StyleSheet.create({
  createEventContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 30,
  },
  editContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageArea: {
    height: Dimensions.get('window').width / 2,
    width: Dimensions.get('window').width,
    backgroundColor: Colors.WHITE,
  },
  headerArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: Dimensions.get('window').height / 5,
    top: '5%',
  },
});
