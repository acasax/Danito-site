import { TActionEvent, TStateProducts } from './d'
import { CATEGORY_SET_SELECTED, CLEAR_STATE } from './types'

export const _actionCategorySetSelected = (category: TStateProducts): TActionEvent => ({
  type: CATEGORY_SET_SELECTED,
  payload: category
})

export const _actionProductRemove = (): TActionEvent => ({
  type: CLEAR_STATE
})
