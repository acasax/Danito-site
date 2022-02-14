import React from 'react'
import { TButtonNavLeft } from './d'
import { ButtonNavLeftButton, ButtonNavLeftContainer, ButtonNavLeftContainerImg } from './style'

const ButtonNavLeft = ({ buttonName, setSelected, img, imgClass }: TButtonNavLeft) => {
  return (
        <ButtonNavLeftContainer onClick={() => setSelected(buttonName)} imgClass={!!imgClass}>
            {img ? <ButtonNavLeftContainerImg src={img} alt="img icon"/> : null}
            <ButtonNavLeftButton>{buttonName}</ButtonNavLeftButton>
        </ButtonNavLeftContainer>
  )
}

export default ButtonNavLeft
