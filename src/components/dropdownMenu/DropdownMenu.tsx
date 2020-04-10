import React from 'react';
import PropTypes from 'prop-types';
import Text from 'react-native';
import {styles} from './styles';
import Menu, {MenuItem} from 'react-native-material-menu';
import {updateEventsFeedType} from '../../actions/EventsFeedAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class DropdownMenu extends React.Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  toggleEventsToShow = () => {
    this._menu.hide();
    updateEventsFeedType();
  };

  render() {
    return (
      <Menu
        ref={this.setMenuRef}
        button={
          <Text onPress={this.showMenu} style={styles.headerStyle}>
            {this.props.showUpcoming ? 'Upcoming Events' : 'Past Events'}
          </Text>
        }>
        {this.props.menuItems.map(item => (
          <MenuItem key={item} onPress={this.toggleEventsToShow()}>
            <Text>{item}</Text>
          </MenuItem>
        ))}
      </Menu>
    );
  }
}

DropdownMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.str),
};

const mapStateToProps = state => {
  return {
    showUpcoming: state.EventsFeedReducer.showUpcoming,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      updateEventsFeedType,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownMenu);
