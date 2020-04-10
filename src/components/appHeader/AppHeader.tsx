import React from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {Icon} from 'react-native-elements';
import {DropdownMenu} from './DropdownMenu';
import styles from './styles';

interface Props {
  eventsToShow: PropTypes.str;
  changeEventsFeedType: PropTypes.func;
}

interface State {}

export class AppHeader extends React.Component<Props, State> {
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
