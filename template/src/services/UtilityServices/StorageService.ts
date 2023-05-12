import AsyncStorage from '@react-native-async-storage/async-storage'

export const getStorageVal = async (key: string): Promise<string> => {
  return (await AsyncStorage.getItem(key)) ?? ''
}

export const removeStorageVal = async (key: string): Promise<void> => {
  return await AsyncStorage.removeItem(key)
}

export const setStorageVal = async (key: string, val: string): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(key, val)
    return true
  } catch (error) {
    console.error('SET STORAGE ERROR:', error)
    return false
  }
}
