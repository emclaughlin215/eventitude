import { constants } from './../constants';

const defaultState = {
  section: 'display',
  display: {
    darkMode: false,
    dateFormat: 'MM-DD-YYY',
  },
  privacy: {
    phoneNumber: false,
    email: false,
    profile: false,
  },
  map: {
    darkMode: false,
  },
};

export const SettingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.updateDisplayDarkMode:
      return {
        ...state,
        display: {
          ...state.display,
          darkMode: !state.display.darkMode,
        },
      };
    case constants.updateDisplayDateFormat:
      return {
        ...state,
        display: {
          ...state.display,
          dateFormat: action.playload.dateFormat,
        },
      };
    case constants.updatePrivacyPhoneNumber:
      return {
        ...state,
        privacy: {
          ...state.privacy,
          phoneNumber: !state.privacy.phoneNumber,
        },
      };
    case constants.updatePrivacyEmail:
      return {
        ...state,
        privacy: {
          ...state.privacy,
          email: !state.privacy.email,
        },
      };
    case constants.updatePrivacyProfile:
      return {
        ...state,
        privacy: {
          ...state.privacy,
          profile: !state.privacy.profile,
        },
      };
    case constants.updateMapsDarkMode:
      return {
        ...state,
        maps: {
          ...state.maps,
          darkMode: !state.privacy.darkMode,
        },
      };
    default:
      return state;
  }
};
