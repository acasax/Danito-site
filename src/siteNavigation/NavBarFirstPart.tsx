import React from 'react'
import { NavFirstPartContainer } from './style'
import LogoComponent from '../components/logo'

/**
 *
 * About component
 *
 * @author saxDev 02.15.2022
 *
 * this component is a part of navBar of WebPage
 *
 * in this case this is black part of navBar
 * */

const NavBarFirstPart = () => {
  return (
        <NavFirstPartContainer>
            <LogoComponent />
        </NavFirstPartContainer>
  )
}

export default NavBarFirstPart
