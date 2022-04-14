import styled, { css } from 'styled-components'
import { calcSize, devices } from '../../constants/ResponsiveBreakpoints'

export const LogoImagePartContainer = styled.a<{ color?: string }>`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  display: flex;

  @media ${devices.xs} {
    font-size: 5px;
  }

  @media ${devices.sm} {
    font-size: 7px;
  }

  @media ${devices.md} {
    font-size: 9px;
  }

  @media ${devices.lg} {
    font-size: 11px;
  }

  @media ${devices.xl} {
    font-size: 13px;
  }

  ${props => props.color && css`
    color: ${props.color};
  `}
`

export const LogoImagePart = styled.img<{ imageSize?: number }>`
  object-fit: contain;
  height: 40px;

  @media ${devices.xs} {
    height: 12px;
  }

  @media ${devices.sm} {
    height: 16px;
  }

  @media ${devices.md} {
    height: 20px;
  }

  @media ${devices.lg} {
    height: 25px;
  }

  @media ${devices.xl} {
    height: 30px;
  }

  ${props => props.imageSize && css`
    height: ${props.imageSize}px;
    
    @media ${devices.xs} {
      height: calc(${calcSize.xsmall} / 1920 * ${props.imageSize}px);
    }

    @media ${devices.sm} {
      height: calc(${calcSize.small} / 1920 * ${props.imageSize}px);
    }

    @media ${devices.md} {
      height: calc(${calcSize.medium} / 1920 * ${props.imageSize}px);
    }

    @media ${devices.lg} {
      height: calc(${calcSize.large} / 1920 * ${props.imageSize}px);
    }

    @media ${devices.xl} {
      height: calc(${calcSize.extralarge} / 1920 * ${props.imageSize}px);
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

  @media ${devices.xs} {
    font-size: 5px;
  }

  @media ${devices.sm} {
    font-size: 7px;
  }

  @media ${devices.md} {
    font-size: 9px;
  }

  @media ${devices.lg} {
    font-size: 11px;
  }

  @media ${devices.xl} {
    font-size: 13px;
  }

  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;

    @media ${devices.xs} {
      font-size: calc(${calcSize.xsmall} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.sm} {
      font-size: calc(${calcSize.small} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.md} {
      font-size: calc(${calcSize.medium} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.lg} {
      font-size: calc(${calcSize.large} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.xl} {
      font-size: calc(${calcSize.extralarge} * ${props.fontSize} / 1920)px;
    }

  `}
`

export const LogoTextSubHeader = styled.p<{ fontSize?: number }>`
  font-size: 11px;
  padding-left: 25px;
  font-family: "Merriweather", serif;
  letter-spacing: 2px;
  margin: 0;

  @media ${devices.xs} {
    font-size: 3px;
    padding-left: 12px;
  }

  @media ${devices.sm} {
    font-size: 4px;
    padding-left: 15px;
  }

  @media ${devices.md} {
    font-size: 5px;
    padding-left: 17px;
  }

  @media ${devices.lg} {
    font-size: 6px;
    padding-left: 20px;
  }

  @media ${devices.xl} {
    font-size: 8px;
    padding-left: 23px;
  }

  ${props => props.fontSize && css`
    font-size: ${props.fontSize}px;

    @media ${devices.xs} {
      font-size: calc(${calcSize.xsmall} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.sm} {
      font-size: calc(${calcSize.small} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.md} {
      font-size: calc(${calcSize.medium} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.lg} {
      font-size: calc(${calcSize.large} * ${props.fontSize} / 1920)px;
    }

    @media ${devices.xl} {
      font-size: calc(${calcSize.extralarge} * ${props.fontSize} / 1920)px;
    }

  `}
`
