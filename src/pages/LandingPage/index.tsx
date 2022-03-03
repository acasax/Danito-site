import React, { useContext } from 'react'
import Slider from './Slider'
import LineAnimation from 'components/lineAnimation'
import ProductWindow from './ProductWindow'
import CompanyPresentation from './CompanyPresentation'
import Tips from './Tips'
import Footer from 'components/footer'
import { SiteNavigationContext } from 'siteNavigation/context'
import { LandingPageContainer } from './style'

const LandingPage = () => {
  const { scroll, setTipsData, setPathToTipsPage } = useContext(SiteNavigationContext)

  return (
        <LandingPageContainer>
            <Slider/>
            <LineAnimation header={'Select your windows'} scroll={scroll} scrollY={200}/>
            <ProductWindow/>
            <CompanyPresentation scroll={scroll} scrollY={800}/>
            <LineAnimation header={'Tips'} scroll={scroll} scrollY={1200}/>
            <Tips/>
            <Footer/>
        </LandingPageContainer>
  )
}

export default LandingPage
