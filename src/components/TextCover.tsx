import React from 'react';
import { View, Text } from 'react-native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../constants/responsive';
import fontConstants from '../constants/fontConstants';
import colors from '../constants/colors';

interface TextCoverProps {
  text?: string;
}

const TextCover: React.FC<TextCoverProps> = ({ text = '' }) => {
  const bgColorMap: Record<string, string> = {
    CME: colors.violet10Opacity,
    FLR: colors.orange10Opacity,
    GST: colors.blue10Opacity,
    SF: colors.yellow10Opacity,
    SEVERE: colors.red10Opacity,
    MODERATE: colors.orange10Opacity,
    STRONG: colors.white10Opacity,
  };

  const textColorMap: Record<string, string> = {
    CME: colors.violet,
    FLR: colors.orange,
    GST: colors.blue,
    SF: colors.yellow,
    SEVERE: colors.red,
    MODERATE: colors.orange,
    STRONG: colors.white,
  };

  const backgroundColor = bgColorMap[text];
  const textColor = textColorMap[text];

  return (
    <View
      style={{
        backgroundColor,
        paddingHorizontal: horizontalScale(10),
        paddingVertical: verticalScale(5),
        borderRadius: verticalScale(5),
      }}
    >
      <Text
        style={{
          fontSize: fontScale(12),
          fontFamily: fontConstants.MULISH_BOLD,
          color: textColor,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

export default TextCover;
