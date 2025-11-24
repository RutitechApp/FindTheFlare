import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/splash";
import NavigationTypes from "./NavigationTypes";
import TabNavigation from "./TabNavigation";
import EventDetailsScreen from "../screens/event";
import History from "../screens/history";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationTypes.SPLASH} component={SplashScreen} />
      <Stack.Screen name={NavigationTypes.TAB} component={TabNavigation} />
      <Stack.Screen
        name={NavigationTypes.EVENT_DETAILS}
        component={EventDetailsScreen}
      />
      <Stack.Screen name={NavigationTypes.HISTORY} component={History} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
