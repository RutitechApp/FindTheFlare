import {
  GeoMagneticStormIcon,
  MeteorIcon,
  SolarFlareIcon,
} from "../assets/icons/HomeIcons";
import {
  EmailIcon,
  PushNotificationIcon,
  SmsIcon,
  WeeklyIcon,
} from "../assets/icons/SettingIcons";
import {
  Calendaricon,
  HistoryIcon,
  RecentIcon,
  WhiteCalendarIcon,
  WhiteHistoryIcon,
  WhiteRecentIcon,
} from "../assets/icons/TimeLineIcons";
import { horizontalScale, verticalScale } from "../constants/responsive";

export const upcomingData = [
  {
    id: 1,
    title: "Solar Flare",
    type: "Class, Ml.3",
    time: "2d to go",
    description:
      "Additional brightening on the SW limb, but brightest signature in SDO AIA 131 associated with AR 14207.",
    image: (
      <SolarFlareIcon
        width={horizontalScale(38)}
        height={horizontalScale(38)}
      />
    ),
    color: "#C597FF",
  },
  {
    id: 2,
    title: "Meteor Shower",
    type: "Class, Ml.3",
    time: "5d to go",
    description:
      "Faint CME seen to the East in SOHO LASCO C2 only. Source is uncertain; there is no clear source in available UV imagery of the disk.",
    image: (
      <MeteorIcon width={horizontalScale(38)} height={horizontalScale(38)} />
    ),
    color: "#FFE000",
  },
  {
    id: 3,
    title: "Geo Magnetic Storm",
    type: "Class, Ml.3",
    time: "1d to go",
    description:
      "Moderate solar flare detected from active region AR3451. Minor radio blackouts possible.",
    image: (
      <GeoMagneticStormIcon
        width={horizontalScale(38)}
        height={horizontalScale(38)}
      />
    ),
    color: "#31BDFF",
  },
];

export const recentData = [
  {
    id: 1,
    title: "Solar Flare",
    type: "Class, Ml.3",
    time: "2d to go",

    image: (
      <SolarFlareIcon
        width={horizontalScale(25)}
        height={horizontalScale(25)}
      />
    ),
    color: "#C597FF",
  },
  {
    id: 2,
    title: "Meteor Shower",
    type: "Class, Ml.3",
    time: "5d to go",
    image: (
      <MeteorIcon width={horizontalScale(25)} height={horizontalScale(25)} />
    ),
    color: "#FFE000",
  },
  {
    id: 3,
    title: "Geo Magnetic Storm",
    type: "Class, Ml.3",
    time: "1d to go",
    image: (
      <GeoMagneticStormIcon
        width={horizontalScale(25)}
        height={horizontalScale(25)}
      />
    ),
    color: "#31BDFF",
  },
];

export const SettingData = [
  {
    id: 1,
    title: "Push Notification",
    image: (
      <PushNotificationIcon
        width={verticalScale(25)}
        height={verticalScale(25)}
      />
    ),
  },
  {
    id: 2,
    title: "Email Notification",
    image: <EmailIcon width={verticalScale(25)} height={verticalScale(25)} />,
  },
  {
    id: 3,
    title: "SMS Notification",
    image: <SmsIcon width={verticalScale(25)} height={verticalScale(25)} />,
  },
  {
    id: 4,
    title: "Weekly Newsletter",
    image: <WeeklyIcon width={verticalScale(25)} height={verticalScale(25)} />,
  },
];

export const tabData = [
  {
    id: 1,
    image: <RecentIcon />,
    activeImage: <WhiteRecentIcon />,
    title: "Recent",
  },
  {
    id: 2,
    image: <Calendaricon />,
    activeImage: <WhiteCalendarIcon />,
    title: "Today",
  },
  {
    id: 3,
    image: <HistoryIcon />,
    activeImage: <WhiteHistoryIcon />,
    title: "History",
  },
];
export const historyTabData = [
  {
    id: 1,
    title: "CME",
  },
  {
    id: 2,
    title: "FLR",
  },
  {
    id: 3,
    title: "GST",
  },
];

export const timeLineData = [
  {
    id: 1,
    title: "Today",
  },
  {
    id: 2,
    title: "Yesterday",
  },
  {
    id: 3,
    title: "3 Days Ago",
  },
  {
    id: 4,
    title: "1 Week Ago",
  },
];

export const timeLineCardData = [
  {
    id: 1,
    title: "Meteor Shower",
    intensity: "MODERATE",
    type: "CME",
    time: "2h to go",
    desc: "Faint CME seen to the East in SOHO LASCO C2 only. Source is uncertain; there is no clear source in available UV imagery of the disk.",
    duration: "6 hours",
    impact: "GeoMagnetic Activity",
  },
  {
    id: 2,
    title: "X2.3 Solar Flare",
    intensity: "SEVERE",
    type: "SF",
    time: "2h to go",
    desc: "Additional brightening on the SW limb, but brightest signature in SDO AIA 131 associated with AR 14207.",
    duration: "6 hours",
    impact: "Radio Blackouts",
  },
  {
    id: 3,
    title: "Geomagnetic Storm",
    intensity: "STRONG",
    type: "GST",
    time: "2h to go",
    desc: "Moderate solar flare detected from active region AR3451. Minor radio blackouts possible.",
    duration: "6 hours",
    impact: "GeoMagnetic Activity",
  },
];
