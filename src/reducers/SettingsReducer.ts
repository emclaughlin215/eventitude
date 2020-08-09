import { constants } from './../constants';

export interface ISettingsReducer {
  section: string;
  darkMode: boolean;
  dateFormat: string;
  phoneNumber: string;
  email: string;
  profile: string;
  mapDarkMode: boolean;
}

const defaultState: ISettingsReducer = {
  section: 'display',
  darkMode: false,
  dateFormat: 'DD-MM-YYYY',
  phoneNumber: '',
  email: '',
  profile: '',
  mapDarkMode: false,
};

export interface ISettingsAction {
  dateFormat?: string;
}

export interface ISettingsActionWithType extends ISettingsAction {
  type: string;
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
        mapDarkMode: !state.mapDarkMode,
      };
    default:
      return state;
  }
};
