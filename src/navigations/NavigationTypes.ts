import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface EventDetailsData {
  id: number;
  title: string;
  type: string;
  time: string;
  description: string;
  image: React.ReactNode;
  color: string;
}

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  TimeLine: undefined;
  Map: { data?: any };
  Setting: undefined;
  Tab: undefined;
  EventDetails: { data?: EventDetailsData };
  History: undefined;
};

export type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Splash"
>;

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
export type TimeLineScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "TimeLine"
>;
export type MapScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Map"
>;
export type SettingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Setting"
>;
export type TabScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Tab"
>;
export type EventDetailsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EventDetails"
>;
export type HistoryNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "History"
>;

const NavigationTypes = {
  SPLASH: "Splash",
  HOME: "Home",
  TIMELINE: "TimeLine",
  MAP: "Map",
  SETTING: "Setting",
  TAB: "Tab",
  EVENT_DETAILS: "EventDetails",
  HISTORY: "History",
} as const;

export default NavigationTypes;
