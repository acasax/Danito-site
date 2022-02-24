import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { _actionGoBack, _actionProductRemove, _actionSetSelectedItem } from '../../store/NavBar/action'

/**
 *
 * About
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
    }, [_actionGoBack()]
  )

  const clearState = useCallback(
    () => {
      dispatch(_actionProductRemove())
    }, [_actionProductRemove]
  )

  const data = useMemo(
    () => ({
      clearState,
      setSelectedItem,
      setGoBack
    }), [
      clearState,
      setSelectedItem,
      setGoBack
    ]
  )

  return data
}
