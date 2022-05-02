import styled, { css, keyframes } from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import SwipeableViews from 'react-swipeable-views'
import { devices } from '../../constants/ResponsiveBreakpoints'

/** Style for main part of landing page */
export const LandingPageContainer = styled.div``

/** Style for slider part of landing page */
export const SliderContainer = styled.div`
  background-color: ${Styles.Colours.PALETTE.DANITO._black};
  overflow: hidden;
  max-width: 100%;
  position: relative;
  margin-top: 70px;
  height: 900px;

  @media ${devices.xs} {
    margin-top: 21px;
    height: 270px;
  }

  @media ${devices.sm} {
    margin-top: 28px;
    height: 360px;
  }

  @media ${devices.md} {
    margin-top: 36px;
    height: 465px;
  }

  @media ${devices.lg} {
    margin-top: 44px;
    height: 562px;
  }

  @media ${devices.xl} {
    margin-top: 51px;
    height: 656px;
  }
`

export const SliderElementContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const SliderElementContentContainer = styled(SwipeableViews)`
  width: 100%;
  height: 100%;
`

export const SliderElementContentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const SliderElementContentVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  bottom: 50px;
  width: 100%;

  @media ${devices.xs} {
    gap: 6px;
    bottom: 15px;
  }

  @media ${devices.sm} {
    gap: 8px;
    bottom: 20px;
  }

  @media ${devices.md} {
    gap: 10px;
    bottom: 26px;
  }

  @media ${devices.lg} {
    gap: 13px;
    bottom: 31px;
  }

  @media ${devices.xl} {
    gap: 15px;
    bottom: 36px;
  }
`

export const DotContainerElements = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  height: 5px;
  width: 100px;
  margin: 0 2px;
  background-color: ${Styles.Colours.PALETTE.GRAY._500};
  display: block;
  transition: background-color 0.6s ease;

  @media ${devices.xs} {
    height: 1px;
    width: 30px;
  }

  @media ${devices.sm} {
    height: 2px;
    width: 40px;
  }

  @media ${devices.md} {
    height: 2px;
    width: 52px;
  }

  @media ${devices.lg} {
    height: 3px;
    width: 62px;
  }

  @media ${devices.xl} {
    height: 4px;
    width: 73px;
  }

  ${props => props.isActive && css`
    background-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  `}
  &:hover {
    background-color: ${Styles.Colours.PALETTE.DANITO._white};
  }
`

/** Style for product part of landing page */

export const ProductPartContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  height: 400px;

  @media ${devices.xs} {
    height: auto;
    flex-direction: column;
  }

  @media ${devices.sm} {
    height: 160px;
  }

  @media ${devices.md} {
    height: 207px;
  }

  @media ${devices.lg} {
    height: 250px;
  }

  @media ${devices.xl} {
    height: 291px;
  }
`

export const ProductPartHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 10px;

  @media ${devices.xs} {
    height: 15px;
  }

  @media ${devices.sm} {
    height: 20px;
  }

  @media ${devices.md} {
    height: 26px;
  }

  @media ${devices.lg} {
    height: 32px;
  }

  @media ${devices.xl} {
    height: 37px;
  }
`

export const ProductPartHeaderText = styled.p`
  font-size: 22px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};

  @media ${devices.xs} {
    font-size: 7px;
  }

  @media ${devices.sm} {
    font-size: 9px;
  }

  @media ${devices.md} {
    font-size: 11px;
  }

  @media ${devices.lg} {
    font-size: 14px;
  }

  @media ${devices.xl} {
    font-size: 16px;
  }
`

export const ProductPartElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-color: ${Styles.Colours.PALETTE.DANITO._darkGray};
`

export const ProductPartElementImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding-top: 25px;

  @media ${devices.xs} {
    height: 90px;
    padding-top: 8px;
  }

  @media ${devices.sm} {
    height: 120px;
    padding-top: 10px;
  }

  @media ${devices.md} {
    height: 155px;
    padding-top: 13px;
  }

  @media ${devices.lg} {
    height: 187px;
    padding-top: 15px;
  }

  @media ${devices.xl} {
    height: 255px;
    padding-top: 18px;
  }
`

