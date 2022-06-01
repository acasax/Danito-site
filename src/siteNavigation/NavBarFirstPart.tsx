import React, { useEffect, useState } from 'react'
import { NavFirstPartContainer } from './style'
import LogoComponent from '../components/logo'
import { calcSize } from '../constants/ResponsiveBreakpoints'

/**
 *
 * About component
 *
 * @author saxDev 02.15.2022
 *
 * this component is a part of navBar of WebPage
 *
 * in this case this is black part of navBar
 *
 * Update component
 *
 * @author saxDev 06.01.2022
 *
 * Don't display component on tablet and mobile
 *
 * */

const NavBarFirstPart = () => {
  const [width, setWidth] = useState(0)

  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  if (width < calcSize.large) {
    return null
  }

  return (
        <NavFirstPartContainer>
            <LogoComponent />
        </NavFirstPartContainer>
  )
}

export default NavBarFirstPart
