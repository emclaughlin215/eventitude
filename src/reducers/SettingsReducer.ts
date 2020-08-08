import { constants } from './../constants';

export interface ISettingsReducer {
  section: String;
  darkMode: Boolean;
  dateFormat: String;
  phoneNumber: String;
  email: String;
  profile: String;
  MapDarkMode: Boolean;
}

const defaultState: ISettingsReducer = {
  section: 'display',
  darkMode: false,
  dateFormat: 'DD-MM-YYYY',
  phoneNumber: '',
  email: '',
  profile: '',
  MapDarkMode: false,
};

export interface ISettingsAction {
  dateFormat?: String;
}

export interface ISettingsActionWithType extends ISettingsAction {
  type: String;
}

export const SettingsReducer = (state = defaultState, action: ISettingsActionWithType) => {
  switch (action.type) {
    case constants.updateDisplayDarkMode:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case constants.updateDisplayDateFormat:
      return {
        ...state,
        dateFormat: action.dateFormat,
      };
    case constants.updatePrivacyPhoneNumber:
      return {
        ...state,
        phoneNumber: !state.phoneNumber,
      };
    case constants.updatePrivacyEmail:
      return {
        ...state,
        email: !state.email,
      };
    case constants.updatePrivacyProfile:
      return {
        ...state,
        profile: !state.profile,
      };
    case constants.updateMapsDarkMode:
      return {
        ...state,
        mapDarkMode: !state.darkMode,
      };
    default:
      return state;
  }
};
