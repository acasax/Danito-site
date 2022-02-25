import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterFirstPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: 250px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-width: 1px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-style: solid;ó
`

export const FooterFirstPartCell = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const FooterFirstPartRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

export const FooterSecondPartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  justify-content: center;
  align-items: center;
`
