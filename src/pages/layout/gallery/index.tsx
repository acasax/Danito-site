import React from 'react'
import '../../../styles/Galerija/Galerija.css'
import GalerijaFunc from './galerijaFunc'
import ImgObjekti from '../../../constants/imgObjects/ImgObject'
import Footer from 'components/footer'
import { GalleryContentContainer, GalleryElementContainer, GalleyContainer } from './style'
import LineAnimation from '../../../components/lineAnimation'

const GalleryLayout = ({ scroll }: any) => {
  return (
        <GalleyContainer>
            <GalleryContentContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={0}/>
                    <GalerijaFunc ImgObjekti={ImgObjekti.object1}/>
                </GalleryElementContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={550}/>
                    <GalerijaFunc ImgObjekti={ImgObjekti.object2}/>
                </GalleryElementContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={1100}/>
                    <GalerijaFunc ImgObjekti={ImgObjekti.object3}/>
                </GalleryElementContainer>
                <GalleryElementContainer>
                    <LineAnimation header={'Žarka Zrenjanina 114, 26000 Pančevo'} scroll={scroll} scrollY={1750}/>
                    <GalerijaFunc ImgObjekti={ImgObjekti.object4}/>
                </GalleryElementContainer>
            </GalleryContentContainer>
            <Footer/>
        </GalleyContainer>
  )
}

export default GalleryLayout
