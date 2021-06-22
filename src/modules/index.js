import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { issuesSaga } from './issues/saga';
import issueReducer from './issues/issuesSlice';

export function* rootSaga() {
  yield all([issuesSaga()]);
}

const rootReducers = combineReducers({
  issue: issueReducer,
});

export default rootReducers;
