import { useDispatch } from 'react-redux'
import { useCallback, useMemo } from 'react'
import { _actionCategorySetSelected, _actionProductRemove } from '../../store/Products/action'
import { TProductData } from '../../store/Products/d'

export const UseProducts = () => {
  const dispatch = useDispatch()

  const setSelectedCategory = useCallback(
    (categoryName: TProductData) => {
      dispatch(_actionCategorySetSelected(categoryName))
    }, [_actionCategorySetSelected]
  )

  const clearState = useCallback(
    () => {
      dispatch(_actionProductRemove())
    }, [_actionProductRemove]
  )

  const data = useMemo(
    () => ({
      clearState,
      setSelectedCategory
    }), [
      clearState,
      setSelectedCategory
    ]
  )

  return data
}
