import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import {
  _actionGoBack,
  _actionProductRemove,
  _actionSetFlexDirection,
  _actionSetSelectedItem
} from '../../store/Products/action'

export const UseProducts = () => {
  const dispatch = useDispatch()

  const setSelectedItem = useCallback(
    (selected: string) => {
      dispatch(_actionSetSelectedItem(selected))
    }, [_actionSetSelectedItem]
  )
  const setFlexDirection = useCallback(
    (flexDirection: string) => {
      dispatch(_actionSetFlexDirection(flexDirection))
    }, [_actionSetFlexDirection]
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
      setGoBack,
      setFlexDirection
    }), [
      clearState,
      setFlexDirection,
      setSelectedItem,
      setGoBack
    ]
  )

  return data
}
