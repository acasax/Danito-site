import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import { devices } from '../../constants/ResponsiveBreakpoints'

export const AboutContainer = styled.div`
  background-color: ${Styles.Colours.PALETTE.DANITO._white};
`

export const AboutHeaderImageContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: -5px;
`

export const AboutHeaderImage = styled.img`
  width: 100%;
  height: auto;
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

  @media ${devices.xs} {
    min-height: 30px;
  }

  @media ${devices.sm} {
    min-height: 40px;
  }

  @media ${devices.md} {
    min-height: 52px;
  }

  @media ${devices.lg} {
    min-height: 63px;
  }

  @media ${devices.xl} {
    min-height: 73px;
  }
`

export const AboutHeaderText = styled.h1`
  text-align: center;
  font-size: 25px;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  font-weight: normal;
  font-style: italic;
  letter-spacing: 1px;

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
    font-size: 15px;
  }

  @media ${devices.xl} {
    font-size: 18px;
  }
`

export const AboutInfoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  text-align: left;

  @media ${devices.xs} {
    padding: 10px;
  }

  @media ${devices.sm} {
    padding: 10px 12px;
  }

  @media ${devices.md} {
    padding: 10px 15px;
  }

  @media ${devices.lg} {
    padding: 31px 19px;
  }

  @media ${devices.xl} {
    padding: 36px 22px;
  }
`

export const AboutInfoHeaderText = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  width: 100%;
  letter-spacing: 1px;

  @media ${devices.xs} {
    font-size: 17px;
  }

  @media ${devices.sm} {
    font-size: 17px;
  }

  @media ${devices.md} {
    font-size: 17px;
  }

  @media ${devices.lg} {
    font-size: 18px;
  }

  @media ${devices.xl} {
    font-size: 20px;
  }
`

export const AboutInfoText = styled.p`
  font-size: 18px;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  width: 100%;
  line-height: 20px;
  letter-spacing: 0.5px;

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
    font-size: 15px;
  }

  @media ${devices.xl} {
    font-size: 15px;
  }
`

export const AboutInfoTextHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  text-align: left;
`

export const AboutInfoTextHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  letter-spacing: 1px;

  @media ${devices.xs} {
    font-size: 16px;
  }
  @media ${devices.sm} {
    font-size: 16px;
  }
  @media ${devices.md} {
    font-size: 16px;
  }
  @media ${devices.lg} {
    font-size: 16px;
  }
  @media ${devices.xl} {
    font-size: 17px;
  }
`

export const AboutInfoRow = styled.div`
  display: flex;
  flex-direction: row;

  @media ${devices.xs} {
    flex-direction: column;
  }
  
  @media ${devices.sm} {
    flex-direction: column;
  }
`

export const AboutInfoGalleyContainer = styled.div`
  display: flex;
  flex: 1;
  width: 95%;
  justify-content: center;
  align-items: center;
  max-height: 800px;
  padding: 50px 30px;

  @media ${devices.xs} {
    padding: 10px 10px;
  }

  @media ${devices.sm} {
    padding: 10px 10px;
  }

  @media ${devices.md} {
    padding: 10px 15px;
  }

  @media ${devices.lg} {
    padding: 31px 19px;
  }

  @media ${devices.xl} {
    padding: 36px 22px;
  }
`

export const AboutInfoCarousel = {
  maxHeight: 667,
  maxWidth: 1000
}
