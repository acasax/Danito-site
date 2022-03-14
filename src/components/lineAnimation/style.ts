import styled, { css } from 'styled-components'
import { Styles } from 'constants/StyleConstants'

export const LiveAnimationContainer = styled.div<{ backgroundColor?: string }>`
  background-color: ${Styles.Colours.PALETTE.DANITO._black};
  position: relative;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.backgroundColor && css`
    background-color: ${props.backgroundColor};
  `}
`

export const LiveAnimationContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 2s ease-in-out;
`

export const LiveAnimationHeading = styled.h2<{ scaleTransform: boolean, fontSize?: number }>`
  color: ${Styles.Colours.WHITE};
  transition: 1s;
  text-align: center;
  font-size: 30px;
  transform: scale(0);
  font-weight: bolder;
  letter-spacing: 3px;

  ${props => props.scaleTransform && css`
    transform: scale(1);
  `}

  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;
  `}
`

export const LiveAnimationHeaderBottomLine = styled.div<{ scaleTransform: boolean }>`
  background: radial-gradient(circle, ${Styles.Colours.PALETTE.DANITO._yellow} 0%, ${Styles.Colours.PALETTE.DANITO._white} 50%);
  width: 600px;
  height: 2px;
  transition: 1s;
  transform: scale(0);

  ${props => props.scaleTransform && css`
    transform: scale(1);
  `}
`
