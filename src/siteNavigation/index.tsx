import React from 'react'
import NavBarFirstPart from './NavBarFirstPart'
import SiteNavigationContainer from './context'
import NavBarSecondPart from './NavBarSecondPart'
import NavProduct from './NavBarProductsPart'
import { NavBarContainer } from './style'
import ScrollToTop from 'ScrollToTop'
import { FlexContainer } from 'style'
import { BrowserRouter as Router } from 'react-router-dom'
import SiteRoutes from 'siteNavigation/SiteRoutes'

const SiteNavigation = () => {
  return (
      <SiteNavigationContainer>
          <NavBarContainer>
            <Router>
                <ScrollToTop/>
                <NavBarFirstPart/>
                <FlexContainer>
                    <NavProduct />
                    <div style={{ position: 'relative' }}>
                        <NavBarSecondPart/>
                        <SiteRoutes />
                    </div>
                </FlexContainer>
            </Router>
          </NavBarContainer>
      </SiteNavigationContainer>
  )
}

export default SiteNavigation
