import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import MasterNavigation from './src/navigation/MasterNavigation';

const store = createStore(reducers);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MasterNavigation />
    </Provider>
  );
};

export default App;
