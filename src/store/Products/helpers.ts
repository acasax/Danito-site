import { createSelector } from 'reselect'
import { TReduxState } from '../d'
import { TStateProducts } from './d'

export const _selectorAllProductsData = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products.data
)

export const _selectorFlexDirection = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products.flexDirection
)

export const _selectNavBarItems = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products.selectedItems
)

export const _selectSelectedItem = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products.selectedItem
)
