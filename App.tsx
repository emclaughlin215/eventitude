import React from 'react';
import { Provider } from 'react-redux';
import MasterNavigation from './src/components/navigation/MasterNavigation';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './src/reducers/index';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const App: () => React.ReactNode = () => {
  return (
    <Provider store={store}>
      <MasterNavigation />
    </Provider>
  );
};

export default App;
