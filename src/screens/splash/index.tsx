import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import imageConstants from '../../constants/imageConstants';
import { useNavigation } from '@react-navigation/native';
import Container from '../../components/Container';
import NavigationTypes, {
  SplashScreenNavigationProp,
} from '../../navigations/NavigationTypes';
import { verticalScale } from '../../constants/responsive';

const SplashScreen = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    const timer = setTimeout(() => {
      navigation.replace(NavigationTypes.TAB);
    }, 2000);

    return () => clearTimeout(timer);
  }, [rotateValue, navigation]);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container style={styles.viewStyle}>
      <Animated.Image
        source={imageConstants.logo}
        style={[
          {
            transform: [{ rotate: spin }],
          },
          styles.imageStyle,
        ]}
        resizeMode="contain"
      />
    </Container>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageStyle: {
    height: verticalScale(135),
    width: verticalScale(135),
    alignSelf: 'center',
  },
  viewStyle: {
    justifyContent: 'center',
  },
});
