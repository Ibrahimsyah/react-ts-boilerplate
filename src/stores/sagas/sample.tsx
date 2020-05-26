import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { sampleActionSuccess, sampleActionFail } from "../actions/sample";
import api from "../../providers/sample";
import { SAMPLE_ACTION_TYPE } from "../../constants/ActionType";

const sampleAsyncOperation = async (endpoint: String, data: Object) => {
  api
    .samplePostRequest(endpoint, data)
    .then((res) => res)
    .catch((error) => error);
};

function* sampleAsync(actionPayload: any) {
  const { payload } = actionPayload;
  try {
    const response = yield call(
      sampleAsyncOperation,
      payload.endpoint,
      payload.data
    );
    yield put(sampleActionSuccess(response));
  } catch (error) {
    yield put(sampleActionFail(error));
  }
}

export function* callSampleAsync() {
  yield takeEvery(SAMPLE_ACTION_TYPE, sampleAsync);
}

export default function* rootSaga() {
  yield all([fork(callSampleAsync)]);
}
