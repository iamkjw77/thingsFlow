import styled from 'styled-components';

const IssueTitle = ({ issue }) => {
  return (
    <StyledissueTitle>
      <div className="issue-info">
        <div className="issue-title">
          #{issue.number} {issue.title}
        </div>
        <div>
          작성자: {issue.user.login}, 작성일: {issue.created_at}
        </div>
      </div>
      <div className="issue-comments">코멘트: {issue.comments}</div>
    </StyledissueTitle>
  );
};

const StyledissueTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .issue-info {
    max-width: 480px;

    .issue-title {
      margin-bottom: 10px;
    }
  }
`;

export default IssueTitle;
