import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import GalleryLayout from 'pages/gallery'
import About from 'pages/about'
import TipsPageLayout from 'pages/tipsPage'
import Contact from 'pages/contact'
import LandingPage from 'pages/landingPage'
import ProductPage from 'pages/products'
import GdprPage from 'pages/policy/gdpr'
import PolicyPage from 'pages/policy/privacy'

import { SiteNavigationContext } from './context'

/**
 *
 * About Component
 *
 * @author saxDev 02.24.2022
 *
 * this is component which use reactDom lib to navigate to component
 *
 *
 * Update Component
 *
 * @author saxDev 03.09.2022
 *
 * Now all layout use data from context and don't must send with props
 *
 * */

const SiteRoutes = () => {
  const { pathTo } = useContext(SiteNavigationContext)
  return (
        <Switch>
            <Route path={pathTo}>
                <ProductPage/>
            </Route>
            <Route path="/galerija">
                <GalleryLayout/>
            </Route>
            <Route path="/onama">
                <About/>
            </Route>
            <Route path="/TipsPage">
                <TipsPageLayout/>
            </Route>
            <Route path="/kontakt">
                <Contact/>
            </Route>
            <Route path="/gdpr">
                <GdprPage/>
            </Route>
            <Route path="/policy">
                <PolicyPage/>
            </Route>
            <Route path="/">
                <LandingPage/>
            </Route>
        </Switch>
  )
}

export default SiteRoutes
