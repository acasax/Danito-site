import styled from 'styled-components'
import { devices } from '../../constants/ResponsiveBreakpoints'
import { Styles } from '../../constants/StyleConstants'

export const ContactLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContactMapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 300px;

  @media ${devices.xs} {
    height: 90px;
  }

  @media ${devices.sm} {
    height: 120px;
  }

  @media ${devices.md} {
    height: 155px;
  }

  @media ${devices.lg} {
    height: 187px;
  }

  @media ${devices.xl} {
    height: 219px;
  }
`

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ContactSubmitButton = styled.input`
  background-color: ${Styles.Colours.PALETTE.LIGHT_BLUE._400};
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${Styles.Colours.PALETTE.LIGHT_BLUE._800};
  }
`
