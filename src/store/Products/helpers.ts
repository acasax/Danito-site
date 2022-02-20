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

export const _selectorSubCategoryOfSelectedCategory = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products?.selectedCategory[0]?.subCategory.map(x => x.subCategoryInfo)
)

export const _selectorSelectedSubCategory = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products?.selectedSubCategory
)

export const _selectorProductsOdSelectedSubCategory = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products.selectedSubCategory[0]?.products.map(x => x)
)

export const _selectorIsCategorySelected = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => !!products?.selectedCategory[0]?.categoryInfo
)

export const _selectorIsSubCategorySelected = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => !!products?.selectedSubCategory[0]?.subCategoryInfo
)

export const _selectorSelectedPath = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products?.selectedPath
)

export const _selectorSelectedItem = createSelector(
  (state: TReduxState): TStateProducts => state.products,
  products => products?.selected
)
