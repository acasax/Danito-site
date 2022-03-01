import { createSelector } from 'reselect'
import { TReduxState } from '../d'
import { TStateWebSiteData } from './d'

export const _selectorAllSliderElements = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.sliderElements
)
