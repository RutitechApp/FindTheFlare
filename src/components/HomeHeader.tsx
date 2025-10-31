import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../constants/responsive';
import fontConstants from '../constants/fontConstants';
import NotificationIcon from '../assets/icons/Notification';
import colors from '../constants/colors';

interface HomeHeaderProps {
  onNotificationPress?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ onNotificationPress }) => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.firstViewStyle}>
        <Text style={styles.textStyle}>MODERATE</Text>
      </View>
      <Pressable style={styles.secondViewStyle} onPress={onNotificationPress}>
        <NotificationIcon
          width={horizontalScale(20)}
          height={horizontalScale(20)}
        />
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
  },
  firstViewStyle: {
    backgroundColor: colors.orange10Opacity,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(10),
    borderRadius: horizontalScale(5),
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: fontConstants.MULISH_BOLD,
    fontSize: fontScale(12),
    color: colors.orange,
  },
  secondViewStyle: {
    height: verticalScale(40),
    width: verticalScale(40),
    borderRadius: verticalScale(40) / 2,
    backgroundColor: colors.white10Opacity,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
