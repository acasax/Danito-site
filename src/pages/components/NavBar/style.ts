import styled from 'styled-components'
import { Styles } from '../../../constants/StyleConstants'

/** Style for NavBarFirstPart component */
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

/** Style for NavBarSecondPart component */
export const NavSecondPartContainer = styled.div`
  width: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.77);
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  top: 70px;
`

export const NavSecondPartMenuBody = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const NavSecondPartMenuBodyButton = styled.button`
  color: ${Styles.Colours.PALETTE.DANITO._gray};
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`

export const NavSecondPartMenuBodyLink = styled.a`
  text-decoration: none;
  color: ${Styles.Colours.PALETTE.DANITO._gray};
  transition: 0.5s ease-in-out;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    opacity: 0.5;
  }
`
