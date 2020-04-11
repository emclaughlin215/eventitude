import {combineReducers} from 'redux';
import {EventsFeedReducer} from './EventsFeedReducer';
import {EventReducer} from './EventReducer';

export default combineReducers({
  EventsFeedReducer,
  EventReducer,
});
