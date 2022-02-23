import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { TNavBarContext } from './d'
import { useSelector } from 'react-redux'
import { _selectNavBarItems, _selectorFlexDirection } from '../../store/Products/helpers'
import { TProductData } from '../../store/Products/d'
import { UseProducts } from '../../hooks/Products/useProducts'

export const NavBarContext = createContext({} as TNavBarContext)

const NavBarContextContainer = ({ children }: { children: ReactNode }) => {
  /** Selectors from store */
  const selectedItems = useSelector(_selectNavBarItems)
  /*  const subCategoryOfSelectedCategory = useSelector(_selectorSubCategoryOfSelectedCategory)
  const productsOfSelectedSubCategory = useSelector(_selectorProductsOdSelectedSubCategory)
  const isSelectedCategory = useSelector(_selectorIsCategorySelected)
  const isSelectedSubCategory = useSelector(_selectorIsSubCategorySelected)
  const path = useSelector(_selectorSelectedPath) */
  const flexDirection = useSelector(_selectorFlexDirection)
  const selected = ''
  /** Local state */

  const [sideNavBarItems, setSideNavBarItems] = useState({} as TProductData[])
  const [navRightOpen, setNavRightOpen] = useState(false)

  /** Functions from hook */
  const { setFlexDirection, setSelectedItem, setGoBack } = UseProducts()

  useEffect(() => {
    setSideNavBarItems(selectedItems)
  }, [setSideNavBarItems])

  const handleNavRightOpen = useCallback(() => {
    setNavRightOpen(!navRightOpen)
  }, [setNavRightOpen, navRightOpen])

  const handleSetSelectedSideNavBarItem = useCallback((selectedName: string) => {
    setSelectedItem(selectedName)
    setSideNavBarItems(selectedItems)
  }, [setSelectedItem, setSideNavBarItems, selectedItems])

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
        flexDirection,
        goBack,
        selected,
        handleSetSelectedSideNavBarItem
      }),
    [
      setFlexDirection,
      sideNavBarItems,
      navRightOpen,
      handleNavRightOpen,
      flexDirection,
      goBack,
      selected,
      handleSetSelectedSideNavBarItem
    ]
  )
  return (
        <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
  )
}

export default NavBarContextContainer
