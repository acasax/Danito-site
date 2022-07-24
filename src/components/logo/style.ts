import styled, { css } from 'styled-components'
import { devices } from '../../constants/ResponsiveBreakpoints'
import { Link } from 'react-router-dom'

export const LogoImagePartContainer = styled(Link)<{ color?: string }>`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  display: flex;

  ${props => props.color && css`
    color: ${props.color};
  `}
`

export const LogoImagePart = styled.img<{ imageSize?: number }>`
  object-fit: contain;
  height: 40px;

  ${props => props.imageSize && css`
    height: ${props.imageSize}px;
    
    @media ${devices.sm} {
      max-height: 50px;
    }

    @media ${devices.md} {
      max-height: 50px;
    }
  `}
`

export const LogoTextPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LogoHeaderText = styled.h3<{ fontSize?: number }>`
  font-size: 19px;
  font-family: "Merriweather", serif;
  letter-spacing: 2px;
  margin: 0;

  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;

    @media ${devices.sm} {
      font-size: 17px;
    }

    @media ${devices.md} {
      font-size: 17px;
    }
  `}
`

export const LogoTextSubHeader = styled.p<{ fontSize?: number }>`
  font-size: 11px;
  padding-left: 15px;
  font-family: "Merriweather", serif;
  letter-spacing: 2px;
  margin: 0;

  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;

    @media ${devices.sm} {
      font-size: 13px;
    }

    @media ${devices.md} {
      font-size: 13px;
    }
  `}
`
