import { createSelector } from 'reselect'
import { TReduxState } from '../d'
import { TStateWebSiteData } from './d'

export const _selectorAllSliderElements = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.sliderElements
)

export const _selectAllAboutInfoCarouselImages = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.aboutInfoImages
)

export const _selectAllAboutTechnologyCarouselImages = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.aboutTechnologyImages
)
