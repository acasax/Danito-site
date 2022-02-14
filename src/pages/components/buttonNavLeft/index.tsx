import React from 'react'
import { TButtonNavLeft } from './d'
import {
  ButtonNavLeftButton,
  ButtonNavLeftContainer,
  ButtonNavLeftContainerImg,
  ButtonNavLeftTopImgContainer
} from './style'

const ButtonNavLeft = ({ buttonName, setSelected, img, imgClass }: TButtonNavLeft) => {
  if (imgClass) {
    return (
            <ButtonNavLeftTopImgContainer onClick={() => setSelected(buttonName)}>
                {img ? <img src={img} alt="img icon"/> : null}
                <ButtonNavLeftButton>{buttonName}</ButtonNavLeftButton>
            </ButtonNavLeftTopImgContainer>
    )
  }

  return (
        <ButtonNavLeftContainer onClick={() => setSelected(buttonName)}>
            {img ? <ButtonNavLeftContainerImg src={img} alt="img icon"/> : null}
            <ButtonNavLeftButton>{buttonName}</ButtonNavLeftButton>
        </ButtonNavLeftContainer>
  )
}

export default ButtonNavLeft
