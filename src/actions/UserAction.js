import { constants } from '../constants';

export const login = (username, password, messageCallback, loginCallback) => {
  return (dispatch) =>
    fetch('http://192.168.1.137:3000/users?username=' + username)
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

const _getUser = (user) => {
  return {
    type: constants.getUser,
    payload: user,
  };
};

export const updateName = (name, surname) => {
  return {
    type: constants.updateName,
    payload: {
      first: name,
      last: surname,
    },
  };
};

export const updatePhoneNumber = (phoneNumber) => {
  return {
    type: constants.updatePhoneNumber,
    payload: phoneNumber,
  };
};

export const updateEmail = (email) => {
  return {
    type: constants.updateEmail,
    payload: email,
  };
};

export const updateDob = (date) => {
  return {
    type: constants.updateDob,
    payload: date,
  };
};

export const updateProfilePicture = (picture) => {
  return {
    type: constants.updateProfilePicture,
    payload: picture,
  };
};
