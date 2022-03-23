import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from './src/navigation/BottomBar';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomBar />
    </NavigationContainer>
  );
};

export default App;
