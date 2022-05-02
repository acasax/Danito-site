import styled, { css } from 'styled-components'
import { devices } from '../../constants/ResponsiveBreakpoints'

export const SideNavBarItemContainer = styled.div<{ flexDirection?: 'row' | 'column' }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 0.3s;
  max-width: 300px;
  text-align: left;
  width: 100%;
  padding: 5px 0;

  @media ${devices.xs} {
    max-width: 90px;
  }

  @media ${devices.sm} {
    max-width: 120px;
  }

  @media ${devices.md} {
    max-width: 155px;
  }

  @media ${devices.lg} {
    max-width: 187px;
  }

  @media ${devices.xl} {
    max-width: 219px;
  }

  ${props => props.flexDirection && css`
    flex-direction: ${props.flexDirection};
  `}
`

export const SideNavBarItemContainerImg = styled.img`
  width: 60px;

  @media ${devices.xs} {
    width: 20px;
  }

  @media ${devices.sm} {
    width: 30px;
  }

  @media ${devices.md} {
    width: 40px;
  }

  @media ${devices.lg} {
    width: 45px;
  }

  @media ${devices.xl} {
    width: 50px;
  }
`

export const SideNavBarItemCategoryContainerImg = styled.img`
  width: 220px;
  
  @media ${devices.xs} {
    width: 70px;
  }

  @media ${devices.sm} {
    width: 90px;
  }

  @media ${devices.md} {
    width: 110px;
  }

  @media ${devices.lg} {
    width: 140px;
  }

  @media ${devices.xl} {
    width: 160px;
  }
`

export const SideNavBarItemButton = styled.button<{ textAlign?: string }>`
  height: 50px;
  letter-spacing: 1px;
  cursor: pointer;
  border: none;
  border-bottom: 1px solid transparent;
  background-color: transparent;
  transition: 0.3s ease-in-out;
  border-bottom-width: 0;
  width: 100%;

  @media ${devices.xs} {
    height: 15px;
    font-size: 4px;
  }

  @media ${devices.sm} {
    height: 20px;
    font-size: 4px
  }

  @media ${devices.md} {
    height: 26px;
    font-size: 7px;
  }

  @media ${devices.lg} {
    height: 32px;
    font-size: 9px;
  }

  @media ${devices.xl} {
    height: 37px;
    font-size: 11px;
  }

  ${props => props.textAlign && css`
    text-align: ${props.textAlign};
  `}
  &:hover .SideNavBarItemButton {
    opacity: 0.5;
    transition: 0.3s ease-in-out;
  }
`
