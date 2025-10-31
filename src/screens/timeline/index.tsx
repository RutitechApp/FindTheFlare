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
import TabView from "../../components/TabView";
import {
  tabData,
  timeLineCardData,
  timeLineData,
} from "../../helpers/dummyData";
import { Calendar } from "react-native-calendars";
import { Calendars } from "../../assets/icons/TimeLineIcons";
import { Modal, PaperProvider, Portal } from "react-native-paper";
import Button from "../../components/Button";
import TimeLineCard from "../../components/TimeLineCard";
import TimelineBottomSheet from "../../components/TimelineBottomSheet";

interface RBSheetRef {
  open: () => void;
  close: () => void;
}

const TimeLineScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [aIndex, setAIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [visible, setVisible] = useState(false);
  const refRBSheet = useRef<RBSheetRef | null>(null);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <PaperProvider>
      <Portal>
        <Container style={{ paddingHorizontal: horizontalScale(20) }}>
          <View style={styles.headerViewStyle}>
            <Text style={styles.headerTextStyle}>Space Weather Timeline</Text>
            <Calendars
              width={horizontalScale(30)}
              height={horizontalScale(30)}
              onPress={showModal}
            />
          </View>
          <TabView
            tabData={tabData}
            onPress={(index) => setActiveIndex(index)}
            activeIndex={activeIndex}
          />
          <View style={{ marginTop: verticalScale(20) }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: horizontalScale(5) }}
            >
              {timeLineData?.map((item, index) => (
                <Pressable
                  key={index}
                  style={{
                    backgroundColor:
                      index === aIndex
                        ? colors.darkOrange
                        : colors.white10Opacity,
                    paddingVertical: verticalScale(7),
                    paddingHorizontal: horizontalScale(14),
                    borderRadius: horizontalScale(10),
                  }}
                  onPress={() => setAIndex(index)}
                >
                  <Text
                    style={{
                      fontSize: fontScale(14),
                      fontFamily: fontConstants.MULISH_BOLD,
                      color: index === aIndex ? colors.white : colors.grey,
                    }}
                  >
                    {item?.title}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
          <FlatList
            data={timeLineCardData}
            style={{
              marginTop: verticalScale(20),
              marginBottom: verticalScale(70),
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: verticalScale(10) }}
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

        <Modal
          visible={visible}
          onDismiss={hideModal}
          style={{ backgroundColor: "transparent" }}
          contentContainerStyle={{
            backgroundColor: "#323741",
            width: horizontalScale(300),
            height: verticalScale(390),
            alignSelf: "center",
            borderRadius: horizontalScale(10),
          }}
        >
          <Calendar
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
            style={{
              backgroundColor: "#323741",
              justifyContent: "center",
            }}
            theme={{
              calendarBackground: "#323741",
              textDayStyle: {
                color: "white",
                fontSize: fontScale(12.45),
                lineHeight: verticalScale(19.92),
                fontFamily: fontConstants.MULISH_BOLD,
              },
              monthTextColor: "#656A78",
              textDisabledColor: "#656A78",
              dayTextColor: "#656A78",
              selectedDayBackgroundColor: colors.darkOrange,
              textMonthFontSize: fontScale(12.45),
              textMonthFontFamily: fontConstants.MULISH_BOLD,
              textDayFontFamily: fontConstants.MULISH_BOLD,
              textDayFontWeight: "500",
              textMonthFontWeight: "500",
              textDayHeaderFontFamily: fontConstants.MULISH_BOLD,
              textDayHeaderFontWeight: "500",
              textDayHeaderFontSize: fontScale(12.45),
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginHorizontal: horizontalScale(12),
            }}
          >
            <Button
              title="Cancel"
              btnStyle={{
                marginHorizontal: 0,
                backgroundColor: "#272A32",
                width: horizontalScale(120),
                height: verticalScale(35),
                justifyContent: "center",
              }}
              onPress={hideModal}
            />
            <Button
              title="Choose Date"
              btnStyle={{
                marginHorizontal: 0,
                width: horizontalScale(120),
                height: verticalScale(35),
                justifyContent: "center",
              }}
            />
          </View>
        </Modal>
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
});
