import * as React from 'react'
import { useContext } from 'react'
import '../../styles/Tips/Tips.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { _selectorAllTipsData } from 'store/SiteData/helpers'
import {
  CardContainer,
  CardContentContainer,
  CardFooter,
  CardFooterDateContainer,
  CardFooterDateText,
  CardFooterMoreButton,
  CardHeaderContainer,
  CardHeaderText,
  CardImage,
  CardImageContainer,
  CardText,
  CardTextContainer,
  TipsContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import { UseTips } from 'hooks/siteData/useTips'

const Tips = () => {
  const { scroll, setTipsData } = useContext(SiteNavigationContext)
  const tipsData = useSelector(_selectorAllTipsData)
  const { setSelectedTip } = UseTips()

  return (
        <TipsContainer>
            {tipsData.map((data, key) => {
              return (
                    <CardContainer key={key} out={scroll >= 1500}>
                        <CardImageContainer>
                            <CardImage src={data.coverImg}/>
                        </CardImageContainer>
                        <CardContentContainer>
                            <CardHeaderContainer>
                                <CardHeaderText>{data.header}</CardHeaderText>
                            </CardHeaderContainer>
                            <CardTextContainer>
                                <CardText>{data.landingPageText}...</CardText>
                            </CardTextContainer>
                            <CardFooter>
                                <Link onClick={() => setSelectedTip(data.header)} to="/TipsPage" style={CardFooterMoreButton}>
                                    Read
                                </Link>
                                <CardFooterDateContainer>
                                    <CardFooterDateText>{data.date}</CardFooterDateText>
                                </CardFooterDateContainer>
                            </CardFooter>
                        </CardContentContainer>
                    </CardContainer>
              )
            })}
        </TipsContainer>
  )
}

export default Tips
