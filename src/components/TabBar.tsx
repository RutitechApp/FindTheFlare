import React, { FC } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import {
  BottomTabBarProps,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';
import { verticalScale } from '../constants/responsive';
import {
  Home,
  HomeActive,
  Map,
  MapActive,
  Setting,
  SettingActive,
  TimeLine,
  TimeLineActive,
} from '../assets/icons/TabIcons';
import NavigationTypes, {
  RootStackParamList,
} from '../navigations/NavigationTypes';
import colors from '../constants/colors';

type TabItemProps = {
  name: keyof RootStackParamList;
  navigation: BottomTabNavigationProp<any>;
  sIndex: number;
  index: number;
  isFocused?: boolean;
};

const TabItem: FC<TabItemProps> = ({ name, isFocused, navigation }) => {
  const renderIcon = () => {
    switch (name) {
      case NavigationTypes.HOME:
        return isFocused ? (
          <HomeActive width={25} height={32} />
        ) : (
          <Home width={25} height={32} />
        );
      case NavigationTypes.TIMELINE:
        return isFocused ? (
          <TimeLineActive width={25} height={32} />
        ) : (
          <TimeLine width={25} height={32} />
        );
      case NavigationTypes.MAP:
        return isFocused ? (
          <MapActive width={25} height={32} />
        ) : (
          <Map width={25} height={32} />
        );
      case NavigationTypes.SETTING:
        return isFocused ? (
          <SettingActive width={25} height={32} />
        ) : (
          <Setting width={25} height={32} />
        );
      default:
        return null;
    }
  };
  return (
    <Pressable
      onPress={() => navigation.navigate(name)}
      hitSlop={style.hitslop}
    >
      <View style={style.viewStyle}>{renderIcon()}</View>
    </Pressable>
  );
};

const TabBar: FC<BottomTabBarProps> = props => {
  const { routes, index } = props.state;
  return (
    <View style={style.mainContainer}>
      {routes.map((route, rIndex) => {
        const isFocused = index === rIndex;

        return (
          <TabItem
            key={route.key}
            name={route.name as keyof RootStackParamList}
            isFocused={isFocused}
            navigation={
              props.navigation as unknown as BottomTabNavigationProp<RootStackParamList>
            }
            sIndex={0}
            index={0}
          />
        );
      })}
    </View>
  );
};
export default TabBar;

const style = StyleSheet.create({
  imageBackgroundImageStyle: {
    borderRadius: 74,
  },
  mainContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    width: '100%',
    backgroundColor: colors.white10Opacity,
    height: verticalScale(80),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  hitslop: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },
  viewStyle: {
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
