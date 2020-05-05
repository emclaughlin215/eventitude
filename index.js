/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { getUser } from './src/actions/UserAction';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

// const store = createStore(reducers, applyMiddleware(thunk));

AppRegistry.registerComponent(appName, () => App);

// store.dispatch(getUser('emclaughlin')).then(() => {
//   AppRegistry.registerComponent(appName, () => App(store));
// });
