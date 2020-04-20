import { constants } from './../constants';

export const addEvent = (title, dateTime, location, description, image, guests) => {
  return {
    type: constants.addEvent,
    payload: {
      title: title,
      location: location,
      dateTime: dateTime,
      description: description,
      guests: guests,
    },
  };
};
