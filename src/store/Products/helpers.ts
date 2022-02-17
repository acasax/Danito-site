import { createSelector } from 'reselect'
import { TReduxState } from '../d'
import { TStateProducts } from './d'

export const _selectorAllProductsData = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products.data
)

export const _selectorAllCategory = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products.data.map(x => x.categoryInfo)
)

export const _selectorSelectedCategory = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products?.selectedCategory
)
