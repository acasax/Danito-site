import React, { useContext } from 'react'
import '../../styles/TipsPage/TipsPage.css'
import LineAnimation from 'components/lineAnimation'
import Footer from '../../components/footer'
import { useSelector } from 'react-redux'
import { _selectorSelectedTip } from 'store/SiteNavigation/helpers'
import { SiteNavigationContext } from 'siteNavigation/context'
import {
  TipsPageDatePosted,
  TipsPageHeaderImage,
  TipsPageHeaderImageContainer,
  TipsPageLayoutContainer,
  TipsPageTextContainer,
  TipsPageTextHeader,
  TipsPageTextP,
  TipsPageTextPContainer
} from './style'

const TipsPageLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const selectedTip = useSelector(_selectorSelectedTip)

  return (
        <TipsPageLayoutContainer>
                <TipsPageHeaderImageContainer>
                    <TipsPageHeaderImage src={selectedTip[0].coverImg} alt="some img"/>
                </TipsPageHeaderImageContainer>
                <LineAnimation header={selectedTip[0].landingPageText} scroll={scroll} scrollY={250} fontSize={20}/>
                <TipsPageTextContainer>
                    <TipsPageTextHeader>{selectedTip[0].landingPageText}</TipsPageTextHeader>
                    <TipsPageTextPContainer>
                        {selectedTip[0].text.map((data, key) => {
                          return <TipsPageTextP key={key}>{data}</TipsPageTextP>
                        })}
                    </TipsPageTextPContainer>
                    <TipsPageDatePosted>{selectedTip[0].date}</TipsPageDatePosted>
                </TipsPageTextContainer>
            <Footer/>
        </TipsPageLayoutContainer>
  )
}

export default TipsPageLayout