export const ProductPartElementImage = styled.img`
  width: 80%;
  height: auto;
  max-height: 350px;
  
  @media ${devices.xs} {
    max-height: 90px;
  }

  @media ${devices.sm} {
    max-height: 120px;
  }

  @media ${devices.md} {
    max-height: 155px;
  }

  @media ${devices.lg} {
    max-height: 187px;
  }

  @media ${devices.xl} {
    max-height: 255px;
  }
`

export const ProductPartChildrenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.3s;
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
    gap: 8px;
  }

  &:hover {
    opacity: 1;
  }
`

export const ProductPartChildrenButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProductPartChildrenButton = styled.button<{ isOpen?: boolean }>`
  background-color: transparent;
  border: none;
  font-size: 17px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  width: 300px;
  height: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  @media ${devices.xs} {
    font-size: 5px;
    width: 90px;
    height: 15px;
  }

  @media ${devices.sm} {
    font-size: 7px;
    width: 120px;
    height: 20px;
  }

  @media ${devices.md} {
    font-size: 9px;
    width: 155px;
    height: 25px;
  }

  @media ${devices.lg} {
    font-size: 10px;
    width: 187px;
    height: 31px;
  }

  @media ${devices.xl} {
    font-size: 13px;
    width: 219px;
    height: 36px;
  }

  ${props => props.isOpen && css`
    border-bottom: ${Styles.Colours.PALETTE.DANITO._yellow} 2px solid;
  `}
  &:hover {
    border: ${Styles.Colours.PALETTE.DANITO._yellow} 1px solid;
  }
`

export const ProductPartChildrenLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;

  @media ${devices.xs} {
    gap: 4px;
    margin-top: 4px;
    margin-bottom: 4px;
  }

  @media ${devices.sm} {
    gap: 6px;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  @media ${devices.md} {
    gap: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  @media ${devices.lg} {
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media ${devices.xl} {
    gap: 11px;
    margin-top: 11px;
    margin-bottom: 11px;
  }

`

/** Stigao za responsiv **/
export const ProductPartChildrenLinksText = {
  fontSize: 15,
  textDecoration: 'none',
  color: Styles.Colours.PALETTE.DANITO._white,
  fontWeight: 'normal',
  letterSpacing: 2,
  transition: '0.5s ease-in-out',
  borderBottomColor: Styles.Colours.PALETTE.DANITO._white,
  borderBlockWidth: 1,
  borderBottomStyle: 'solid',

  hover: {
    borderBottomColor: Styles.Colours.PALETTE.DANITO._yellow,
    borderBlockWidth: 2,
    borderBottomStyle: 'solid'
  }
}

/** Style for Company Presentation part of landing page */

export const CompanyPresentationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CompanyPresentationImage = styled.img`
  object-fit: contain;
  width: 100%;
`

export const CompanyPresentationContentContainer = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: absolute;
`

export const CompanyPresentationButton = styled.button<{ scaleTransform: boolean }>`
  background: rgba(0, 0, 0, 0.3);
  border: 3px solid ${Styles.Colours.PALETTE.DANITO._yellow};
  font-size: 18px;
  width: 150px;
  height: 60px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  transform: scale(0);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;

  @media ${devices.xs} {
    border: 1px solid ${Styles.Colours.PALETTE.DANITO._yellow};
    font-size: 5px;
    width: 45px;
    height: 18px;
    letter-spacing: 1px;
  }

  @media ${devices.sm} {
    border: 1.2px solid ${Styles.Colours.PALETTE.DANITO._yellow};
    font-size: 7px;
    width: 60px;
    height: 24px;
    letter-spacing: 1px;
  }

  @media ${devices.md} {
    border: 1.5px solid ${Styles.Colours.PALETTE.DANITO._yellow};
    font-size: 9px;
    width: 77px;
    height: 31px;
    letter-spacing: 1px;
  }

  @media ${devices.lg} {
    border: 2px solid ${Styles.Colours.PALETTE.DANITO._yellow};
    font-size: 11px;
    width: 93px;
    height: 37px;
    letter-spacing: 1px;
  }

  @media ${devices.xl} {
    border: 2px solid ${Styles.Colours.PALETTE.DANITO._yellow};
    font-size: 13px;
    width: 110px;
    height: 44px;
    letter-spacing: 2px;
  }

  ${props => props.scaleTransform && css`
    transform: scale(1);
  `}
