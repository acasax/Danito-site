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

  return (
        <NavSecondPartContainer>
            <NavSecondPartMenuBody>
                {navRightOpen
                  ? (
                        <ArrowBackIosIcon onClick={handleNavRightOpen}
                                          sx={{ fontSize: 30, color: Styles.Colours.PALETTE.DANITO._white }}/>
                    )
                  : (
                        <MenuIcon onClick={handleNavRightOpen}
                                  sx={{ fontSize: 30, color: Styles.Colours.PALETTE.DANITO._white }}/>
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
