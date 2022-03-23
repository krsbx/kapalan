import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import { IBookingScreen } from '../utils/interface';
import ConfirmationScreen from '../screen/ConfirmationScreen';
import PaymentScreen from '../screen/PaymentScreen';

const HomeStack: React.FC = () => {
  const Stack = createNativeStackNavigator<IBookingScreen>();

  return (
    <Stack.Navigator
      initialRouteName="Booking"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Booking" component={HomeScreen} />
      <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      <Stack.Screen name="Payment" component={PaymentScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
