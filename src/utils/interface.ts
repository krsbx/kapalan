import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { HARBOUR, PEOPLE, PLACEHOLDER, SERVICES } from './constant';

export type IStackScreen = {
  Loading: {
    screen?: keyof IStackScreen;
  };
  MainApp: {
    screen?: keyof IStackScreen;
  };
};

export type IBottomScreen = {
  Home: {
    screen?: keyof IBottomScreen;
  };
  Booking: {
    screen?: keyof IBottomScreen;
  };
  Cancelation: {
    screen?: keyof IBottomScreen;
  };
  Others: {
    screen?: keyof IBottomScreen;
  };
  Again: {
    screen?: keyof IBottomScreen;
  };
};

export type IBookingScreen = {
  Booking: {
    screen?: keyof IBookingScreen;
  };
  Confirmation: {
    screen?: keyof IBookingScreen;
  };
  Payment: {
    screen?: keyof IBookingScreen;
  };
};

export type IStackScreenProps<T extends keyof IStackScreen> = StackScreenProps<IStackScreen, T>;

export type IBottomScreenProps<T extends keyof IBottomScreen> = BottomTabScreenProps<
  IBottomScreen,
  T
>;

export type IBookingScreenProps<T extends keyof IBookingScreen> = StackScreenProps<
  IBookingScreen,
  T
>;

export type HarborType = keyof typeof HARBOUR;

export type HarborNameType = typeof HARBOUR[keyof typeof HARBOUR]['name'];

export type ServiceType = keyof typeof SERVICES;

export type PlaceholderType = typeof PLACEHOLDER[keyof typeof PLACEHOLDER];

export type PeopleType = typeof PEOPLE[keyof typeof PEOPLE];

export interface IAction<T> {
  type: string;
  data: T;
}
