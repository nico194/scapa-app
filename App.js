import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/Navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  const AppContainer = createAppContainer(AppNavigator);
  return (
    <Provider store={store} >
      <AppContainer />
    </Provider>
  );
}


