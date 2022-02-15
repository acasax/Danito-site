import styled, { css } from 'styled-components'

export const SideNavBarItemContainer = styled.div<{ flexDirection?: 'row' | 'column' }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  max-width: 300px;
  text-align: left;
  width: 100%;
  
  ${props => props.flexDirection && css`
    flex-direction: ${props.flexDirection};
  `}
`

export const SideNavBarItemContainerImg = styled.img`
  width: 60px;
`

export const SideNavBarItemButton = styled.button<{textAlign?: string}>`
  height: 50px;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  border-bottom-width: 0;
  width: 100%;
  
  ${props => props.textAlign && css`
    text-align: ${props.textAlign};
  `}

  &:hover .SideNavBarItemButton {
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
`
