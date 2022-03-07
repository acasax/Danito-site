import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'

export const GalleyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`

export const GalleryContentContainer = styled.div`
  background-color: ${Styles.Colours.PALETTE.DANITO._black};
  padding: 120px 0;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const GalleryElementContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  justify-content: center;
  width: 80%;
`

export const GalleyCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`

export const GalleyCarouselImage = styled.img`
  width: 250px;
  max-height: 150px;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 3px;
  border: none;

  &:hover {
    transform: scale(1.1);
  }
`

export const GalleyCarouselSelectedImageContainer = styled.div`
  display: flex;
  position: fixed;
  top: 250px;
  z-index: 100000;
  opacity: 1 !important;
`

export const GalleyCarouselSelectedImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  width: 900px;
`

export const GalleyCarouselSelectedImageContainerIcons = {
  fontSize: 60,
  position: 'relative',
  top: 250,
  color: Styles.Colours.PALETTE.DANITO._white,
  cursor: 'pointer'
}

export const GalleyCarouselSelectedImageContainerIconsLeft = {
  left: 70
}

export const GalleyCarouselSelectedImageContainerIconsRight = {
  right: 70
}
