import styled, { css } from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import FooterBackground from 'constants/img/footerBackground.png'
import { calcSize, devices } from '../../constants/ResponsiveBreakpoints'

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
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-width: 1px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-bottom-style: solid;
  background-image: url(${FooterBackground});
  background-position: center;

  @media ${devices.xs} {
    padding: 20px;
  }

  @media ${devices.sm} {
    padding: 4px 8px;
    height: 140px;
  }

  @media ${devices.md} {
    padding: 5px 10px;
    height: 140px;
  }

  @media ${devices.lg} {
    padding: 6px 12px;
    height: 150px;
  }

  @media ${devices.xl} {
    padding: 7px 14px;
    height: 170px;
  }
`

export const FooterFirstPartCell = styled.div<{ alignItems?: string }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  max-width: 370px;
  padding: 0 10px;

  @media ${devices.xs} {
    max-width: 200px;
    padding: 5px 0;
    justify-content: center;
  }

  @media ${devices.sm} {
    max-width: 220px;
  }

  @media ${devices.md} {
    max-width: 220px;
  }

  @media ${devices.lg} {
    max-width: 250px;
  }

  @media ${devices.xl} {
    max-width: 270px;
  }

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

  @media ${devices.xs} {
    flex-direction: column;
  }
  
`

export const FooterFirstPartTextContainer = styled.div <{
    flexDirection?: string, alignItems?: string,
    justifyContent?: string, minWidth?: number
}>`

  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  max-width: 370px;

  @media ${devices.xs} {
    max-width: 200px;
    text-align: center;
    justify-content: center;
  }

  @media ${devices.sm} {
    max-width: 200px;
  }

  @media ${devices.md} {
    max-width: 200px;
  }

  @media ${devices.lg} {
    max-width: 240px;
  }

  @media ${devices.xl} {
    max-width: 270px;
  }

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

    @media ${devices.xs} {
      min-width: 111px;
    }

    @media ${devices.sm} {
      min-width: 148px;
    }

    @media ${devices.md} {
      min-width: 191px;
    }

    @media ${devices.lg} {
      min-width: 231px;
    }

    @media ${devices.xl} {
      min-width: 269px;
    }

  `}
`

export const FooterFirstPartCellHeaderText = styled.h1`
  margin: 0;
  padding-bottom: 5px;
  font-size: 30px;
  font-weight: bolder;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};

  @media ${devices.xs} {
    font-size: 15px;
  }

  @media ${devices.sm} {
    font-size: 15px;
  }

  @media ${devices.md} {
    font-size: 15px;
  }

  @media ${devices.lg} {
    font-size: 20px;
  }

  @media ${devices.xl} {
    font-size: 25px;
  }
`

export const FooterFirstPartCellText = styled.a<{ paddingLeft?: number }>`
  margin: 8px 0;
  font-size: 20px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  text-decoration: none;
  text-align: left;

  @media ${devices.xs} {
    margin: 4px 0;
    font-size: 13px;
    text-align: center;
  }

  @media ${devices.sm} {
    margin: 4px 0;
    font-size: 13px;
  }

  @media ${devices.md} {
    margin: 4px 0;
    font-size: 13px;
  }

  @media ${devices.lg} {
    margin: 5px 0;
    font-size: 15px;
  }

  @media ${devices.xl} {
    margin: 5px 0;
    font-size: 27px;
  }

  ${props => props.paddingLeft && css`
    padding-left: ${props.paddingLeft}px;

    // @media ${devices.xs} {
    //   padding-left: 2px;
    // }
    //
    // @media ${devices.sm} {
    //   padding-left: 3px;
    // }
    //
    // @media ${devices.md} {
    //   padding-left: 3px;
    // }
    //
    // @media ${devices.lg} {
    //   padding-left: 4px;
    // }
    //
    // @media ${devices.xl} {
    //   padding-left: 5px;
    // }
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

  @media ${devices.xs} {
    padding: 0 5px;
    height: 25px;
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;
    justify-content: space-around;
  }

  @media ${devices.sm} {
    height: 20px;
    padding: 0 8px;
  }

  @media ${devices.md} {
    height: 25px;
    padding: 0 10px;
  }

  @media ${devices.lg} {
    height: 35px;
    padding: 0 12px;
  }

  @media ${devices.xl} {
    height: 40px;
    padding: 0 15px;
  }

`

export const FooterSecondPartText = styled.p`
  font-size: 15px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  font-weight: normal;

  @media ${devices.xs} {
    font-size: 10px;
  }

  @media ${devices.sm} {
    font-size: 10px;
  }

  @media ${devices.md} {
    font-size: 10px;
  }

  @media ${devices.lg} {
    font-size: 13px;
  }

  @media ${devices.xl} {
    font-size: 13px;
  }
`

export const FooterSecondPartLinkText = styled.a`
  font-size: 13px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  font-weight: bold;
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;

  @media ${devices.xs} {
    font-size: 8px;
    margin-right: 2px;
    margin-left: 2px;
  }

  @media ${devices.sm} {
    font-size: 8px;
    margin-right: 2px;
    margin-left: 2px;
  }

  @media ${devices.md} {
    font-size: 8px;
    margin-right: 2px;
    margin-left: 2px;
  }

  @media ${devices.lg} {
    font-size: 13px;
  }

  @media ${devices.xl} {
    font-size: 13px;
  }
`

export const FooterContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 10px 0;

  @media ${devices.xs} {
    flex-direction: column;
    align-items: center;
  }
  
`
