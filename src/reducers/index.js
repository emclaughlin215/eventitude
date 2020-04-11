import {combineReducers} from 'redux';
import {EventsFeedReducer} from './EventsFeedReducer';
import {EventsReducer} from './EventsReducer';

export default combineReducers({
  EventsFeedReducer,
  EventsReducer,
});
