import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import '~react-image-gallery/styles/scss/image-gallery.scss'

export const AboutContainer = styled.div`
  background-color: ${Styles.Colours.PALETTE.DANITO._liteGray};
`

export const AboutHeaderImageContainer = styled.div`
  width: 100%;
  height: auto;
`

export const AboutHeaderImage = styled.img`
  width: 100%;
`

export const AboutContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const AboutHeaderTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100px;
`

export const AboutHeaderText = styled.h1`
  text-align: center;
  font-size: 25px;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  font-weight: normal;
  font-style: italic;
`

export const AboutInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  text-align: left;
`

export const AboutInfoHeaderText = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  width: 100%;
`

export const AboutInfoText = styled.p`
  font-size: 18px;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  width: 100%;
`

export const AboutInfoGalleyContainer = styled.div`
  display: flex;
`
