import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textHeader: {
    fontSize: 40,
    alignSelf: 'flex-start',
    padding: 10,
  },
  textInfo: {
    fontSize: 20,
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingTop: 5,
  },
  image: {
    height: Dimensions.get('window').width / 1.5,
    width: Dimensions.get('window').width / 1.5,
    alignItems: 'center',
  },
});

export default styles;
