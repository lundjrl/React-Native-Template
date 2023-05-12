/* eslint-disable @typescript-eslint/no-empty-interface */
import type { StackParamList } from './src/navigation/RootNavigation'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
