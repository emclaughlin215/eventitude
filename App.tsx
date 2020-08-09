import React from 'react';
import { Provider } from 'react-redux';
import MasterNavigation from './src/components/navigation/MasterNavigation';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const App: () => React.ReactNode = () => {
  return (
    <Provider store={store}>
      <MasterNavigation />
    </Provider>
  );
};

export default App;
