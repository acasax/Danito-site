import React from 'react'
import { LogoHeaderText, LogoImagePart, LogoImagePartContainer, LogoTextPartContainer, LogoTextSubHeader } from './style'
import LogoImg from 'constants/img/Logo.png'
import { TLogoComponent } from './d'

/**
 *
 * About Component
 * @author SaxDev 03.01.2022
 *
 * This component is created a Logo of company.
 * Is used in several places on website.
 *
 * imgSize - in px height of image part of logo
 * font color - color of text part of logo
 * headerTextFontSize - font size of header text in logo ( this is upper one)
 * headerSubTextFontSize - font side of sub header text in logo ( this is lower one )
 *
 * */

const LogoComponent = ({ imgSize, fontColor, headerTextFontSize, headerSubTextFontSize }: TLogoComponent) => {
  return (
        <LogoImagePartContainer href={'/'} color={fontColor}>
            <LogoImagePart src={LogoImg} alt={'danito logo'} imageSize={imgSize}/>
            <LogoTextPartContainer>
                <LogoHeaderText fontSize={headerTextFontSize}>DANITO</LogoHeaderText>
                <LogoTextSubHeader fontSize={headerSubTextFontSize}>construction</LogoTextSubHeader>
            </LogoTextPartContainer>
        </LogoImagePartContainer>
  )
}

export default LogoComponent
