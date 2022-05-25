import React, { useContext, useEffect, useState } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import {
  NavSecondPartContainer,
  NavSecondPartMenuBody,
  NavSecondPartMenuBodyButton,
  NavSecondPartMenuBodyLink
} from './style'
import { SiteNavigationContext } from './context'
import { Styles } from 'constants/StyleConstants'
import { Translate } from '../translate/data'
import { calcSize } from '../constants/ResponsiveBreakpoints'

/**
 *
 * About Component
 *
 * @author saxDev 02.16.2022
 *
 * this component is a part od navBar of WebPage
 * functionality of this component is to navigate to primary pages
 *
 * component is has tabs to link to another pages
 *
 * */

const NavBarSecondPart = () => {
  const { navRightOpen, handleNavRightOpen } = useContext(SiteNavigationContext)
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
              ? calcSize.extralarge * 35 / calcSize.hd
              : width > calcSize.medium && width <= calcSize.large
                ? calcSize.large * 35 / calcSize.hd
                : width > calcSize.small && width <= calcSize.medium
                  ? calcSize.medium * 35 / calcSize.hd
                  : width > calcSize.xsmall && width <= calcSize.small
                    ? calcSize.small * 35 / calcSize.hd
                    : width > 0 && width <= calcSize.xsmall
                      ? calcSize.xsmall * 35 / calcSize.hd
                      : 35,
    color: Styles.Colours.PALETTE.DANITO._white
  }

  return (
        <NavSecondPartContainer>
            <NavSecondPartMenuBody>
                {navRightOpen
                  ? (
                        <ArrowBackIosIcon onClick={handleNavRightOpen} sx={NavMenuIcon}/>
                    )
                  : (
                        <MenuIcon onClick={handleNavRightOpen} sx={NavMenuIcon}/>
                    )}

                <NavSecondPartMenuBodyButton
                    onClick={handleNavRightOpen}>{Translate.NAV_BAR_SECOND_PART_PRODUCTS}</NavSecondPartMenuBodyButton>

                <NavSecondPartMenuBodyLink to="/">{Translate.NAV_BAR_SECOND_PART_HOME}</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink
                    to="/onama">{Translate.NAV_BAR_SECOND_PART_ABOUT}</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink
                    to="/galerija">{Translate.NAV_BAR_SECOND_PART_GALLERY}</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink
                    to="/kontakt">{Translate.NAV_BAR_SECOND_PART_CONTACT}</NavSecondPartMenuBodyLink>
            </NavSecondPartMenuBody>
        </NavSecondPartContainer>
  )
}

export default NavBarSecondPart
