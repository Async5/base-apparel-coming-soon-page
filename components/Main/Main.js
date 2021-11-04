import { useState } from 'react';

import Image from 'next/image';

import arrow from '../../public/icon-arrow.svg';
import error from '../../public/icon-error.svg';
import heroImage from '../../public/hero-desktop.jpg';
import logo from '../../public/logo.svg';

// Styled Components
import {
  StyledMain,
  MainHeadline,
  MainParagraph,
  MainForm,
  MainErrorIcon,
  MainErrorText,
  MainFormButton,
  MainFormInput,
  MainImage,
  MainText,
  MainLogo,
} from './MainStyles';

// Global Components
import Container from '../../styles/GlobalComponents/Container';

const Main = () => {
  const [isError, setIsError] = useState(false);

  const onSubmitHandler = e => {
    e.preventDefault();

    const validateEmail = email => {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };

    const emailInput = e.target.querySelector('input').value;

    setIsError(!validateEmail(emailInput));
  };

  return (
    <StyledMain>
      <MainImage>
        <Image
          layout="fill"
          objectFit="cover"
          src={heroImage}
          alt="hero image"
        />
      </MainImage>

      <MainText>
        <div>
          <MainLogo>
            <Image src={logo} alt="logo" />
          </MainLogo>

          <MainHeadline>
            <span>WE&apos;RE</span> <br />
            COMING <br />
            SOON
          </MainHeadline>
          <Container>
            <MainParagraph>
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </MainParagraph>

            <MainForm onSubmit={e => onSubmitHandler(e)}>
              <MainFormInput
                isError={isError}
                type="text"
                placeholder="Email Address"
                name="email"
              />
              <MainFormButton type="submit">
                <Image src={arrow} alt="btn arrow" />
              </MainFormButton>

              {isError && (
                <>
                  <MainErrorIcon>
                    <Image src={error} alt="icon error" />
                  </MainErrorIcon>

                  <MainErrorText>Please provide a valid email</MainErrorText>
                </>
              )}
            </MainForm>
          </Container>
        </div>
      </MainText>
    </StyledMain>
  );
};

export default Main;
