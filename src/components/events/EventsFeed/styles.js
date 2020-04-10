import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  eventsFeed: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    left: 30,
    bottom: 30,
  },
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 80,
  },
  preview: {
    flexDirection: 'column',
    marginTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 15,
    fontStyle: 'italic',
  },
  image: {
    height: 512,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
});
