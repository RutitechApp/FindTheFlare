export function getTimeToImpact(startDate: string, impactTime: string) {
  const start = new Date(startDate);
  const impact = new Date(impactTime);

  const diffMs = impact.getTime() - start.getTime();
  if (diffMs < 0) return "Invalid time range";

  let remaining = diffMs / 1000;

  const days = Math.floor(remaining / (60 * 60 * 24));
  remaining %= 60 * 60 * 24;

  const hours = Math.floor(remaining / (60 * 60));
  remaining %= 60 * 60;

  const minutes = Math.floor(remaining / 60);
  const seconds = Math.floor(remaining % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export function formatToDDMMYYYY(dateString: string) {
  const date = new Date(dateString);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export function getTimeFromISO(isoDate: string) {
  const date = new Date(isoDate);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function getDuration(startDate: string, submissionDate: string) {
  const start = new Date(startDate);
  const end = new Date(submissionDate);

  const diffMs = end - start;
  if (diffMs < 0) return "Invalid Time Range";

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${hours}h ${mins}m`;
}

export const parseLocation = (loc) => {
  if (!loc) return { lat: null, long: null };

  const regex = /([NS])(\d+)([EW])(\d+)/;
  const match = loc.match(regex);

  if (!match) return { lat: null, long: null };

  const [, latDir, latVal, longDir, longVal] = match;

  const latitude = (latDir === "N" ? 1 : -1) * Number(latVal);
  const longitude = (longDir === "E" ? 1 : -1) * Number(longVal);

  return { latitude, longitude };
};

export function parseTimeString(str: string) {
  if (!str) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const regex = /(\d+)d (\d+)h (\d+)m (\d+)s/;

  const match = str.match(regex);

  if (!match) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Number(match[1]),
    hours: Number(match[2]),
    minutes: Number(match[3]),
    seconds: Number(match[4]),
  };
}

export const getMonthRange = (year: number, month: number) => {
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  return {
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
  };
};

// -----------------------------------------
// File: src/utils/mergeSpaceWeatherData.ts
// -----------------------------------------

import moment from "moment";

export const mergeSpaceWeatherData = (
  CMEData: any[],
  FLRData: any[],
  GSTData: any[]
) => {
  const getCategory = (startDate: string) => {
    const date = moment(startDate);
    const today = moment();

    if (date.isSame(today, "day")) return "today";
    if (date.isSame(today.clone().subtract(1, "day"), "day")) return "recent";

    return "history";
  };

  const getTimeRange = (startDate: string) => {
    const date = moment(startDate);
    const today = moment();
    const diff = today.diff(date, "days");

    if (diff === 0) return "today";
    if (diff === 1) return "yesterday";
    if (diff <= 3) return "3days ago";
    if (diff <= 7) return "1 week ago";

    return "older";
  };

  const groupByCategoryAndTime = (data: any[]) => {
    const map: any = {};

    data.forEach((item) => {
      const cat = getCategory(item.startDate);
      const time = getTimeRange(item.startDate);

      if (!map[cat]) map[cat] = {};
      if (!map[cat][time]) map[cat][time] = [];

      map[cat][time].push(item);
    });

    return map;
  };

  const CMEMap = groupByCategoryAndTime(CMEData);
  const FLRMap = groupByCategoryAndTime(FLRData);
  const GSTMap = groupByCategoryAndTime(GSTData);

  const categories = ["recent", "today", "history"];
  const times = ["today", "yesterday", "3days ago", "1 week ago"];

  const combinations: [string, string][] = [];

  categories.forEach((cat) => {
    times.forEach((time) => {
      combinations.push([cat, time]);
    });
  });

  const finalMerged = combinations.map(([cat, time]) => ({
    key: `${cat}-${time}`,
    category: cat,
    timeRange: time,
    CME: CMEMap[cat]?.[time] || [],
    FLR: FLRMap[cat]?.[time] || [],
    GST: GSTMap[cat]?.[time] || [],
  }));

  return finalMerged;
};
