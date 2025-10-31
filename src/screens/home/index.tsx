import React, { useRef } from "react";
import Container from "../../components/Container";
import HomeHeader from "../../components/HomeHeader";
import HomeMainCard from "../../components/HomeMainCard";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../../constants/responsive";
import fontConstants from "../../constants/fontConstants";
import { recentData, upcomingData } from "../../helpers/dummyData";
import HomeSubCard from "../../components/HomeSubCard";
import RBSheet from "react-native-raw-bottom-sheet";
import { CloseIcon, ForwardIcon } from "../../assets/icons/HomeIcons";
import colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import NavigationTypes, {
  HomeScreenNavigationProp,
} from "../../navigations/NavigationTypes";

interface RBSheetRef {
  open: () => void;
  close: () => void;
}

const HomeScreen = () => {
  const refRBSheet = useRef<RBSheetRef | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  // const dispatch: Dispatch = useDispatch();
  // const CMEDATA = useSelector((state: any) => state?.home?.CMEData);
  // console.log('CMEDATA', CMEDATA);
  // const now = new Date();

  // const startDate = new Date(now.getFullYear(), now.getMonth(), 1)
  //   .toISOString()
  //   .split('T')[0];

  // const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0)
  //   .toISOString()
  //   .split('T')[0];

  // const latestEvent = CMEDATA?.reduce((latest, current) => {
  //   return new Date(current?.submissionTime) > new Date(latest?.submissionTime)
  //     ? current
  //     : latest;
  // });

  // console.log('latestEvent', latestEvent);

  // useEffect(() => {
  //   const obj = {
  //     data: {
  //       startDate: startDate,
  //       endDate: endDate,
  //       apiKey: 'd0dLQacxalBN2QZ5ceAcZTeWGcVEX45yMoNZaB5g',
  //     },
  //     onSuccess: (res?: any) => {},
  //     onFail: (err?: any) => {},
  //   };
  //   dispatch(getCMEAction(obj));
  // }, []);
  return (
    <Container>
      <HomeHeader
        onNotificationPress={() => {
          refRBSheet?.current?.open();
        }}
      />
      <HomeMainCard />
      <Text style={styles.textStyle}>Upcoming Events</Text>
      <FlatList
        data={upcomingData}
        style={styles.flatListStyle}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <HomeSubCard
              data={item}
              onPress={() =>
                navigation.navigate(NavigationTypes.EVENT_DETAILS, {
                  data: item,
                })
              }
            />
          );
        }}
      />
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        customStyles={{
          wrapper: {
            backgroundColor: colors.white10Opacity,
          },

          container: [styles.containerStyle],
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View style={styles.bottomViewStyle}>
          <Text style={styles.recentAlertStyle}>Recent Alerts</Text>
          <Pressable onPress={() => refRBSheet?.current?.close()}>
            <CloseIcon />
          </Pressable>
        </View>
        <FlatList
          data={recentData}
          style={{ marginTop: verticalScale(20) }}
          contentContainerStyle={{
            gap: horizontalScale(15),
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.subVStyle}>
                <View style={styles.vStyle}>
                  <View style={styles.imageStyle}>{item.image}</View>
                  <View style={styles.viewStyle}>
                    <Text
                      style={[
                        {
                          color: item?.color,
                        },
                        styles.titleTextStyle,
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={[
                        {
                          color: item?.color,
                        },
                        styles.typeTextStyle,
                      ]}
                    >
                      {item.type}
                    </Text>
                  </View>
                </View>
                <View style={styles.timeViewStyle}>
                  <Text style={styles.timeTextStyle}>{item.time}</Text>
                  <ForwardIcon
                    width={horizontalScale(16)}
                    height={horizontalScale(16)}
                  />
                </View>
              </View>
            );
          }}
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
  timeTextStyle: {
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginRight: horizontalScale(5),
    flexShrink: 1,
  },
  timeViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
    maxWidth: "30%",
  },
  typeTextStyle: {
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
  },
  titleTextStyle: {
    fontSize: fontScale(16),
    fontFamily: fontConstants.MULISH_BOLD,
  },
  viewStyle: {
    marginLeft: horizontalScale(15),
    flex: 1,
  },
  imageStyle: {
    height: verticalScale(42),
    width: verticalScale(42),
    justifyContent: "center",
    alignItems: "center",
  },
  vStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 1,
  },
  subVStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flex: 1,
  },
  recentAlertStyle: {
    fontSize: fontScale(18),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
  },
  bottomViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerStyle: {
    height: verticalScale(240),
    backgroundColor: colors.darkBlue,
    borderTopLeftRadius: horizontalScale(10),
    borderTopRightRadius: horizontalScale(10),
    padding: horizontalScale(20),
  },
  flatListStyle: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(70),
  },
});
