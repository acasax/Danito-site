import { SliderElements, TActionEvent, TipsInitData, TStateWebSiteData, TTipsData } from './d'

const init = {
  sliderElements: SliderElements,
  tipsData: TipsInitData,
  selectedTip: {} as TTipsData
} as TStateWebSiteData

export default (
  state: TStateWebSiteData = init,
  action: TActionEvent = {} as TActionEvent
) => {
  switch (action.type) {
    case 'CLEAR_STATE': {
      return {
        ...state,
        sliderElements: undefined
      }
    }
    case 'SET_SELECTED_TIPS': {
      const selectedTip = init.tipsData.filter(x => action.payload === x.header)
      return {
        ...state,
        selectedTip: selectedTip
      }
    }
    default:
      return state
  }
}
