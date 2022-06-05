import styled from 'styled-components'
import { Styles } from 'constants/StyleConstants'
import { devices } from '../../constants/ResponsiveBreakpoints'

export const GalleyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  @media ${devices.xs} {
    margin-top: 0px;
  }

  @media ${devices.sm} {
    margin-top: 0px;
  }

  @media ${devices.md} {
    margin-top: 0px;
  }
  
`

export const GalleryContentContainer = styled.div`
  background-color: ${Styles.Colours.PALETTE.DANITO._black};
  padding: 120px 0;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.xs} {
    padding: 50px 0;
    gap: 15px;
  }

  @media ${devices.sm} {
    padding: 50px 0;
    gap: 20px;
  }

  @media ${devices.md} {
    padding: 62px 0;
    gap: 26px;
  }

  @media ${devices.lg} {
    padding: 75px 0;
    gap: 31px;
  }

  @media ${devices.xl} {
    padding: 87px 0;
    gap: 36px;
  }

`

export const GalleryElementContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  justify-content: center;
  width: 80%;

  @media ${devices.xs} {
    padding: 5px;
    gap: 5px;
  }

  @media ${devices.sm} {
    padding: 5px;
    gap: 5px;
  }

  @media ${devices.md} {
    padding: 5px;
    gap: 5px;
  }

  @media ${devices.lg} {
    padding: 10px;
    gap: 6px;
  }

  @media ${devices.xl} {
    padding: 10px;
    gap: 7px;
  }
`

export const GalleyCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  @media ${devices.xs} {
    padding: 6px;
    gap: 6px;
  }

  @media ${devices.sm} {
    padding: 8px;
    gap: 8px;
  }

  @media ${devices.md} {
    padding: 10px;
    gap: 10px;
  }

  @media ${devices.lg} {
    padding: 12px;
    gap: 12px;
  }

  @media ${devices.xl} {
    padding: 15px;
    gap: 15px;
  }

`

export const GalleyCarouselImage = styled.img`
  width: 250px;
  max-height: 150px;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 3px;
  border: none;

  @media ${devices.xs} {
    width: 130px;
    height: 80px;
  }

  @media ${devices.sm} {
    width: 130px;
    height: 80px;
  }

  @media ${devices.md} {
    width: 130px;
    height: 80px;
  }

  @media ${devices.lg} {
    width: 160px;
    height: 100px;
  }

  @media ${devices.xl} {
    width: 180px;
    height: 110px;
  }

  &:hover {
    transform: scale(1.1);
  }
`

export const GalleyCarouselSelectedImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 250px;
  z-index: 100000;
  opacity: 1 !important;

  @media ${devices.xs} {
    top: 35%;
  }

  @media ${devices.sm} {
    top: 35%;
  }

  @media ${devices.md} {
    top: 130px;
  }

  @media ${devices.lg} {
    top: 156px;
  }

  @media ${devices.xl} {
    top: 180px;
  }
`

export const GalleyCarouselSelectedImage = styled.img`
  border-radius: 6px;
  cursor: pointer;
  width: 900px;
  max-height: 600px;

  @media ${devices.xs} {
    width: 270px;
    max-height: 180px;
  }

  @media ${devices.sm} {
    width: 360px;
    max-height: 240px;
  }

  @media ${devices.md} {
    width: 465px;
    max-height: 310px;
  }

  @media ${devices.lg} {
    width: 562px;
    max-height: 375px;
  }

  @media ${devices.xl} {
    width: 656px;
    max-height: 437px;
  }
`

export const GCSICI = styled.svg`
  font-size: 60px;
  position: relative;
  top: 250px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  cursor: pointer;
`

export const GalleryCarouselSelectedImageHeaderContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.50);

  @media ${devices.xs} {
    width: 270px;
  }

  @media ${devices.sm} {
    width: 360px;
  }

  @media ${devices.md} {
    width: 465px;
  }

  @media ${devices.lg} {
    width: 562px;
  }

  @media ${devices.xl} {
    width: 656px;
  }
`

export const GalleryCarouselSelectedImageHeader = styled.h1`
  font-size: 20px;
  color: ${Styles.Colours.PALETTE.DANITO._white};
  text-transform: uppercase;
  letter-spacing: 2px;

  @media ${devices.xs} {
    font-size: 6px;
    letter-spacing: 1px;
  }

  @media ${devices.sm} {
    font-size: 8px;
    letter-spacing: 1px;
  }

  @media ${devices.md} {
    font-size: 10px;
    letter-spacing: 2px;
  }

  @media ${devices.lg} {
    font-size: 13px;
    letter-spacing: 2px;
  }

  @media ${devices.xl} {
    font-size: 15px;
    letter-spacing: 2px;
  }
`
