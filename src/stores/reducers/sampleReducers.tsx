import { SAMPLE_ACTION_TYPE } from "../../constants/ActionType";

const initialState = {
  payload: null,
};

export default (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SAMPLE_ACTION_TYPE: {
      return {
        ...state,
        payload: payload,
      };
    }
    default: {
      return state;
    }
  }
};
