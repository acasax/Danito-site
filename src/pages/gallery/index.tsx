import React from 'react'
import '../../styles/Galerija/Galerija.css'
import GalleyCarousel from './galleyCarousel'
import ImgObjekti from '../../constants/imgObjects/ImgObject'
import Footer from 'components/footer'
import { GalleryContentContainer, GalleryElementContainer, GalleyContainer } from './style'
import LineAnimation from '../../components/lineAnimation'

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
  return (
        <GalleyContainer>
            <GalleryContentContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={0}/>
                    <GalleyCarousel ImgObjekti={ImgObjekti.object1}/>
                </GalleryElementContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={550}/>
                    <GalleyCarousel ImgObjekti={ImgObjekti.object2}/>
                </GalleryElementContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={1100}/>
                    <GalleyCarousel ImgObjekti={ImgObjekti.object3}/>
                </GalleryElementContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={1750}/>
                    <GalleyCarousel ImgObjekti={ImgObjekti.object4}/>
                </GalleryElementContainer>
            </GalleryContentContainer>
            <Footer/>
        </GalleyContainer>
  )
}

export default GalleryLayout
