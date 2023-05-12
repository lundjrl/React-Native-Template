export const getPresetStyles = (type: string) => {
  switch (type) {
    case 'h1':
      return 'text-h1 uppercase'
    case 'h2':
      return 'text-h2 uppercase'
    case 'h3':
      return 'text-h3'
    case 'h4':
      return ''
    case 'h5':
      return ''
    case 'h6':
      return ''
    case 'headlineSmall':
      return ''
    case 'headlineBase':
      return ''
    case 'formLabel':
      return ''
    case 'bodySmall':
      return ''
    case 'bodyBase':
      return ''
    case 'bodyLarge':
      return ''
    case 'bodyXL':
      return ''
    case 'linkSmall':
      return ''
    case 'linkBase':
      return ''
    case 'buttonSmall':
      return ''
    case 'buttonBase':
      return ''
    case 'buttonLarge':
      return ''
    case 'eyebrow':
      return ''
    default:
      return ''
  }
}
