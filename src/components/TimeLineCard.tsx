import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { RecentIcon, Timeline } from '../assets/icons/TimeLineIcons';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../constants/responsive';
import TextCover from './TextCover';
import colors from '../constants/colors';
import { ForwardIcon } from '../assets/icons/HomeIcons';
import fontConstants from '../constants/fontConstants';
import { ImpactIcon } from '../assets/icons/EventIcons';

interface TimeLineCardProps {
  data?: any;
  onPress?: () => void;
}

const TimeLineCard: React.FC<TimeLineCardProps> = ({ data, onPress }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Timeline height={verticalScale(132)} width={horizontalScale(10)} />
      <Pressable
        style={{
          backgroundColor: colors.white10Opacity,
          flex: 1,
          padding: horizontalScale(20),
          borderRadius: horizontalScale(20),
          marginLeft: horizontalScale(30),
        }}
        onPress={onPress}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: horizontalScale(6),
            }}
          >
            <TextCover text={data?.type} />
            <TextCover text={data?.intensity} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: horizontalScale(6),
              maxWidth: '40%',
            }}
          >
            <Text
              style={{
                fontSize: fontScale(12),
                fontFamily: fontConstants.MULISH_BOLD,
                color: colors.white,
              }}
            >
              {data?.time}
            </Text>
            <ForwardIcon
              height={horizontalScale(16)}
              width={horizontalScale(16)}
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: fontScale(16),
            fontFamily: fontConstants.MULISH_BOLD,
            color: colors.white,
            marginTop: verticalScale(12),
          }}
        >
          {data?.title}
        </Text>
        <Text
          style={{
            fontSize: fontScale(12),
            fontFamily: fontConstants.MULISH_BOLD,
            color: colors.white,
            marginTop: verticalScale(6),
          }}
        >
          {data?.desc}
        </Text>
        <View
          style={{
            marginTop: verticalScale(12),
            flexDirection: 'row',
            gap: horizontalScale(10),
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <RecentIcon
              width={horizontalScale(20)}
              height={horizontalScale(20)}
            />
            <View style={{ marginLeft: horizontalScale(5) }}>
              <Text
                style={{
                  fontSize: fontScale(11),
                  fontFamily: fontConstants.MULISH_BOLD,
                  color: colors.grey,
                }}
              >
                Duration
              </Text>
              <Text
                style={{
                  fontSize: fontScale(12),
                  fontFamily: fontConstants.MULISH_BOLD,
                  color: colors.white,
                }}
              >
                {data?.duration}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <ImpactIcon
              width={horizontalScale(20)}
              height={horizontalScale(20)}
            />
            <View style={{ marginLeft: horizontalScale(5) }}>
              <Text
                style={{
                  fontSize: fontScale(11),
                  fontFamily: fontConstants.MULISH_BOLD,
                  color: colors.grey,
                }}
              >
                Impact
              </Text>
              <Text
                style={{
                  fontSize: fontScale(12),
                  fontFamily: fontConstants.MULISH_BOLD,
                  color: colors.white,
                }}
              >
                {data?.impact}
              </Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default TimeLineCard;
