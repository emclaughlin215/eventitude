import React from 'react';
import { Picker, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import { toggleEventsFeedType } from '../../actions/EventsFeedAction';
import { TouchableIcon } from './../../utils/touchableComponents';
import styles from './styles';

export interface IAppHeader extends NavigationInjectedProps {
  showUpcoming: boolean;
}

export class AppHeader extends React.Component<IAppHeader> {
  constructor(props: IAppHeader) {
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
            container={styles.topIcon}
            callback={() => this.props.navigation.navigate('profile')}
          />
          <TouchableIcon
            name="cogs"
            library="font-awesome"
            size={30}
            container={styles.topIcon}
            callback={() => this.props.navigation.navigate('settings')}
          />
          <TouchableIcon name="bell" library="font-awesome" size={30} container={styles.topIcon} callback={() => {}} />
          <Text style={styles.notifications}> 5 </Text>
          <TouchableIcon
            name="sign-out"
            library="font-awesome"
            size={30}
            container={styles.topIcon}
            callback={() => {}}
          />
        </View>
        <View>
          <Picker
            selectedValue={this.props.showUpcoming ? 'upcoming' : 'past'}
            style={styles.DropdownMenu}
            onValueChange={() => toggleEventsFeedType()}>
            <Picker.Item label="Upcoming" value="upcoming" />
            <Picker.Item label="Past" value="past" />
          </Picker>
        </View>
      </View>
    );
  }
}
