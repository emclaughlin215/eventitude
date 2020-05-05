import React from 'react';
import { View, Picker, Text, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { toggleEventsFeedType } from '../../actions/EventsFeedAction';
import { bindActionCreators } from 'redux';
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
            name="user"
            library="font-awesome"
            size={30}
            style="regular"
            container={styles.topIcon}
            callback={() => this.props.navigation.navigate('profile')}
          />
          <TouchableIcon
            name="user"
            library="font-awesome"
            size={30}
            style="regular"
            container={styles.topIcon}
            callback={() => this.props.navigation.navigate('profile')}
          />
          <Text style={styles.notifications}> 5 </Text>
          <TouchableIcon
            name="user"
            library="font-awesome"
            size={30}
            style="regular"
            container={styles.topIcon}
            callback={() => this.props.navigation.navigate('profile')}
          />
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('profile')}>
            <Icon name="user" type="font-awesome" size={30} iconStyle="regular" containerStyle={styles.topIcon} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('settings')}>
            <Icon name="cogs" size={30} type="font-awesome" containerStyle={styles.topIcon} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Icon name="bell" size={30} type="font-awesome" containerStyle={styles.topIcon} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.logoutActions()}>
            <Icon name="sign-out" size={30} type="font-awesome" containerStyle={styles.topIcon} />
          </TouchableWithoutFeedback>
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

const mapStateToProps = (state) => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      toggleEventsFeedType,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeader);
