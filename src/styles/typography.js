// const typography = require('./font')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Colors = require('./colors')

// Our base text style. All text will start off as this.
const BASE = {
  // ...typography.primary,
  color: Colors.paragraphText,
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '400',
}

const SECONDARY = {
  // ...typography.primary, // If added a second font, change here.
  color: Colors.mainHeadline,
  fontSize: 16,
}

const HEADER = {
  color: Colors.mainHeadline,
  fontWeight: 'bold',
}

const CTA = {
  color: Colors.buttonBase,
  fontWeight: 'bold',
  lineHeight: 16,
  letterSpacing: 0,
}

const presets = {
  default: BASE,

  bold: { ...BASE, fontWeight: 'bold' },

  eyebrow: {
    fontSize: 13,
    lineHeight: 1.2,
    letterSpacing: 0.1,
  },

  h1: {
    ...SECONDARY,
    ...HEADER,
    fontSize: 28,
    fontStyle: 'bold',
    fontWeight: '700',
    lineHeight: 30,
    letterSpacing: -0.006,
  },

  h2: {
    ...SECONDARY,
    ...HEADER,
    fontSize: 26,
    lineHeight: 28,
    letterSpacing: -0.006,
  },

  h3: {
    ...SECONDARY,
    ...HEADER,
    fontSize: 24,
    lineHeight: 26,
    letterSpacing: -0.006,
  },

  h4: {
    ...SECONDARY,
    ...HEADER,
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: -0.006,
  },

  h5: {
    ...SECONDARY,
    ...HEADER,
    fontSize: 15,
    lineHeight: 17,
    letterSpacing: -0.006,
  },

  h6: {
    ...SECONDARY,
    ...HEADER,
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: -0.006,
  },

  headlineBase: {
    ...SECONDARY,
    ...HEADER,
    lineHeight: 18,
    letterSpacing: -0.006,
  },

  headlineSmall: {
    ...SECONDARY,
    ...HEADER,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.006,
  },

  formLabel: { ...BASE, fontSize: 14, color: Colors.mediumGrey, lineHeight: 16, letterSpacing: -0.006 },

  bodyXS: {
    ...BASE,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.003,
  },

  bodySmall: {
    ...BASE,
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.003,
  },

  bodyBase: {
    ...BASE,
    lineHeight: 24,
    letterSpacing: -0.003,
  },

  bodyLarge: {
    ...BASE,
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: -0.003,
  },

  bodyXL: {
    ...BASE,
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: -0.003,
  },

  linkSmall: {
    ...SECONDARY,
    ...CTA,
    fontSize: 12,
  },

  linkBase: {
    ...SECONDARY,
    ...CTA,
  },

  linkLarge: {
    ...SECONDARY,
    ...CTA,
    fontSize: 18,
  },

  linkError: {
    ...SECONDARY,
    ...CTA,
    color: Colors.errorOnLight,
  },

  buttonSmall: {
    ...SECONDARY,
    ...CTA,
    fontSize: 12,
  },

  buttonBase: {
    ...SECONDARY,
    ...CTA,
  },

  buttonLarge: {
    ...SECONDARY,
    ...CTA,
    fontSize: 18,
  },
}

module.exports = presets
