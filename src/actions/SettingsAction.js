import { constants } from './../constants';

export const updateDisplayDarkMode = () => {
  return {
    type: constants.updateDisplayDarkMode,
  };
};

export const updateDisplayDateFormat = (dateFormat) => {
  return {
    type: constants.updateDisplayDateFormat,
    payload: dateFormat,
  };
};

export const updatePrivacyPhoneNumber = () => {
  return {
    type: constants.updatePrivacyPhoneNumber,
  };
};

export const updatePrivacyEmail = () => {
  return {
    type: constants.updatePrivacyEmail,
  };
};

export const updatePrivacyProfile = () => {
  return {
    type: constants.updatePrivacyProfile,
  };
};

export const updateMapDarkMode = () => {
  return {
    type: constants.updateMapsDarkMode,
  };
};
