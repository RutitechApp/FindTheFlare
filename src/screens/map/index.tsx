import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import Container from '../../components/Container';
import MapboxGL from '@rnmapbox/maps';
import { GlobalIcon } from '../../assets/icons/MapIcons';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../constants/responsive';
import fontConstants from '../../constants/fontConstants';
import colors from '../../constants/colors';
import { upcomingData } from '../../helpers/dummyData';
import HomeSubCard from '../../components/HomeSubCard';
import NavigationTypes from '../../navigations/NavigationTypes';
import { useNavigation } from '@react-navigation/native';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZGVla3NoYW1laHRhMTI1IiwiYSI6ImNrcWV6OWE0bDBjcmMydXF1enZqMjd5MDMifQ.hFB7SI_kojKYfNQ42c62BA',
);

const MapScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    MapboxGL.requestAndroidLocationPermissions();
  }, []);

  const cmeRegion = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          color: '#B388EB',
          name: 'CME 05/10/2025',
        },
        geometry: {
          type: 'Point',
          coordinates: [-95, 65],
        },
      },
    ],
  };

  const sfRegion = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          color: '#FFD54F',
          name: 'SF 08/10/2025',
        },
        geometry: {
          type: 'Point',
          coordinates: [-65, -15],
        },
      },
    ],
  };

  return (
    <Container style={{ paddingHorizontal: horizontalScale(20) }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: verticalScale(20),
        }}
      >
        <Text
          style={{
            fontSize: fontScale(20),
            fontFamily: fontConstants.MULISH_BOLD,
            color: colors.white,
          }}
        >
          Global Map
        </Text>
        <GlobalIcon />
      </View>
      <ScrollView style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL="mapbox://styles/mapbox/standard-satellite"
          projection="globe"
          logoEnabled={false}
          compassEnabled={false}
          attributionEnabled={false}
          scaleBarEnabled={false}
        >
          <MapboxGL.Camera
            zoomLevel={0.9}
            centerCoordinate={[-80, 25]}
            animationMode="flyTo"
            animationDuration={0}
          />

          <MapboxGL.ShapeSource id="cmeSource" shape={cmeRegion}>
            <MapboxGL.CircleLayer
              id="cmeLayer"
              style={{
                circleRadius: 60,
                circleColor: ['get', 'color'],
                circleOpacity: 0.2,
                circleStrokeColor: '#B388EB',
                circleStrokeWidth: 2,
              }}
            />
            <MapboxGL.SymbolLayer
              id="cmeLabel"
              style={{
                textField: ['get', 'name'],
                textSize: 12,
                textColor: '#B388EB',
                textAnchor: 'top',
                textOffset: [0, 2],
              }}
            />
          </MapboxGL.ShapeSource>

          <MapboxGL.ShapeSource id="sfSource" shape={sfRegion}>
            <MapboxGL.CircleLayer
              id="sfLayer"
              style={{
                circleRadius: 60,
                circleColor: ['get', 'color'],
                circleOpacity: 0.2,
                circleStrokeColor: '#FFD54F',
                circleStrokeWidth: 2,
              }}
            />
            <MapboxGL.SymbolLayer
              id="sfLabel"
              style={{
                textField: ['get', 'name'],
                textSize: 12,
                textColor: '#FFD54F',
                textAnchor: 'top',
                textOffset: [0, 2],
              }}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>
        <Text style={styles.textStyle}>Upcoming Events</Text>
        <FlatList
          data={upcomingData}
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
      </ScrollView>
    </Container>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: verticalScale(70),
  },
  map: {
    height: 400,
    width: 400,
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: fontScale(18),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    paddingVertical: verticalScale(15),
  },
});
