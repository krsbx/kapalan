import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomBar from './BottomBar';
import SplashScreen from '../screen/SplashScreen';
import { IStackScreen } from '../utils/interface';

const AuthStack: React.FC = () => {
  const Stack = createNativeStackNavigator<IStackScreen>();

  return (
    <Stack.Navigator
      initialRouteName="MainApp"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Loading" component={SplashScreen} />
      <Stack.Screen name="MainApp" component={BottomBar} />
    </Stack.Navigator>
  );
};

export default AuthStack;
