import React, { useContext } from 'react'
import CompanyImgCover from '../../constants/img/showRoom/19.jpg'
import {
  PolicyContainer,
  PolicyContentContainer,
  PolicyHeaderImage,
  PolicyHeaderImageContainer,
  PolicyInfoContainer,
  PolicyInfoHeaderText,
  PolicyInfoText
} from './style'
import LineAnimation from '../../components/lineAnimation'
import { Translate } from '../../translate/data'
import { SiteNavigationContext } from 'siteNavigation/context'
import { useSelector } from 'react-redux'
import { _selectorGdprContent } from 'store/SiteData/helpers'
import Footer from '../../components/footer'

/**
 *
 * About component
 *
 * @author SaxDev 05.19.2022
 *
 * This is display gdpr page layout.
 *
 * **/

const GdprLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const gdprContent = useSelector(_selectorGdprContent)
  return (
        <PolicyContainer>
            <PolicyHeaderImageContainer>
                <PolicyHeaderImage src={CompanyImgCover} alt="company img cover"/>
            </ PolicyHeaderImageContainer>
            <LineAnimation header={Translate.GDPR_PAGE_HEADER} scroll={scroll} scrollY={0}/>
            <PolicyContentContainer>
                <PolicyInfoContainer>
                    {
                        gdprContent.map((x, key) => {
                          return (
                                <>
                                    <PolicyInfoHeaderText key={key}>
                                        {x.header}
                                    </PolicyInfoHeaderText>
                                    {
                                        x.text.map((y, key) => {
                                          return (
                                              <PolicyInfoText key={key}>
                                                  {y}
                                              </PolicyInfoText>
                                          )
                                        })
                                    }
                                </>
                          )
                        })
                    }
                </PolicyInfoContainer>
            </PolicyContentContainer>
            <Footer/>
        </PolicyContainer>
  )
}

export default GdprLayout
