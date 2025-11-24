import {
  GET_CME_DATA_FAILED,
  GET_CME_DATA_SUCCESS,
  GET_FLR_DATA_FAILED,
  GET_FLR_DATA_SUCCESS,
  GET_GST_DATA_FAILED,
  GET_GST_DATA_SUCCESS,
} from "../action/type";

interface HomeState {
  CMEData: any[];
  CMEError: string | null;
  FLRData: any[];
  FLRError: string | null;
  GSTData: any[];
  GSTError: string | null;
}

interface GetCMESuccessAction {
  type: typeof GET_CME_DATA_SUCCESS;
  payload: any[];
}

interface GetCMEFailedAction {
  type: typeof GET_CME_DATA_FAILED;
  payload: string;
}

type HomeAction =
  | { type: typeof GET_CME_DATA_SUCCESS; payload: any[] }
  | { type: typeof GET_CME_DATA_FAILED; payload: string }
  | { type: typeof GET_FLR_DATA_SUCCESS; payload: any[] }
  | { type: typeof GET_FLR_DATA_FAILED; payload: string }
  | { type: typeof GET_GST_DATA_SUCCESS; payload: any[] }
  | { type: typeof GET_GST_DATA_FAILED; payload: string };

const initialState: HomeState = {
  CMEData: [],
  CMEError: null,
  FLRData: [],
  FLRError: null,
  GSTData: [],
  GSTError: null,
};

const homeReducer = (
  state: HomeState = initialState,
  action: HomeAction
): HomeState => {
  switch (action.type) {
    case GET_CME_DATA_SUCCESS:
      return {
        ...state,
        CMEData: action.payload,
        CMEError: null,
      };

    case GET_CME_DATA_FAILED:
      return {
        ...state,
        CMEData: [],
        CMEError: action.payload,
      };
    case GET_FLR_DATA_SUCCESS:
      return { ...state, FLRData: action.payload, FLRError: null };
    case GET_FLR_DATA_FAILED:
      return { ...state, FLRData: [], FLRError: action.payload };

    case GET_GST_DATA_SUCCESS:
      return { ...state, GSTData: action.payload, GSTError: null };
    case GET_GST_DATA_FAILED:
      return { ...state, GSTData: [], GSTError: action.payload };

    default:
      return state;
  }
};

export default homeReducer;
