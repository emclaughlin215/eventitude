import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

interface IAuthLoadingScreenProps extends NavigationInjectedProps {}

class AuthLoadingScreen extends React.Component<IAuthLoadingScreenProps> {
  constructor(props: IAuthLoadingScreenProps) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Login');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
