// Device maximum width (desktop-first responsive breakpoints)
export const BREAKPOINTS = {
  mobileMax: 36,
  tabletMax: 60,
  laptopMax: 75
}

// Media query ranges (based on repsonsive breakpoints)
export const QUERIES = {
  'mobileAndDown': `(max-width: ${BREAKPOINTS.mobileMax}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax}rem)`
}

export const WEIGHTS = {
  normal: 400,
  medium: 550,
  bold: 700
}