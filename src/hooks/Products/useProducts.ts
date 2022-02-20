import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import {
  _actionCategorySetSelected,
  _actionProductRemove,
  _actionSelectedItem,
  _actionSelectedPathItem,
  _actionSubCategorySetSelected
} from '../../store/Products/action'

export const UseProducts = () => {
  const dispatch = useDispatch()

  const setSelectedCategory = useCallback(
    (categoryName: string) => {
      dispatch(_actionCategorySetSelected(categoryName))
    }, [_actionCategorySetSelected]
  )

  const setSelectedSubCategory = useCallback(
    (subCategoryName: string) => {
      dispatch(_actionSubCategorySetSelected(subCategoryName))
    }, [_actionSubCategorySetSelected]
  )

  const setSelectedItem = useCallback(
    (selected: string) => {
      dispatch(_actionSelectedItem(selected))
    }, [_actionSelectedItem]
  )

  const setSelectedPathItem = useCallback(
    (selected: string) => {
      dispatch(_actionSelectedPathItem(selected))
    }, [_actionSelectedPathItem]
  )
  const clearState = useCallback(
    () => {
      dispatch(_actionProductRemove())
    }, [_actionProductRemove]
  )

  const data = useMemo(
    () => ({
      clearState,
      setSelectedCategory,
      setSelectedSubCategory,
      setSelectedItem,
      setSelectedPathItem
    }), [
      clearState,
      setSelectedCategory,
      setSelectedSubCategory,
      setSelectedItem,
      setSelectedPathItem
    ]
  )

  return data
}
