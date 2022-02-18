import { TActionEvent } from './d'
import { CATEGORY_SET_SELECTED, CLEAR_STATE, SELECTED_ITEM, SUB_CATEGORY_SET_SELECTED } from './types'

export const _actionCategorySetSelected = (category: string): TActionEvent => ({
  type: CATEGORY_SET_SELECTED,
  payload: category
})

export const _actionSubCategorySetSelected = (subCategory: string): TActionEvent => ({
  type: SUB_CATEGORY_SET_SELECTED,
  payload: subCategory
})

export const _actionSelectedItem = (selectedName: string): TActionEvent => ({
  type: SELECTED_ITEM,
  payload: selectedName
})

export const _actionProductRemove = (): TActionEvent => ({
  type: CLEAR_STATE
})
