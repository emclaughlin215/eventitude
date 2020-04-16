import React from 'react';
import { View, StyleSheet, Picker, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { toggleEventsFeedType } from '../../actions/EventsFeedAction';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';
import { Colors } from '@blueprintjs/core';

export class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.topIconsLayout}>
        <View style={styles.topLeftIcons}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('profile')}>
            <Icon name="user" type="font-awesome" size={40} iconStyle="regular" containerStyle={styles.topIcon} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('settings')}>
            <Icon name="cogs" size={40} type="font-awesome" containerStyle={styles.topIcon} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Icon name="bell" size={40} type="font-awesome" containerStyle={styles.topIcon} />
          </TouchableWithoutFeedback>
          <Text style={styles.notifications}> 5 </Text>
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
