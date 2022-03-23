import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from './src/navigation/BottomBar';
import store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomBar />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
