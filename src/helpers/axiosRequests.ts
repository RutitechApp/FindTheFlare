import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface APIResult<T> {
  response?: AxiosResponse<T>;
  error?: unknown;
}

export const makeAPIRequest = async <T = unknown>(
  method: AxiosRequestConfig["method"],
  url: string,
  data?: unknown,
  params?: Record<string, unknown>
): Promise<APIResult<T>> => {
  try {
    const options: AxiosRequestConfig = {
      method,
      url,
      data,
      params,
    };
    const response = await axios(options);

    if (response.status === 200 || response.status === 201) {
      return { response };
    }

    return { error: response };
  } catch (error) {
    return { error };
  }
};

export default makeAPIRequest;
