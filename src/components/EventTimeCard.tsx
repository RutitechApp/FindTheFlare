import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../constants/responsive";
import fontConstants from "../constants/fontConstants";

interface EventTimeCardProps {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const EventTimeCard: React.FC<EventTimeCardProps> = ({
  days,
  hours,
  minutes,
  seconds,
}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>TIME TO IMPACT</Text>
      <View style={styles.subViewStyle}>
        <View style={styles.vStyle}>
          <Text style={styles.tStyle}>{days}</Text>
          <Text style={styles.subTStyle}>Days</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={styles.vStyle}>
          <Text style={styles.tStyle}>{hours}</Text>
          <Text style={styles.subTStyle}>Hours</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={styles.vStyle}>
          <Text style={styles.tStyle}>{minutes}</Text>
          <Text style={styles.subTStyle}>Minutes</Text>
        </View>
        <View style={styles.lineViewStyle} />
        <View style={styles.vStyle}>
          <Text style={styles.tStyle}>{seconds}</Text>
          <Text style={styles.subTStyle}>Seconds</Text>
        </View>
      </View>
    </View>
  );
};

export default EventTimeCard;
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: colors.white10Opacity,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(13),
    borderRadius: verticalScale(10),
    marginTop: verticalScale(20),
    alignItems: "center",
  },
  textStyle: {
    fontSize: fontScale(16),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.darkOrange,
  },
  subViewStyle: {
    backgroundColor: colors.white10Opacity,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginTop: verticalScale(15),
    paddingVertical: verticalScale(15),
    borderRadius: verticalScale(10),
  },
  lineViewStyle: {
    height: verticalScale(32),
    width: horizontalScale(1),
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  tStyle: {
    fontSize: fontScale(24),
    color: colors.white,
    fontFamily: fontConstants.MULISH_BOLD,
  },
  subTStyle: {
    fontSize: fontScale(11),
    fontFamily: fontConstants.MULISH_SEMIBOLD,
    color: "#C4C4C4",
  },
  vStyle: {
    alignItems: "center",
    flex: 1,
  },
});
