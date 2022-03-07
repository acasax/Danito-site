import styled, { css } from 'styled-components'
import { Styles } from '../constants/StyleConstants'

/** Style for NavBar */

export const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

/** Style for NavBarFirstPart component */
export const NavFirstPartContainer = styled.div`
  width: 100%;
  position: fixed;
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
  background-color: rgba(255, 255, 255, 0.88);
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  top: 70px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._liteGray};
`

export const NavSecondPartMenuBody = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`

export const NavSecondPartMenuBodyButton = styled.button`
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
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
  color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  transition: 0.5s ease-in-out;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    opacity: 0.5;
  }
`

/** Style for NavBarProductPart component */

export const NavBarProductSideBarContainer = styled.div<{ isDisplay: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${Styles.Colours.PALETTE.DANITO._white};
  position: sticky;
  top: 70px;
  height: 100%;
  gap: 20px;
  width: 0;
  transition: 0.5s;
  opacity: 0;

  ${props => props.isDisplay && css`
    width: 300px;
    opacity: 1;
  `}
`

export const NavBarProductContainerText = styled.p`
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;
`

export const NavBarProductPartProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Styles.Colours.PALETTE.DANITO._white};
`

export const NavBarProductPartHeaderContainer = styled.div`
  display: flex;
  height: 90px;
  background-color: ${Styles.Colours.PALETTE.DANITO._liteGray};
  align-items: center;
  justify-content: space-evenly;
  min-width: 300px;
  width: 100%;
  font-weight: 500;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._liteGray};
  border-bottom-width: 1px;
  border-bottom-style: solid;
`

export const NavBarProductsPartProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;
`

export const NavBarProductsPartProductsText = {
  textDecoration: 'none'
}
