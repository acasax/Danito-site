import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { TNavBarContext } from './d'
import { useSelector } from 'react-redux'
import {
  _selectorAllCategory,
  _selectorIsCategorySelected,
  _selectorIsSubCategorySelected,
  _selectorProductsOdSelectedSubCategory,
  _selectorSelectedItem,
  _selectorSubCategoryOfSelectedCategory
} from '../../store/Products/helpers'
import { TProductData } from '../../store/Products/d'
import { UseProducts } from '../../hooks/Products/useProducts'

export const NavBarContext = createContext({} as TNavBarContext)

const NavBarContextContainer = ({ children }: { children: ReactNode }) => {
  const category = useSelector(_selectorAllCategory)
  const subCategoryOfSelectedCategory = useSelector(_selectorSubCategoryOfSelectedCategory)
  const productsOfSelectedSubCategory = useSelector(_selectorProductsOdSelectedSubCategory)
  const isSelectedCategory = useSelector(_selectorIsCategorySelected)
  const isSelectedSubCategory = useSelector(_selectorIsSubCategorySelected)
  const [flexDirection, setFlexDirection] = useState('row')
  const [sideNavBarItems, setSideNavBarItems] = useState({} as TProductData[])
  const [navRightOpen, setNavRightOpen] = useState(false)
  const selected = useSelector(_selectorSelectedItem)
  const { setSelectedCategory, setSelectedSubCategory, setSelectedItem } = UseProducts()

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
  }, [category, setSideNavBarItems, isSelectedCategory])

  const handleNavRightOpen = useCallback(() => {
    setNavRightOpen(!navRightOpen)
  }, [setNavRightOpen, navRightOpen])

  const handleSetSelectedSideNavBarItem = useCallback((selectedName: string) => {
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

  const data = useMemo(
    () => (
      {
        setFlexDirection,
        sideNavBarItems,
        navRightOpen,
        handleNavRightOpen,
        handleSetSelectedSideNavBarItem,
        selected,
        flexDirection
      }),
    [
      setFlexDirection,
      sideNavBarItems,
      navRightOpen,
      handleNavRightOpen,
      handleSetSelectedSideNavBarItem,
      selected,
      flexDirection
    ]
  )
  return (
        <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
  )
}

export default NavBarContextContainer
