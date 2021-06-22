import styled from 'styled-components';

const AdBanner = () => {
  const handleClick = () => {
    window.open('https://thingsflow.com/ko/home', '_blank');
  };

  return (
    <StyledadBanner>
      <div onClick={handleClick}>
        <img src="https://placehold.it/500x100?text=ad" alt="광고 이미지" />
      </div>
    </StyledadBanner>
  );
};

const StyledadBanner = styled.li`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  text-align: center;

  div {
    cursor: pointer;
  }
`;

export default AdBanner;
