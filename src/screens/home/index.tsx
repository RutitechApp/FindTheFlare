import React, { useEffect, useRef, useState } from "react";
import { Text, View, FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RBSheet from "react-native-raw-bottom-sheet";
import Container from "../../components/Container";
import HomeHeader from "../../components/HomeHeader";
import HomeMainCard from "../../components/HomeMainCard";
import HomeSubCard from "../../components/HomeSubCard";
import { recentData } from "../../helpers/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../redux/store/store";
import {
  getCMEAction,
  getFLRAction,
  getGSTAction,
} from "../../redux/action/homeAction";
import { getMonthRange } from "../../constants/constants";
import NavigationTypes, {
  HomeScreenNavigationProp,
} from "../../navigations/NavigationTypes";
import { CloseIcon, ForwardIcon } from "../../assets/icons/HomeIcons";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../../constants/responsive";
import fontConstants from "../../constants/fontConstants";
import colors from "../../constants/colors";

interface RBSheetRef {
  open?: () => void;
  close?: () => void;
}

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const refRBSheet = useRef<RBSheetRef>(null);
  const dispatch: ThunkDispatch<RootState, void, any> = useDispatch();
  const { CMEData, FLRData, GSTData } = useSelector((state: any) => state.home);
  const [latestData, setLatestData] = useState<any>(null);
  const [upcomingData, setUpcomingData] = useState<any[]>([]);
  console.log("GSTData", latestData);
  useEffect(() => {
    const now = new Date();
    const { startDate, endDate } = getMonthRange(
      now.getFullYear(),
      now.getMonth() + 1
    );

    const payload = {
      data: { startDate, endDate },
      onSuccess: () => {},
      onFail: () => {},
    };

    dispatch(getCMEAction(payload));
    dispatch(getFLRAction(payload));
    dispatch(getGSTAction(payload));
  }, []);

  useEffect(() => {
    if (CMEData?.length) {
      setLatestData(
        CMEData.reduce((a: any, b: any) =>
          new Date(b.time) > new Date(a.time) ? b : a
        )
      );
    }
  }, [CMEData]);

  useEffect(() => {
    const now = new Date();
    let nextEvents: any[] = [];

    if (CMEData?.length) {
      const nextCME = CMEData.filter((e) => new Date(e.time) > now).sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
      )[0];
      if (nextCME) nextEvents.push(nextCME);
    }

    if (FLRData?.length) {
      const nextFLR = FLRData.filter((e) => new Date(e.startDate) > now).sort(
        (a, b) =>
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      )[0];
      if (nextFLR) nextEvents.push(nextFLR);
    }

    setUpcomingData(nextEvents);
  }, [CMEData, FLRData]);

  return (
    <Container>
      <HomeHeader onNotificationPress={() => refRBSheet.current?.open?.()} />
      <HomeMainCard
        data={latestData}
        onPress={() =>
          navigation.navigate(NavigationTypes.EVENT_DETAILS, {
            data: latestData,
          })
        }
      />
      <Text style={styles.textStyle}>Upcoming Events</Text>
      <FlatList
        data={upcomingData}
        style={styles.flatListStyle}
        renderItem={({ item }) => (
          <HomeSubCard
            data={item}
            onPress={() =>
              navigation.navigate(NavigationTypes.EVENT_DETAILS, { data: item })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver
        customStyles={{
          wrapper: { backgroundColor: colors.white10Opacity },
          container: styles.bottomContainer,
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
      >
        <View style={styles.bottomHeader}>
          <Text style={styles.recentAlertStyle}>Recent Alerts</Text>
          <Pressable onPress={() => refRBSheet.current?.close?.()}>
            <CloseIcon />
          </Pressable>
        </View>
        <FlatList
          data={recentData}
          contentContainerStyle={{
            gap: horizontalScale(15),
            marginTop: verticalScale(20),
          }}
          renderItem={({ item }) => (
            <View style={styles.alertItem}>
              <View style={styles.alertLeft}>
                <View style={styles.imageStyle}>{item.image}</View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.alertTitle, { color: item.color }]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.alertType, { color: item.color }]}>
                    {item.type}
                  </Text>
                </View>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{item.time}</Text>
                <ForwardIcon width={16} height={16} />
              </View>
            </View>
          )}
        />
      </RBSheet>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontScale(18),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginHorizontal: horizontalScale(20),
  },
  flatListStyle: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(70),
  },

  bottomContainer: {
    height: verticalScale(240),
    backgroundColor: colors.darkBlue,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: horizontalScale(20),
  },
  bottomHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recentAlertStyle: {
    fontSize: fontScale(18),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
  },

  alertItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  alertLeft: {
    flexDirection: "row",
    flex: 1,
  },
  imageStyle: {
    height: verticalScale(42),
    width: verticalScale(42),
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  alertTitle: {
    fontSize: fontScale(16),
    fontFamily: fontConstants.MULISH_BOLD,
  },
  alertType: {
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
  },

  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "30%",
  },
  timeText: {
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginRight: 5,
  },
});
