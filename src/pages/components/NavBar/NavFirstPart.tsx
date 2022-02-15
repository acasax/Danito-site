import React from 'react'
import Logo from '../../../constants/img/Logo.png'
import {
  NavFirstPartContainer,
  NavFirstPartLogoPart,
  NavFirstPartLogoPartImg,
  NavFirstPartLogoPartTextHeading,
  NavFirstPartLogoPartTextParagraph,
  NavFirstPartLogoPartTextPart
} from './style'

const NavFirstPart = () => {
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

export default NavFirstPart
