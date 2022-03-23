import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IBottomScreen } from '../utils/interface';
import HomeScreen from '../screen/HomeScreen';
import BookingScreen from '../screen/BookingScreen';
import HomeStack from './HomeStack';
import { COLOR_PALETTE } from '../utils/constant';

const BottomBar: React.FC = () => {
  const Tab = createBottomTabNavigator<IBottomScreen>();

  const colorGenerator = (isFocused: boolean): string =>
    isFocused ? COLOR_PALETTE.DEEP_BLUE['300'] : COLOR_PALETTE.DEEP_BLUE['100'];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={22} color={colorGenerator(focused)} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="book" size={22} color={colorGenerator(focused)} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="Cancelation"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="money-bill" size={22} color={colorGenerator(focused)} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="Others"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="eye" size={22} color={colorGenerator(focused)} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomBar;
