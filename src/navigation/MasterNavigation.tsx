import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import {Profile} from './../components/userPages/Profile';
import {Settings} from './../components/userPages/Settings';

import {Mapping} from './../components/maps/Mapping';

import Event from './../components/events/Event/Event';
import {CreateEvent} from './../components/events/CreateEvent/CreateEvent';
import EventsFeed from './../components/events/EventsFeed/EventsFeed';

const EventNavigation = createMaterialTopTabNavigator({
  details: Event,
  guests: Event,
  photos: Event,
  spotify: Event,
  map: Mapping,
});

const SettingNavigation = createMaterialTopTabNavigator({
  display: Settings,
  privacy: Settings,
});

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
    createEvent: {
      screen: CreateEvent,
      navigationOptions: {
        title: 'Create Event',
        gestureEnabled: true,
      },
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
    initialRouteKey: 'upcoming',
  },
);

export default createAppContainer(EventsNavigation);
