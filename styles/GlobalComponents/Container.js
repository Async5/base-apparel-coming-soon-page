import styled from 'styled-components';

const Container = styled.div`
  max-width: 144rem;
  width: calc(100% - 3.2rem * 2);
  margin: 0 auto;

  @media ${props => props.theme.breakpointsUp.lg} {
    width: unset;
    margin: unset;
  }
`;

export default Container;
