import React, { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Container from "../../components/Container";
import { fontScale, horizontalScale } from "../../constants/responsive";
import { ForwardIcon, WindIcon } from "../../assets/icons/HomeIcons";
import {
  CalendarIcon,
  DurationIcon,
  LatitudeIcon,
  LongitudeIcon,
  RegionIcon,
  TimeIcon,
  WarningIcon,
} from "../../assets/icons/EventIcons";
import fontConstants from "../../constants/fontConstants";
import colors from "../../constants/colors";
import imageConstants from "../../constants/imageConstants";
import {
  formatToDDMMYYYY,
  getDuration,
  getTimeFromISO,
  getTimeToImpact,
  parseLocation,
  parseTimeString,
} from "../../constants/constants";
import EventTimeCard from "../../components/EventTimeCard";
import TextCover from "../../components/TextCover";
import EventCard from "../../components/EventCard";
import Button from "../../components/Button";
import NavigationTypes from "../../navigations/NavigationTypes";
import { useNavigation, useRoute } from "@react-navigation/native";

const EventDetailsScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const data = params?.data;

  const isCME = data?.name === "Coronal Mass Ejection";
  const isFLR = data?.name === "Solar Flare";

  const impactTime = getTimeToImpact(
    data?.startDate,
    isCME ? data?.time : data?.endTime
  );

  const { days, hours, minutes, seconds } = parseTimeString(impactTime);

  const { latitude, longitude } = isFLR ? parseLocation(data?.location) : data;

  const translateX = useRef(new Animated.Value(0)).current;

  const animateFlare = () => {
    Animated.sequence([
      Animated.timing(translateX, {
        toValue: horizontalScale(220),
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: 0,
        duration: 0,
        useNativeDriver: true,
      }),
    ]).start(() => animateFlare());
  };

  useEffect(() => {
    animateFlare();
  }, []);

  return (
    <Container style={{ marginHorizontal: horizontalScale(20) }}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <ForwardIcon style={{ transform: [{ scaleX: -1 }] }} />
        </Pressable>
        <Text style={styles.headerText}>{data?.name}</Text>
        <View />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <EventTimeCard {...{ days, hours, minutes, seconds }} />

        <ImageBackground source={imageConstants.event} style={styles.imageBg}>
          <Animated.Image
            source={imageConstants.flare}
            style={[styles.flareImg, { transform: [{ translateX }] }]}
            resizeMode="contain"
          />
        </ImageBackground>

        <View style={styles.rowCenter}>
          <WindIcon width={15} height={12} />
          <Text style={styles.speedText}>{data?.speed}km/s</Text>
        </View>

        <View style={styles.tagRow}>
          <TextCover text={isCME ? "CME" : isFLR ? "FLR" : "GST"} />
          <TextCover text={data?.type} />
        </View>

        <Text style={styles.title}>{data?.name}</Text>
        <Text style={styles.desc}>
          {isCME
            ? data?.description
            : `A ${data?.class}-class solar flare occurred at ${data?.location}.`}
        </Text>

        <Text style={styles.title}>Event Details</Text>
        <View style={styles.cardBox}>
          <EventCard
            title="Date"
            value={formatToDDMMYYYY(data?.startDate)}
            image={<CalendarIcon />}
          />
          <EventCard
            title="Time"
            value={
              isCME
                ? getTimeFromISO(data?.time)
                : getTimeFromISO(data?.peakTime)
            }
            image={<TimeIcon />}
          />
          <EventCard
            title="Duration"
            value={getDuration(data?.startDate, data?.submissionDate)}
            image={<DurationIcon />}
          />
        </View>

        <Text style={styles.title}>Location Info</Text>
        <View style={styles.cardBox}>
          <EventCard
            title="Latitude"
            value={latitude}
            image={<LatitudeIcon />}
          />
          <EventCard
            title="Longitude"
            value={longitude}
            image={<LongitudeIcon />}
          />
          <EventCard
            title="Region"
            value={data?.location}
            image={<RegionIcon />}
          />
        </View>

        <Text style={styles.title}>Impact Assessment</Text>
        <View style={styles.impactBox}>
          <View style={styles.rowCenter}>
            <WarningIcon />
            <Text style={styles.moderateText}>Moderate Level Event</Text>
          </View>
          <Text style={styles.impactText}>Geomagnetic activity expected</Text>
          <Text style={styles.impactText}>
            Possible GPS issues and high-latitude auroras.
          </Text>
        </View>

        <Button
          title="View On Map"
          onPress={() =>
            navigation.navigate(NavigationTypes.TAB, {
              screen: NavigationTypes.MAP,
              params: { data, latitude, longitude },
            })
          }
        />
      </ScrollView>
    </Container>
  );
};

export default EventDetailsScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: fontScale(20),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
  },
  imageBg: {
    height: 261,
    width: 309,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  flareImg: {
    height: 12,
    width: 18,
    left: 20,
  },
  rowCenter: { flexDirection: "row", alignSelf: "center", marginTop: 10 },
  speedText: {
    marginLeft: 5,
    color: colors.white,
    fontFamily: fontConstants.MULISH_BOLD,
  },
  tagRow: { flexDirection: "row", gap: 8, marginTop: 20 },
  title: {
    fontSize: 18,
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginTop: 10,
  },
  desc: {
    fontSize: 12,
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.grey,
    marginTop: 8,
  },
  cardBox: {
    backgroundColor: colors.white10Opacity,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
    gap: 10,
  },
  impactBox: {
    backgroundColor: colors.orange10Opacity,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  moderateText: {
    marginLeft: 10,
    color: colors.orange,
    fontFamily: fontConstants.MULISH_BOLD,
  },
  impactText: {
    fontSize: 12,
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.grey,
    marginTop: 5,
  },
});
