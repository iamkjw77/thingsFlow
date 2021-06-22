import { Link } from 'react-router-dom';
import styled from 'styled-components';
import IssueTitle from './../IssueTitle/index';
import AdBanner from './../AdBanner/index';

const IssueList = ({ issues }) => {
  return (
    <ul>
      {issues.map((issue, idx) => (
        <div key={issue.id}>
          <StyledIssueList>
            <Link to={`/${issue.number}`}>
              <IssueTitle issue={issue} />
            </Link>
          </StyledIssueList>
          {idx === 5 && <AdBanner />}
        </div>
      ))}
    </ul>
  );
};

const StyledIssueList = styled.li`
  padding: 30px 0;
  border-bottom: 1px solid gray;
`;

export default IssueList;
