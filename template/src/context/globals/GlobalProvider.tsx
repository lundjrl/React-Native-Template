import React, { useReducer } from 'react'
import type { ReactElement, ReactNode } from 'react'

import { GlobalContext } from './GlobalContext'
import { defaultGlobalState } from './GlobalInitialState'
import { GlobalReducer } from './GlobalReducer'

interface Props {
  children: ReactNode
}

export const GlobalProvider: React.FC<Props> = ({ children }): ReactElement => {
  const [globalState, dispatch] = useReducer(GlobalReducer, defaultGlobalState)

  return <GlobalContext.Provider value={{ globalState, dispatch }}>{children}</GlobalContext.Provider>
}
