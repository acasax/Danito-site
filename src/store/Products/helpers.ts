import { createSelector } from 'reselect'
import { TReduxState } from '../d'
import { TStateProducts } from './d'

export const _selectorAllCategory = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products?.data
)