`

export const CompanyPresentationVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 200px;
  z-index: 100000;
  opacity: 1 !important;

  @media ${devices.xs} {
    top: 60px;
  }

  @media ${devices.sm} {
    top: 80px;
  }

  @media ${devices.md} {
    top: 103px;
  }

  @media ${devices.lg} {
    top: 125px;
  }

  @media ${devices.xl} {
    top: 145px;
  }
`

export const CompanyPresentationSelectedImage = styled.video`
  border-radius: 6px;
  cursor: pointer;
  width: 900px;

  @media ${devices.xs} {
    width: 270px;
  }

  @media ${devices.sm} {
    width: 360px;
  }

  @media ${devices.md} {
    width: 465px;
  }

  @media ${devices.lg} {
    width: 562px;
  }

  @media ${devices.xl} {
    width: 656px;
  }
`

/** Style for tips part of landing page */

export const TipsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 50px 0;
  background-color: ${Styles.Colours.PALETTE.DANITO._black};
  flex-wrap: wrap;

  @media ${devices.xs} {
    padding: 15px 0;
  }

  @media ${devices.sm} {
    padding: 20px 0;
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

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(.25);
    opacity: 0;
  }
`
export const Card = styled.div`
  display: flex;
  min-width: 30%;
  max-width: 30%;
  justify-content: center;
  padding: 20px;

  @media ${devices.xs} {
    padding: 6px;
  }

  @media ${devices.sm} {
    padding: 8px;
  }

  @media ${devices.md} {
    padding: 10px;
  }

  @media ${devices.lg} {
    padding: 13px;
  }

  @media ${devices.xl} {
    padding: 15px;
  }
`

export const CardContainer = styled.div<{ out: boolean }>`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Styles.Colours.PALETTE.DANITO._white};
  max-height: 500px;
  max-width: 400px;
  padding: 10px;
  border-radius: 10px;

  @media ${devices.xs} {
    max-height: 150px;
    max-width: 120px;
    padding: 3px;
    border-radius: 3px;
  }

  @media ${devices.sm} {
    max-height: 200px;
    max-width: 160px;
    padding: 4px;
    border-radius: 4px;
  }

  @media ${devices.md} {
    max-height: 258px;
    max-width: 207px;
    padding: 5px;
    border-radius: 5px;
  }

  @media ${devices.lg} {
    max-height: 312px;
    max-width: 250px;
    padding: 6px;
    border-radius: 6px;
  }

  @media ${devices.xl} {
    max-height: 365px;
    max-width: 291px;
    padding: 7px;
    border-radius: 7px;
  }

  visibility: ${props => props.out ? 'visible' : 'hidden'};
  animation: ${props => props.out ? fadeIn : fadeOut} 1s linear;
  transition: visibility 1s linear;
`

export const CardImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const CardImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;

  @media ${devices.xs} {
    max-height: 60px;
  }

  @media ${devices.sm} {
    max-height: 80px;
  }

  @media ${devices.md} {
    max-height: 103px;
  }

  @media ${devices.lg} {
    max-height: 125px;
  }

  @media ${devices.xl} {
    max-height: 145px;
  }
`

