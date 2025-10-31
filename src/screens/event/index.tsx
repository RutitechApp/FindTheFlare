import React, { useEffect, useRef } from 'react';
import {
  Animated,
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Container from '../../components/Container';
import { ForwardIcon, WindIcon } from '../../assets/icons/HomeIcons';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../constants/responsive';
import fontConstants from '../../constants/fontConstants';
import colors from '../../constants/colors';
import imageConstants from '../../constants/imageConstants';
import { useNavigation } from '@react-navigation/native';
import EventTimeCard from '../../components/EventTimeCard';
import TextCover from '../../components/TextCover';
import {
  CalendarIcon,
  DurationIcon,
  ImpactIcon,
  LatitudeIcon,
  LongitudeIcon,
  RegionIcon,
  TimeIcon,
  WarningIcon,
} from '../../assets/icons/EventIcons';
import EventCard from '../../components/EventCard';
import Button from '../../components/Button';

const EventDetailsScreen = () => {
  const navigation = useNavigation();
  const data = [
    { value: '06', label: 'Days' },
    { value: '21', label: 'Hours' },
    { value: '16', label: 'Minutes' },
    { value: '07', label: 'Seconds' },
  ];

  const EventData = [
    {
      id: 1,
      image: (
        <CalendarIcon height={verticalScale(20)} width={verticalScale(20)} />
      ),
      title: 'Date',
      value: '05/10/2025',
    },
    {
      id: 2,
      image: <TimeIcon height={verticalScale(20)} width={verticalScale(20)} />,
      title: 'Time',
      value: '13:00 UTC - 15:00 UTC',
    },
    {
      id: 3,
      image: (
        <DurationIcon height={verticalScale(20)} width={verticalScale(20)} />
      ),
      title: 'Duration',
      value: '6 hours',
    },
    {
      id: 4,
      image: (
        <ImpactIcon height={verticalScale(20)} width={verticalScale(20)} />
      ),
      title: 'Impact',
      value: 'Geomagnetic Activity',
    },
  ];
  const LocationData = [
    {
      id: 1,
      image: (
        <LatitudeIcon height={verticalScale(20)} width={verticalScale(20)} />
      ),
      title: 'Latitude',
      value: '45.20°',
    },
    {
      id: 2,
      image: (
        <LongitudeIcon height={verticalScale(20)} width={verticalScale(20)} />
      ),
      title: 'Longitude',
      value: '-12.50°',
    },
    {
      id: 3,
      image: (
        <RegionIcon height={verticalScale(20)} width={verticalScale(20)} />
      ),
      title: 'Region',
      value: 'Europe/Asia',
    },
  ];

  const translateX = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
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
    ]).start(() => startAnimation());
  };

  useEffect(() => {
    startAnimation();
  }, []);
  return (
    <Container style={{ marginHorizontal: horizontalScale(20) }}>
      <View style={styles.headerViewStyle}>
        <Pressable onPress={() => navigation.goBack()}>
          <ForwardIcon
            style={{
              transform: [{ scaleX: -1 }],
            }}
            width={horizontalScale(22)}
            height={horizontalScale(22)}
          />
        </Pressable>
        <Text style={styles.headerTextStyle}>Meteor Shower</Text>
        <View />
      </View>
      <ScrollView
        style={{ marginVertical: verticalScale(20) }}
        showsVerticalScrollIndicator={false}
      >
        <EventTimeCard data={data} />
        <ImageBackground
          source={imageConstants.event}
          style={styles.imageBgStyle}
        >
          <Animated.Image
            source={imageConstants.flare}
            style={[
              {
                transform: [{ translateX }],
              },
              styles.imageStyle,
            ]}
            resizeMode="contain"
          />
        </ImageBackground>
        <View style={styles.rowStyle}>
          <WindIcon width={horizontalScale(15)} height={verticalScale(12)} />
          <Text style={styles.textStyle}>750km/s</Text>
        </View>
        <View style={styles.subRowStyle}>
          <TextCover text={'CME'} />
          <TextCover text={'MODERATE'} />
        </View>
        <Text style={styles.titleTextStyle}>Meteor Shower</Text>
        <Text style={styles.descTextStyle}>
          Faint CME seen to the East in SOHO LASCO C2 only. Source is uncertain;
          there is no clear source in available UV imagery of the disk.
        </Text>
        <Text style={styles.titleTextStyle}>Event Details</Text>
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
        <Text style={styles.titleTextStyle}>Location Information</Text>
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
        <Button title="View On Map" />
      </ScrollView>
    </Container>
  );
};

export default EventDetailsScreen;
const styles = StyleSheet.create({
  headerViewStyle: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextStyle: {
    fontSize: fontScale(20),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    textTransform: 'uppercase',
  },
  imageBgStyle: {
    height: verticalScale(261),
    width: horizontalScale(308.85),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  imageStyle: {
    height: verticalScale(12),
    width: horizontalScale(18),
    left: horizontalScale(20),
  },
  rowStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  textStyle: {
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginLeft: horizontalScale(5),
  },
  titleTextStyle: {
    fontSize: fontScale(18),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    marginTop: verticalScale(10),
  },
  descTextStyle: {
    color: colors.grey,
    fontSize: fontScale(12),
    fontFamily: fontConstants.MULISH_BOLD,
    marginTop: verticalScale(8),
  },
  subRowStyle: {
    flexDirection: 'row',
    gap: horizontalScale(6),
    marginTop: verticalScale(20),
  },
  flatListStyle: {
    backgroundColor: colors.white10Opacity,
    padding: horizontalScale(20),
    marginTop: verticalScale(10),
    borderRadius: verticalScale(10),
  },
  vStyle: {
    backgroundColor: colors.orange10Opacity,
    padding: horizontalScale(20),
    marginTop: verticalScale(10),
    borderRadius: verticalScale(10),
  },
  vSubStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modeTextStyle: {
    fontSize: fontScale(14),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.orange,
    marginLeft: horizontalScale(10),
  },
});
