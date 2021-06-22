import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIssueByIssueNumber } from '../../modules/issues/issuesSlice';
import IssueDetailItem from './../../components/IssueDetailItem/index';

const IssueDetail = () => {
  const { loading, selectedData, error } = useSelector(state => state.issue);
  const dispatch = useDispatch();
  const { issueNumber } = useParams();

  useEffect(() => {
    dispatch(getIssueByIssueNumber(issueNumber));
  }, [dispatch, issueNumber]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!selectedData) return null;

  return <IssueDetailItem issue={selectedData} />;
};

export default IssueDetail;
