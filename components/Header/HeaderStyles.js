import styled from 'styled-components';

export const StyledHeader = styled.header`
  @media ${props => props.theme.breakpointsUp.lg} {
    display: none;
  }
`;

export const HeaderLogo = styled.div`
  min-height: 8.4rem;
  width: 10.2rem;
  display: flex;
  align-items: center;

  @media ${props => props.theme.breakpointsUp.md} {
    width: 15.9rem;
  }

  @media ${props => props.theme.breakpointsUp.lg} {
    margin-left: 16.8rem;
  }
`;

export const HeaderHeroImage = styled.div`
  @media ${props => props.theme.breakpointsUp.md} {
    display: none;
  }
`;
