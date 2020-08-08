import { constants } from '../constants';

export interface IUserReducer {
  username: String;
  first: String;
  last: String;
  phoneNumber: String;
  email: String;
  dob: String;
  image: String;
  password: String;
}

export interface IUserAction {
  username?: String;
  password?: String;
  firstName?: String;
  lastName?: String;
  phoneNumber?: String;
  email?: String;
  dob?: String;
  image?: String;
  messageCallback?: Function;
  loginCallback?: Function;
}

interface IUserActionWithType extends IUserAction {
  type: String;
}

const defaultState: IUserReducer = {
  username: '',
  first: '',
  last: '',
  phoneNumber: '07794061924',
  email: '',
  dob: '01-09-1994',
  image: require('../resources/images/profilePicture.jpg'),
  password: '',
};

export const UserReducer = (state = defaultState, action: IUserActionWithType) => {
  switch (action.type) {
    case constants.getUser:
      return {
        ...state,
        username: action.username,
        first: action.firstName,
        last: action.lastName,
        password: action.password,
      };
    case constants.updateName:
      return {
        ...state,
        first: action.firstName,
        last: action.lastName,
      };
    case constants.updatePhoneNumber:
      return {
        ...state,
        phoneNumber: action.phoneNumber,
      };
    case constants.updateEmail:
      return {
        ...state,
        email: action.email,
      };
    case constants.updateDob:
      return {
        ...state,
        dob: action.dob,
      };
    case constants.updateProfilePicture:
      return {
        ...state,
        image: action.image,
      };
    default:
      return state;
  }
};
