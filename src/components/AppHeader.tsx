import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {DropdownMenu} from './DropdownMenu';

export class AppHeader extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.topIconsLayout}>
        <View style={styles.topLeftIcons}>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('profile')}>
            <Icon
              name="user"
              type="font-awesome"
              size={40}
              iconStyle="regular"
              containerStyle={styles.topIcon}
            />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.props.navigation.navigate('settings')}>
            <Icon
              name="cogs"
              size={40}
              type="font-awesome"
              containerStyle={styles.topIcon}
            />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <DropdownMenu
            menuItems={['Upcoming Events', 'Past Events']}
            navigation={this.props.navigation}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});
