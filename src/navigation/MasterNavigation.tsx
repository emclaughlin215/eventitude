import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {PastEventsFeed} from './../components/events/PastEventsFeed';
import {Profile} from './../components/userPages/Profile';
import {UpcomingEventsFeed} from './../components/events/UpcomingEventsFeed';
import {Event} from './../components/events/Event';
import {CreateEvent} from './../components/events/CreateEvent';
import {Settings} from './../components/userPages/Settings';
import {Mapping} from './../components/maps/Mapping';

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
    upcoming: {
      screen: UpcomingEventsFeed,
      navigationOptions: {
        header: false,
      },
    },
    past: {
      screen: PastEventsFeed,
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

const PeriodNavigation = createSwitchNavigator({
  past: {
    screen: EventsNavigation,
    navigationOptions: {
      header: false,
    },
  },
  upcoming: {
    screen: EventsNavigation,
    navigationOptions: {
      header: false,
    },
  },
});

export default createAppContainer(PeriodNavigation);
