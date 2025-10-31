import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Container from '../../components/Container';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../constants/responsive';
import fontConstants from '../../constants/fontConstants';
import { SettingData } from '../../helpers/dummyData';
import SwitchToggle from 'react-native-switch-toggle';
import colors from '../../constants/colors';

const SettingScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container>
      <Text style={styles.textStyle}>Settings</Text>
      <Text style={styles.subTextStyle}>Notification Settings</Text>
      <View>
        <FlatList
          data={SettingData}
          style={styles.flatListStyle}
          contentContainerStyle={{
            gap: horizontalScale(15),
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.viewStyle}>
                <View style={styles.subViewStyle}>
                  {item.image}
                  <Text style={styles.titleTextStyle}>{item.title}</Text>
                </View>
                <SwitchToggle
                  switchOn={isEnabled}
                  onPress={toggleSwitch}
                  circleColorOff={colors.white}
                  circleColorOn={colors.darkOrange}
                  backgroundColorOn={colors.darkOrange10Opacity}
                  backgroundColorOff={colors.white10Opacity}
                  containerStyle={styles.switchContainerStyle}
                  circleStyle={styles.circleStyle}
                />
              </View>
            );
          }}
        />
      </View>
    </Container>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontScale(20),
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    marginTop: verticalScale(20),
    fontFamily: fontConstants.MULISH_BOLD,
  },
  subTextStyle: {
    fontSize: fontScale(16),
    color: colors.white,
    marginTop: verticalScale(25),
    fontFamily: fontConstants.MULISH_BOLD,
    marginHorizontal: horizontalScale(20),
  },
  flatListStyle: {
    backgroundColor: colors.white10Opacity,
    marginHorizontal: horizontalScale(20),
    padding: horizontalScale(20),
    borderRadius: horizontalScale(10),
    marginTop: verticalScale(15),
  },
  viewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextStyle: {
    color: colors.grey,
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    marginLeft: horizontalScale(10),
  },
  switchContainerStyle: {
    width: horizontalScale(35),
    height: verticalScale(20),
    borderRadius: verticalScale(25),
    padding: horizontalScale(5),
  },
  circleStyle: {
    width: horizontalScale(14),
    height: horizontalScale(14),
    borderRadius: horizontalScale(20),
  },
});
