import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  FlatList,
} from "react-native";
import Container from "../../components/Container";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../../constants/responsive";
import fontConstants from "../../constants/fontConstants";
import colors from "../../constants/colors";
import { timeLineCardData, timeLineData } from "../../helpers/dummyData";
import { WhiteHistoryIcon } from "../../assets/icons/TimeLineIcons";
import { PaperProvider, Portal } from "react-native-paper";
import TimeLineCard from "../../components/TimeLineCard";
import TimelineBottomSheet from "../../components/TimelineBottomSheet";
import { useSelector } from "react-redux";
import { mergeSpaceWeatherData } from "../../constants/constants";
import NavigationTypes from "../../navigations/NavigationTypes";
import { useNavigation } from "@react-navigation/native";

interface RBSheetRef {
  open: () => void;
  close: () => void;
}

const TimeLineScreen = () => {
  const { CMEData, FLRData, GSTData } = useSelector((state: any) => state.home);
  const [aIndex, setAIndex] = useState(0);

  const refRBSheet = useRef<RBSheetRef | null>(null);

  const navigation = useNavigation();

  const merged = mergeSpaceWeatherData(CMEData, FLRData, GSTData);

  console.log(merged);
  return (
    <PaperProvider>
      <Portal>
        <Container style={styles.container}>
          <View style={styles.headerViewStyle}>
            <Text style={styles.headerTextStyle}>Space Weather Timeline</Text>

            <WhiteHistoryIcon
              width={horizontalScale(30)}
              height={horizontalScale(30)}
              onPress={() => navigation.navigate(NavigationTypes.HISTORY)}
            />
          </View>

          <View style={styles.viewStyle}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.contentContainerStyle}
            >
              {timeLineData?.map((item, index) => (
                <Pressable
                  key={index}
                  style={[
                    {
                      backgroundColor:
                        index === aIndex
                          ? colors.darkOrange
                          : colors.white10Opacity,
                    },
                    styles.pressableStyle,
                  ]}
                  onPress={() => setAIndex(index)}
                >
                  <Text
                    style={[
                      {
                        color: index === aIndex ? colors.white : colors.grey,
                      },
                      styles.titleStyle,
                    ]}
                  >
                    {item?.title}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <FlatList
            data={timeLineCardData}
            style={styles.flatListStyle}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flatListContentContainerStyle}
            renderItem={({ item }) => {
              return (
                <TimeLineCard
                  data={item}
                  onPress={() => refRBSheet?.current?.open()}
                />
              );
            }}
          />
          <TimelineBottomSheet refRBSheet={refRBSheet} />
        </Container>
      </Portal>
    </PaperProvider>
  );
};

export default TimeLineScreen;

const styles = StyleSheet.create({
  headerViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: verticalScale(20),
  },
  headerTextStyle: {
    fontSize: fontScale(20),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
  },
  container: {
    paddingHorizontal: horizontalScale(20),
  },
  viewStyle: {
    marginTop: verticalScale(20),
  },
  contentContainerStyle: {
    gap: horizontalScale(5),
  },
  pressableStyle: {
    paddingVertical: verticalScale(7),
    paddingHorizontal: horizontalScale(14),
    borderRadius: horizontalScale(10),
  },
  titleStyle: {
    fontSize: fontScale(14),
    fontFamily: fontConstants.MULISH_BOLD,
  },
  flatListStyle: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(70),
  },
  flatListContentContainerStyle: {
    gap: verticalScale(10),
  },
});
