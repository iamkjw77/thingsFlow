import axios from 'axios';

// 이슈 전체 조회
export const getIssues = async () => {
  const response = await axios.get(
    'https://api.github.com/repos/angular/angular-cli/issues?state=open&sort=comments',
  );
  return response.data;
};

// 이슈 단일 조회
export const getIssueByIssueNumber = async issue_number => {
  const response = await axios.get(
    `https://api.github.com/repos/angular/angular-cli/issues/${issue_number}`,
  );
  return response.data;
};
