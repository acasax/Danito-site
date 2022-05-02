import * as React from 'react'
import { useContext } from 'react'
import '../../styles/Tips/Tips.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { _selectorAllTipsData } from 'store/SiteNavigation/helpers'
import {
  Card,
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

/**
 *
 * About component
 *
 * @author SaxDev 02.26.2022
 *
 * This component is a section of tips card.
 * This component is a part of landing page.
 *
 * Work methode
 *
 * On click on read more, set tips header to store and go to single tips page with data of tips.
 *
 * */

const Tips = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const tipsData = useSelector(_selectorAllTipsData)
  const { setSelectedTip } = UseTips()

  return (
        <TipsContainer>
            {tipsData.map((data, key) => {
              return (
                    <Card key={key}>
                        <CardContainer out={scroll >= 0}>
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
                                    <Link onClick={() => setSelectedTip(data.header)} to="/TipsPage"
                                          style={CardFooterMoreButton}>
                                        Read
                                    </Link>
                                    <CardFooterDateContainer>
                                        <CardFooterDateText>{data.date}</CardFooterDateText>
                                    </CardFooterDateContainer>
                                </CardFooter>
                            </CardContentContainer>
                        </CardContainer>
                    </Card>
              )
            })}
        </TipsContainer>
  )
}

export default Tips
