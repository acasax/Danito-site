import React, { useContext } from 'react'
import LineAnimation from 'components/lineAnimation'
import Footer from '../../components/footer'
import { useSelector } from 'react-redux'
import { _selectorSelectedTip } from 'store/SiteNavigation/helpers'
import { SiteNavigationContext } from 'siteNavigation/context'
import {
  InTipsDefaultImage,
  InTipsImageContainer,
  InTipsImageD,
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
import { Translate } from '../../translate/data'
import { InTipsImages } from '../../store/SiteNavigation/d'

const TipsPageLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const selectedTip = useSelector(_selectorSelectedTip)

  return (
        <TipsPageLayoutContainer>
            <TipsPageHeaderImageContainer>
                <TipsPageHeaderImage src={selectedTip[0].coverImg} alt="some img"/>
            </TipsPageHeaderImageContainer>
            <LineAnimation header={selectedTip[0].landingPageText} scroll={scroll} scrollY={0} fontSize={20}/>
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
                                {
                                    data.img
                                      ? <InTipsImageContainer>
                                        <InTipsImageD src={data.img}/>
                                    </InTipsImageContainer>
                                      : <InTipsImageContainer>
                                            <InTipsDefaultImage src={InTipsImages.default}/>
                                        </InTipsImageContainer>
                                }
                            </TipsTextItemContainer>
                      )
                    })}
                    <TipsPageContactUsContainer>
                        <TipsPageContactUsText href="/kontakt">{Translate.TIPS_PAGE_CONTACT_OS}</TipsPageContactUsText>
                    </TipsPageContactUsContainer>
                </TipsPageTextPContainer>
                <TipsPageDatePosted>{selectedTip[0].date}</TipsPageDatePosted>
            </TipsPageTextContainer>
            <Footer/>
        </TipsPageLayoutContainer>
  )
}

export default TipsPageLayout
