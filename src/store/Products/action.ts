import { TActionEvent } from './d'
import { CLEAR_STATE, GO_BACK, SELECTED_FLEX_DIRECTION, SELECTED_ITEM } from './types'

export const _actionSetSelectedItem = (itemName: string): TActionEvent => ({
  type: SELECTED_ITEM,
  payload: itemName
})

export const _actionSetFlexDirection = (flexDirection: string): TActionEvent => ({
  type: SELECTED_FLEX_DIRECTION,
  payload: flexDirection
})

export const _actionGoBack = (): TActionEvent => ({
  type: GO_BACK
})

export const _actionProductRemove = (): TActionEvent => ({
  type: CLEAR_STATE
})
