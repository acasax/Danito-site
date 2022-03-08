import React, { useState } from 'react'
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
  GalleyCarouselSelectedImageContainer,
  GalleyCarouselSelectedImageContainerIcons
} from './style'

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
