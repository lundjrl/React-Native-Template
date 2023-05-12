import type { GlobalStateType } from './GlobalStateType'

export interface ResetInitialState {
  type: GlobalActionType.RESET_INITIAL_STATE
}

export interface UpdateInitialState {
  type: GlobalActionType.UPDATE_INITIAL_STATE
  payload: GlobalStateType
}

export type GlobalActions = ResetInitialState | UpdateInitialState

export enum GlobalActionType {
  RESET_INITIAL_STATE = 'RESET_INITIAL_STATE',
  UPDATE_INITIAL_STATE = 'UPDATE_INITIAL_STATE',
}
