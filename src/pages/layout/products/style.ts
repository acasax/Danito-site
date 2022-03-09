import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'

export const ProductPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProductPageHeaderImageContainer = styled.div`
  width: 100%;
  height: auto;
`

export const ProductPageHeaderImage = styled.img`
  width: 100%;
`

export const ProductPageContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`

export const ProductPageContentVideoContainer = styled.div`
  display: flex;
  padding: 30px;
  max-height: 500px;
  justify-content: center;
`

export const ProductPageContentVideo = styled.video`
  height: 100%;
`

export const ProductPageContentImage = styled.img`
  height: 100%;
`

export const ProductPageContentOptionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  padding-top: 40px;
`

export const ProductPageContainerCharacteristicContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 20px;
`

export const ProductPageCharacteristicItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
  text-align: justify;
  line-height: 22px;
  max-width: 450px;
  min-height: 450px;
`

export const ProductPageCharacteristicItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-width: 2px;
  border-bottom-style: solid;
  padding-bottom: 20px;
`

export const ProductPageCharacteristicItemTextContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`

export const ProductPageCharacteristicItemText = styled.p`
  font-size: 17px;
  color: ${Styles.Colours.PALETTE.DANITO._black};
`

export const ProductPageProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 50px;
`

export const ProductPagePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 80%;
  margin: auto;
`

export const ProductPageProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const ProductPageProfileImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

export const ProductPageProfileImg = styled.img`
  max-height: 200px;
  transition: 0.5s ease-in-out;
  border: 1px solid black;


  &:hover {
    box-shadow: 5px 5px 15px 5px #000000;
    transform: scale(1.05);
    transition: 0.5s ease-in-out;
  }
`
