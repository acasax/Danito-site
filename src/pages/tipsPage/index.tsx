import React, { useContext } from 'react'
import '../../styles/TipsPage/TipsPage.css'
import LineAnimation from 'components/lineAnimation'
import Footer from '../../components/footer'
import { useSelector } from 'react-redux'
import { _selectorSelectedTip } from 'store/SiteNavigation/helpers'
import { SiteNavigationContext } from 'siteNavigation/context'
import {
  TipsPageContactUsContainer,
  TipsPageContactUsText,
  TipsPageDatePosted,
  TipsPageHeaderImage,
  TipsPageHeaderImageContainer,
  TipsPageLayoutContainer,
  TipsPageTextContainer,
  TipsPageTextHeader,
  TipsPageTextP,
  TipsPageTextPContainer,
  TipsTextItemContainer
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
                <TipsPageTextPContainer>
                    {selectedTip[0].text.map((data, key) => {
                      return (
                            <TipsTextItemContainer key={key}>
                                <TipsPageTextHeader>{data.header}</TipsPageTextHeader>
                                {
                                    data.text.map((text, key) => {
                                      return <TipsPageTextP key={key}>{text}</TipsPageTextP>
                                    })
                                }
                            </TipsTextItemContainer>
                      )
                    })}
                    <TipsPageContactUsContainer>
                        <TipsPageContactUsText href="/kontakt">Kontaktirajte nas</TipsPageContactUsText>
                    </TipsPageContactUsContainer>
                </TipsPageTextPContainer>
                <TipsPageDatePosted>{selectedTip[0].date}</TipsPageDatePosted>
            </TipsPageTextContainer>
            <Footer/>
        </TipsPageLayoutContainer>
  )
}

export default TipsPageLayout
