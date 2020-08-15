import Contacts from 'react-native-contacts';

import { constants } from './../constants';

export interface IEvent {
  title: string;
  dateTime: string;
  location: string;
  description: string;
  image: string;
  guests: Contacts.Contact[];
}

export interface IEventAction extends IEvent {
  eventId?: string;
}

export interface IEventsReducer {
  currentEvent: string;
  events: {
    [eventId: string]: IEvent;
  };
}

export interface IEventActionWithType extends IEventAction {
  type: string;
}

const defaultState: IEventsReducer = {
  currentEvent: '',
  events: {
    '0': {
      title: 'New Years Eve',
      location: 'London',
      description: '',
      dateTime: '31-12-2019',
      image: require('../resources/images/NewYear.jpg'),
      guests: [],
    },
    '1': {
      title: 'lauras Birthday',
      location: 'London',
      description: '',
      dateTime: '29-03-2019',
      image: require('../resources/images/MyBirthday.jpg'),
      guests: [],
    },
    '2': {
      title: 'New Years Eve',
      location: 'London',
      description: '',
      dateTime: '31-12-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: [],
    },
    '3': {
      title: 'My Birthday',
      location: 'London',
      description: '',
      dateTime: '01-09-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: [],
    },
  },
};

export const EventsReducer = (state = defaultState, action: IEventActionWithType) => {
  switch (action.type) {
    case constants.goToEvent:
      return {
        ...state,
        currentEvent: action.eventId,
      };
    case constants.addEvent:
      const newEvent = {
        title: action.title,
        dateTime: action.dateTime,
        location: action.location,
        description: action.location,
        image: action.image,
        guests: action.guests,
      };
      return {
        ...state,
        events: { ...state.events, newEvent },
      };
    default:
      return state;
  }
};
