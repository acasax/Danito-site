import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { TSiteNavigationContext } from './d'
import { useSelector } from 'react-redux'
import {
  _selectNavBarItems,
  _selectorFlexDirection,
  _selectorProductsData,
  _selectorSelectedPage,
  _selectSelectedItem
} from 'store/SiteNavigation/helpers'
import { UseProducts } from '../hooks/navBar/useProducts'
import { ProductsCategory, ProductsDataInfo, ProductsSubCategory } from 'store/SiteNavigation/d'
import { Translate } from '../translate/data'

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
  const ProductDate = useSelector(_selectorProductsData)
  const selectedPage = useSelector(_selectorSelectedPage)

  /** Local state */
  const [navRightOpen, setNavRightOpen] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [pathTo, setPathTo] = useState('false')
  const [pageName, setPageName] = useState('')
  const [pathToTipsPage, setPathToTipsPage] = useState('')
  const [tipsData, setTipsData] = useState('')
  const [data, setData] = useState('')
  const pagesArr = [
    Translate.NAV_BAR_SECOND_PART_ABOUT,
    Translate.NAV_BAR_SECOND_PART_GALLERY,
    Translate.NAV_BAR_SECOND_PART_CONTACT,
    Translate.NAV_BAR_SECOND_PART_HOME]
  const productCategory = (Object.keys(ProductsCategory) as Array<keyof typeof ProductsCategory>).map((key) => {
    return key
  })
  const productSubCategory = (Object.keys(ProductsSubCategory) as Array<keyof typeof ProductsCategory>).map((key) => {
    return key
  })
  const products = (Object.keys(ProductsDataInfo) as Array<keyof typeof ProductsCategory>).map((key) => {
    return key
  })

  /** Functions from hook */
  const { setSelectedItem, setGoBack, setSelectedPage } = UseProducts()

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY)
    }
  }, [scroll])

  const handleNavRightOpen = useCallback(() => {
    setNavRightOpen(!navRightOpen)
  }, [setNavRightOpen, navRightOpen])

  const handleSetSelectedSideNavBarItem = useCallback((selectedName: string) => {
    if (pagesArr.includes(selectedName)) {
      setSelectedPage(selectedName)
      handleNavRightOpen()
    } else {
      setSelectedItem(selectedName)
    }
  }, [setSelectedItem, setSelectedPage, handleNavRightOpen])

  const goBack = useCallback(() => {
    setGoBack()
  }, [selectedItems])

  const setProductPath = (value: string, open = true) => {
    const newData = ProductDate.filter(product => product.name === value)
    setData(newData[0] as any)
    Object.values(ProductsDataInfo).forEach((product) => {
      if (product === value) {
        setPathTo(`/${product.replace(/\s/g, '')}`)
        setPageName(value)
        if (open) {
          handleNavRightOpen()
        }
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
        setPathToTipsPage,
        selectedPage,
        pagesArr,
        productCategory,
        productSubCategory,
        products
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
      setPathToTipsPage,
      selectedPage,
      pagesArr,
      productCategory,
      productSubCategory,
      products
    ]
  )
  return (
        <SiteNavigationContext.Provider value={exportData}>{children}</SiteNavigationContext.Provider>
  )
}

export default siteNavigationContextContainer
