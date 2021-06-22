import { createSlice } from '@reduxjs/toolkit';

// 초기값
const initialState = {
  loading: false,
  data: null,
  selectedData: null,
  error: null,
};

const issuessSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    // 전체 조회
    getIssues(state) {
      state.loading = true;
    },
    getIssuesSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    getIssuesError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // 단일 조회
    getIssueByIssueNumber(state) {
      state.loading = true;
    },
    getIssueByIssueNumberSuccess(state, action) {
      state.loading = false;
      state.selectedData = action.payload;
    },
    getIssueByIssueNumberError(state, action) {
      state.loading = false;
      state.selectedData = action.payload;
    },
  },
});

const { reducer, actions } = issuessSlice;
export const {
  getIssues,
  getIssuesSuccess,
  getIssuesError,
  getIssueByIssueNumber,
  getIssueByIssueNumberSuccess,
  getIssueByIssueNumberError,
} = actions;

export default reducer;
