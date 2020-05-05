import React from 'react';
import { Colors } from '@blueprintjs/core';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Profile from './../components/userPages/Profile';
import Settings from './../components/userPages/Settings';

import { Mapping } from './../components/maps/Mapping';

import Event from './../components/events/Event/Event';
import EventsFeed from './../components/events/EventsFeed/EventsFeed';
import Login from './../components/login/Login';
import AuthLoadingScreen from './../components/login/AuthLoader';
import { Register } from './../components/login/Register';

const EventNavigation = createMaterialTopTabNavigator(
  {
    details: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="list-alt" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
    guests: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="users" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
    photos: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="image" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
    spotify: {
      screen: Event,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="music" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
    map: {
      screen: Mapping,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="map-marker" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
  },
  {
    tabBarOptions: {
      iconStyle: {
        top: '50%',
      },
      indicatorStyle: {
        color: Colors.BLUE,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHTIE,
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
        tabBarIcon: ({ _tintColor }) => <Icon name="sign-in" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
    register: {
      screen: Register,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="plus" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
  },
  {
    tabBarOptions: {
      iconStyle: {
        top: '50%',
      },
      indicatorStyle: {
        color: Colors.BLUE,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHTIE,
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
        tabBarIcon: ({ _tintColor }) => <Icon name="tint" type="font-awesome" size={25} />,
      },
    },
    privacy: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="key" type="font-awesome" size={25} />,
      },
    },
    map: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ _tintColor }) => <Icon name="map-marker" type="font-awesome" iconStyle="solid" size={25} />,
      },
    },
  },
  {
    tabBarOptions: {
      iconStyle: {
        top: '50%',
      },
      indicatorStyle: {
        color: Colors.BLUE,
      },
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHTIE,
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
        header: false,
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
    initialRouteName: 'AuthLoading',
  },
);

export default createAppContainer(rootNavigation);
