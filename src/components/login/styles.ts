import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  outContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    width: (4 * Dimensions.get('window').width) / 5,
    height: (3 * Dimensions.get('window').height) / 5,
    borderRadius: Dimensions.get('window').width / 20,
  },
});
