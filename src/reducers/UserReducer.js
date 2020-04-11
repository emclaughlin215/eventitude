const defaultState = {
  profile: {
    name: 'Edward McLaughlin',
    phoneNumber: '07794061924',
    email: 'eddymclaughlin4@hotmail.com',
    image: null,
  },
  setting: {
    darkMode: false,
  }
};

export const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
    case 'CHANGE_PHONE_NUMBER':
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
  }
};
