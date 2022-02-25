import styled, { css } from 'styled-components'

export const LogoImagePartContainer = styled.a<{ color?: string }>`
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

export const LogoImagePart = styled.img<{imageSize?: number}>`
  object-fit: contain;
  height: 40px;
  
  ${props => props.imageSize && css`
    height: ${props.imageSize}px;
  `}
`

export const LogoTextPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LogoHeaderText = styled.h3<{fontSize?: number}>`
  font-size: 19px;
  font-family: "Merriweather", serif;
  letter-spacing: 2px;
  margin: 0;
  
  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;
  `}
`

export const LogoTextSubHeader = styled.p<{fontSize?: number}>`
  font-size: 11px;
  padding-left: 25px;
  font-family: "Merriweather", serif;
  letter-spacing: 2px;
  margin: 0;
  
  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;
  `}
`
