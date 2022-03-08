import React, { useEffect } from 'react'
import '../../styles/Galerija/Galerija.css'
import GalleyCarousel from './galleyCarousel'
import Footer from 'components/footer'
import { GalleryContentContainer, GalleryElementContainer, GalleyContainer } from './style'
import LineAnimation from '../../components/lineAnimation'
import { useSelector } from 'react-redux'
import { _selectorGalleyContent } from 'store/SiteData/helpers'

/**
 *
 * About Component
 *
 * @author SaxDev 03.07.2022
 *
 * This is a main component of gallery layout.
 * Display a GalleyCarousel with danito work.
 *
 * */

const GalleryLayout = ({ scroll }: any) => {
  const galleryContent = useSelector(_selectorGalleyContent)

  useEffect(() => {
    console.log(galleryContent)
  })

  return (
        <GalleyContainer>
            <GalleryContentContainer>
                {
                    galleryContent.map((item, key) => {
                      return (
                            <GalleryElementContainer key={key}>
                                <LineAnimation header={item.header} scroll={scroll} scrollY={item.scroll}/>
                                <GalleyCarousel ImgObj={item.images} ImgHeader={item.header}/>
                            </GalleryElementContainer>
                      )
                    })
                }
            </GalleryContentContainer>
            <Footer/>
        </GalleyContainer>
  )
}

export default GalleryLayout
