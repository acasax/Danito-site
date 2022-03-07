import React from 'react'
import NavBarFirstPart from './NavBarFirstPart'
import SiteNavigationContainer from './context'
import NavBarSecondPart from './NavBarSecondPart'
import NavProduct from './NavBarProductsPart'
import { NavBarContainer } from './style'
import ScrollToTop from 'ScrollToTop'
import { FlexContainer, RelativeContainer } from 'style'
import { BrowserRouter as Router } from 'react-router-dom'
import SiteRoutes from 'siteNavigation/SiteRoutes'

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
  return (
      <SiteNavigationContainer>
          <NavBarContainer>
            <Router>
                <ScrollToTop/>
                <NavBarFirstPart/>
                <FlexContainer>
                    <NavProduct />
                    <RelativeContainer>
                        <NavBarSecondPart/>
                        <SiteRoutes />
                    </RelativeContainer>
                </FlexContainer>
            </Router>
          </NavBarContainer>
      </SiteNavigationContainer>
  )
}

export default SiteNavigation
