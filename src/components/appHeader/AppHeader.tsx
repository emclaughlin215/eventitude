import React from 'react';
import { View, Picker, Text, AsyncStorage } from 'react-native';
import { PropTypes } from 'prop-types';
import styles from './styles';
import { TouchableIcon } from './../../utils/touchableComponents';

export class AppHeader extends React.Component {
  logoutActions = async () => {
    AsyncStorage.clear().then(this.props.navigation.navigate('AuthLoading'));
  };

  render() {
    return (
      <View style={styles.topIconsLayout}>
        <View style={styles.topLeftIcons}>
          <TouchableIcon
            name="user"
            library="font-awesome"
            size={30}
            style="regular"
            container={styles.topIcon}
            callback={() => this.props.navigation.navigate('profile')}
          />
          <TouchableIcon
            name="cogs"
            library="font-awesome"
            size={30}
            style="regular"
            container={styles.topIcon}
            callback={() => this.props.navigation.navigate('settings')}
          />
          <TouchableIcon name="bell" library="font-awesome" size={30} style="regular" container={styles.topIcon} />
          <Text style={styles.notifications}> 5 </Text>
          <TouchableIcon name="sign-out" library="font-awesome" size={30} style="regular" container={styles.topIcon} />
        </View>
        <View>
          <Picker
            selectedValue={this.props.showUpcoming ? 'upcoming' : 'past'}
            style={styles.DropdownMenu}
            onValueChange={() => this.props.toggleEventsFeedType()}>
            <Picker.Item label="Upcoming" value="upcoming" />
            <Picker.Item label="Past" value="past" />
          </Picker>
        </View>
      </View>
    );
  }
}

AppHeader.propTypes = {
  showUpcoming: PropTypes.bool,
  toggleEventsFeedType: PropTypes.func,
};
