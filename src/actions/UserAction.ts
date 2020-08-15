import { constants } from '../constants';

export interface User {
  userId: number;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
}

export const login = (
  username: string,
  password: string,
  messageCallback: (message: string) => void,
  loginCallback: () => void,
) => {
  return (dispatch: Function) =>
    fetch('http://192.168.1.137:3000/users/get?username=' + username)
      .then((response) => response.json())
      .then((users: User[]) => {
        console.log(JSON.stringify(users));

        if (users.length === 0) {
          messageCallback('Unable to Login, no record of that user name.');
          return;
        }
        const user = users[0];
        if (password !== user.password) {
          console.log(password + ' != ' + user.password);
          messageCallback('Unable to Login, password does not match.');
          return;
        }
        loginCallback();
        dispatch(_getUser(user));
      });
};

const _getUser = (user: User) => {
  return {
    type: constants.getUser,
    userId: user.userId,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    phoneNumber: user.phoneNumber,
  };
};

export const updateName = (firstName: string, surname: string) => {
  return {
    type: constants.updateName,
    payload: {
      first: firstName,
      last: surname,
    },
  };
};

export const updatePhoneNumber = (phoneNumber: string) => {
  return {
    type: constants.updatePhoneNumber,
    payload: phoneNumber,
  };
};

export const updateEmail = (email: string) => {
  return {
    type: constants.updateEmail,
    payload: email,
  };
};

export const updateDob = (date: string) => {
  return {
    type: constants.updateDob,
    payload: date,
  };
};

export const updateProfilePicture = (picture: string) => {
  return {
    type: constants.updateProfilePicture,
    payload: picture,
  };
};
