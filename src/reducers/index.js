import { combineReducers } from 'redux';
import { EventsFeedReducer } from './EventsFeedReducer';
import { EventsReducer } from './EventsReducer';
import { UserReducer } from './UserReducer';
import { SettingsReducer } from './SettingsReducer';

export default combineReducers({
  EventsFeedReducer,
  EventsReducer,
  UserReducer,
  SettingsReducer,
});
