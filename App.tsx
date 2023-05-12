import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigation } from './src/navigation/RootNavigation'

import 'sheets.tsx'
import { GlobalProvider } from '~/context/globals/GlobalProvider'

const queryClient = new QueryClient()

const App: React.FC = (): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <GlobalProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigation />
          <Toast />
        </NavigationContainer>
      </SafeAreaProvider>
    </GlobalProvider>
  </QueryClientProvider>
)

export default App
