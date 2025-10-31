import { apiConst, GET } from "../../helpers/apiConstants";
import makeAPIRequest from "../../helpers/axiosRequests";
import { GET_CME_DATA_SUCCESS } from "./type";
import { Dispatch } from "redux";
import { AxiosResponse } from "axios";

interface CMEData {
  id: string;
  name: string;
  date: string;
}

interface CMEApiResponse {
  data: CMEData[];
  status: string;
}

interface GetCMEPayload {
  data: {
    startDate: string;
    endDate: string;
    apiKey: string;
  };
  onSuccess: (data: CMEApiResponse) => void;
  onFail: (error: unknown) => void;
}

export const getCMEAction =
  (payload: GetCMEPayload) => async (dispatch: Dispatch) => {
    try {
      const res: AxiosResponse<CMEApiResponse> =
        await makeAPIRequest<CMEApiResponse>(
          GET,
          apiConst.CME(
            payload.data.startDate,
            payload.data.endDate,
            payload.data.apiKey
          )
        );

      payload.onSuccess(res.data);

      dispatch({
        type: GET_CME_DATA_SUCCESS,
        payload: res.data.data,
      });
    } catch (error) {
      payload.onFail(error);
    }
  };
