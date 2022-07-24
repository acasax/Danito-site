import React, { useContext, useEffect, useState } from 'react'
import LineAnimation from 'components/lineAnimation'
import CompanyImgCover from '../../constants/img/about/cover.jpg'
import Footer from 'components/footer'
import {
  AboutContainer,
  AboutContentContainer,
  AboutHeaderImage,
  AboutHeaderImageContainer,
  AboutHeaderText,
  AboutHeaderTextContainer,
  AboutInfoContainer,
  AboutInfoGalleyContainer,
  AboutInfoHeaderText,
  AboutInfoRow,
  AboutInfoText,
  AboutInfoTextHeader,
  AboutInfoTextHeaderContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import { useSelector } from 'react-redux'
import { _selectAllAboutInfoCarouselImages, _selectAllAboutTechnologyCarouselImages } from 'store/SiteData/helpers'
import { Translate } from '../../translate/data'
import { calcSize } from '../../constants/ResponsiveBreakpoints'

/**
 *
 * About component
 *
 * @author SaxDev 03.07.2022
 *
 * This is display about page layout.
 * This component have two part about us and technology part.
 *
 * */

const AboutLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const images = useSelector(_selectAllAboutInfoCarouselImages)
  const techImages = useSelector(_selectAllAboutTechnologyCarouselImages)

  const [width, setWidth] = useState(0)
  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  const AboutInfoCarousel = {
    maxHeight: width > calcSize.large && width <= calcSize.extralarge
      ? 667
      : width > calcSize.medium && width <= calcSize.large
        ? 667
        : width > calcSize.small && width <= calcSize.medium
          ? 667
          : width > calcSize.xsmall && width <= calcSize.small
            ? 270
            : width > 0 && width <= calcSize.xsmall
              ? 270
              : 2,
    maxWidth: 1000
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  return (
        <AboutContainer>
            <AboutHeaderImageContainer>
                <AboutHeaderImage src={CompanyImgCover} alt="company img cover"/>
            </ AboutHeaderImageContainer>
            <LineAnimation header={Translate.COMPANY_NAME} scroll={scroll} scrollY={0}/>
            <AboutContentContainer>
                <AboutHeaderTextContainer>
                    <AboutHeaderText>
                        {Translate.ABOUT_HEADER}
                    </AboutHeaderText>
                </AboutHeaderTextContainer>
                <AboutInfoRow>
                    <AboutInfoGalleyContainer>
                        <Carousel images={images} style={AboutInfoCarousel} canAutoPlay={false}/>
                    </AboutInfoGalleyContainer>
                    <AboutInfoContainer>
                        <AboutInfoHeaderText>{Translate.ABOUT_INFO_HEADER}</AboutInfoHeaderText>
                        <AboutInfoText>
                            {Translate.ABOUT_INFO_TEXT_PART_I}
                        </AboutInfoText>
                        <AboutInfoText>
                            {Translate.ABOUT_INFO_TEXT_PART_II}
                        </AboutInfoText>
                        <AboutInfoHeaderText>{Translate.ABOUT_CLIENT_HEADER}</AboutInfoHeaderText>
                        <AboutInfoText>
                            {Translate.ABOUT_CLIENT_TEXT}
                        </AboutInfoText>
                    </AboutInfoContainer>
                </AboutInfoRow>
                <AboutHeaderTextContainer>
                    <AboutHeaderText>
                        {Translate.ABOUT_MOTTO}
                    </AboutHeaderText>
                </AboutHeaderTextContainer>
                <AboutInfoRow>
                    <AboutInfoContainer>
                        <AboutInfoHeaderText>{Translate.ABOUT_PRODUCTION}</AboutInfoHeaderText>
                        <AboutInfoText>
                            {Translate.ABOUT_PRODUCTION_TEXT_PART_I}
                        </AboutInfoText>
                        <AboutInfoText>
                            {Translate.ABOUT_PRODUCTION_TEXT_PART_II}
                        </AboutInfoText>
                        <AboutInfoHeaderText>{Translate.ABOUT_INSTALLATION}</AboutInfoHeaderText>
                        <AboutInfoTextHeaderContainer>
                            <AboutInfoTextHeader>{Translate.ABOUT_INSTALLATION_HEADER_I}</AboutInfoTextHeader>
                        </AboutInfoTextHeaderContainer>
                        <AboutInfoText>
                            {Translate.ABOUT_INSTALLATION_TEXT_I}
                        </AboutInfoText>
                        <AboutInfoTextHeaderContainer>
                            <AboutInfoTextHeader>{Translate.ABOUT_INSTALLATION_HEADER_II}</AboutInfoTextHeader>
                        </AboutInfoTextHeaderContainer>
                        <AboutInfoText>{Translate.ABOUT_INSTALLATION_TEXT_II}</AboutInfoText>
                    </AboutInfoContainer>
                    <AboutInfoGalleyContainer>
                        <Carousel images={techImages} style={AboutInfoCarousel} canAutoPlay={false}/>
                    </AboutInfoGalleyContainer>
                </AboutInfoRow>
            </AboutContentContainer>
            <Footer/>
        </AboutContainer>
  )
}

export default AboutLayout
