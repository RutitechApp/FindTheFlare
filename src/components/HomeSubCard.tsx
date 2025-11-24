import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../constants/responsive";
import {
  ForwardIcon,
  GeoMagneticStormIcon,
  MeteorIcon,
  SolarFlareIcon,
} from "../assets/icons/HomeIcons";
import fontConstants from "../constants/fontConstants";
import colors from "../constants/colors";
import { getDuration } from "../constants/constants";
import TextCover from "./TextCover";

interface HomeSubCardProps {
  data?: any;
  onPress?: () => void;
}

const HomeSubCard: React.FC<HomeSubCardProps> = ({ data, onPress }) => {
  if (!data) return null;
  return (
    <TouchableOpacity style={styles.viewStyle} onPress={onPress}>
      <View style={styles.frontViewStyle}>
        <View style={styles.mainViewStyle}>
          <View>
            {data?.name === "Coronal Mass Ejection" ? (
              <MeteorIcon
                width={horizontalScale(38)}
                height={horizontalScale(38)}
              />
            ) : data?.name === "Solar Flare" ? (
              <SolarFlareIcon
                width={horizontalScale(38)}
                height={horizontalScale(38)}
              />
            ) : (
              <GeoMagneticStormIcon
                width={horizontalScale(38)}
                height={horizontalScale(38)}
              />
            )}
          </View>
          <View style={{ marginLeft: horizontalScale(15), flex: 1 }}>
            <Text
              style={[
                {
                  color:
                    data?.name === "Coronal Mass Ejection"
                      ? colors.violet
                      : data?.name === "Solar Flare"
                      ? colors.yellow
                      : colors.blue,
                },
                styles.titleTextStyle,
              ]}
            >
              {data?.name}
            </Text>
            <Text
              style={[
                {
                  color:
                    data?.name === "Coronal Mass Ejection"
                      ? colors.violet
                      : data?.name === "Solar Flare"
                      ? colors.yellow
                      : colors.blue,
                },
                styles.typeTextStyle,
              ]}
            >
              Class, {data?.class}
            </Text>
          </View>
        </View>
        <View style={styles.timeViewStyle}>
          <Text style={styles.timeTextStyle}>
            {getDuration(data?.startDate, data?.submissionDate)} to go
          </Text>
          <ForwardIcon height={verticalScale(16)} width={verticalScale(16)} />
        </View>
      </View>
      <Text style={styles.descriptionTextStyle}>
        {data?.name === "Coronal Mass Ejection"
          ? data?.description
          : `A ${data.class}-class solar flare occurred at location ${
              data.location
            }, starting at ${new Date(
              data.startDate
            ).toUTCString()}, peaking at ${new Date(
              data.peakTime
            ).toUTCString()}, and ending at ${new Date(
              data.endTime
            ).toUTCString()}.`}
      </Text>
      <TextCover text={data?.type} vStyle={{ alignSelf: "flex-end" }} />
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
  },
  mainViewStyle: {
    flexDirection: "row",
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flexShrink: 2,
    maxWidth: "25%",
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
    alignSelf: "flex-end",
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(10),
    borderRadius: horizontalScale(5),
  },
  mStyle: {
    fontSize: fontScale(10),
    color: colors.orange,
    fontFamily: fontConstants.MULISH_BOLD,
    textTransform: "uppercase",
    maxWidth: "100%",
  },
});
