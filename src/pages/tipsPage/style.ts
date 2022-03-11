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
  gap: 50px;
  width: 70%;
`

export const TipsPageTextHeader = styled.h3`
  font-size: 17px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._black};
`

export const TipsPageTextPContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TipsPageTextP = styled.p`
  font-size: 15px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
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
