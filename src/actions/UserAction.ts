import { constants } from '../constants';

export const login = (username: String, password: String, messageCallback: Function, loginCallback: Function) => {
  return (dispatch: Function) =>
    fetch('http://192.168.1.137:3000/users/get?username=' + username)
      .then((response) => response.json())
      .then((users) => {
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

const _getUser = (user: String) => {
  return {
    type: constants.getUser,
    payload: user,
  };
};

export const updateName = (firstName: String, surname: String) => {
  return {
    type: constants.updateName,
    payload: {
      first: firstName,
      last: surname,
    },
  };
};

export const updatePhoneNumber = (phoneNumber: String) => {
  return {
    type: constants.updatePhoneNumber,
    payload: phoneNumber,
  };
};

export const updateEmail = (email: String) => {
  return {
    type: constants.updateEmail,
    payload: email,
  };
};

export const updateDob = (date: String) => {
  return {
    type: constants.updateDob,
    payload: date,
  };
};

export const updateProfilePicture = (picture: String) => {
  return {
    type: constants.updateProfilePicture,
    payload: picture,
  };
};
