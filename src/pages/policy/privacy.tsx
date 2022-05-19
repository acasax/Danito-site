import React, { useContext } from 'react'
import CompanyImgCover from '../../constants/img/showRoom/19.jpg'
import { SiteNavigationContext } from 'siteNavigation/context'
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
import { useSelector } from 'react-redux'
import { _selectorPolicyContent } from 'store/SiteData/helpers'
import Footer from '../../components/footer'

const PolicyLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const policyContent = useSelector(_selectorPolicyContent)
  return (
        <PolicyContainer>
            <PolicyHeaderImageContainer>
                <PolicyHeaderImage src={CompanyImgCover} alt="company img cover"/>
            </ PolicyHeaderImageContainer>
            <LineAnimation header={Translate.POLICY_PAGE_HEADER} scroll={scroll} scrollY={0}/>
            <PolicyContentContainer>
                <PolicyInfoContainer>
                    {
                        policyContent.map((x, key) => {
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

export default PolicyLayout
