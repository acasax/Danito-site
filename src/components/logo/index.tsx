import React from 'react'
import { LogoHeaderText, LogoImagePart, LogoImagePartContainer, LogoTextPartContainer, LogoTextSubHeader } from './style'
import LogoImg from 'constants/img/Logo.png'
import { TLogoComponent } from './d'

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
