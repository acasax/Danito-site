import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavProducts/NavProducs.css'
import SideNavBarItem from './sideBarItem'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import {
  NavBarProductContainerText,
  NavBarProductPartHeaderContainer,
  NavBarProductSideBarContainer,
  NavBarProductsPartProductsContainer,
  NavBarProductsPartProductsText
} from './style'
import { SiteNavigationContext } from './context'
import { useSelector } from 'react-redux'
import { _selectNavBarItems } from '../store/SiteNavigation/helpers'
import { Styles } from 'constants/StyleConstants'
import { Translate } from '../translate/data'
import { calcSize } from '../constants/ResponsiveBreakpoints'

/**
 *
 * About Component
 *
 * @author SaxDev 02.25.2022
 *
 * This component using to display side menu of products.
 *
 * Work Method
 *
 * To products layout send data to render based on selected at menu
 *
 * */

const NavBarProductsPart = () => {
  const selectedItems = useSelector(_selectNavBarItems)
  const { navRightOpen, selected, goBack, setProductPath } = useContext(SiteNavigationContext)
  const [width, setWidth] = useState(0)

  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  const NavMenuIcon = {
    fontSize:
            width > calcSize.large && width <= calcSize.extralarge
              ? calcSize.extralarge * 30 / calcSize.hd
              : width > calcSize.medium && width <= calcSize.large
                ? calcSize.large * 30 / calcSize.hd
                : width > calcSize.small && width <= calcSize.medium
                  ? calcSize.medium * 30 / calcSize.hd
                  : width > calcSize.xsmall && width <= calcSize.small
                    ? calcSize.small * 30 / calcSize.hd
                    : width > 0 && width <= calcSize.xsmall
                      ? calcSize.xsmall * 30 / calcSize.hd
                      : 30,
    color: Styles.Colours.PALETTE.DANITO._white
  }

  return (
        <NavBarProductSideBarContainer isDisplay={navRightOpen}>
            <NavBarProductPartHeaderContainer>
                {
                    selected
                      ? <ArrowBackIosIcon onClick={goBack} sx={NavMenuIcon}/>
                      : <ArrowDownwardIcon sx={NavMenuIcon}/>
                }
                <NavBarProductContainerText>{!selected ? Translate.CHOSE_CATEGORY : selected}</NavBarProductContainerText>
            </NavBarProductPartHeaderContainer>
            <NavBarProductsPartProductsContainer>
                {selectedItems.length > 1 && selectedItems.map((x, key) => {
                  return (
                        <Link to={`/${x.name.replace(/\s/g, '')}`}
                              onClick={() => setProductPath(x.name)} key={key}
                              style={NavBarProductsPartProductsText}>
                            <SideNavBarItem
                                img={x.image}
                                buttonText={x.name}
                            />
                        </Link>
                  )
                })}
            </NavBarProductsPartProductsContainer>
        </NavBarProductSideBarContainer>
  )
}

export default NavBarProductsPart
