import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { _actionSetSelectedTips } from 'store/SiteNavigation/action'

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
