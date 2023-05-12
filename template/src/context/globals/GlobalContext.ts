import { createContext } from 'react'

import type { GlobalContextType } from './types/GlobalContextType'
import { defaultGlobalState } from './GlobalInitialState'

const context: GlobalContextType = { globalState: defaultGlobalState, dispatch: () => null }

export const GlobalContext = createContext(context)
