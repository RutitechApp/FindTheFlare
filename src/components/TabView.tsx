import React, { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import colors from "../constants/colors";
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from "../constants/responsive";
import fontConstants from "../constants/fontConstants";

interface TabViewData {
  id?: number;
  image?: ReactNode;
  activeImage?: ReactNode;
  title?: string;
}

interface TabViewProps {
  activeIndex?: number;
  tabData?: TabViewData[];
  onPress?: (index: number) => void;
}

const TabView: React.FC<TabViewProps> = ({
  tabData = [],
  activeIndex,
  onPress,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.white10Opacity,
        padding: verticalScale(8),
        borderRadius: horizontalScale(10),
        marginTop: verticalScale(20),
      }}
    >
      {tabData?.map((item, _index) => {
        return (
          <Pressable
            key={_index}
            style={{
              flexDirection: "row",
              backgroundColor:
                activeIndex === _index ? colors.darkOrange : "transparent",
              paddingVertical: verticalScale(7),
              paddingHorizontal: horizontalScale(15),
              borderRadius: horizontalScale(8),
            }}
            onPress={() => onPress?.(_index)}
          >
            {activeIndex === _index ? item.activeImage : item.image}
            <Text
              style={{
                color: activeIndex === _index ? colors.white : colors.grey,
                fontSize: fontScale(14),
                fontFamily: fontConstants.MULISH_BOLD,
                marginLeft: horizontalScale(4),
              }}
            >
              {item?.title}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabView;
