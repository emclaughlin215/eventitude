import { constants } from './../constants';
import { IEvent } from '../reducers/EventsReducer';

export const addEvent = (payload: IEvent) => {
  return {
    type: constants.addEvent,
    payload: {
      title: payload.title,
      location: payload.location,
      dateTime: payload.dateTime,
      description: payload.description,
      guests: payload.guests,
    },
  };
};
