import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import { devices } from '../../constants/ResponsiveBreakpoints'

export const TipsPageLayoutContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media ${devices.xs} {
    margin-top: 61px;
  }

  @media ${devices.sm} {
    margin-top: 61px;
  }

  @media ${devices.md} {
    margin-top: 61px;
  }
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

  @media ${devices.xs} {
    padding: 15px 0;
    width: 85%;
  }

  @media ${devices.sm} {
    padding: 20px 0;
    width: 85%;
  }

  @media ${devices.md} {
    padding: 26px 0;
  }

  @media ${devices.lg} {
    padding: 31px 0;
  }

  @media ${devices.xl} {
    padding: 36px 0;
  }
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

  @media ${devices.xs} {
    font-size: 13px;
    margin: 4.5px 0;
  }

  @media ${devices.sm} {
    font-size: 13px;
    margin: 6px 0;
  }

  @media ${devices.md} {
    font-size: 15px;
    margin: 8px 0;
  }

  @media ${devices.lg} {
    font-size: 15px;
    margin: 9px 0;
  }

  @media ${devices.xl} {
    font-size: 17px;
    margin: 11px 0;
  }
`

export const TipsPageTextPContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${devices.xs} {
    gap: 3px;
  }

  @media ${devices.sm} {
    gap: 4px;
  }

  @media ${devices.md} {
    gap: 5px;
  }

  @media ${devices.lg} {
    gap: 6px;
  }

  @media ${devices.xl} {
    gap: 7px;
  }
`

export const TipsPageTextP = styled.p`
  font-size: 17px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  margin: 10px 0;
  letter-spacing: 1px;
  line-height: 15px;

  @media ${devices.xs} {
    font-size: 11px;
    margin: 3px 0;
  }

  @media ${devices.sm} {
    font-size: 11px;
    margin: 4px 0;
  }

  @media ${devices.md} {
    font-size: 15px;
    margin: 5px 0;
  }

  @media ${devices.lg} {
    font-size: 15px;
    margin: 6px 0;
  }

  @media ${devices.xl} {
    font-size: 15px;
    margin: 7px 0;
  }
`

export const TipsPageDatePosted = styled.p`
  background-color: #272727;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
  width: -moz-fit-content;
  width: fit-content;

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
    font-size: 12px;
  }

  @media ${devices.xl} {
    font-size: 12px;
  }
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

  @media ${devices.xs} {
    font-size: 15px;
  }

  @media ${devices.sm} {
    font-size: 15px;
  }

  @media ${devices.md} {
    font-size: 18px;
  }

  @media ${devices.lg} {
    font-size: 22px;
  }

  @media ${devices.xl} {
    font-size: 25px;
  }
`

export const InTipsImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

export const InTipsImageD = styled.img`
  max-width: 600px;
  width: auto;
  max-height: 600px;
  
  @media ${devices.xs} {
    max-width: 300px;
    max-height: 300px;
  }

  @media ${devices.sm} {
    max-width: 300px;
    max-height: 300px;
  }

  @media ${devices.md} {
    max-width: 350px;
    max-height: 350px;
  }

  @media ${devices.lg} {
    max-width: 400px;
    max-height: 400px;
  }

  @media ${devices.xl} {
    max-width: 450px;
    max-height: 450px;
  }
`

export const InTipsDefaultImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  
  @media ${devices.xs} {
    max-width: 80px;
    max-height: 80px;
  }

  @media ${devices.sm} {
    max-width: 80px;
    max-height: 80px;
  }

  @media ${devices.md} {
    max-width: 100px;
    max-height: 100px;
  }

  @media ${devices.lg} {
    max-width: 100px;
    max-height: 100px;
  }

  @media ${devices.xl} {
    max-width: 110px;
    max-height: 110px;
  }
`
