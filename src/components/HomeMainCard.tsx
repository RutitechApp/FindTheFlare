import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  ForwardIcon,
  HomeCardIcon,
  LeafIcon,
  MeteorIcon,
} from '../assets/icons/HomeIcons';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../constants/responsive';
import fontConstants from '../constants/fontConstants';
import colors from '../constants/colors';

const HomeMainCard = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.rowViewStyle}>
        <View style={styles.rowSubViewStyle}>
          <View style={styles.vStyle}>
            <MeteorIcon width={verticalScale(34)} height={verticalScale(34)} />
          </View>
          <View style={{ marginLeft: horizontalScale(10) }}>
            <Text style={styles.textStyle}>Meteor Shower</Text>
            <Text style={styles.subTextStyle}>Speed: 750km/s</Text>
          </View>
        </View>
        <View>
          <ForwardIcon height={verticalScale(22)} width={verticalScale(22)} />
        </View>
      </View>
      <View style={styles.subViewStyle}>
        <Text style={styles.tStyle}>TIME TO IMPACT</Text>
        <View style={styles.timeViewStyle}>
          <LeafIcon
            style={{
              transform: [{ scaleX: -1 }],
            }}
          />
          <Text style={styles.timeTextStyle}>18H 31M</Text>
          <LeafIcon />
        </View>
      </View>
      <HomeCardIcon
        width={horizontalScale(308)}
        height={verticalScale(10)}
        style={styles.cardIconStyle}
      />
    </View>
  );
};

export default HomeMainCard;

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.white10Opacity,
    margin: horizontalScale(20),
    borderRadius: verticalScale(10),
    padding: verticalScale(14),
  },
  rowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowSubViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vStyle: {
    backgroundColor: colors.violet10Opacity,
    padding: verticalScale(13),
    borderRadius: verticalScale(10),
  },
  textStyle: {
    fontSize: fontScale(16),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.violet,
  },
  subTextStyle: {
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.violet,
  },
  subViewStyle: {
    backgroundColor: colors.white10Opacity,
    alignItems: 'center',
    marginTop: verticalScale(15),
    borderRadius: verticalScale(10),
    paddingVertical: verticalScale(15),
  },
  cardIconStyle: {
    alignSelf: 'center',
    marginTop: verticalScale(15),
  },
  timeTextStyle: {
    fontSize: verticalScale(25),
    color: colors.white,
    fontFamily: fontConstants.MULISH_BOLD,
    paddingHorizontal: horizontalScale(5),
  },
  timeViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(6),
  },
  tStyle: {
    fontFamily: fontConstants.MULISH_SEMIBOLD,
    color: colors.white,
    fontSize: fontScale(12),
  },
});
