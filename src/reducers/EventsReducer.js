import { constants } from './../constants';

const defaultState = {
  events: [
    {
      title: 'New Years Eve',
      location: 'London',
      dateTime: '31-12-2019',
      image: require('../resources/images/NewYear.jpg'),
      guests: ['1', '2', '4', '6'],
    },
    {
      title: 'lauras Birthday',
      location: 'London',
      dateTime: '29-03-2019',
      image: require('../resources/images/MyBirthday.jpg'),
      guests: ['3', '4', '5', '6'],
    },
    {
      title: 'New Years Eve',
      location: 'London',
      dateTime: '31-12-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: ['1', '2', '3', '4'],
    },
    {
      title: 'My Birthday',
      location: 'London',
      dateTime: '01-09-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: ['1', '6', '3'],
    },
  ],
};

export const EventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.addEvent:
      const newEvent = {
        title: action.payload.title,
        dateTime: action.payload.dateTime,
        location: action.payload.location,
        description: action.payload.location,
        image: action.payload.image,
        guests: action.payload.guests,
      };
      return {
        ...state,
        events: [...state.events, newEvent],
      };
    default:
      return state;
  }
};
