import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@blueprintjs/core';

export const previewStyles = StyleSheet.create({
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
    marginBottom: 30,
    elevation: 10,
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

export const eventFeedStyles = StyleSheet.create({
  eventsFeed: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
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
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.WHITE,
    width: Dimensions.get('window').width,
  },
  expandButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: 0,
  },
  expandBar: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  newEventArea: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
});
