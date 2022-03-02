import React, { useContext } from 'react'
import Slider from './Slider'
import LineAnimation from 'components/lineAnimation'
import ProductWindow from './ProductWindow'
import CompanyPresentation from './companyPresentation/CompanyPresentation'
import Tips from './tips/Tips'
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
            <LineAnimation header={'Tips'} scroll={scroll} scrollY={3000}/>
            <Tips setTipsData={setTipsData} setPathToTipsPage={setPathToTipsPage}/>
            <Footer/>
        </LandingPageContainer>
  )
}

export default LandingPage
