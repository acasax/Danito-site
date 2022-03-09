import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import GalleryLayout from 'pages/gallery'
import About from 'pages/about'
import TipsPage from 'pages/layout/tipsPage/TipsPage'
import Contact from 'pages/contact'
import LandingPage from 'pages/LandingPage'
import ProductPage from 'pages/layout/products'
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
                <ProductPage data={data} pageName={pageName} scroll={scroll}/>
            </Route>
            <Route path="/galerija">
                <GalleryLayout/>
            </Route>
            <Route path="/onama">
                <About/>
            </Route>
            <Route path="/TipsPage">
                <TipsPage scroll={scroll} tipsData={tipsData}/>
            </Route>
            <Route path="/kontakt">
                <Contact/>
            </Route>
            <Route path="/">
                <LandingPage/>
            </Route>
        </Switch>
  )
}

export default SiteRoutes
