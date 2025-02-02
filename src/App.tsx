import React from 'react';
import {LogBox} from 'react-native';
import { Provider } from 'react-redux';
import MainStack from './MainStack';
import store from './redux/store/store';
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
