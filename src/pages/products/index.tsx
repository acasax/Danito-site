import React, { useContext, useEffect, useState } from 'react'

import LineAnimation from 'components/lineAnimation'
import ProfileIcon from '../../constants/img/icons/Profile.png'
import GlassIcon from '../../constants/img/icons/Glass.png'
import FittingsIcon from '../../constants/img/icons/Fittings.png'
import Footer from 'components/footer'
import {
  ProductPageCharacteristicItemContainer,
  ProductPageCharacteristicItemHeader,
  ProductPageCharacteristicItemHeaderContainer,
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
  ProductPageProfileTextContainer,
  ProductsPanelsInfoContainer,
  ProductsPanelsInfoSelectedImage,
  ProductsPanelsInfoSelectedImageContainer,
  ProductsPanelsInfoText,
  ProductsPanelsInfoTextContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import Options from './Options'
import Backdrop from '@mui/material/Backdrop'
import { TPanelsImg } from 'store/SiteNavigation/d'
import { Translate } from '../../translate/data'

const ProductPage = () => {
  const { scroll, data, pageName } = useContext(SiteNavigationContext)

  const [panelModal, setPanelModal] = useState({} as TPanelsImg)
  const [open, setOpen] = useState(false)

  const handlePanelModal = (imageModal: TPanelsImg) => {
    setPanelModal(imageModal)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setPanelModal({} as TPanelsImg)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
        <ProductPageContainer>
            <ProductPageHeaderImageContainer>
                <ProductPageHeaderImage src={data.imgCover} alt={data.name}/>
            </ProductPageHeaderImageContainer>
            <LineAnimation header={pageName} scroll={scroll} scrollY={0}/>
            <ProductPageContentContainer>
                <ProductPageContentVideoContainer>
                    {data.imgVideo
                      ? (
                            <ProductPageContentVideo autoPlay src={data.imgVideo}/>
                        )
                      : (
                            <ProductPageContentImage src={data.img} alt=""/>
                        )}
                </ProductPageContentVideoContainer>
                <ProductPageContentOptionsContainer>
                    <Options optionsContent={data}/>
                </ProductPageContentOptionsContainer>
            </ProductPageContentContainer>
            {
                data.material && (
                    <>
                        <LineAnimation header={Translate.PRODUCT_CHARACTERISTICS} scroll={scroll} scrollY={0}/>
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
                                                    <ProductPageCharacteristicItemHeaderContainer>
                                                        <ProductPageCharacteristicItemHeader>
                                                            {Translate.PRODUCT_CHARACTERISTICS_PROFILE}
                                                        </ProductPageCharacteristicItemHeader>
                                                    </ProductPageCharacteristicItemHeaderContainer>
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
                                                        <ProductPageCharacteristicItemHeaderContainer>
                                                            <ProductPageCharacteristicItemHeader>
                                                                {Translate.PRODUCT_CHARACTERISTICS_CHAINS}
                                                            </ProductPageCharacteristicItemHeader>
                                                        </ProductPageCharacteristicItemHeaderContainer>
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
                                                        <ProductPageCharacteristicItemHeaderContainer>
                                                            <ProductPageCharacteristicItemHeader>
                                                                {Translate.PRODUCT_CHARACTERISTICS_GLASS}
                                                            </ProductPageCharacteristicItemHeader>
                                                        </ProductPageCharacteristicItemHeaderContainer>
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
                    <LineAnimation header={'Panels'} scroll={scroll} scrollY={0}/>
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
                                                <ProductPageProfileContainer
                                                    key={key}
                                                    onClick={() => handlePanelModal(item)}
                                                >
                                                    <ProductPageProfileImg src={item.smallImg} alt={item.text}/>
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
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={open}
                            onClick={handleClose}
                        />
                        {open
                          ? (
                                <ProductsPanelsInfoContainer>
                                    <ProductsPanelsInfoSelectedImageContainer>
                                        <ProductsPanelsInfoSelectedImage src={panelModal.img}/>
                                    </ProductsPanelsInfoSelectedImageContainer>
                                    <ProductsPanelsInfoTextContainer>
                                        <ProductsPanelsInfoText>{panelModal.text}</ProductsPanelsInfoText>
                                    </ProductsPanelsInfoTextContainer>
                                </ProductsPanelsInfoContainer>
                            )
                          : null}
                    </ProductPageProfilesContainer>
                </>
              : null}
            <Footer/>
        </ProductPageContainer>
  )
}

export default ProductPage
