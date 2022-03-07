import styled, { css } from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import FooterBackground from 'constants/img/footerBackground.png'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const FooterFirstPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  height: 200px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-width: 1px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-style: solid;
  background-image: url(${FooterBackground});
  background-position: center;
`

export const FooterFirstPartCell = styled.div<{ alignItems?: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}
`

export const FooterFirstPartRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-content: center;
  justify-content: left;
`

export const FooterFirstPartTextContainer = styled.div <{
    flexDirection?: string, alignItems?: string,
    justifyContent?: string, minWidth?: number
}>`

  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  min-width: 100px;
  max-width: 370px;

  ${props => props.flexDirection && css`
    flex-direction: ${props.flexDirection};
  `}

  ${props => props.alignItems && css`
    align-items: ${props.alignItems};
  `}

  ${props => props.justifyContent && css`
    justify-content: ${props.justifyContent};
  `}

  ${props => props.minWidth && css`
    min-width: ${props.minWidth}px;
  `}
`

export const FooterFirstPartCellHeaderText = styled.h1`
  margin: 0;
  padding-bottom: 5px;
  font-size: 30px;
  font-weight: bolder;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
`

export const FooterFirstPartCellText = styled.a<{ paddingLeft?: number }>`
  margin: 8px 0;
  font-size: 20px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  text-decoration: none;
  text-align: left;

  ${props => props.paddingLeft && css`
    padding-left: ${props.paddingLeft}px;
  `}
`

export const FooterFirstPartImagePartContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

/** Footer second part designe */
export const FooterSecondPartContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`

export const FooterSecondPartText = styled.p`
  font-size: 13px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  font-weight: normal;
`

export const FooterSecondPartLinkText = styled.a`
  font-size: 13px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  font-weight: bold;
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;
`
