import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../constants/colors";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../constants/responsive";
import { CloseIcon } from "../assets/icons/HomeIcons";
import fontConstants from "../constants/fontConstants";
import TextCover from "./TextCover";
import EventCard from "./EventCard";
import {
  CalendarIcon,
  DurationIcon,
  ImpactIcon,
  LatitudeIcon,
  LongitudeIcon,
  RegionIcon,
  TimeIcon,
  WarningIcon,
} from "../assets/icons/EventIcons";
import Button from "./Button";
import NavigationTypes, {
  EventDetailsNavigationProp,
} from "../navigations/NavigationTypes";
import { useNavigation } from "@react-navigation/native";

interface TimelineBottomSheetProps {
  refRBSheet?: React.RefObject<InstanceType<typeof RBSheet>>;
}
const EventData = [
  {
    id: 1,
    image: (
      <CalendarIcon height={verticalScale(20)} width={verticalScale(20)} />
    ),
    title: "Date",
    value: "05/10/2025",
  },
  {
    id: 2,
    image: <TimeIcon height={verticalScale(20)} width={verticalScale(20)} />,
    title: "Time",
    value: "13:00 UTC - 15:00 UTC",
  },
  {
    id: 3,
    image: (
      <DurationIcon height={verticalScale(20)} width={verticalScale(20)} />
    ),
    title: "Duration",
    value: "6 hours",
  },
  {
    id: 4,
    image: <ImpactIcon height={verticalScale(20)} width={verticalScale(20)} />,
    title: "Impact",
    value: "Geomagnetic Activity",
  },
];
const LocationData = [
  {
    id: 1,
    image: (
      <LatitudeIcon height={verticalScale(20)} width={verticalScale(20)} />
    ),
    title: "Latitude",
    value: "45.20°",
  },
  {
    id: 2,
    image: (
      <LongitudeIcon height={verticalScale(20)} width={verticalScale(20)} />
    ),
    title: "Longitude",
    value: "-12.50°",
  },
  {
    id: 3,
    image: <RegionIcon height={verticalScale(20)} width={verticalScale(20)} />,
    title: "Region",
    value: "Europe/Asia",
  },
];
const TimelineBottomSheet: React.FC<TimelineBottomSheetProps> = ({
  refRBSheet,
}) => {
  const navigation = useNavigation<EventDetailsNavigationProp>();
  return (
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: horizontalScale(6),
          }}
        >
          <TextCover text={"CME"} />
          <TextCover text="MODERATE" />
        </View>
        <Pressable onPress={() => refRBSheet?.current?.close()}>
          <CloseIcon />
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={[styles.headerTextStyle, { paddingTop: verticalScale(12) }]}
        >
          Meteor Shower
        </Text>
        <Text
          style={{
            fontSize: fontScale(12),
            fontFamily: fontConstants.MULISH_BOLD,
            color: colors.white,
            marginTop: verticalScale(8),
          }}
        >
          Faint CME seen to the East in SOHO LASCO C2 only. Source is uncertain;
          there is no clear source in available UV imagery of the disk.
        </Text>
        <Text
          style={[styles.headerTextStyle, { paddingTop: verticalScale(12) }]}
        >
          Event Details
        </Text>
        <FlatList
          data={EventData}
          contentContainerStyle={{
            gap: horizontalScale(10),
          }}
          scrollEnabled={false}
          style={styles.flatListStyle}
          renderItem={({ item }) => {
            return <EventCard data={item} />;
          }}
        />
        <Text
          style={[styles.headerTextStyle, { paddingTop: verticalScale(12) }]}
        >
          Location Information
        </Text>
        <FlatList
          data={LocationData}
          contentContainerStyle={{
            gap: horizontalScale(10),
          }}
          style={styles.flatListStyle}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return <EventCard data={item} />;
          }}
        />
        <Text style={styles.titleTextStyle}>Impact Assessment</Text>
        <View style={styles.vStyle}>
          <View style={styles.vSubStyle}>
            <WarningIcon width={verticalScale(20)} height={verticalScale(20)} />
            <Text style={styles.modeTextStyle}>Moderate Level Event</Text>
          </View>
          <Text
            style={{
              fontSize: fontScale(12),
              fontFamily: fontConstants.MULISH_BOLD,
              color: colors.grey,
              paddingVertical: verticalScale(10),
            }}
          >
            Geomagnetic activity expected
          </Text>
          <Text
            style={{
              fontSize: fontScale(12),
              fontFamily: fontConstants.MULISH_BOLD,
              color: colors.grey,
            }}
          >
            Monitor satellite operations and GPS accuracy. Enhanced aurora
            activity possible at high latitudes.
          </Text>
        </View>
      </ScrollView>
      <Button
        title="View On Map"
        onPress={() => navigation.navigate(NavigationTypes.MAP)}
      />
    </RBSheet>
  );
};

export default TimelineBottomSheet;

const styles = StyleSheet.create({
  containerStyle: {
    height: verticalScale(620),
    backgroundColor: colors.darkBlue,
    borderTopLeftRadius: horizontalScale(10),
    borderTopRightRadius: horizontalScale(10),
    padding: horizontalScale(20),
  },

  bottomViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTextStyle: {
    fontSize: fontScale(20),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
  },
  flatListStyle: {
    backgroundColor: colors.white10Opacity,
    padding: horizontalScale(20),
    marginTop: verticalScale(10),
    borderRadius: verticalScale(10),
  },
  titleTextStyle: {
    fontSize: fontScale(18),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginTop: verticalScale(10),
  },

  vStyle: {
    backgroundColor: colors.orange10Opacity,
    padding: horizontalScale(20),
    marginTop: verticalScale(10),
    borderRadius: verticalScale(10),
  },
  vSubStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  modeTextStyle: {
    fontSize: fontScale(14),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.orange,
    marginLeft: horizontalScale(10),
  },
});
