import styled from 'styled-components'
import { Styles } from '../../../constants/StyleConstants'

export const NavFirstPartContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 70px;
  z-index: 1;
  background: ${Styles.Colours.BLACK};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 30px;
`

export const NavFirstPartLogoPart = styled.a`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  display: flex;
`

export const NavFirstPartLogoPartImg = styled.img`
  object-fit: contain;
  height: 40px;
`

export const NavFirstPartLogoPartTextPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavFirstPartLogoPartTextHeading = styled.h3`
  font-size: 19px;
  font-family: "Merriweather", serif;
  letter-spacing: 2px;
  margin: 0;
`

export const NavFirstPartLogoPartTextParagraph = styled.p`
  font-size: 11px;
  padding-left: 25px;
  font-family: "Merriweather", serif;
  letter-spacing: 2px;
  margin: 0;
`
