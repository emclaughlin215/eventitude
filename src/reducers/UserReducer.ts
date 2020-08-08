import { constants } from '../constants';

export interface IUserReducer {
  username: string;
  first: string;
  last: string;
  phoneNumber: string;
  email: string;
  dob: string;
  image: string;
  password: string;
}

export interface IUserAction {
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  dob?: string;
  image?: string;
  messageCallback?: (message: string) => void;
  loginCallback?: () => void;
}

interface IUserActionWithType extends IUserAction {
  type: string;
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
