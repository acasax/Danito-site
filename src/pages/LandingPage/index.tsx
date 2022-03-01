import React, { useContext } from 'react'
import Slider from './slider/Slider'
import LineAnimation from 'components/lineAnimation'
import ProductWindow from './productWindow/ProductWindow'
import Inspiration from './Inspiration/inspiration'
import CompanyPresentation from './companyPresentation/companyPresentation'
import Tips from './tips/Tips'
import Footer from 'components/footer'
import { SiteNavigationContext } from 'siteNavigation/context'
import { LandingPageContainer } from './style'

const LandingPage = () => {
  const {
    scroll,
    setTipsData,
    setPathToTipsPage,
    setPageName,
    pathTo,
    setPathTo,
    setData,
    pageName
  } = useContext(SiteNavigationContext)

  return (
        <LandingPageContainer>
            <Slider/>
            <LineAnimation header={'Select your windows'} scroll={scroll} scrollY={200}/>
            <ProductWindow
                setPageName={setPageName}
                pathTo={pathTo}
                setPathTo={setPathTo}
                setData={setData}
                pageName={pageName}
            />
            <LineAnimation header={'Inspiration'} scroll={scroll} scrollY={800}/>
            <Inspiration/>
            <CompanyPresentation scroll={scroll} scrollY={2000}/>
            <LineAnimation header={'Tips'} scroll={scroll} scrollY={3000}/>
            <Tips setTipsData={setTipsData} setPathToTipsPage={setPathToTipsPage}/>
            <Footer/>
        </LandingPageContainer>
  )
}

export default LandingPage
