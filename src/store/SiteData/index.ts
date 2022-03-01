import { SliderElements, TActionEvent, TStateWebSiteData } from './d'

const init = {
  sliderElements: SliderElements
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
    default:
      return state
  }
}
