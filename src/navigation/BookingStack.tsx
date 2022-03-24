import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingScreen from '../screen/BookingsScreen';
import BookingDetailScreen from '../screen/BookingDetailScreen';
import { IBookingStackScreen } from '../utils/interface';

const BookingStack: React.FC = () => {
  const Stack = createNativeStackNavigator<IBookingStackScreen>();

  return (
    <Stack.Navigator
      initialRouteName="Bookings"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Bookings" component={BookingScreen} />
      <Stack.Screen name="SelectedBooking" component={BookingDetailScreen} />
    </Stack.Navigator>
  );
};

export default BookingStack;
