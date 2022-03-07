import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import GalleryLayout from 'pages/layout/gallery'
import About from 'pages/about'
import TipsPage from 'pages/layout/tipsPage/TipsPage'
import Contact from 'pages/layout/contact'
import LandingPage from 'pages/LandingPage'
import Proizvodi from 'pages/layout/products'
import { SiteNavigationContext } from './context'

/**
 *
 * About Component
 *
 * @author saxDev 02.24.2022
 *
 * this is component which use reactDom lib to navigate to component
 *
 * */

const SiteRoutes = () => {
  const { pathTo, data, pageName, tipsData, scroll } = useContext(SiteNavigationContext)
  return (
        <Switch>
            <Route path={pathTo}>
                <Proizvodi data={data} pageName={pageName} scroll={scroll}/>
            </Route>
            <Route path="/galerija">
                <GalleryLayout scroll={scroll}/>
            </Route>
            <Route path="/onama">
                <About/>
            </Route>
            <Route path="/TipsPage">
                <TipsPage scroll={scroll} tipsData={tipsData}/>
            </Route>
            <Route path="/kontakt">
                <Contact scroll={scroll}/>
            </Route>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
  )
}

export default SiteRoutes
