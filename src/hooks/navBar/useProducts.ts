import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import {
  _actionGoBack,
  _actionProductRemove,
  _actionSetSelectedItem,
  _actionSetSelectedPage
} from '../../store/SiteNavigation/action'

/**
 *
 * About hook
 *
 * @author saxDev 02.19.2022
 *
 * hook for actions on store for navigation for website
 *
 * */

export const UseProducts = () => {
  const dispatch = useDispatch()

  const setSelectedItem = useCallback(
    (selected: string) => {
      dispatch(_actionSetSelectedItem(selected))
    }, [_actionSetSelectedItem]
  )

  const setGoBack = useCallback(
    () => {
      dispatch(_actionGoBack())
    }, [_actionGoBack]
  )

  const clearState = useCallback(
    () => {
      dispatch(_actionProductRemove())
    }, [_actionProductRemove]
  )

  const setSelectedPage = useCallback((selectedName: string) => {
    dispatch(_actionSetSelectedPage(selectedName))
  }, [_actionSetSelectedPage])

  const data = useMemo(
    () => ({
      clearState,
      setSelectedItem,
      setGoBack,
      setSelectedPage
    }), [
      clearState,
      setSelectedItem,
      setGoBack,
      setSelectedPage
    ]
  )

  return data
}
