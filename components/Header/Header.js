import Image from 'next/image';

// Styled Components
import { StyledHeader, HeaderLogo, HeaderHeroImage } from './HeaderStyles';

// Global Components
import Container from '../../styles/GlobalComponents/Container';

// Images
import logo from '../../public/logo.svg';
import heroImageMobile from '../../public/hero-mobile.jpg';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderLogo>
          <Image src={logo} alt="logo" />
        </HeaderLogo>
      </Container>

      <HeaderHeroImage>
        <Image
          layout="responsive"
          objectFit="cover"
          src={heroImageMobile}
          alt="hero image"
        />
      </HeaderHeroImage>
    </StyledHeader>
  );
};

export default Header;
