import styled, { css } from 'styled-components'

export const Application = styled.div`
  margin: 0;
`

export const FlexContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const RelativeContainer = styled.div<{ isDisplay: boolean }>`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 0;
  overflow: initial;
  
  ${props => props.isDisplay && css`
    //width: calc(100% - 280px);
    transition: all 0.3s;
    margin-left: 280px;
  `}
`
