import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Styles } from '../../constants/StyleConstants'

export const SpinnerContainer = styled.div<{isCentred?: boolean}>`
  position: absolute;

    
  ${props => props.isCentred && css`
        position: absolute;
        background: transparent;
        top: calc(50vh - 50px);
        left: calc(50vw - 50px);
        z-index: 20000;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-around;
  `}
`

export const BackDrop = styled.div`
  background: rgba(82, 82, 82, 0.78);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const SpinnerIcon = styled(FontAwesomeIcon)`
  filter: drop-shadow(-2px 2px 2px rgba(0, 0, 0, 0.6));
  opacity: 0.9;
  color: ${Styles.Colours.PALETTE.DANITO._blue}
`
