import React, { ReactNode } from 'react';
import { ImageBackground, ViewStyle } from 'react-native';
import imageConstants from '../constants/imageConstants';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <ImageBackground source={imageConstants.background} style={{ flex: 1 }}>
      <SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Container;
