import {
  SAMPLE_ACTION_TYPE,
  SAMPLE_ACTION_SUCCESS,
  SAMPLE_ACTION_FAIL,
} from "../../constants/ActionType";

export const sampleAction = (payload: any) => {
  return {
    type: SAMPLE_ACTION_TYPE,
    payload: payload,
  };
};

export const sampleActionSuccess = (response : any) => {
  return {
    type: SAMPLE_ACTION_SUCCESS,
    payload: response
  };
};

export const sampleActionFail = (error : any) => {
  return {
    type: SAMPLE_ACTION_FAIL,
    payload: error
  };
};
