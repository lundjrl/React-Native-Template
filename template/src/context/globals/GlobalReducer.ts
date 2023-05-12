import type { GlobalActions } from './types/GlobalActionType'
import { GlobalActionType } from './types/GlobalActionType'
import type { GlobalStateType } from './types/GlobalStateType'
import { defaultGlobalState } from './GlobalInitialState'

export const GlobalReducer = (state: GlobalStateType, action: GlobalActions): GlobalStateType => {
  switch (action.type) {
    case GlobalActionType.RESET_INITIAL_STATE:
      return defaultGlobalState
    case GlobalActionType.UPDATE_INITIAL_STATE:
      return {
        ...action.payload,
      }
    default:
      return state
  }
}
