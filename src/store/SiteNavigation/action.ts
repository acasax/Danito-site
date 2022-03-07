import { TActionEvent } from './d'
import { CLEAR_STATE, GO_BACK, SELECTED_ITEM, SET_SELECTED_TIPS } from './types'

export const _actionSetSelectedItem = (itemName: string): TActionEvent => ({
  type: SELECTED_ITEM,
  payload: itemName
})

export const _actionGoBack = (): TActionEvent => ({
  type: GO_BACK
})

export const _actionProductRemove = (): TActionEvent => ({
  type: CLEAR_STATE
})

export const _actionSetSelectedTips = (tipsHeader: string): TActionEvent => ({
  type: SET_SELECTED_TIPS,
  payload: tipsHeader
})
