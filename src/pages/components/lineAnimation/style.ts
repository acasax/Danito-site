import styled, { css } from 'styled-components'
import { Styles } from '../../../constants/StyleConstants'

export const LiveAnimationContainer = styled.div`
  background-color: ${Styles.Colours.PALETTE.DANITO._black};
  position: relative;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LiveAnimationContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 2s ease-in-out;
`

export const LiveAnimationHeading = styled.h2<{ scale?: boolean }>`
  color: ${Styles.Colours.WHITE};
  transition: 1s;
  text-align: center;
  font-size: 30px;
  transform: scale(0);

  ${props => props.scale && css`
    transform: scale(1);
  `}
`

export const LiveAnimationHeaderBottomLine = styled.div<{scale?: boolean}>`
  background: radial-gradient(circle, ${Styles.Colours.PALETTE.DANITO._yellow} 0%, ${Styles.Colours.PALETTE.DANITO._white} 50%);
  width: 600px;
  height: 2px;
  transition: 1s;
  transform: scale(0);
  
  ${props => props.scale && css`
    transform: scale(1);
  `}
`
