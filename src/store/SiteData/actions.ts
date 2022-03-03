import { TActionEvent } from './d'
import { CLEAR_STATE, SET_SELECTED_TIPS } from './types'

export const _actionClearWebSiteDataStore = (): TActionEvent => ({
  type: CLEAR_STATE
})

export const _actionSetSelectedTips = (tipsHeader: string): TActionEvent => ({
  type: SET_SELECTED_TIPS,
  payload: tipsHeader
})
