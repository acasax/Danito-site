import React, { useContext } from 'react'
import Slider from './Slider'
import LineAnimation from 'components/lineAnimation'
import ProductWindow from './ProductWindow'
import CompanyPresentation from './CompanyPresentation'
import Tips from './Tips'
import Footer from 'components/footer'
import { SiteNavigationContext } from 'siteNavigation/context'
import { LandingPageContainer } from './style'

/**
 *
 * About component
 *
 * @author SaxDev 02.27.2022
 *
 * This component is a main layout of website.
 * In this component nested a section component slider, product windows, company presentation, Tips, Footer
 *
 * */

const LandingPage = () => {
  const { scroll } = useContext(SiteNavigationContext)

  return (
        <LandingPageContainer>
            <Slider/>
            <LineAnimation header={'Select your windows'} scroll={scroll} scrollY={0}/>
            <ProductWindow/>
            <CompanyPresentation/>
            <LineAnimation header={'Tips'} scroll={scroll} scrollY={0}/>
            <Tips/>
            <Footer/>
        </LandingPageContainer>
  )
}

export default LandingPage
