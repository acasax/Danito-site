import React, { useContext, useEffect } from 'react'

import LineAnimation from 'components/lineAnimation'
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
  ProductPageProfileContainer,
  ProductPageProfileImg,
  ProductPageProfileImgContainer,
  ProductPageProfileInfo,
  ProductPageProfilesContainer,
  ProductPageProfileText,
  ProductPageProfileTextContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import Options from './Options'

const ProductPage = () => {
  const { scroll, data, pageName } = useContext(SiteNavigationContext)

  useEffect(() => {
    window.scrollTo(0, 0)
    console.log(data)
  }, [data])

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
                    <Options optionsContent={data}/>
                </ProductPageContentOptionsContainer>
            </ProductPageContentContainer>
            {
                data.material && (
                <>
                   <LineAnimation header={'Karakteristike'} scroll={scroll} scrollY={1000}/>
                   <ProductPageContainerCharacteristicContainer>
                       {
                           data.material.map((item, key) => {
                             return key === 0
                               ? (
                                   <ProductPageCharacteristicItemContainer key={key}>
                                       <ProductPageCharacteristicItemImageContainer>
                                           <img src={ProfileIcon} alt="profile icon"/>
                                       </ProductPageCharacteristicItemImageContainer>
                                       <ProductPageCharacteristicItemTextContainer>
                                           <ProductPageCharacteristicItemText>
                                               {item}
                                           </ProductPageCharacteristicItemText>
                                       </ProductPageCharacteristicItemTextContainer>
                                   </ProductPageCharacteristicItemContainer>
                                 )
                               : key === 1
                                 ? (
                                 <ProductPageCharacteristicItemContainer key={key}>
                                     <ProductPageCharacteristicItemImageContainer>
                                         <img src={GlassIcon} alt="profile icon"/>
                                     </ProductPageCharacteristicItemImageContainer>
                                     <ProductPageCharacteristicItemTextContainer>
                                         <ProductPageCharacteristicItemText>
                                             {item}
                                         </ProductPageCharacteristicItemText>
                                     </ProductPageCharacteristicItemTextContainer>
                                 </ProductPageCharacteristicItemContainer>
                                   )
                                 : (
                                 <ProductPageCharacteristicItemContainer key={key}>
                                     <ProductPageCharacteristicItemImageContainer>
                                         <img src={FittingsIcon} alt="profile icon"/>
                                     </ProductPageCharacteristicItemImageContainer>
                                     <ProductPageCharacteristicItemTextContainer>
                                         <ProductPageCharacteristicItemText>
                                             {item}
                                         </ProductPageCharacteristicItemText>
                                     </ProductPageCharacteristicItemTextContainer>
                                 </ProductPageCharacteristicItemContainer>
                                   )
                           })
                       }
                   </ProductPageContainerCharacteristicContainer>
                </>
                )
            }
            {data.panels
              ? <>
                <LineAnimation header={'Panels'} scroll={scroll} scrollY={1600}/>
                <ProductPageProfilesContainer>
                    {data.panels.map((panel, key) => {
                      return (
                            <ProductPagePanelContainer key={key}>
                                <ProductPageProfileInfo>
                                    <h2>{panel.name}</h2>
                                    <p>{panel.text}</p>
                                </ProductPageProfileInfo>
                                <ProductPageProfileImgContainer>
                                    {panel.image.map((item, key) => {
                                      return (
                                          <ProductPageProfileContainer key={key}>
                                              <ProductPageProfileImg src={item.img} alt={item.text} />
                                              <ProductPageProfileTextContainer>
                                                  <ProductPageProfileText>
                                                      {item.text}
                                                  </ProductPageProfileText>
                                              </ProductPageProfileTextContainer>
                                          </ProductPageProfileContainer>
                                      )
                                    })}
                                </ProductPageProfileImgContainer>
                            </ProductPagePanelContainer>
                      )
                    })}
                </ProductPageProfilesContainer>
            </>
              : null}
            <Footer/>
        </ProductPageContainer>
  )
}

export default ProductPage
