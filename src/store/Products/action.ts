import { TActionEvent, TProductData } from './d'
import { CATEGORY_SET_SELECTED, CLEAR_STATE } from './types'

export const _actionCategorySetSelected = (category: TProductData): TActionEvent => ({
  type: CATEGORY_SET_SELECTED,
  payload: category
})

export const _actionProductRemove = (): TActionEvent => ({
  type: CLEAR_STATE
})
