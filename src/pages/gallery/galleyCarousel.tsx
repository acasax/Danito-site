import React, { useState } from 'react'
import '../../styles/GalerijaFunc/GalerijaFunc.css'

import Backdrop from '@mui/material/Backdrop'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {
  GalleyCarouselContainer,
  GalleyCarouselImage,
  GalleyCarouselSelectedImage,
  GalleyCarouselSelectedImageContainer,
  GalleyCarouselSelectedImageContainerIcons
} from './style'

const GalleyCarousel = ({ ImgObjekti: ImgObj }: any) => {
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
    const index = ImgObj.findIndex((img) => img === imageModal)
    const lastIndex = ImgObj.length - 1
    if (ImgObj[index - 1] === undefined) {
      setImageModal(ImgObj[lastIndex])
    } else {
      setImageModal(ImgObj[index - 1])
    }
  }
  const changeImgRight = () => {
    const index = ImgObj.findIndex((img) => img === imageModal)
    if (ImgObj[index + 1] === undefined) {
      setImageModal(ImgObj[0])
    } else {
      setImageModal(ImgObj[index + 1])
    }
  }
  return (
        <GalleyCarouselContainer>
            {ImgObj.map((item) => {
              return (
                    <GalleyCarouselImage
                        onClick={() => setModalOpenImage(item)}
                        key={item}
                        alt="objekti images" // Dodaj u opjekat iz stora opis slika
                        src={item}
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
