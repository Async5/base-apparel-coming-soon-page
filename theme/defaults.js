const defaults = {
  colors: {
    // Primary
    desaturatedRed: 'hsl(0, 36%, 70%)',
    softRed: 'hsl(0, 93%, 68%)',

    // Neutral
    darkGrayishRed: 'hsl(0, 6%, 24%)',

    softRedButton: 'hsl(0deg 93% 68% / 38%)',
  },
  gradients: {
    gradient1: 'linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))',
    gradient2: 'linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))',
  },
  fonts: {
    primary: `'Josefin Sans', sans-serif`,
  },
  breakpointsUp: {
    sm: 'screen and (min-width: 578px)',
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)',
  },
  breakpointsDown: {
    sm: 'screen and (max-width: 578px)',
    md: 'screen and (max-width: 768px)',
    lg: 'screen and (max-width: 1024px)',
    xl: 'screen and (max-width: 1280px)',
  },
};

export default defaults;
