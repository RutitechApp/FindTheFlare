import React from 'react';
import { Text, Pressable, StyleSheet, ViewStyle } from 'react-native';
import colors from '../constants/colors';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../constants/responsive';
import fontConstants from '../constants/fontConstants';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  btnStyle?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({ onPress, title, btnStyle }) => {
  return (
    <Pressable onPress={onPress} style={[styles.btnStyle, btnStyle]}>
      <Text
        style={{
          fontSize: fontScale(14),
          color: colors.white,
          fontFamily: fontConstants.MULISH_BOLD,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.darkOrange,
    marginHorizontal: horizontalScale(88),
    alignItems: 'center',
    marginTop: verticalScale(20),
    paddingVertical: verticalScale(8),
    borderRadius: verticalScale(8),
  },
});
