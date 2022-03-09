import React, { useContext, useEffect } from 'react'

import LineAnimation from 'components/lineAnimation'
import Options from './Options'

import ProfileIcon from '../../constants/img/icons/Profile.png'
import GlassIcon from '../../constants/img/icons/Glass.png'
import FittingsIcon from '../../constants/img/icons/Fittings.png'
import Footer from 'components/footer'
import {
  ProductPageCharacteristicItemContainer,
  ProductPageCharacteristicItemImageContainer,
  ProductPageCharacteristicItemText,
  ProductPageCharacteristicItemTextContainer,
  ProductPageContainer,
  ProductPageContainerCharacteristicContainer,
  ProductPageContentContainer,
  ProductPageContentImage,
  ProductPageContentOptionsContainer,
  ProductPageContentVideo,
  ProductPageContentVideoContainer,
  ProductPageHeaderImage,
  ProductPageHeaderImageContainer,
  ProductPagePanelContainer,
  ProductPageProfileImg,
  ProductPageProfileImgContainer,
  ProductPageProfileInfo,
  ProductPageProfilesContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'

const ProductPage = () => {
  const { scroll, data, pageName } = useContext(SiteNavigationContext)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
        <ProductPageContainer>
            <ProductPageHeaderImageContainer>
                <ProductPageHeaderImage src={data.imgCover} alt={data.name}/>
            </ProductPageHeaderImageContainer>
            <LineAnimation header={pageName} scroll={scroll} scrollY={200}/>
            <ProductPageContentContainer>
                <ProductPageContentVideoContainer>
                    {data.video || data.imgVideo
                      ? (
                            <ProductPageContentVideo autoPlay src={data.video || data.imgVideo}/>
                        )
                      : (
                            <ProductPageContentImage src={data.videoImg} alt=""/>
                        )}
                </ProductPageContentVideoContainer>
                <ProductPageContentOptionsContainer>
                    <Options optionsContent={data} pageName={pageName}/>
                </ProductPageContentOptionsContainer>
            </ProductPageContentContainer>
            {
                data.material && (
                    <LineAnimation header={'Karakteristike'} scroll={scroll} scrollY={1000}/>
                )
            }
            <ProductPageContainerCharacteristicContainer>
                {
                    data.material.first && (
                        <ProductPageCharacteristicItemContainer>
                            <ProductPageCharacteristicItemImageContainer>
                                <img src={ProfileIcon} alt="profile icon"/>
                            </ProductPageCharacteristicItemImageContainer>
                            <ProductPageCharacteristicItemTextContainer>
                                <ProductPageCharacteristicItemText>
                                    {data.material.first}
                                </ProductPageCharacteristicItemText>
                            </ProductPageCharacteristicItemTextContainer>
                        </ProductPageCharacteristicItemContainer>)
                }
                {
                    data.material.second && (
                        <ProductPageCharacteristicItemContainer>
                            <ProductPageCharacteristicItemImageContainer>
                                <img src={GlassIcon} alt="profile icon"/>
                            </ProductPageCharacteristicItemImageContainer>
                            <ProductPageCharacteristicItemTextContainer>
                                <ProductPageCharacteristicItemText>
                                    {data.material.second}
                                </ProductPageCharacteristicItemText>
                            </ProductPageCharacteristicItemTextContainer>
                        </ProductPageCharacteristicItemContainer>
                    )
                }
                {
                    data.material.third && (
                        <ProductPageCharacteristicItemContainer>
                            <ProductPageCharacteristicItemImageContainer>
                                <img src={FittingsIcon} alt="profile icon"/>
                            </ProductPageCharacteristicItemImageContainer>
                            <ProductPageCharacteristicItemTextContainer>
                                <ProductPageCharacteristicItemText>
                                    {data.material.third}
                                </ProductPageCharacteristicItemText>
                            </ProductPageCharacteristicItemTextContainer>
                        </ProductPageCharacteristicItemContainer>
                    )
                }
            </ProductPageContainerCharacteristicContainer>
            {data.panel ? <LineAnimation header={'Panels'} scroll={scroll} scrollY={1600}/> : null}
            {data.panel
              ? (
                    <ProductPageProfilesContainer>
                        {data.panel.map((panel, key) => {
                          return (
                                <ProductPagePanelContainer key={key}>
                                    <ProductPageProfileInfo>
                                        <h2>{panel.name}</h2>
                                        <p>{panel.text}</p>
                                    </ProductPageProfileInfo>
                                    <ProductPageProfileImgContainer>
                                        {panel.image.map((img, key) => {
                                          return (
                                                <ProductPageProfileImg src={img} alt={data.name} key={key}/>
                                          )
                                        })}
                                    </ProductPageProfileImgContainer>
                                </ProductPagePanelContainer>
                          )
                        })}
                    </ProductPageProfilesContainer>
                )
              : null}
            <Footer/>
        </ProductPageContainer>
  )
}

export default ProductPage
