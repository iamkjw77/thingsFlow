import styled from 'styled-components';
import IssueTitle from './../IssueTitle/index';

const IssueDetailItem = ({ issue }) => {
  return (
    <StyledIssueDetailItem>
      <div className="issue-header">
        <img src={issue.user.avatar_url} alt="프로필 이미지" />
        <IssueTitle issue={issue} />
      </div>
      <div className="issue-body">{issue.body}</div>
    </StyledIssueDetailItem>
  );
};

const StyledIssueDetailItem = styled.div`
  max-width: 600px;
  margin: 0 auto;

  .issue-header {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid gray;

    img {
      max-width: 100px;
      margin-right: 10px;
    }
  }

  .issue-body {
    margin-top: 30px;
  }
`;

export default IssueDetailItem;
