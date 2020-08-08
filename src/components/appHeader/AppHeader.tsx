import React from 'react';
import { View, Picker, Text } from 'react-native';
import styles from './styles';
import { TouchableIcon } from './../../utils/touchableComponents';
import { StackNavigationProp } from 'react-navigation-stack';

export interface Props {
  showUpcoming: boolean;
  toggleEventsFeedType: () => void;
  navigation: StackNavigationProp;
}

// interface State {}

export class AppHeader extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  // logoutActions = async () => {
  //   AsyncStorage.clear().then(this.props.navigation.navigate('AuthLoading'));
  // };

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
