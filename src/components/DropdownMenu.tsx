import React from 'react';
import {StyleSheet, Text} from 'react-native';

import Menu, {MenuItem} from 'react-native-material-menu';

export interface Props {
  menuItems: String[];
}

export class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  _menu = null;

  displayToNavScreen = {
    'Upcoming Events': 'upcoming',
    'Past Events': 'past',
  };
  navScreenToDisplay = {
    upcoming: 'Upcoming Events',
    past: 'Past Events',
  };

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  changePeriod = v => {
    this._menu.hide();
    this.props.navigation.navigate(this.displayToNavScreen[v]);
  };

  render() {
    return (
      <Menu
        ref={this.setMenuRef}
        button={
          <Text onPress={this.showMenu} style={styles.headerStyle}>
            {this.navScreenToDisplay[this.props.navigation.state.routeName]}
          </Text>
        }>
        {this.props.menuItems.map(item => (
          <MenuItem key={item} onPress={this.changePeriod.bind(this, item)}>
            <Text>{item}</Text>
          </MenuItem>
        ))}
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
  },
  menuProvider: {
    marginBottom: 10,
    marginTop: 10,
  },
});
