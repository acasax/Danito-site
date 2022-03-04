import React, { useContext } from 'react'
import '../../../styles/About/About.css'
import LineAnimation from 'components/lineAnimation'
import CompanyImgCover from '../../../constants/img/showRoom/19.jpg'
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
  AboutInfoText
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import ImageGallery from 'react-image-gallery'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/'
  }
]

const AboutLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)

  return (
        <AboutContainer>
            <AboutHeaderImageContainer>
                <AboutHeaderImage src={CompanyImgCover} alt="company img cover"/>
            </ AboutHeaderImageContainer>
            <LineAnimation header="O NAMA" scroll={scroll} scrollY={300}/>
            <AboutContentContainer>
                <AboutHeaderTextContainer>
                    <AboutHeaderText>
                         Jedinstvena prilika da na jednom mestu pogledate salon i prozivodnju
                        i shvatite da smo mi najbolji u svom poslu.
                    </AboutHeaderText>
                </AboutHeaderTextContainer>
                        <AboutInfoContainer>
                            <AboutInfoText>
                                Danito je firma koja se razvijala prethodnih 15 godina i postala jedna od najvećih firmi
                                u zemlji. Nas
                                cilj od samog osnivanja pa do danas je ostao isti, a to je da svaki nas proizvod mora
                                biti savršen. To
                                postizemo kvalitetom materijala, preciznošću izrade i dobro obučenom radnom snagom.
                                Jedna smo od retkih
                                firmi u ovom poslu koja se specijalizovala i za rad sa fizičkim licima. To postizemo
                                time što se prema
                                svakom našem klijentu ophodimo isto, sa istim kvalitetom usluge, bez obzira na veličinu
                                posla. Kvalitet
                                usluge ne obuhvata samo dobar proizvod već i potpuno ispunjenje rokova, dogovora i
                                pojedinačnih želja
                                kupaca.
                            </AboutInfoText>
                            <AboutInfoText>
                                Svaki naš kupac ima mogućnost da se uveri u kvalitet koji pružamo obilaskom kroz salon i
                                proizvodnju,
                                gde će mu detaljno biti prikazne sve sitnice koje čine da prozor od dobrog pređe u
                                najbolji.
                            </AboutInfoText>
                            <AboutInfoGalleyContainer>
                                <ImageGallery items={images} />
                            </AboutInfoGalleyContainer>
                            <AboutInfoHeaderText>Klijenti</AboutInfoHeaderText>
                            <AboutInfoText>
                                Možemo se pohvaliti činjenicom da se većina naših poslova zasniva na preporuci
                                zadovoljnih kupaca i
                                poslovanjem bez reklamacije.
                            </AboutInfoText>
                        </AboutInfoContainer>
            </AboutContentContainer>
            <Footer/>
        </AboutContainer>
  )
}

export default AboutLayout
