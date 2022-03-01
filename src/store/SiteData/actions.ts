import { TActionEvent } from './d'
import { CLEAR_STATE } from './types'

export const _actionClearWebSiteDataStore = (): TActionEvent => ({
  type: CLEAR_STATE
})
