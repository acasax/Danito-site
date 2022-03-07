import React, { useContext } from 'react'
import '../../styles/About/About.css'
import LineAnimation from 'components/lineAnimation'
import CompanyImgCover from '../../constants/img/showRoom/19.jpg'
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
  AboutInfoText,
  AboutInfoTextHeader,
  AboutInfoTextHeaderContainer
} from './style'
import { SiteNavigationContext } from 'siteNavigation/context'
import Carousel from 'react-gallery-carousel'
import 'react-gallery-carousel/dist/index.css'
import { useSelector } from 'react-redux'
import { _selectAllAboutInfoCarouselImages, _selectAllAboutTechnologyCarouselImages } from 'store/SiteData/helpers'

/**
 *
 * About component
 *
 * @author SaxDev 03.07.2022
 *
 * This is display about page layout.
 * This component have two part about us and technology part.
 *
 * */

const AboutLayout = () => {
  const { scroll } = useContext(SiteNavigationContext)
  const images = useSelector(_selectAllAboutInfoCarouselImages)
  const techImages = useSelector(_selectAllAboutTechnologyCarouselImages)

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
                <AboutHeaderTextContainer>
                    <AboutHeaderText>
                        SVE NA JEDNOM MESTU
                    </AboutHeaderText>
                </AboutHeaderTextContainer>
                <AboutInfoRow>
                    <AboutInfoContainer>
                        <AboutInfoHeaderText>Proizvodnja</AboutInfoHeaderText>
                        <AboutInfoText>
                            Na 1500m2 se nalazi automatizovana prizvodnja sastavljena od poznatih nemačkih proizvođaca mašina elumatec, strutz, urban, rotox. Kapacitet proizvodnje je od 200-300 jedinica za 8h. Odličan izbor mašina daje garanciju na kvalitet gotovog proizvoda,
                            a samim tim i na produktivnost tako da smo spremni u svakom momentu da odgovorimo na veću potražnju gotovih proizvoda.
                            Izborom reprezativnih proizvođaca profila, okova i stakla dajemo proizvod koji je u rangu svih zapadno-evropskih proizvođaca stolarije. Sve to zajedno čini da stolarija koju dobijete besprekorno funkcioniše i ima dug vek trajanja.
                        </AboutInfoText>
                        <AboutInfoText>
                            Svaki naš kupac ima mogućnost da se uveri u kvalitet koji pružamo obilaskom kroz salon i
                            proizvodnju,
                            gde će mu detaljno biti prikazne sve sitnice koje čine da prozor od dobrog pređe u
                            najbolji.
                        </AboutInfoText>
                        <AboutInfoHeaderText>UGRADNJA</AboutInfoHeaderText>
                        <AboutInfoTextHeaderContainer>
                            <AboutInfoTextHeader>Postavljanje prozora</AboutInfoTextHeader>
                        </AboutInfoTextHeaderContainer>
                        <AboutInfoText>
                            Kvalitet ugradnje je podjednako vazan kao i sam kvalitet prozora. Naši majstori imaju dugogodišnje iskustvo koje će primenti kako bi se elementi ugradili na najbolji način. U ponudi osim obične ugradnje nudimo i ral ugradnju koja obuhvata korišćenje specijalnih traka. U okviru firme imamo veći broj oformljenih ekipa koje vrse ugardnju tako da svaki posao završavamo u najkraćem mogućem roku.
                        </AboutInfoText>
                        <AboutInfoTextHeaderContainer>
                            <AboutInfoTextHeader>Završni radovi</AboutInfoTextHeader>
                        </AboutInfoTextHeaderContainer>
                        <AboutInfoText> Osim ugradnje nudimo i mogućnost završne obrade radova. To podrazumeva angažovanje molera koji će obraditi sve pozicije.</AboutInfoText>
                    </AboutInfoContainer>
                    <AboutInfoGalleyContainer>
                        <Carousel images={techImages} style={AboutInfoCarousel} canAutoPlay={false}/>
                    </AboutInfoGalleyContainer>
                </AboutInfoRow>
            </AboutContentContainer>
            <Footer/>
        </AboutContainer>
  )
}

export default AboutLayout
