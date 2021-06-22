import { call, put, takeEvery } from 'redux-saga/effects';
import * as issuesAPI from '../../apis/issues';
import {
  getIssueByIssueNumber,
  getIssueByIssueNumberError,
  getIssueByIssueNumberSuccess,
  getIssues,
  getIssuesError,
  getIssuesSuccess,
} from './issuesSlice';

// 이슈 전체 조회
function* getIssuesSaga(action) {
  try {
    const issues = yield call(issuesAPI.getIssues, action.payload);
    yield put(getIssuesSuccess(issues));
  } catch (error) {
    yield put(getIssuesError(error));
  }
}

// 이슈 단일 조회
function* getIssueByIssueNumberSaga(action) {
  try {
    const issue = yield call(issuesAPI.getIssueByIssueNumber, action.payload);
    yield put(getIssueByIssueNumberSuccess(issue));
  } catch (error) {
    yield put(getIssueByIssueNumberError(error));
  }
}

// 모니터링 함수
export function* issuesSaga() {
  yield takeEvery(getIssues.type, getIssuesSaga);
  yield takeEvery(getIssueByIssueNumber.type, getIssueByIssueNumberSaga);
}
