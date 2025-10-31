import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { fontScale, horizontalScale } from "../constants/responsive";
import fontConstants from "../constants/fontConstants";
import colors from "../constants/colors";

interface EventCardData {
  id?: number;
  image?: ReactNode;
  title?: string;
  value?: string;
}

interface EventCardProps {
  data?: EventCardData;
}

const EventCard: React.FC<EventCardProps> = ({ data }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {data?.image}
        <Text
          style={{
            fontSize: fontScale(12),
            fontFamily: fontConstants.MULISH_BOLD,
            color: colors.grey,
            marginLeft: horizontalScale(5),
          }}
        >
          {data?.title}
        </Text>
      </View>
      <View style={{ maxWidth: "50%" }}>
        <Text
          style={{
            fontSize: fontScale(12),
            fontFamily: fontConstants.MULISH_BOLD,
            color: colors.white,
            marginLeft: horizontalScale(5),
          }}
        >
          {data?.value}
        </Text>
      </View>
    </View>
  );
};

export default EventCard;
