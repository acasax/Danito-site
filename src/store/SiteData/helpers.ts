import { createSelector } from 'reselect'
import { TReduxState } from '../d'
import { TStateWebSiteData } from './d'

export const _selectorAllSliderElements = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.sliderElements
)

export const _selectorAllTipsData = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.tipsData
)

export const _selectorSelectedTip = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.selectedTip
)
