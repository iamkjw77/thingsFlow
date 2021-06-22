import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getIssues } from '../../modules/issues/issuesSlice';
import IssueList from './../../components/IssueList/index';

const Home = () => {
  const { loading, data, error } = useSelector(state => state.issue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIssues());
  }, [dispatch]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;

  return (
    <Container>
      <IssueList issues={data} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default Home;
