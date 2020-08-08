import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
