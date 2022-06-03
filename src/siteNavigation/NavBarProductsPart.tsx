import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideNavBarItem from './sideBarItem'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import {
  NavBarProductContainerText,
  NavBarProductPartHeaderContainer,
  NavBarProductPartPrimaryLinksContainer,
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

  return (
        <NavBarProductSideBarContainer isDisplay={navRightOpen}>
            <NavBarProductPartHeaderContainer>
                {
                    selected
                      ? <ArrowBackIosIcon onClick={goBack}
                                            sx={{ fontSize: 30, color: Styles.Colours.PALETTE.DANITO._white }}/>
                      : <ArrowDownwardIcon sx={{ fontSize: 30, color: Styles.Colours.PALETTE.DANITO._white }}/>
                }
                <NavBarProductContainerText>{!selected ? Translate.CHOSE_CATEGORY : selected}</NavBarProductContainerText>
            </NavBarProductPartHeaderContainer>
            <NavBarProductsPartProductsContainer>
                {selectedItems.length > 1 && selectedItems.map((x, key) => {
                  return (
                        <Link to={`/${(x?.name || '').replace(/\s/g, '')}`}
                              onClick={() => setProductPath(x.name)} key={key}
                              style={NavBarProductsPartProductsText}>
                            <SideNavBarItem
                                img={x.image}
                                buttonText={x.name}
                            />
                        </Link>
                  )
                })}
                {
                    width < calcSize.large && (
                        <>
                            <Link
                                to="/"
                                style={NavBarProductPartPrimaryLinksContainer}
                            >
                                <SideNavBarItem
                                    buttonText={Translate.NAV_BAR_SECOND_PART_HOME}
                                    img={''}
                                />
                            </Link>
                            <Link
                                to="/onama"
                                style={NavBarProductPartPrimaryLinksContainer}
                            >
                                <SideNavBarItem
                                    buttonText={Translate.NAV_BAR_SECOND_PART_ABOUT}
                                    img={''}
                                />
                            </Link>
                            <Link
                                to="/galerija"
                                style={NavBarProductPartPrimaryLinksContainer}
                            >
                                <SideNavBarItem
                                    buttonText={Translate.NAV_BAR_SECOND_PART_GALLERY}
                                    img={''}
                                />
                            </Link>
                            <Link
                                to="/kontakt"
                                style={NavBarProductPartPrimaryLinksContainer}
                            >
                                <SideNavBarItem
                                    buttonText={Translate.NAV_BAR_SECOND_PART_CONTACT}
                                    img={''}
                                />
                            </Link>
                        </>
                    )
                }
            </NavBarProductsPartProductsContainer>
        </NavBarProductSideBarContainer>
  )
}

export default NavBarProductsPart
