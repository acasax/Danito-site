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
