import {combineReducers} from 'redux';
import {EventsFeedReducer} from './EventsFeedReducer';
import {EventsReducer} from './EventsReducer';
import {UserReducer} from './UserReducer';

export default combineReducers({
  EventsFeedReducer,
  EventsReducer,
  UserReducer,
});
