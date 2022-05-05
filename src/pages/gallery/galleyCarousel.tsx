import React, { useEffect, useState } from 'react'
import '../../styles/GalerijaFunc/GalerijaFunc.css'

import Backdrop from '@mui/material/Backdrop'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  GalleryCarouselSelectedImageHeader,
  GalleryCarouselSelectedImageHeaderContainer,
  GalleyCarouselContainer,
  GalleyCarouselImage,
  GalleyCarouselSelectedImage,
  GalleyCarouselSelectedImageContainer
} from './style'
import { Styles } from '../../constants/StyleConstants'
import { calcSize } from '../../constants/ResponsiveBreakpoints'

/**
 *
 *  About Component
 *
 *  @author SaxDev 03.08.2022
 *
 *  This component is a display image on galley layout.
 *
 *  work method
 *
 *  list of image on click open big image on carousel
 *
 * */

const GalleyCarousel = ({ ImgObj, ImgHeader }: any) => {
  const [open, setOpen] = useState(false)
  const [imageModal, setImageModal] = useState('')
  const [width, setWidth] = useState(0)

  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  const GalleyCarouselSelectedImageContainerIcons = {
    fontSize:
            width > calcSize.large && width <= calcSize.extralarge
              ? calcSize.extralarge * 60 / calcSize.hd
              : width > calcSize.medium && width <= calcSize.large
                ? calcSize.large * 60 / calcSize.hd
                : width > calcSize.small && width <= calcSize.medium
                  ? calcSize.medium * 60 / calcSize.hd
                  : width > calcSize.xsmall && width <= calcSize.small
                    ? calcSize.small * 60 / calcSize.hd
                    : width > 0 && width <= calcSize.xsmall
                      ? calcSize.xsmall * 60 / calcSize.hd
                      : 60,
    position: 'relative',
    top: width > calcSize.large && width <= calcSize.extralarge
      ? calcSize.extralarge * 250 / calcSize.hd
      : width > calcSize.medium && width <= calcSize.large
        ? calcSize.large * 250 / calcSize.hd
        : width > calcSize.small && width <= calcSize.medium
          ? calcSize.medium * 250 / calcSize.hd
          : width > calcSize.xsmall && width <= calcSize.small
            ? calcSize.small * 250 / calcSize.hd
            : width > 0 && width <= calcSize.xsmall
              ? calcSize.xsmall * 250 / calcSize.hd
              : 250,
    color: Styles.Colours.PALETTE.DANITO._white,
    cursor: 'pointer'
  }

  const setModalOpenImage = (image) => {
    setImageModal(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setImageModal('')
  }

  const changeImgLeft = () => {
    const index = ImgObj.findIndex((img) => img.src === imageModal)
    const lastIndex = ImgObj.length - 1
    if (ImgObj[index - 1] === undefined) {
      setImageModal(ImgObj[lastIndex].src)
    } else {
      setImageModal(ImgObj[index - 1].src)
    }
  }

  const changeImgRight = () => {
    const index = ImgObj.findIndex((img) => img.src === imageModal)
    if (ImgObj[index + 1] === undefined) {
      setImageModal(ImgObj[0].src)
    } else {
      setImageModal(ImgObj[index + 1].src)
    }
  }

  return (
        <GalleyCarouselContainer>
            {ImgObj.map((item, key) => {
              return (
                    <GalleyCarouselImage
                        onClick={() => setModalOpenImage(item.src)}
                        key={key}
                        alt={item.name}// Dodaj u opjekat iz stora opis slika
                        src={item.src}
                    />
              )
            })}

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            />
            {imageModal
              ? (
                    <GalleyCarouselSelectedImageContainer>
                        <GalleryCarouselSelectedImageHeaderContainer>
                            <GalleryCarouselSelectedImageHeader>{ImgHeader}</GalleryCarouselSelectedImageHeader>
                        </GalleryCarouselSelectedImageHeaderContainer>
                        <ArrowBackIosNewIcon onClick={changeImgLeft} sx={GalleyCarouselSelectedImageContainerIcons}/>
                        <GalleyCarouselSelectedImage onClick={changeImgRight} src={imageModal}
                                                     alt="selected img"/>
                        <ArrowForwardIosIcon onClick={changeImgRight} sx={GalleyCarouselSelectedImageContainerIcons}/>
                    </GalleyCarouselSelectedImageContainer>
                )
              : null}
        </GalleyCarouselContainer>
  )
}

export default GalleyCarousel
