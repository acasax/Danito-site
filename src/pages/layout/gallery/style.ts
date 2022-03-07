import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import Patter from 'constants/img/pattern.jpg'

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
  padding: 5px;
  border-radius: 10px;
  gap: 10px;
  justify-content: center;
  width: 70%;
`
