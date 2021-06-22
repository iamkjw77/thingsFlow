import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Angular/Angular-cli</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export default Header;
