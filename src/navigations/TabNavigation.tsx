import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import TabBar from '../components/TabBar';
import NavigationTypes from './NavigationTypes';
import TimeLineScreen from '../screens/timeline';
import MapScreen from '../screens/map';
import SettingScreen from '../screens/setting';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name={NavigationTypes.HOME} component={HomeScreen} />
      <Tab.Screen name={NavigationTypes.TIMELINE} component={TimeLineScreen} />
      <Tab.Screen name={NavigationTypes.MAP} component={MapScreen} />
      <Tab.Screen name={NavigationTypes.SETTING} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
