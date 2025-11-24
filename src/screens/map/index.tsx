import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, FlatList } from "react-native";
import Container from "../../components/Container";
import MapboxGL from "@rnmapbox/maps";
import { GlobalIcon } from "../../assets/icons/MapIcons";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../../constants/responsive";
import fontConstants from "../../constants/fontConstants";
import colors from "../../constants/colors";
import HomeSubCard from "../../components/HomeSubCard";
import NavigationTypes from "../../navigations/NavigationTypes";
import { useNavigation, useRoute } from "@react-navigation/native";
import { formatToDDMMYYYY, getMonthRange } from "../../constants/constants";
import {
  getCMEAction,
  getFLRAction,
  getGSTAction,
} from "../../redux/action/homeAction";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../../redux/store/store";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiZGVla3NoYW1laHRhMTI1IiwiYSI6ImNrcWV6OWE0bDBjcmMydXF1enZqMjd5MDMifQ.hFB7SI_kojKYfNQ42c62BA"
);

const MapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const storeData = useSelector((state: any) => state?.home);
  const CMEData = storeData?.CMEData;
  const FLRData = storeData?.FLRData;

  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  const [latestData, setLatestData] = useState(
    route?.params?.data ? route.params.data : null
  );

  const [upcomingData, setUpcomingData] = useState([]);

  useEffect(() => {
    MapboxGL.requestAndroidLocationPermissions();
  }, []);

  useEffect(() => {
    const now = new Date();
    const { startDate, endDate } = getMonthRange(
      now.getFullYear(),
      now.getMonth() + 1
    );

    const requestObj = {
      data: { startDate, endDate },
      onSuccess: () => {},
      onFail: () => {},
    };

    dispatch(getCMEAction(requestObj));
    dispatch(getFLRAction(requestObj));
    dispatch(getGSTAction(requestObj));
  }, []);

  useEffect(() => {
    if (!latestData && CMEData?.length > 0) {
      const latestEvent = CMEData.reduce((latest, current) =>
        new Date(current.time) > new Date(latest.time) ? current : latest
      );
      setLatestData(latestEvent);
    }
  }, [CMEData]);

  useEffect(() => {
    if (CMEData?.length > 0 || FLRData?.length > 0) {
      const now = new Date();
      let nextCME = null;
      let nextFLR = null;

      if (CMEData?.length > 0) {
        const futureCME = CMEData.filter((e) => new Date(e.time) > now);
        if (futureCME.length > 0) {
          nextCME = futureCME.reduce((soonest, current) =>
            new Date(current.time) < new Date(soonest.time) ? current : soonest
          );
        }
      }

      if (FLRData?.length > 0) {
        const futureFLR = FLRData.filter((e) => new Date(e.startDate) > now);
        if (futureFLR.length > 0) {
          nextFLR = futureFLR.reduce((soonest, current) =>
            new Date(current.startDate) < new Date(soonest.startDate)
              ? current
              : soonest
          );
        }
      }

      const combined = [];
      if (nextCME) combined.push(nextCME);
      if (nextFLR) combined.push(nextFLR);

      setUpcomingData(combined.length > 0 ? combined : []);
    }
  }, [CMEData, FLRData]);

  const lat =
    Number(route?.params?.latitude) || Number(latestData?.latitude) || 0;

  const lon =
    Number(route?.params?.longitude) || Number(latestData?.longitude) || 0;

  const cmeRegion = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          color:
            latestData?.name === "Coronal Mass Ejection"
              ? colors.violet
              : colors.yellow,
          name:
            latestData?.name === "Coronal Mass Ejection"
              ? `CME ${formatToDDMMYYYY(latestData?.startDate)}`
              : `FLR ${formatToDDMMYYYY(latestData?.startDate)}`,
        },
        geometry: {
          type: "Point",
          coordinates: [lon, lat],
        },
      },
    ],
  };

  return (
    <Container style={{ paddingHorizontal: horizontalScale(20) }}>
      <View style={styles.rowViewStyle}>
        <Text style={styles.header}>Global Map</Text>
        <GlobalIcon />
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL="mapbox://styles/mapbox/satellite-streets-v12"
          projection="globe"
          logoEnabled={false}
          compassEnabled={false}
          attributionEnabled={false}
          scaleBarEnabled={false}
        >
          <MapboxGL.Camera
            zoomLevel={0.9}
            centerCoordinate={[lon, lat]}
            animationMode="flyTo"
            animationDuration={0}
          />

          <MapboxGL.ShapeSource id="cmeSource" shape={cmeRegion}>
            <MapboxGL.CircleLayer
              id="cmeLayer"
              style={{
                circleRadius: 60,
                circleColor: ["get", "color"],
                circleOpacity: 0.2,
                circleStrokeColor:
                  latestData?.name === "Coronal Mass Ejection"
                    ? colors.violet
                    : colors.yellow,
                circleStrokeWidth: 2,
              }}
            />
            <MapboxGL.SymbolLayer
              id="cmeLabel"
              style={{
                textField: ["get", "name"],
                textSize: fontScale(12),
                textColor:
                  latestData?.name === "Coronal Mass Ejection"
                    ? colors.violet
                    : colors.yellow,
                textAnchor: "top-left",
                textOffset: [0, 2],
              }}
            />
          </MapboxGL.ShapeSource>
        </MapboxGL.MapView>

        <Text style={styles.textStyle}>Upcoming Events</Text>

        <FlatList
          data={upcomingData}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <HomeSubCard
              data={item}
              onPress={() =>
                navigation.navigate(NavigationTypes.EVENT_DETAILS, {
                  data: item,
                })
              }
            />
          )}
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
    alignSelf: "center",
  },
  textStyle: {
    fontSize: fontScale(18),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
    paddingVertical: verticalScale(15),
  },
  rowViewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: verticalScale(20),
  },
  header: {
    fontSize: fontScale(20),
    fontFamily: fontConstants.MULISH_BOLD,
    color: colors.white,
  },
});
