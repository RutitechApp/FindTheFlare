import React, { useState } from "react";
import Container from "../../components/Container";
import TabView from "../../components/TabView";
import { historyTabData } from "../../helpers/dummyData";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../../constants/responsive";
import { StyleSheet, Text } from "react-native";
import fontConstants from "../../constants/fontConstants";
import colors from "../../constants/colors";

const History = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Container style={{ paddingHorizontal: horizontalScale(20) }}>
      <Text style={styles.headerTextStyle}>History</Text>
      <TabView
        tabData={historyTabData}
        onPress={(index) => setActiveIndex(index)}
        activeIndex={activeIndex}
      />
    </Container>
  );
};

export default History;

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: fontScale(20),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginTop: verticalScale(20),
  },
});
