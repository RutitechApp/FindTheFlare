import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  TimeLine: undefined;
  Map: undefined;
  Setting: undefined;
  Tab: undefined;
  EventDetails: { data?: any };
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type TimeLineScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'TimeLine'
>;
export type MapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Map'
>;
export type SettingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Setting'
>;
export type TabScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Tab'
>;
export type EventDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EventDetails'
>;

const NavigationTypes = {
  SPLASH: 'Splash',
  HOME: 'Home',
  TIMELINE: 'TimeLine',
  MAP: 'Map',
  SETTING: 'Setting',
  TAB: 'Tab',
  EVENT_DETAILS: 'EventDetails',
} as const;

export default NavigationTypes;
