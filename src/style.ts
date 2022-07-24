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

export const RelativeContainer = styled.div<{ isDisplay: boolean, isMobile: boolean, isPc: boolean }>`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 0;
  overflow: initial;

  ${props => props.isDisplay && css`
    //width: calc(100% - 280px);
    transition: all 0.3s;
    ${props => props.isMobile && css`
      margin-left: 85%;
    `}
    ${props => props.isPc && css`
      margin-left: 300px;
    `}
    //margin-left: 270px;
  `}
  

`