export const CardContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 15px 0;

  @media ${devices.xs} {
    padding: 5px 0;
  }

  @media ${devices.sm} {
    padding: 6px 0;
  }

  @media ${devices.md} {
    padding: 8px 0;
  }

  @media ${devices.lg} {
    padding: 9px 0;
  }

  @media ${devices.xl} {
    padding: 11px 0;
  }
`

export const CardHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  border-top-style: solid;
  border-top-width: 2px;
  border-top-color: ${Styles.Colours.PALETTE.DANITO._yellow};
  min-height: 50px;
  padding: 20px 0;

  @media ${devices.xs} {
    border-bottom-width: 0.6px;
    border-top-width: 0.6px;
    height: 15px;
    padding: 6px 0;
  }

  @media ${devices.sm} {
    border-bottom-width: 0.8px;
    border-top-width: 0.8px;
    height: 20px;
    padding: 8px 0;
  }

  @media ${devices.md} {
    border-bottom-width: 1px;
    border-top-width: 1px;
    height: 25px;
    padding: 10px 0;
  }

  @media ${devices.lg} {
    border-bottom-width: 1.2px;
    border-top-width: 1.2px;
    height: 31px;
    padding: 13px 0;
  }

  @media ${devices.xl} {
    border-bottom-width: 1.5px;
    border-top-width: 1.5px;
    height: 36px;
    padding: 15px 0;
  }
`

export const CardHeaderText = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${Styles.Colours.PALETTE.DANITO._black};
  text-align: center;
  margin: 0;

  @media ${devices.xs} {
    font-size: 6px;
  }

  @media ${devices.sm} {
    font-size: 8px;
  }

  @media ${devices.md} {
    font-size: 10px;
  }

  @media ${devices.lg} {
    font-size: 13px;
  }

  @media ${devices.xl} {
    font-size: 15px;
  }
`

export const CardTextContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const CardText = styled.p`
  text-align: left;
  font-size: 17px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._black};

  @media ${devices.xs} {
    font-size: 5px;
  }

  @media ${devices.sm} {
    font-size: 7px;
  }

  @media ${devices.md} {
    font-size: 9px;
  }

  @media ${devices.lg} {
    font-size: 10px;
  }

  @media ${devices.xl} {
    font-size: 13px;
  }
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 50px;

  @media ${devices.xs} {
    height: 15px;
  }

  @media ${devices.sm} {
    height: 20px;
  }

  @media ${devices.md} {
    height: 25px;
  }

  @media ${devices.lg} {
    height: 31px;
  }

  @media ${devices.xl} {
    height: 36px;
  }
`

export const CardFooterMoreButton = {
  textDecoration: 'none',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: Styles.Colours.PALETTE.DANITO._yellow,
  paddingHorizontal: 4,
  paddingVertical: 20,
  color: Styles.Colours.PALETTE.DANITO._black,
  fontSize: 15,
  fontWeight: 600,
  height: 30,
  minWidth: 80,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

export const CardFooterDateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  height: 35px;
  width: 150px;

  @media ${devices.xs} {
    height: 10px;
    width: 45px;
  }

  @media ${devices.sm} {
    height: 14px;
    width: 60px;
  }

  @media ${devices.md} {
    height: 18px;
    width: 77px;
  }

  @media ${devices.lg} {
    height: 22px;
    width: 94px;
  }

  @media ${devices.xl} {
    height: 25px;
    width: 110px;
  }
`

export const CardFooterDateText = styled.p`
  font-size: 15px;
  color: ${Styles.Colours.PALETTE.DANITO._white};

  @media ${devices.xs} {
    font-size: 5px;
  }

  @media ${devices.sm} {
    font-size: 6px;
  }

  @media ${devices.md} {
    font-size: 8px;
  }

  @media ${devices.lg} {
    font-size: 9px;
  }

  @media ${devices.xl} {
    font-size: 11px;
  }
`
