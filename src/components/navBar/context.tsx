import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { TNavBarContext } from './d'
import { useSelector } from 'react-redux'
import {
  _selectorAllCategory,
  _selectorIsCategorySelected,
  _selectorIsSubCategorySelected,
  _selectorProductsOdSelectedSubCategory,
  _selectorSelectedItem,
  _selectorSelectedPath,
  _selectorSubCategoryOfSelectedCategory
} from '../../store/Products/helpers'
import { TProductData } from '../../store/Products/d'
import { UseProducts } from '../../hooks/Products/useProducts'

export const NavBarContext = createContext({} as TNavBarContext)

const NavBarContextContainer = ({ children }: { children: ReactNode }) => {
  /** Selectors from store */
  const category = useSelector(_selectorAllCategory)
  const subCategoryOfSelectedCategory = useSelector(_selectorSubCategoryOfSelectedCategory)
  const productsOfSelectedSubCategory = useSelector(_selectorProductsOdSelectedSubCategory)
  const isSelectedCategory = useSelector(_selectorIsCategorySelected)
  const isSelectedSubCategory = useSelector(_selectorIsSubCategorySelected)
  const selected = useSelector(_selectorSelectedItem)
  const path = useSelector(_selectorSelectedPath)

  /** Local state */
  const [flexDirection, setFlexDirection] = useState('row')
  const [sideNavBarItems, setSideNavBarItems] = useState({} as TProductData[])
  const [navRightOpen, setNavRightOpen] = useState(false)

  /** Functions from hook */
  const { setSelectedCategory, setSelectedSubCategory, setSelectedItem, setSelectedPathItem, setGoBack } = UseProducts()

  useEffect(() => {
    if (isSelectedSubCategory) {
      setFlexDirection('row')
      setSideNavBarItems(productsOfSelectedSubCategory)
      return
    }
    if (isSelectedCategory) {
      setFlexDirection('column')
      setSideNavBarItems(subCategoryOfSelectedCategory)
      return
    }
    setFlexDirection('row')
    setSideNavBarItems(category)
  }, [category, setSideNavBarItems, isSelectedCategory, selected])

  const handleNavRightOpen = useCallback(() => {
    setNavRightOpen(!navRightOpen)
  }, [setNavRightOpen, navRightOpen])

  const handleSetSelectedSideNavBarItem = useCallback((selectedName: string) => {
    setSelectedPathItem(selectedName)
    if (isSelectedSubCategory) {
      setSelectedItem(selectedName)
      return
    }
    if (isSelectedCategory) {
      setSelectedSubCategory(selectedName)
      setSelectedItem(selectedName)
      return
    }
    setSelectedCategory(selectedName)
    setSelectedItem(selectedName)
  }, [setSelectedItem, setSelectedCategory, isSelectedCategory, isSelectedSubCategory])

  const goBack = useCallback(() => {
    setGoBack()
  }, [setGoBack])

  const data = useMemo(
    () => (
      {
        setFlexDirection,
        sideNavBarItems,
        navRightOpen,
        handleNavRightOpen,
        handleSetSelectedSideNavBarItem,
        selected,
        flexDirection,
        goBack
      }),
    [
      setFlexDirection,
      sideNavBarItems,
      navRightOpen,
      handleNavRightOpen,
      handleSetSelectedSideNavBarItem,
      selected,
      flexDirection,
      goBack
    ]
  )
  return (
        <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
  )
}

export default NavBarContextContainer
