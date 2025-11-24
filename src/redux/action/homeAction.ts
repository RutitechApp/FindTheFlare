import { apiConst, GET } from "../../helpers/apiConstants";
import makeAPIRequest from "../../helpers/axiosRequests";
import {
  GET_CME_DATA_SUCCESS,
  GET_FLR_DATA_SUCCESS,
  GET_GST_DATA_SUCCESS,
} from "./type";
import { Dispatch } from "redux";

interface CMEApiResponse {
  data: any[];
  status: string;
}

interface GetCMEPayload {
  data: {
    startDate: string;
    endDate: string;
  };
  onSuccess: (data: CMEApiResponse) => void;
  onFail: (error: unknown) => void;
}

export const getCMEAction =
  (payload: GetCMEPayload) => async (dispatch: Dispatch) => {
    try {
      const res = await makeAPIRequest<CMEApiResponse>(
        GET,
        apiConst.CME(payload?.data?.startDate, payload?.data?.endDate)
      );

      if (res?.response) {
        payload?.onSuccess(res?.response?.data);

        dispatch({
          type: GET_CME_DATA_SUCCESS,
          payload: res?.response?.data,
        });
      } else {
      }
    } catch (error) {}
  };

interface FLRApiResponse {
  data: any[];
  status: string;
}

interface GetFLRPayload {
  data: {
    startDate: string;
    endDate: string;
  };
  onSuccess: (data: FLRApiResponse) => void;
  onFail: (error: unknown) => void;
}

export const getFLRAction =
  (payload: GetFLRPayload) => async (dispatch: Dispatch) => {
    try {
      const res = await makeAPIRequest<FLRApiResponse>(
        GET,
        apiConst.FLR(payload.data.startDate, payload.data.endDate)
      );

      if (res.response) {
        payload.onSuccess(res.response.data);

        dispatch({
          type: GET_FLR_DATA_SUCCESS,
          payload: res.response.data,
        });
      } else {
        payload.onFail(res.error);
      }
    } catch (error) {
      payload.onFail(error);
    }
  };

interface GSTApiResponse {
  data: any[];
  status: string;
}

interface GetGSTPayload {
  data: {
    startDate: string;
    endDate: string;
  };
  onSuccess: (data: GSTApiResponse) => void;
  onFail: (error: unknown) => void;
}

export const getGSTAction =
  (payload: GetGSTPayload) => async (dispatch: Dispatch) => {
    try {
      const res = await makeAPIRequest<GSTApiResponse>(
        GET,
        apiConst.GST(payload.data.startDate, payload.data.endDate)
      );

      if (res.response) {
        payload.onSuccess(res.response.data);

        dispatch({
          type: GET_GST_DATA_SUCCESS,
          payload: res.response.data,
        });
      } else {
        payload.onFail(res.error);
      }
    } catch (error) {
      payload.onFail(error);
    }
  };
