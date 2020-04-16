import { constants } from './../constants';

export const addTitle = (title) => {
  return {
    type: constants.addTitle,
    payload: title,
  };
};

export const addLocation = (location) => {
  return {
    type: constants.addLocation,
    payload: location,
  };
};

export const addDateTime = (dateTime) => {
  return {
    type: constants.addDateTime,
    payload: dateTime,
  };
};

export const addDescription = (description) => {
  return {
    type: constants.addDescription,
    payload: description,
  };
};
