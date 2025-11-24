export const BASE_URL = "http://192.168.0.100:3000";

const GET = "get";
const POST = "post";
const PUT = "put";
const PATCH = "patch";
const DELETE = "delete";

const apiConst = {
  CME: (startDate?: string, endDate?: string) =>
    `${BASE_URL}/api/CME?start_date=${startDate}&end_date=${endDate}`,
  FLR: (startDate?: string, endDate?: string) =>
    `${BASE_URL}/api/FLR?start_date=${startDate}&end_date=${endDate}`,
  GST: (startDate?: string, endDate?: string) =>
    `${BASE_URL}/api/GST?start_date=${startDate}&end_date=${endDate}`,
};

export { GET, POST, PUT, DELETE, PATCH, apiConst };
