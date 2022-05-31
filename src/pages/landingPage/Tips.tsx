import * as React from 'react'
import { useContext, useEffect, useState } from 'react'
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
import { Styles } from '../../constants/StyleConstants'
import { calcSize } from '../../constants/ResponsiveBreakpoints'

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
  const [width, setWidth] = useState(0)

  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  const CardFooterMoreButton = {
    textDecoration: 'none',
    borderWidth: width > calcSize.large && width < calcSize.extralarge
      ? calcSize.extralarge * 2 / calcSize.hd
      : width > calcSize.medium && width < calcSize.large
        ? calcSize.large * 2 / calcSize.hd
        : width > calcSize.small && width < calcSize.medium
          ? calcSize.medium * 2 / calcSize.hd
          : width > calcSize.xsmall && width < calcSize.small
            ? calcSize.small * 2 / calcSize.hd
            : width > 0 && width < calcSize.xsmall
              ? calcSize.xsmall * 2 / calcSize.hd
              : 2,
    borderStyle: 'solid',
    borderColor: Styles.Colours.PALETTE.DANITO._yellow,
    paddingHorizontal: width > calcSize.large && width < calcSize.extralarge
      ? calcSize.extralarge * 4 / calcSize.hd
      : width > calcSize.medium && width < calcSize.large
        ? calcSize.large * 4 / calcSize.hd
        : width > calcSize.small && width < calcSize.medium
          ? calcSize.medium * 4 / calcSize.hd
          : width > calcSize.xsmall && width < calcSize.small
            ? calcSize.small * 4 / calcSize.hd
            : width > 0 && width < calcSize.xsmall
              ? calcSize.xsmall * 4 / calcSize.hd
              : 4,
    paddingVertical: width > calcSize.large && width < calcSize.extralarge
      ? calcSize.extralarge * 20 / calcSize.hd
      : width > calcSize.medium && width < calcSize.large
        ? calcSize.large * 20 / calcSize.hd
        : width > calcSize.small && width < calcSize.medium
          ? calcSize.medium * 20 / calcSize.hd
          : width > calcSize.xsmall && width < calcSize.small
            ? calcSize.small * 20 / calcSize.hd
            : width > 0 && width < calcSize.xsmall
              ? calcSize.xsmall * 20 / calcSize.hd
              : 20,
    color: Styles.Colours.PALETTE.DANITO._black,
    fontSize: width > calcSize.large && width < calcSize.extralarge
      ? calcSize.extralarge * 15 / calcSize.hd
      : width > calcSize.medium && width < calcSize.large
        ? calcSize.large * 15 / calcSize.hd
        : width > calcSize.small && width < calcSize.medium
          ? calcSize.medium * 15 / calcSize.hd
          : width > calcSize.xsmall && width < calcSize.small
            ? calcSize.small * 15 / calcSize.hd
            : width > 0 && width < calcSize.xsmall
              ? calcSize.xsmall * 15 / calcSize.hd
              : 15,
    fontWeight: 600,
    height: width > calcSize.large && width < calcSize.extralarge
      ? calcSize.extralarge * 30 / calcSize.hd
      : width > calcSize.medium && width < calcSize.large
        ? calcSize.large * 30 / calcSize.hd
        : width > calcSize.small && width < calcSize.medium
          ? calcSize.medium * 30 / calcSize.hd
          : width > calcSize.xsmall && width < calcSize.small
            ? calcSize.small * 30 / calcSize.hd
            : width > 0 && width < calcSize.xsmall
              ? calcSize.xsmall * 30 / calcSize.hd
              : 30,
    minWidth: width > calcSize.large && width < calcSize.extralarge
      ? calcSize.extralarge * 80 / calcSize.hd
      : width > calcSize.medium && width < calcSize.large
        ? calcSize.large * 80 / calcSize.hd
        : width > calcSize.small && width < calcSize.medium
          ? calcSize.medium * 80 / calcSize.hd
          : width > calcSize.xsmall && width < calcSize.small
            ? calcSize.small * 80 / calcSize.hd
            : width > 0 && width < calcSize.xsmall
              ? calcSize.xsmall * 80 / calcSize.hd
              : 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
        <TipsContainer>
            {tipsData.map((data, key) => {
              return (
                    <Card key={key}>
                        <CardContainer out={scroll >= 0}>
                            <CardImageContainer>
                                <CardImage src={data.cardImg}/>
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
