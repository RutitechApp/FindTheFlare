import { GET_CME_DATA_FAILED, GET_CME_DATA_SUCCESS } from "../action/type";

interface CMEItem {
  id: string;
  name: string;
  date: string;
}

interface HomeState {
  CMEData: CMEItem[];
  CMEError: string | null;
}

interface GetCMESuccessAction {
  type: typeof GET_CME_DATA_SUCCESS;
  payload: CMEItem[];
}

interface GetCMEFailedAction {
  type: typeof GET_CME_DATA_FAILED;
  payload: string;
}

type HomeAction = GetCMESuccessAction | GetCMEFailedAction;

const initialState: HomeState = {
  CMEData: [],
  CMEError: null,
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

    default:
      return state;
  }
};

export default homeReducer;
