// Device maximum width (desktop-first responsive breakpoints)
export const BREAKPOINTS = {
  mobileMax: 36,
  tabletMax: 60,
  laptopMax: 75,
};

// Media query ranges (based on repsonsive breakpoints)
export const QUERIES = {
  mobileAndDown: `(max-width: ${BREAKPOINTS.mobileMax}rem)`,
  tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
};

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700,
};

export const COLORS = {
  white: 'hsl(0deg, 0%, 100%)',
  gray: {
    100: 'hsl(185deg, 5%, 95%)',
    300: 'hsl(190deg, 5%, 80%)',
    500: 'hsl(196deg, 4%, 60%)',
    700: 'hsl(220deg, 5%, 40%)',
    900: 'hsl(220deg, 3%, 20%)',
  },
  primary: 'hsl(16deg, 100%, 50%)',
  secondary: 'hsl(16deg, 100%, 60%)',
};
