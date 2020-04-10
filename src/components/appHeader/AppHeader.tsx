import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {DropdownMenu} from './DropdownMenu';
import styles from './styles';
import PropTypes from 'prop-types';

export class AppHeader extends React.Component {
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

AppHeader.propTypes = {
  eventsToShow: PropTypes.str,
  changeEventsFeedType: PropTypes.func,
};
