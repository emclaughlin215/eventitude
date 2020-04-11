export const changeName = name => {
  return {
    type: 'CHANGE_NAME',
    payload: name,
  };
};

export const changePhoneNumber = phoneNumber => {
  return {
    type: 'CHANGE_PHONE_NUMBER',
    payload: phoneNumber,
  };
};

export const changeEmail = email => {
  return {
    type: 'CHANGE_EMAIL',
    payload: email,
  };
};
