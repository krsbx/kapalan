import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { IBottomScreen } from '../utils/interface';
import { COLOR_PALETTE } from '../utils/constant';
import HomeStack from './HomeStack';
import BookingStack from './BookingStack';
import CancelationsScreen from '../screen/CancelationsScreen';
import OthersScreen from '../screen/OthersScreen';

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
        component={BookingStack}
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
        component={CancelationsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="block" size={22} color={colorGenerator(focused)} />
          ),
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}
      />
      <Tab.Screen
        name="Others"
        component={OthersScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="more-horiz" size={22} color={colorGenerator(focused)} />
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
