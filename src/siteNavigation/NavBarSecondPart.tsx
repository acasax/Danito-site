import React, { useContext } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import {
  NavSecondPartContainer,
  NavSecondPartMenuBody,
  NavSecondPartMenuBodyButton,
  NavSecondPartMenuBodyLink
} from './style'
import { SiteNavigationContext } from './context'

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
  return (
        <NavSecondPartContainer>
            <NavSecondPartMenuBody>
                {navRightOpen
                  ? (
                        <ArrowBackIosIcon onClick={handleNavRightOpen} sx={{ fontSize: 35 }}/>
                    )
                  : (
                        <MenuIcon onClick={handleNavRightOpen} sx={{ fontSize: 35 }}/>
                    )}

                <NavSecondPartMenuBodyButton
                    onClick={handleNavRightOpen}>PROIZVODI</NavSecondPartMenuBodyButton>

                <NavSecondPartMenuBodyLink href="/">POČETNA</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink href="/onama">O NAMA</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink href="/galerija">GALERIJA</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink href="/kontakt">KONTAKT</NavSecondPartMenuBodyLink>
            </NavSecondPartMenuBody>
        </NavSecondPartContainer>
  )
}

export default NavBarSecondPart
