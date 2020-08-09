import { Colors } from '@blueprintjs/core';
import React from 'react';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Event from './../events/Event';
import EventsFeed from './../events/EventsFeed';
import AuthLoadingScreen from './../login/AuthLoader';
import Login from './../login/Login';
import Register from './../login/Register';
import Profile from './../userPages/Profile';
import Settings from './../userPages/Settings';

// import Mapping from './../maps/index';
const EventNavigation = createMaterialTopTabNavigator(
  {
    details: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: () => <Icon name="list-alt" type="font-awesome" size={25} />,
      },
    },
    guests: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: () => <Icon name="users" type="font-awesome" size={25} />,
      },
    },
    photos: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: () => <Icon name="image" type="font-awesome" size={25} />,
      },
    },
    spotify: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: () => <Icon name="music" type="font-awesome" size={25} />,
      },
    },
    // map: {
    //   screen: Mapping,
    //   navigationOptions: {
    //     tabBarIcon: ({ _tintColor }) => <Icon name="map-marker" type="font-awesome" iconStyle="solid" size={25} />,
    //   },
    // },
  },
  {
    tabBarOptions: {
      iconStyle: {
        top: '50%',
      },
      indicatorStyle: {
        borderBottomColor: Colors.BLUE1,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHITE,
        height: Dimensions.get('window').height / 10,
      },
    },
  },
);

const LoginNavigation = createMaterialTopTabNavigator(
  {
    login: {
      screen: Login,
      navigationOptions: {
        tabBarIcon: () => <Icon name="sign-in" type="font-awesome" size={25} />,
      },
    },
    register: {
      screen: Register,
      navigationOptions: {
        tabBarIcon: () => <Icon name="plus" type="font-awesome" size={25} />,
      },
    },
  },
  {
    tabBarOptions: {
      iconStyle: {
        top: '50%',
      },
      indicatorStyle: {
        borderBottomColor: Colors.BLUE1,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHITE,
        height: Dimensions.get('window').height / 10,
      },
    },
  },
);

const SettingNavigation = createMaterialTopTabNavigator(
  {
    display: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: () => <Icon name="tint" type="font-awesome" size={25} />,
      },
    },
    privacy: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: () => <Icon name="key" type="font-awesome" size={25} />,
      },
    },
    map: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: () => <Icon name="map-marker" type="font-awesome" size={25} />,
      },
    },
  },
  {
    tabBarOptions: {
      iconStyle: {
        top: '50%',
      },
      indicatorStyle: {
        borderBottomColor: Colors.BLUE1,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHITE,
        height: Dimensions.get('window').height / 10,
      },
    },
  },
);

const EventsNavigation = createStackNavigator(
  {
    eventsFeed: {
      screen: EventsFeed,
      navigationOptions: {
        headerShown: false,
      },
    },
    event: {
      screen: EventNavigation,
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        gestureEnabled: true,
      },
    },
    settings: SettingNavigation,
  },
  {
    headerMode: 'none',
  },
);

const rootNavigation = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: EventsNavigation,
    Login: LoginNavigation,
  },
  {
    initialRouteName: 'App',
  },
);

export default createAppContainer(rootNavigation);
