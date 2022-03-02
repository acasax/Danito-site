import styled, { css } from 'styled-components'
import { Styles } from 'constants/StyleConstants'

/** Style for main part of landing page */
export const LandingPageContainer = styled.div``

/** Style for slider part of landing page */
export const SliderContainer = styled.div`
  background-color: ${Styles.Colours.PALETTE.DANITO._black};
  overflow: hidden;
  max-width: 100%;
  position: relative;
  margin-top: 70px;
`

export const SliderElementContainer = styled.div`
  width: 100%;
`

export const SliderElementContentContainer = styled.div`
  width: 100%;
`

export const SliderElementContentImg = styled.img`
  width: 100%;
  object-fit: cover;
`

export const SliderElementContentVideo = styled.video`
  width: 100%;
  object-fit: cover;
`

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  bottom: 100px;
  width: 100%;
`

export const DotContainerElements = styled.span<{ isActive: boolean }>`
  cursor: pointer;
  height: 5px;
  width: 100px;
  margin: 0 2px;
  background-color: ${Styles.Colours.PALETTE.GRAY._500};
  display: block;
  transition: background-color 0.6s ease;

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
  min-height: 400px;
  max-height: 400px;
`

export const ProductPartHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`

export const ProductPartHeaderText = styled.p`
  font-size: 22px;
  font-weight: normal;
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
`

export const ProductPartElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  position: relative;
`

export const ProductPartElementImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 300px;
  min-height: 300px;
  padding-top: 25px;
`

export const ProductPartElementImage = styled.img`
  width: 80%;
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
`

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

export const CompanyPresentationButton = styled.div<{ scaleTransform: boolean }>`
  background: rgba(0, 0, 0, 0.3);
  border: 3px solid ${Styles.Colours.PALETTE.DANITO._yellow};
  font-size: 18px;
  width: 150px;
  height: 50px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s;
  transform: scale(0);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;

  ${props => props.scaleTransform && css`
    transform: scale(1);
  `}
`
