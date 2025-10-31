import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../constants/responsive';
import { ForwardIcon } from '../assets/icons/HomeIcons';
import fontConstants from '../constants/fontConstants';
import colors from '../constants/colors';

interface HomeSubCardProps {
  data?: any;
  onPress?: () => void;
}

const HomeSubCard: React.FC<HomeSubCardProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.viewStyle} onPress={onPress}>
      <View style={styles.frontViewStyle}>
        <View style={styles.mainViewStyle}>
          <View>{data.image}</View>
          <View style={{ marginLeft: horizontalScale(15) }}>
            <Text
              style={[
                {
                  color: data?.color,
                },
                styles.titleTextStyle,
              ]}
            >
              {data.title}
            </Text>
            <Text
              style={[
                {
                  color: data?.color,
                },
                styles.typeTextStyle,
              ]}
            >
              {data.type}
            </Text>
          </View>
        </View>
        <View style={styles.timeViewStyle}>
          <Text style={styles.timeTextStyle}>{data.time}</Text>
          <ForwardIcon height={verticalScale(16)} width={verticalScale(16)} />
        </View>
      </View>
      <Text style={styles.descriptionTextStyle}>{data?.description}</Text>
      <View style={styles.vStyle}>
        <Text style={styles.mStyle}>MODERATE</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeSubCard;

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: verticalScale(10),
    backgroundColor: colors.white10Opacity,
    padding: verticalScale(15),
    borderRadius: verticalScale(10),
    flex: 1,
  },
  frontViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
  },
  mainViewStyle: {
    flexDirection: 'row',
    flex: 1,
  },
  titleTextStyle: {
    fontSize: fontScale(16),
    fontFamily: fontConstants.MULISH_BOLD,
  },
  typeTextStyle: {
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
  },
  timeViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexShrink: 1,
    maxWidth: '30%',
  },
  timeTextStyle: {
    color: colors.white,
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    marginRight: horizontalScale(5),
  },
  descriptionTextStyle: {
    color: colors.white,
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    marginVertical: verticalScale(10),
  },
  vStyle: {
    backgroundColor: colors.orange10Opacity,
    alignSelf: 'flex-end',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(5),
  },
  mStyle: {
    fontSize: fontScale(10),
    color: colors.orange,
    fontFamily: fontConstants.MULISH_BOLD,
  },
});
