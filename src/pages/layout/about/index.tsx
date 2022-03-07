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
  AboutInfoCarousel,
  AboutInfoContainer,
  AboutInfoGalleyContainer,
  AboutInfoHeaderText,
  AboutInfoRow,
  AboutInfoText
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import ImgCompany from 'constants/imgObjects/ImgCompany'

const AboutLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)

  const images = ImgCompany.company1.map((x) => ({
    src: `${x}`
  }))

  return (
        <AboutContainer>
            <AboutHeaderImageContainer>
                <AboutHeaderImage src={CompanyImgCover} alt="company img cover"/>
            </ AboutHeaderImageContainer>
            <LineAnimation header="DANITO" scroll={scroll} scrollY={300}/>
            <AboutContentContainer>
                <AboutHeaderTextContainer>
                    <AboutHeaderText>
                         Jedinstvena prilika da na jednom mestu pogledate salon i prozivodnju
                        i shvatite da smo mi najbolji u svom poslu.
                    </AboutHeaderText>
                </AboutHeaderTextContainer>
                <AboutInfoRow>
                    <AboutInfoGalleyContainer>
                        <Carousel images={images} style={AboutInfoCarousel} canAutoPlay={false}/>
                    </AboutInfoGalleyContainer>
                    <AboutInfoContainer>
                        <AboutInfoHeaderText>O nama</AboutInfoHeaderText>
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
                        <AboutInfoHeaderText>Klijenti</AboutInfoHeaderText>
                        <AboutInfoText>
                            Možemo se pohvaliti činjenicom da se većina naših poslova zasniva na preporuci
                            zadovoljnih kupaca i
                            poslovanjem bez reklamacije.
                        </AboutInfoText>
                    </AboutInfoContainer>
                </AboutInfoRow>
            </AboutContentContainer>
            <Footer/>
        </AboutContainer>
  )
}

export default AboutLayout
