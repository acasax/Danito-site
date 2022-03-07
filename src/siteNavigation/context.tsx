import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { TSiteNavigationContext } from './d'
import { useSelector } from 'react-redux'
import { _selectNavBarItems, _selectorFlexDirection, _selectSelectedItem } from 'store/SiteNavigation/helpers'
import { UseProducts } from '../hooks/navBar/useProducts'
import { ProductData } from 'constants/ProductData'
import { ProductsDataInfo } from 'store/SiteNavigation/d'

export const SiteNavigationContext = createContext({} as TSiteNavigationContext)

/** About
 * @author saxDev 02.24.2022
 *
 * this context is using for navigating the site
 *
 * */

const siteNavigationContextContainer = ({ children }: { children: ReactNode }) => {
  /** Selectors from store */
  const selectedItems = useSelector(_selectNavBarItems)
  const flexDirection = useSelector(_selectorFlexDirection)
  const selected = useSelector(_selectSelectedItem)

  /** Local state */
  const [navRightOpen, setNavRightOpen] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [pathTo, setPathTo] = useState('false')
  const [pageName, setPageName] = useState('')
  const [pathToTipsPage, setPathToTipsPage] = useState('')
  const [tipsData, setTipsData] = useState('')
  const [data, setData] = useState('')

  /** Functions from hook */
  const { setSelectedItem, setGoBack } = UseProducts()

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY)
    }
  }, [scroll])

  const handleNavRightOpen = useCallback(() => {
    setNavRightOpen(!navRightOpen)
  }, [setNavRightOpen, navRightOpen])

  const handleSetSelectedSideNavBarItem = useCallback((selectedName: string) => {
    setSelectedItem(selectedName)
  }, [setSelectedItem])

  const goBack = useCallback(() => {
    setGoBack()
  }, [selectedItems])

  /** funkcija za stranicu proizvodi */
  const setProductPath = (value: string) => {
    const newData = ProductData.filter(product => product.name === value)
    setData(newData[0] as any)
    Object.values(ProductsDataInfo).forEach((product) => {
      if (product === value) {
        setPathTo(`/${product.replace(/\s/g, '')}`)
        setPageName(value)
      }
    })
  }

  const exportData = useMemo(
    () => (
      {
        navRightOpen,
        handleNavRightOpen,
        flexDirection,
        goBack,
        selected,
        handleSetSelectedSideNavBarItem,
        selectedItems,
        scroll,
        pathTo,
        setPathTo,
        pageName,
        setPageName,
        tipsData,
        setTipsData,
        data,
        setData,
        setProductPath,
        pathToTipsPage,
        setPathToTipsPage
      }),
    [
      navRightOpen,
      handleNavRightOpen,
      flexDirection,
      goBack,
      selected,
      handleSetSelectedSideNavBarItem,
      selectedItems,
      scroll,
      pathTo,
      setPathTo,
      pageName,
      setPageName,
      tipsData,
      setTipsData,
      data,
      setData,
      setProductPath,
      pathToTipsPage,
      setPathToTipsPage
    ]
  )
  return (
        <SiteNavigationContext.Provider value={exportData}>{children}</SiteNavigationContext.Provider>
  )
}

export default siteNavigationContextContainer
