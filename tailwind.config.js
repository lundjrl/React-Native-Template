/** @type {import('tailwindcss').Config} */
const Colors = require('./src/styles/figma/colors');
const nativewind = require('nativewind/tailwind')
const Typography = require('./src/styles/typography')


module.exports = {
  content: [
    './App.tsx',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      dim: Colors.dim,
      black: Colors.black,
      text: Colors.text,
      grey100: Colors.grey100,
      grey200: Colors.grey200,
      grey300: Colors.grey300,
      grey400: Colors.grey400,
      grey500: Colors.grey500,
      grey900: Colors.grey900,
      white: Colors.white,
      primary: Colors.primary,
      primaryTransparent: Colors.primaryTransparent,
      primaryShade: Colors.primaryShade,
      primaryShadeTransparent: Colors.primaryShadeTransparent,
      primaryUIBackground: Colors.primaryUIBackground,
      secondary: Colors.secondary,
      secondaryShade: Colors.secondaryShade,
      lightGrey: Colors.lightGrey,
      mediumGrey: Colors.mediumGrey,
      darkGrey: Colors.darkGrey,
      darkNavy: Colors.darkNavy,
      platinum: Colors.platinum,
      tertiary: Colors.tertiary,
      tertiaryShade: Colors.tertiaryShade,
      tertiaryLight: Colors.tertiaryLight,
      cream: Colors.cream,
      sectionBackground: Colors.sectionBackground,
      formBackgroundOnDark: Colors.formBackgroundOnDark,
      mainHeadline: Colors.mainHeadline,
      paragraphText: Colors.paragraphText,
      placeholder: Colors.placeholder,
      errorOnLight: Colors.errorOnLight,
      errorOnDark: Colors.errorOnDark,
      successOnDark: Colors.successOnDark,
      successOnLight: Colors.successOnLight,
      buttonMain: Colors.buttonMain,
      buttonSecondary: Colors.buttonSecondary,
      buttonTertiary: Colors.buttonTertiary,
      buttonMainFocus: Colors.buttonMainFocus,
      buttonSecondaryFocus: Colors.buttonSecondaryFocus,
      buttonTertiaryFocus: Colors.buttonTertiaryFocus,
      buttonDisabled: Colors.buttonDisabled,
      dividerOnDark: Colors.dividerOnDark,
      dividerOnLight: Colors.dividerOnLight,
      textLink: Colors.textLink,
      textLinkFocus: Colors.textLinkFocus,
      input: Colors.input,
      screenBackground: Colors.screenBackground,
      gold: Colors.gold,
      placeholder: Colors.placeholder,
      pewter: Colors.pewter,
      pearl: Colors.pearl,
      smoke: Colors.smoke,
      gainsboro: Colors.gainsboro,
      whisper: Colors.whisper,
      vistablue: Colors.vistablue,
      blackcurrant: Colors.blackcurrant,
      dodgerblue: Colors.dodgerblue,
    },
    fontFamily: {
      poppins: ['Poppins-Regular'],
      poppinsMedium: ['Poppins-Medium'],
      poppinsBold: ['Poppins-Bold'],
    },
    fontSize: {
      eyebrow: [
        `${Typography.eyebrow.fontSize}`, // font-size
        {
          lineHeight: `${Typography.eyebrow.lineHeight * Typography.eyebrow.fontSize}`,
          letterSpacing: `${Typography.eyebrow.letterSpacing * Typography.eyebrow.fontSize}`,
        },
      ],
      h1: [
        `${Typography.h1.fontSize}px`, // font-size
        {
          fontStyle: Typography.h1.fontStyle,
          fontWeight: Typography.h1.fontWeight,
          lineHeight: `${Typography.h1.lineHeight}px`,
          letterSpacing: `${Typography.h1.letterSpacing}px`,
        },
      ],
      h2: [
        `${Typography.h2.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.h2.lineHeight}px`,
          letterSpacing: `${Typography.h2.letterSpacing}px`,
        },
      ],
      h3: [
        `${Typography.h3.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.h3.lineHeight}px`,
          letterSpacing: `${Typography.h3.letterSpacing}px`,
        },
      ],
      h4: [
        `${Typography.h4.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.h4.lineHeight}px`,
          letterSpacing: `${Typography.h4.letterSpacing}px`,
        },
      ],
      h5: [
        `${Typography.h5.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.h5.lineHeight}px`,
          letterSpacing: `${Typography.h5.letterSpacing}px`,
        },
      ],
      h6: [
        `${Typography.h6.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.h6.lineHeight}px`,
          letterSpacing: `${Typography.h6.letterSpacing}px`,
        },
      ],
      headlineBase: [
        `${Typography.headlineBase.fontSize}px`,
        {
          lineHeight: `${Typography.headlineBase.lineHeight}px`,
          letterSpacing: `${Typography.headlineBase.letterSpacing}px`,
        },
      ],
      headlineSmall: [
        `${Typography.headlineSmall.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.headlineSmall.lineHeight}px`,
          letterSpacing: `${Typography.headlineSmall.letterSpacing}px`,
        },
      ],
      formLabel: [
        `${Typography.formLabel.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.formLabel.lineHeight}px`,
          letterSpacing: `${Typography.formLabel.letterSpacing}px`,
        },
      ],
      bodyXS: [
        `${Typography.bodyXS.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.bodyXS.lineHeight}px`,
          letterSpacing: `${Typography.bodyXS.letterSpacing}px`,
        },
      ],
      bodySmall: [
        `${Typography.bodySmall.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.bodySmall.lineHeight}px`,
          letterSpacing: `${Typography.bodySmall.letterSpacing}px`,
        },
      ],
      bodyBase: [
        `${Typography.bodyBase.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.bodyBase.lineHeight}px`,
          letterSpacing: `${Typography.bodyBase.letterSpacing}px`,
        },
      ],
      bodyXL: [
        `${Typography.bodyXL.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.bodyXL.lineHeight}px`,
          letterSpacing: `${Typography.bodyXL.letterSpacing}px`,
        },
      ],
      buttonSmall: [
        `${Typography.buttonSmall.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.buttonSmall.lineHeight}px`,
          letterSpacing: `${Typography.buttonSmall.letterSpacing}px`,
        },
      ],
      buttonBase: [
        `${Typography.buttonBase.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.buttonBase.lineHeight}px`,
          letterSpacing: `${Typography.buttonBase.letterSpacing}px`,
        },
      ],
      buttonLarge: [
        `${Typography.buttonLarge.fontSize}px`, // font-size
        {
          lineHeight: `${Typography.buttonLarge.lineHeight}px`,
          letterSpacing: `${Typography.buttonLarge.letterSpacing}px`,
        },
      ],
    }
  },
  extend: {},
  presets: [nativewind]
};
