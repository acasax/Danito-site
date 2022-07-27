import React, { useContext, useEffect, useState } from 'react'
import NavBarFirstPart from './NavBarFirstPart'
import { SiteNavigationContext } from './context'
import NavBarSecondPart from './NavBarSecondPart'
import NavProduct from './NavBarProductsPart'
import { NavBarContainer } from './style'
import ScrollToTop from 'ScrollToTop'
import { FlexContainer, RelativeContainer } from 'style'
import { BrowserRouter as Router } from 'react-router-dom'
import SiteRoutes from 'siteNavigation/SiteRoutes'
import { calcSize } from '../constants/ResponsiveBreakpoints'

/**
 *
 * About Component
 * @author SaxDev 02.25.2022
 *
 * This is component main component of website.
 * Used for navigate to page od website.
 *
 * Work method
 *
 * Render the chosen one layout.
 *
 * */

const SiteNavigation = () => {
  const { navRightOpen } = useContext(SiteNavigationContext)
  const [width, setWidth] = useState(0)

  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  return (
        <NavBarContainer>
            <Router basename={'/'}>
                <ScrollToTop/>
                <NavBarFirstPart/>
                <FlexContainer>
                    <NavProduct/>
                    <RelativeContainer
                        isDisplay={navRightOpen}
                        isMobile={width <= calcSize.small}
                        isPc={width >= calcSize.small}
                    >
                        <NavBarSecondPart/>
                        <SiteRoutes/>
                    </RelativeContainer>
                </FlexContainer>
            </Router>
        </NavBarContainer>
  )
}

export default SiteNavigation
