import { apiConst, GET } from '../../helpers/apiConstants';
import makeAPIRequest from '../../helpers/axiosRequests';
import { GET_CME_DATA_SUCCESS } from './type';

export const getCMEAction = (payload: any) => {
  return (dispatch: any) => {
    makeAPIRequest(
      GET,
      apiConst.CME(
        payload?.data?.startDate,
        payload?.data?.endDate,
        payload?.data?.apiKey,
      ),
      undefined,
      null,
    )
      .then(async (res: any) => {
        payload.onSuccess(res?.data);
        dispatch({
          type: GET_CME_DATA_SUCCESS,
          payload: res?.data?.data,
        });
      })
      .catch(err => {
        payload.onFail(err);
      });
  };
};
