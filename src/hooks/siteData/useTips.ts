import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { _actionSetSelectedTips } from 'store/SiteNavigation/action'

/**
 *
 * About hooks
 *
 * @author SaxDev 02.28.2022
 *
 * This hook use to set tips header and one single tips page
 * */

export const UseTips = () => {
  const dispatch = useDispatch()

  const setSelectedTip = useCallback(
    (tipsHeader: string) => {
      dispatch(_actionSetSelectedTips(tipsHeader))
    }, [_actionSetSelectedTips]
  )

  const data = useMemo(
    () => ({
      setSelectedTip
    }), [
      setSelectedTip
    ]
  )

  return data
}
