import styled, { css } from 'styled-components'
import { Styles } from '../constants/StyleConstants'
import { devices } from '../constants/ResponsiveBreakpoints'
import { Link } from 'react-router-dom'

/** Style for NavBar */

export const NavBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
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

  @media ${devices.xs} {
    height: 21px;
    padding: 0 9px;
  }

  @media ${devices.sm} {
    height: 28px;
    padding: 0 12px;
  }

  @media ${devices.md} {
    height: 36px;
    padding: 0 15px;
  }

  @media ${devices.lg} {
    height: 44px;
    padding: 0 19px;
  }

  @media ${devices.xl} {
    height: 51px;
    padding: 0 22px;
  }
`

/** Style for NavBarSecondPart component */
export const NavSecondPartContainer = styled.div`
  width: 100%;
  z-index: 1;
  background-color: rgba(62, 68, 68, 0.9);
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  top: 70px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._darkGray};

  @media ${devices.xs} {
    top: 0;
    height: 35px;
    padding: 0 10px;
  }

  @media ${devices.sm} {
    top: 0;
    height: 35px;
    padding: 0 10px;
  }

  @media ${devices.md} {
    top: 0;
    height: 35px;
    padding: 0 10px;
  }

  @media ${devices.lg} {
    height: 31px;
    padding: 13px 19px;
    top: 44px;
  }

  @media ${devices.xl} {
    height: 36px;
    padding: 15px 22px;
    top: 51px;
  }

`

export const NavSecondPartMenuBody = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media ${devices.xs} {
    gap: 9px;
  }

  @media ${devices.sm} {
    gap: 12px;
  }

  @media ${devices.md} {
    gap: 15px;
  }

  @media ${devices.lg} {
    gap: 19px;
  }

  @media ${devices.xl} {
    gap: 22px;
  }
`

export const NavSecondPartMenuBodyButton = styled.button`
  color: ${Styles.Colours.PALETTE.DANITO._white};
  border: none;
  background: none;
  font-size: 16px;
  font-weight: 700;
  transition: 0.5s ease-in-out;
  letter-spacing: 1px;
  cursor: pointer;

  @media ${devices.xs} {
    font-size: 4px;
    font-weight: 300;
  }

  @media ${devices.sm} {
    font-size: 6px;
    font-weight: 300;
  }

  @media ${devices.md} {
    font-size: 8px;
    font-weight: 400;
  }

  @media ${devices.lg} {
    font-size: 10px;
    font-weight: 400;
  }

  @media ${devices.xl} {
    font-size: 12px;
    font-weight: 500;
  }

  &:hover {
    opacity: 0.5;
  }
`

export const NavSecondPartMenuBodyLink = styled(Link)`
  text-decoration: none;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  transition: 0.5s ease-in-out;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 16px;

  @media ${devices.xs} {
    font-size: 4px;
    font-weight: 300;
  }

  @media ${devices.sm} {
    font-size: 6px;
    font-weight: 300;
  }

  @media ${devices.md} {
    font-size: 8px;
    font-weight: 400;
  }

  @media ${devices.lg} {
    font-size: 10px;
    font-weight: 400;
  }

  @media ${devices.xl} {
    font-size: 12px;
    font-weight: 500;
  }

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

  @media ${devices.xs} {
    top: 21px;
    gap: 6px;
  }

  @media ${devices.sm} {
    top: 28px;
    gap: 8px;
  }

  @media ${devices.md} {
    top: 36px;
    gap: 10px;
  }

  @media ${devices.lg} {
    top: 44px;
    gap: 13px;
  }

  @media ${devices.xl} {
    top: 51px;
    gap: 15px;
  }

  ${props => props.isDisplay && css`
    width: 300px;
    opacity: 1;
  `}
`

export const NavBarProductContainerText = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  text-align: center;
  color: ${Styles.Colours.PALETTE.DANITO._white};
`

export const NavBarProductPartHeaderContainer = styled.div`
  display: flex;
  height: 90px;
  background-color: rgba(62, 68, 68, 0.9);
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  font-weight: 500;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom-color: ${Styles.Colours.PALETTE.DANITO._darkGray};
  border-bottom-width: 1px;
  border-bottom-style: solid;

  @media ${devices.xs} {
    height: 27px;
    width: 90px;
    font-weight: 200;
    padding-left: 2px;
    padding-right: 2px;
  }

  @media ${devices.sm} {
    height: 36px;
    width: 120px;
    font-weight: 200;
    padding-left: 2px;
    padding-right: 2px;
  }

  @media ${devices.md} {
    height: 46px;
    width: 155px;
    font-weight: 300;
    padding-left: 3px;
    padding-right: 3px;
  }

  @media ${devices.lg} {
    height: 56px;
    width: 187px;
    font-weight: 300;
    padding-left: 3px;
    padding-right: 3px;
  }

  @media ${devices.xl} {
    height: 65px;
    width: 219px;
    font-weight: 400;
    padding-left: 4px;
    padding-right: 4px;
  }

`

export const NavBarProductsPartProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  gap: 10px;

  @media ${devices.xs} {
    padding: 0 6px;
    gap: 3px;
  }

  @media ${devices.sm} {
    padding: 0 8px;
    gap: 4px;
  }

  @media ${devices.md} {
    padding: 0 10px;
    gap: 5px;
  }

  @media ${devices.lg} {
    padding: 0 13px;
    gap: 7px;
  }

  @media ${devices.xl} {
    padding: 0 15px;
    gap: 8px;
  }
`

export const NavBarProductsPartProductsText = {
  textDecoration: 'none',
  marginVertical: 5
}
