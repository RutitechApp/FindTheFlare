export const BASE_URL = 'https://api.nasa.gov';

const GET = 'get';
const POST = 'post';
const PUT = 'put';
const PATCH = 'patch';
const DELETE = 'delete';

const apiConst = {
  CME: (startDate?: string, endDate?: string, apiKey?: string) =>
    `${BASE_URL}/DONKI/CME?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`,
  GST: (startDate?: string, endDate?: string, apiKey?: string) =>
    `${BASE_URL}/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`,
  FLR: (startDate?: string, endDate?: string, apiKey?: string) =>
    `${BASE_URL}/DONKI/FLR?startDate=${startDate}&endDate=${endDate}&api_key=${apiKey}`,
};

export { GET, POST, PUT, DELETE, PATCH, apiConst };
