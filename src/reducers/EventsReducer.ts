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

export interface IEventsReducer {
  events: IEvent[];
}

export interface IAddEventActionWithType extends IEvent {
  type: string;
}

const defaultState: IEventsReducer = {
  events: [
    {
      title: 'New Years Eve',
      location: 'London',
      description: '',
      dateTime: '31-12-2019',
      image: require('../resources/images/NewYear.jpg'),
      guests: [],
    },
    {
      title: 'lauras Birthday',
      location: 'London',
      description: '',
      dateTime: '29-03-2019',
      image: require('../resources/images/MyBirthday.jpg'),
      guests: [],
    },
    {
      title: 'New Years Eve',
      location: 'London',
      description: '',
      dateTime: '31-12-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: [],
    },
    {
      title: 'My Birthday',
      location: 'London',
      description: '',
      dateTime: '01-09-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: [],
    },
  ],
};

export const EventsReducer = (state = defaultState, action: IAddEventActionWithType) => {
  switch (action.type) {
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
        events: [...state.events, newEvent],
      };
    default:
      return state;
  }
};
