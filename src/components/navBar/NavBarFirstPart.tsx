import React from 'react'
import Logo from 'constants/img/Logo.png'
import {
  NavFirstPartContainer,
  NavFirstPartLogoPart,
  NavFirstPartLogoPartImg,
  NavFirstPartLogoPartTextHeading,
  NavFirstPartLogoPartTextParagraph,
  NavFirstPartLogoPartTextPart
} from './style'

/**
 *
 * About component
 *
 * this component is a part of navBar of WebPage
 *
 * in this case this is black part of navBar
 * */

const NavBarFirstPart = () => {
  return (
        <NavFirstPartContainer>
            <NavFirstPartLogoPart href="/">
                <NavFirstPartLogoPartImg src={Logo} alt="datito logo"/>
                <NavFirstPartLogoPartTextPart>
                    <NavFirstPartLogoPartTextHeading>DANITO</NavFirstPartLogoPartTextHeading>
                    <NavFirstPartLogoPartTextParagraph>construction</NavFirstPartLogoPartTextParagraph>
                </NavFirstPartLogoPartTextPart>
            </NavFirstPartLogoPart>
        </NavFirstPartContainer>
  )
}

export default NavBarFirstPart
