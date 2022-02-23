import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { TNavBarContext } from './d'
import { useSelector } from 'react-redux'
import { _selectNavBarItems, _selectorFlexDirection, _selectSelectedItem } from '../../store/Products/helpers'
import { UseProducts } from '../../hooks/Products/useProducts'

export const NavBarContext = createContext({} as TNavBarContext)

const NavBarContextContainer = ({ children }: { children: ReactNode }) => {
  /** Selectors from store */
  const selectedItems = useSelector(_selectNavBarItems)
  const flexDirection = useSelector(_selectorFlexDirection)
  const selected = useSelector(_selectSelectedItem)

  /** Local state */
  const [navRightOpen, setNavRightOpen] = useState(false)

  /** Functions from hook */
  const { setSelectedItem, setGoBack } = UseProducts()

  const handleNavRightOpen = useCallback(() => {
    setNavRightOpen(!navRightOpen)
  }, [setNavRightOpen, navRightOpen])

  const handleSetSelectedSideNavBarItem = useCallback((selectedName: string) => {
    setSelectedItem(selectedName)
  }, [setSelectedItem])

  const goBack = useCallback(() => {
    setGoBack()
  }, [selectedItems])

  const data = useMemo(
    () => (
      {
        navRightOpen,
        handleNavRightOpen,
        flexDirection,
        goBack,
        selected,
        handleSetSelectedSideNavBarItem,
        selectedItems
      }),
    [
      navRightOpen,
      handleNavRightOpen,
      flexDirection,
      goBack,
      selected,
      handleSetSelectedSideNavBarItem,
      selectedItems
    ]
  )
  return (
        <NavBarContext.Provider value={data}>{children}</NavBarContext.Provider>
  )
}

export default NavBarContextContainer
