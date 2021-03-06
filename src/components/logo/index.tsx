import React from 'react'
import { LogoHeaderText, LogoImagePart, LogoImagePartContainer, LogoTextPartContainer, LogoTextSubHeader } from './style'
import LogoImg from 'constants/img/Logo.png'
import { TLogoComponent } from './d'
import { Translate } from '../../translate/data'

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
        <LogoImagePartContainer to={'/'} color={fontColor}>
            <LogoImagePart src={LogoImg} alt={'danito logo'} imageSize={imgSize}/>
            <LogoTextPartContainer>
                <LogoHeaderText fontSize={headerTextFontSize}>{Translate.COMPANY_NAME}</LogoHeaderText>
                <LogoTextSubHeader fontSize={headerSubTextFontSize}>{Translate.COMPANY_NAME_I}</LogoTextSubHeader>
            </LogoTextPartContainer>
        </LogoImagePartContainer>
  )
}

export default LogoComponent
