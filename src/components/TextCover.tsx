import React from "react";
import { View, Text, ViewStyle } from "react-native";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../constants/responsive";
import fontConstants from "../constants/fontConstants";
import colors from "../constants/colors";

interface TextCoverProps {
  text?: string;
  vStyle?: ViewStyle;
}

const TextCover: React.FC<TextCoverProps> = ({ text = "", vStyle }) => {
  const bgColorMap: Record<string, string> = {
    CME: colors.violet10Opacity,
    FLR: colors.yellow10Opacity,
    GST: colors.blue10Opacity,
    Severe: colors.red10Opacity,
    Moderate: colors.orange10Opacity,
    Strong: colors.white10Opacity,
    Weak: colors.green10Opacity,
    Minor: colors.pink10Opacity,
    Extreme: colors.coffee10Opacity,
  };

  const textColorMap: Record<string, string> = {
    CME: colors.violet,
    FLR: colors.yellow,
    GST: colors.blue,
    Severe: colors.red,
    Moderate: colors.orange,
    Strong: colors.white,
    Weak: colors.green,
    Minor: colors.pink,
    Extreme: colors.coffee,
  };

  const backgroundColor = bgColorMap[text];
  const textColor = textColorMap[text];
  return (
    <View
      style={[
        vStyle,
        {
          backgroundColor,
          paddingHorizontal: horizontalScale(10),
          paddingVertical: verticalScale(5),
          borderRadius: verticalScale(5),
        },
      ]}
    >
      <Text
        style={{
          fontSize: fontScale(12),
          fontFamily: fontConstants.MULISH_BOLD,
          color: textColor,
          textTransform: "uppercase",
          maxWidth: "100%",
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default TextCover;
