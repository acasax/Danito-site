import styled from 'styled-components'
import { devices } from '../../constants/ResponsiveBreakpoints'

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

export const ContactFormRow = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`
