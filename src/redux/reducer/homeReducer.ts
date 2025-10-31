import { GET_CME_DATA_FAILED, GET_CME_DATA_SUCCESS } from '../action/type';

const initialState = {
  CMEData: [],
  CMEError: null,
};

const homeReducer = (
  state = initialState,
  action: { type: string; payload: any },
) => {
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
        CMEData: action.payload,
        CMEError: null,
      };

    default:
      return state;
  }
};

export default homeReducer;
