import { constants } from './../constants';
import { ISettingsAction } from '../reducers/SettingsReducer';

export const updateDisplayDarkMode = () => {
  return {
    type: constants.updateDisplayDarkMode,
  };
};

export const updateDisplayDateFormat = (args: ISettingsAction) => {
  return {
    type: constants.updateDisplayDateFormat,
    payload: args.dateFormat,
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
