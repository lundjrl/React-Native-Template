import type { Dispatch } from 'react'

import type { GlobalActions } from './GlobalActionType'
import type { GlobalStateType } from './GlobalStateType'

export type GlobalContextType = {
  globalState: GlobalStateType
  dispatch: Dispatch<GlobalActions>
}
