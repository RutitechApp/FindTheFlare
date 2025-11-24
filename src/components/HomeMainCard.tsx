import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  ForwardIcon,
  GeoMagneticStormIcon,
  HomeCardIcon,
  LeafIcon,
  MeteorIcon,
  SolarFlareIcon,
} from "../assets/icons/HomeIcons";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../constants/responsive";
import fontConstants from "../constants/fontConstants";
import colors from "../constants/colors";
import { getTimeToImpact } from "../constants/constants";

interface HomeMainCardProps {
  data?: any;
  onPress?: () => void;
}

const HomeMainCard: React.FC<HomeMainCardProps> = ({ data, onPress }) => {
  return (
    <Pressable style={styles.viewStyle} onPress={onPress}>
      <View style={styles.rowViewStyle}>
        <View style={styles.rowSubViewStyle}>
          <View
            style={[
              styles.vStyle,
              {
                backgroundColor:
                  data?.name === "Coronal Mass Ejection " ||
                  "Coronal Mass Ejection"
                    ? colors.violet10Opacity
                    : data?.name === "Solar Flare"
                    ? colors.yellow10Opacity
                    : colors.blue10Opacity,
              },
            ]}
          >
            {data?.name === "Coronal Mass Ejection " ||
            "Coronal Mass Ejection" ? (
              <MeteorIcon
                width={verticalScale(34)}
                height={verticalScale(34)}
              />
            ) : data?.name === "Solar Flare" ? (
              <SolarFlareIcon
                width={verticalScale(34)}
                height={verticalScale(34)}
              />
            ) : (
              <GeoMagneticStormIcon
                width={verticalScale(34)}
                height={verticalScale(34)}
              />
            )}
          </View>
          <View style={{ marginLeft: horizontalScale(10) }}>
            <Text style={styles.textStyle}>{data?.name}</Text>
            <Text style={styles.subTextStyle}>Speed: {data?.speed}km/s</Text>
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
          <Text style={styles.timeTextStyle}>
            {getTimeToImpact(data?.startDate, data?.time)}
          </Text>
          <LeafIcon />
        </View>
      </View>
      <HomeCardIcon
        width={horizontalScale(308)}
        height={verticalScale(10)}
        style={styles.cardIconStyle}
      />
    </Pressable>
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowSubViewStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  vStyle: {
    padding: verticalScale(8),
    borderRadius: verticalScale(10),
    overflow: "hidden",
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
    alignItems: "center",
    marginTop: verticalScale(15),
    borderRadius: verticalScale(10),
    paddingVertical: verticalScale(15),
  },
  cardIconStyle: {
    alignSelf: "center",
    marginTop: verticalScale(15),
  },
  timeTextStyle: {
    fontSize: verticalScale(25),
    color: colors.white,
    fontFamily: fontConstants.MULISH_BOLD,
    paddingHorizontal: horizontalScale(5),
  },
  timeViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(6),
  },
  tStyle: {
    fontFamily: fontConstants.MULISH_SEMIBOLD,
    color: colors.white,
    fontSize: fontScale(12),
  },
});
