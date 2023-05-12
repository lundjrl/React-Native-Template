import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from '~/screens/HomeScreen'
import { DEFAULT_STACK_OPTIONS } from '~/utils/constants'

export type StackParamList = {
  Home: undefined
}

const RootStack = createNativeStackNavigator<StackParamList>()

export const RootNavigation: React.FC = () => (
  <RootStack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <RootStack.Screen name="Home" component={HomeScreen} options={DEFAULT_STACK_OPTIONS} />
  </RootStack.Navigator>
)
