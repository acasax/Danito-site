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

export const _selectorGalleyContent = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.galleryContent
)

export const _selectorGdprContent = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.gdprContent
)

export const _selectorPolicyContent = createSelector(
  (state: TReduxState): TStateWebSiteData => state.webSiteData,
  webSiteData => webSiteData.policyContent
)
