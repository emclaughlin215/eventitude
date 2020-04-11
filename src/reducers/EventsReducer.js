const defaultState = {
  events: [
    {
      title: 'New Years Eve',
      date: '31-12-2019',
      image: require('../resources/images/NewYear.jpg'),
      guests: ['1', '2', '4', '6'],
    },
    {
      title: 'lauras Birthday',
      date: '29-03-2019',
      image: require('../resources/images/MyBirthday.jpg'),
      guests: ['3', '4', '5', '6'],
    },
    {
      title: 'New Years Eve',
      date: '31-12-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: ['1', '2', '3', '4'],
    },
    {
      title: 'My Birthday',
      date: '01-09-2020',
      image: require('../resources/images/eventImage1.jpg'),
      guests: ['1', '6', '3'],
    },
  ],
};

export const EventsReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
