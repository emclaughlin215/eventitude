import { combineReducers } from 'redux';
import { EventsFeedReducer, IEventsFeedReducer } from './EventsFeedReducer';
import { EventsReducer, IEventsReducer } from './EventsReducer';
import { UserReducer, IUserReducer } from './UserReducer';
import { SettingsReducer, ISettingsReducer } from './SettingsReducer';

export interface ICombinedReducers {
  EventsFeedReducer: IEventsFeedReducer;
  EventsReducer: IEventsReducer;
  UserReducer: IUserReducer;
  SettingsReducer: ISettingsReducer;
}

export default combineReducers({
  EventsFeedReducer,
  EventsReducer,
  UserReducer,
  SettingsReducer,
});
