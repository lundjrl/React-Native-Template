// eslint-disable-next-line @typescript-eslint/no-var-requires
const RN = require('react-native')

const POPPINS = {
  fontFamily: RN.Platform.select({
    ios: 'Poppins',
    android: 'Poppins-Regular',
  }),
}

const typography = {
  primary: POPPINS,
}

module.exports = typography
