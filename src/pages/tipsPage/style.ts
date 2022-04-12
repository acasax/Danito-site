import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'

export const TipsPageLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const TipsPageHeaderImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const TipsPageHeaderImage = styled.img`
  width: 100%;
`

export const TipsPageTextContainer = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  padding: 50px 0;
  width: 70%;
`

export const TipsTextItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TipsPageTextHeader = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  margin: 15px 0;
  letter-spacing: 1px;
`

export const TipsPageTextPContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TipsPageTextP = styled.p`
  font-size: 17px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  margin: 10px 0;
  letter-spacing: 1px;
`

export const TipsPageDatePosted = styled.p`
  background-color: #272727;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  width: -moz-fit-content;
  width: fit-content;
`

export const TipsPageContactUsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const TipsPageContactUsText = styled.a`
  font-size: 35px;
  font-weight: bolder;
  color: ${Styles.Colours.PALETTE.DANITO._black};
`
