import { Alert, Platform } from 'react-native'
import prompt from 'react-native-prompt-android'

export const promptHelper = (title: string, message: string, options) => {
  if (Platform.OS === 'ios') {
    Alert.prompt(title, message, options)
  } else if (Platform.OS === 'android') {
    prompt(title, message, options)
  }
}
