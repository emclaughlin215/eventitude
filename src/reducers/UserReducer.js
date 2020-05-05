import { constants } from '../constants';

const defaultState = {
  profile: {
    username: null,
    name: {
      first: null,
      last: null,
    },
    phoneNumber: '07794061924',
    email: null,
    dob: '01-09-1994',
    image: require('../resources/images/profilePicture.jpg'),
  },
  password: null,
  setting: {
    darkMode: false,
  },
};

export const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.getUser:
      return {
        ...state,
        profile: {
          ...state.profile,
          username: action.payload.username,
          name: {
            ...state.profile.name,
            first: action.payload.first_name,
            last: action.payload.last_name,
          },
        },
        password: action.payload.password,
      };
    case constants.updateName:
      return {
        ...state,
        profile: {
          ...state.profile,
          name: {
            ...state.profile.name,
            first: action.payload.first,
            last: action.payload.last,
          },
        },
      };
    case constants.updatePhoneNumber:
      return {
        ...state,
        profile: {
          ...state.profile,
          phoneNumber: action.payload,
        },
      };
    case constants.updateEmail:
      return {
        ...state,
        profile: {
          ...state.profile,
          email: action.payload,
        },
      };
    case constants.updateDob:
      return {
        ...state,
        profile: {
          ...state.profile,
          dob: action.payload,
        },
      };
    case constants.updateProfilePicture:
      return {
        ...state,
        profile: {
          ...state.profile,
          image: action.payload,
        },
      };
    default:
      return state;
  }
};
