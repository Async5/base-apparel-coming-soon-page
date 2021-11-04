import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 0rem 0rem 9.3rem 0rem;

  @media ${props => props.theme.breakpointsUp.lg} {
    display: grid;
    grid-template-columns: 54% 46%;
    height: 80rem;
    padding: 0;
  }
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpointsUp.lg} {
    background: url('/bg-pattern-desktop.svg') center center/cover;
  }
`;

export const MainLogo = styled.div`
  width: 16rem;
  height: 3.4rem;
  margin-top: 6.4rem;
  margin-bottom: 13.4rem;

  @media ${props => props.theme.breakpointsDown.lg} {
    display: none;
  }
`;

export const MainImage = styled.div`
  order: 2;
  position: relative;
  @media ${props => props.theme.breakpointsDown.md} {
    display: none;
  }

  @media ${props => props.theme.breakpointsDown.lg} {
    height: 50rem;
  }
`;

export const MainHeadline = styled.h1`
  font-size: 3.8rem;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1rem;
  text-align: center;
  margin: 0;
  margin-top: 6.3rem;

  color: ${props => props.theme.colors.darkGrayishRed};

  span {
    font-weight: 300;
    color: ${props => props.theme.colors.desaturatedRed};
  }

  @media ${props => props.theme.breakpointsUp.md} {
    font-size: 7rem;
    line-height: 110%;
    letter-spacing: 0.8rem;
  }

  @media ${props => props.theme.breakpointsUp.lg} {
    text-align: left;
    margin: 0;
    margin-bottom: 1.9rem;
  }
`;

export const MainParagraph = styled.p`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.desaturatedRed};
  font-weight: 400;
  line-height: 160%;
  text-align: center;
  max-width: 43rem;
  margin: 0 auto;
  margin-top: 1.7rem;

  @media ${props => props.theme.breakpointsUp.md} {
    font-size: 1.6rem;
    line-height: 175%;
  }

  @media ${props => props.theme.breakpointsUp.lg} {
    margin: 0;
    text-align: left;
    margin-top: 1.7rem;
  }
`;

export const MainForm = styled.form`
  width: 100%;
  max-width: 44.6rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  margin-top: 3.4rem;

  @media ${props => props.theme.breakpointsUp.lg} {
    margin: 0;
    margin-top: 4rem;
  }
`;

export const MainFormInput = styled.input`
  flex: 1;
  background: none;
  border-radius: 2.4rem;
  height: 4.8rem;
  padding: 0rem 0rem 0rem 2.3rem;
  border: ${props =>
    props.isError
      ? `2px solid ${props.theme.colors.softRed}`
      : `1px solid ${props.theme.colors.desaturatedRed}`};

  &::placeholder {
    font-size: 1.4rem;
    color: ${props => props.theme.colors.desaturatedRed};
    opacity: 0.5;
  }

  @media ${props => props.theme.breakpointsUp.lg} {
    height: 5.5rem;

    &::placeholder {
      font-size: 1.6rem;
    }
  }
`;

export const MainFormButton = styled.button`
  width: 6.4rem;
  height: 4.8rem;
  border: none;
  border-radius: 2.4rem;
  background: ${props => props.theme.gradients.gradient2};
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${props => props.theme.colors.softRedButton} 0px 7px 29px 0px;

  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media ${props => props.theme.breakpointsUp.lg} {
    height: 5.5rem;
    width: 10rem;
  }
`;

export const MainErrorIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 8rem;
  width: 2.4rem;
  height: 2.4rem;

  @media ${props => props.theme.breakpointsUp.lg} {
    right: 11.5rem;
  }
`;

export const MainErrorText = styled.small`
  position: absolute;
  bottom: -2.5rem;
  left: 2.3rem;

  color: ${props => props.theme.colors.softRed};
`;
