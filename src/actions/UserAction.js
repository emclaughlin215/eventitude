import { constants } from '../constants';

export const updateName = (name, surname) => {
  return {
    type: constants.updateName,
    payload: {
      first: name,
      last: surname,
    },
  };
};

export const updatePhoneNumber = (phoneNumber) => {
  return {
    type: constants.updatePhoneNumber,
    payload: phoneNumber,
  };
};

export const updateEmail = (email) => {
  return {
    type: constants.updateEmail,
    payload: email,
  };
};

export const updateDob = (date) => {
  return {
    type: constants.updateDob,
    payload: date,
  };
};

export const updateProfilePicture = (picture) => {
  return {
    type: constants.updateProfilePicture,
    payload: picture,
  };
};
