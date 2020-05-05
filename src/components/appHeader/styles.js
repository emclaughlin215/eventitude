import { StyleSheet } from 'react-native';
import { Colors } from '@blueprintjs/core';

export default StyleSheet.create({
  topIconsLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 20,
  },
  topLeftIcons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  topIcon: {
    paddingLeft: 20,
  },
  notifications: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    textShadowRadius: 5,
    textShadowColor: Colors.RED4,
  },
  DropdownMenu: {
    fontWeight: 'bold',
    height: 50,
    width: 140,
    alignItems: 'center',
  },
});
