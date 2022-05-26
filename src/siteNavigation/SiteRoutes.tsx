import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'

import { SiteNavigationContext } from './context'
import SpinnerLoading from '../components/Spinner/SpinnerLoading'
import { get } from 'lodash'

const GalleryLayout = React.lazy(() => import('pages/gallery'))
const About = React.lazy(() => import('pages/about'))
const TipsPageLayout = React.lazy(() => import('pages/tipsPage'))
const Contact = React.lazy(() => import('pages/contact'))
const LandingPage = React.lazy(() => import('pages/landingPage'))
const ProductPage = React.lazy(() => import('pages/products'))
const GdprPage = React.lazy(() => import('pages/policy/gdpr'))
const PolicyPage = React.lazy(() => import('pages/policy/privacy'))

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

export const ComponentLazy = (props: any) => {
  const {
    component,
    ...rest
  } = props
  const C = component
  return (get(component, '$$typeof') === Symbol.for('react.lazy')) ? <React.Suspense fallback={<SpinnerLoading />}><C {...rest}/></React.Suspense> : <C {...rest} />
}

const SiteRoutes = () => {
  const { pathTo } = useContext(SiteNavigationContext)
  return (
        <Switch>
            <Route path={pathTo}>
                <ComponentLazy component={ProductPage} />
            </Route>
            <Route path="/galerija">
                <ComponentLazy component={GalleryLayout} />
            </Route>
            <Route path="/onama">
                <ComponentLazy component={About} />
            </Route>
            <Route path="/TipsPage">
                <ComponentLazy component={TipsPageLayout} />
            </Route>
            <Route path="/kontakt">
                <ComponentLazy component={Contact} />
            </Route>
            <Route path="/gdpr">
                <ComponentLazy component={GdprPage} />
            </Route>
            <Route path="/policy">
                <ComponentLazy component={PolicyPage} />
            </Route>
            <Route path="/">
                <ComponentLazy component={LandingPage} />
            </Route>
        </Switch>
  )
}

export default SiteRoutes
