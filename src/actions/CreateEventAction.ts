import { constants } from './../constants';
import { IEvent } from '../reducers/EventsReducer';

export const addEvent = (args: IEvent) => {
  return {
    type: constants.addEvent,
    payload: {
      title: args.title,
      location: args.location,
      dateTime: args.dateTime,
      description: args.description,
      guests: args.guests,
    },
  };
};
