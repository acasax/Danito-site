import SliderImg1 from 'constants/slider/1.jpg'
import SliderImg2 from 'constants/slider/2.jpg'
import SliderImg3 from 'constants/slider/3.jpg'
import SliderImg4 from 'constants/slider/4.jpg'
import SliderImg5 from 'constants/slider/5.jpg'
import { CLEAR_STATE } from './types'

export type TStateWebSiteData = {
    sliderElements: TSliderElements[],
    aboutInfoImages: TAboutCarouselImages[],
    aboutTechnologyImages: TAboutCarouselImages[],
    galleryContent: TGalleyElement[],
    gdprContent: TPolicyContent[],
    policyContent: TPolicyContent[]
}

/** Part of data for slider */
export type TSliderElements = {
    label: string,
    path: string,
    isVideo: boolean
}

export const SliderElements = [
  {
    label: 'Slider image 1',
    path: SliderImg1,
    isVideo: false
  },
  {
    label: 'Slider image 2',
    path: SliderImg2,
    isVideo: false
  },
  {
    label: 'Slider image 3',
    path: SliderImg3,
    isVideo: false
  },
  {
    label: 'Slider image 4',
    path: require('constants/slider/6.mp4'),
    isVideo: true
  },
  {
    label: 'Slider image 5',
    path: SliderImg4,
    isVideo: false
  },
  {
    label: 'Slider image 6',
    path: SliderImg5,
    isVideo: false
  }
]

/** Part of about layout */
export type TAboutCarouselImages = {
    src: string
}

export const AboutInfoCarouselImages = [
  {
    src: require('constants/img/company/2.jpg')
  },
  {
    src: require('constants/img/company/3.jpg')
  },
  {
    src: require('constants/img/company/4.jpg')
  },
  {
    src: require('constants/img/company/5.jpg')
  },
  {
    src: require('constants/img/company/6.jpg')
  },
  {
    src: require('constants/img/company/7.jpg')
  },
  {
    src: require('constants/img/company/8.jpg')
  },
  {
    src: require('constants/img/company/9.jpg')
  },
  {
    src: require('constants/img/company/10.jpg')
  },
  {
    src: require('constants/img/company/11.jpg')
  },
  {
    src: require('constants/img/company/12.jpg')
  },
  {
    src: require('constants/img/company/13.jpg')
  },
  {
    src: require('constants/img/company/14.jpg')
  },
  {
    src: require('constants/img/company/15.jpg')
  },
  {
    src: require('constants/img/company/16.jpg')
  },
  {
    src: require('constants/img/company/17.jpg')
  },
  {
    src: require('constants/img/company/18.jpg')
  },
  {
    src: require('constants/img/company/19.jpg')
  },
  {
    src: require('constants/img/company/20.jpg')
  },
  {
    src: require('constants/img/company/21.jpg')
  },
  {
    src: require('constants/img/company/22.jpg')
  },
  {
    src: require('constants/img/company/23.jpg')
  },
  {
    src: require('constants/img/company/24.jpg')
  },
  {
    src: require('constants/img/company/25.jpg')
  }
]

export const AboutTechnologyCarouselImages = [
  {
    src: require('constants/img/aboutTech/1.jpg')
  },
  {
    src: require('constants/img/aboutTech/2.jpg')
  },
  {
    src: require('constants/img/aboutTech/3.jpg')
  },
  {
    src: require('constants/img/aboutTech/4.jpg')
  }
]

/** Part for galley image */

export type TGalleyImage = {
    name: string,
    src: string,
    smallSrc: string
}

export type TGalleyElement = {
    header: string,
    scroll: number,
    images: TGalleyImage[]
}

export const GalleryContent = [
  {
    header: 'Banjica, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/1.jpg'),
        smallSrc: require('constants/img/objects/1/small/1.jpg')
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/2.jpg'),
        smallSrc: require('constants/img/objects/1/small/2.jpg')
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/3.jpg'),
        smallSrc: require('constants/img/objects/1/small/3.jpg')
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/4.jpg'),
        smallSrc: require('constants/img/objects/1/small/4.jpg')
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/5.jpg'),
        smallSrc: require('constants/img/objects/1/small/5.jpg')
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/6.jpg'),
        smallSrc: require('constants/img/objects/1/small/6.jpg')
      },
      {
        name: 'Banjica, Beograd',
        src: require('constants/img/objects/1/7.jpg'),
        smallSrc: require('constants/img/objects/1/small/7.jpg')
      }
    ]
  },
  {
    header: 'Celope??ka, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Celope??ka, Beograd',
        src: require('constants/img/objects/2/2.jpg'),
        smallSrc: require('constants/img/objects/2/small/2.jpg')
      },
      {
        name: 'Celope??ka, Beograd',
        src: require('constants/img/objects/2/3.jpg'),
        smallSrc: require('constants/img/objects/2/small/3.jpg')
      },
      {
        name: 'Celope??ka, Beograd',
        src: require('constants/img/objects/2/4.jpg'),
        smallSrc: require('constants/img/objects/2/small/4.jpg')
      },
      {
        name: 'Celope??ka, Beograd',
        src: require('constants/img/objects/2/5.jpg'),
        smallSrc: require('constants/img/objects/2/small/5.jpg')
      },
      {
        name: 'Celope??ka, Beograd',
        src: require('constants/img/objects/2/6.jpg'),
        smallSrc: require('constants/img/objects/2/small/6.jpg')
      }
    ]
  },
  {
    header: 'Dunavske terase, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/1.jpg'),
        smallSrc: require('constants/img/objects/3/small/1.jpg')
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/2.jpg'),
        smallSrc: require('constants/img/objects/3/small/2.jpg')
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/3.jpg'),
        smallSrc: require('constants/img/objects/3/small/3.jpg')
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/4.jpg'),
        smallSrc: require('constants/img/objects/3/small/4.jpg')
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/5.jpg'),
        smallSrc: require('constants/img/objects/3/small/5.jpg')
      },
      {
        name: 'Dunavske terase, Beograd',
        src: require('constants/img/objects/3/6.jpg'),
        smallSrc: require('constants/img/objects/3/small/6.jpg')
      }
    ]
  },
  {
    header: 'Kara??or??eva, Pan??evo',
    scroll: 0,
    images: [
      {
        name: 'Kara??or??eva, Pan??evo',
        src: require('constants/img/objects/4/1.jpg'),
        smallSrc: require('constants/img/objects/4/small/1.jpg')
      },
      {
        name: 'Kara??or??eva, Pan??evo',
        src: require('constants/img/objects/4/2.jpg'),
        smallSrc: require('constants/img/objects/4/small/2.jpg')
      },
      {
        name: 'Kara??or??eva, Pan??evo',
        src: require('constants/img/objects/4/3.jpg'),
        smallSrc: require('constants/img/objects/4/small/3.jpg')
      },
      {
        name: 'Kara??or??eva, Pan??evo',
        src: require('constants/img/objects/4/4.jpg'),
        smallSrc: require('constants/img/objects/4/small/4.jpg')
      },
      {
        name: 'Kara??or??eva, Pan??evo',
        src: require('constants/img/objects/4/5.jpg'),
        smallSrc: require('constants/img/objects/4/small/5.jpg')
      },
      {
        name: 'Kara??or??eva, Pan??evo',
        src: require('constants/img/objects/4/6.jpg'),
        smallSrc: require('constants/img/objects/4/small/6.jpg')
      },
      {
        name: 'Kara??or??eva, Pan??evo',
        src: require('constants/img/objects/4/7.jpg'),
        smallSrc: require('constants/img/objects/4/small/7.jpg')
      }
    ]
  },
  {
    header: 'Kopaonik',
    scroll: 0,
    images: [
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_3.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_3.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_4.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_4.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_5.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_5.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_6.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_6.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_7.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_7.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_8.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_8.jpg')
      },
      {
        name: 'Kopaonik',
        src: require('constants/img/objects/5/Kopaonik 1_9.jpg'),
        smallSrc: require('constants/img/objects/5/small/Kopaonik 1_9.jpg')
      }
    ]
  },
  {
    header: 'Mia-Dor??ol Beograd',
    scroll: 0,
    images: [
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1.JPG')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_1.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_1.JPG')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_2.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_2.JPG')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_3.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_3.JPG')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_4.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_4.JPG')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_5.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_5.jpg')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_6.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_6.jpg')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_7.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_7.jpg')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_8.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_8.jpg')
      },
      {
        name: 'Mia-Dor??ol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_9.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_9.jpg')
      }
    ]
  },
  {
    header: 'Smart Blok Pan??eva',
    scroll: 0,
    images: [
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1.JPG')
      },
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_1.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_1.JPG')
      },
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_2.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_2.JPG')
      },
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_3.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_3.JPG')
      },
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_4.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_4.JPG')
      },
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_5.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_5.JPG')
      },
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_6.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_6.JPG')
      },
      {
        name: 'Smart Blok Pan??eva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_7.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_7.JPG')
      }
    ]
  }
]

/** Policy part **/

export type TPolicyContent = {
    header: string,
    text: string[]
}

export const GdprContent = [
  {
    header: 'Ko je kontrolor li??nih podataka korisnika www.danito.rs (u daljem tekstu: veb stranica).',
    text: [
      'Rukovaoci va??ih li??nih podataka su:',
      'Danito construction,',
      'u daljem tekstu ???Danito ???',
      'U daljem tekstu ???Kontroler???.',
      'Rukovalac je imenovao kontakt koja je Rukovalac li??nih podataka, rukovalac se mo??e kontaktirati:',
      'Dopisnim putem ??? slanje upita na adresu kontrolora',
      'E-mailom na: office@danito.rs'
    ]
  },
  {
    header: 'Li??ne podatke dobijene putem veb-sajta mogu da obra??uju kontrolori, odnosno u svrhu:',
    text: [
      '- Slanje biltena sa marketin??kim informacijama u vezi sa Drutek proizvodima i sopstvenim uslugama Drutek SA, u skladu sa ??lanom 6 (1) (A) GDPR), koje sledi va?? prethodni pristanak. Li??ni podaci c??e se obra??ivati u ovu svrhu sve dok saglasnost ne bude povu??ena.',
      '- Odgovaranje na pitanja koja su poslata putem kontakt forme na https://www,danito.rs/kontakt/ u skladu sa ??lanom 6 (1) (F) GDPR), ??to je u va??em legitimnom interesu da dobijete tra??ene informacije. Li??ni podaci c??e se obra??ivati u ovu svrhu do davanja odgovora.',
      '- Optimizacija internet usluga i marketin??kog sadr??aja na osnovu statisti??kih podataka koje dostavljaju eksterni provajderi, uz va??u saglasnost izra??enu primenom odgovarajuc??e konfiguracije pretra??iva??a - u trajanju koje je navedeno u politici kola??ic??a.',
      '- Organizovanje i sprovo??enje takmi??enja i drugih marketin??kih akcija u kojima ste odlu??ili da u??estvujete, u skladu sa ??lanom 6 (1) (A) GDPR-a, to je va??a saglasnost. Podaci c??e se obra??ivati u ovu svrhu tokom perioda navedenog u uslovima konkursa ili marketin??ke akcije ili dok saglasnost ne bude povu??ena (saglasnost se mo??e povuc??i u bilo kom trenutku).',
      '- Verifikaciju statusa distributera prilikom kreiranja naloga u panelu distributera, nakon va??e prethodne saglasnosti u skladu sa ??lanom 6 (1) (A) GDPR) dok se proces verifikacije ne zavr??i.',
      '- Prenosec??i va?? upit izabranom distributeru Danito constraction, na va?? zahtev, u va??em legitimnom interesu (??lan 6 (1) (F) GDPR), upiti se ??uvaju do potvrde da vas je distributer kontaktirao.'
    ]
  },
  {
    header: '??tavi??e, Danito mo??e da obra??uje li??ne podatke dobijene preko veb stranice, u zavisnosti od namere korisnika veb stranice, I u svrhu:',
    text: [
      '- Priprema ponude i vo??enje pregovora kao odgovor na va?? upit, u skladu sa ??lanom 6 (1) (F) GDPR), ??to je u legitimnom interesu Danito. Podaci c??e se obra??ivati do izno??enja prigovora, a najdu??e 3 godine od podno??enja zahteva. ',
      '- Svoj pristanak za obradu li??nih podataka mo??ete povuc??i u bilo kom trenutku. Povla??enje saglasnosti nec??e uticati na zakonitost obrade na osnovu saglasnosti pre njenog povla??enja. Svoju saglasnost mo??ete povuc??i tako ??to c??ete kontaktirati kontrolora li??nih podataka (kontakt naveden u stavu 1 iznad).'
    ]
  },
  {
    header: 'Ko c??e dobiti pristup li??nim podacima korisnika veb stranice.',
    text: [
      'Pristup li??nim podacima bic??e ograni??en na ovla??c??eno osoblje kontrolora u okviru obavljanja du??nosti i pru??aoce IT usluga kojima je Danito poverio obradu li??nih podataka.',
      'Distributeri proizvoda Danito ako su korisnici veb stranice poslali upit distributeru preko veb stranice.',
      '??tavi??e, informacije u vezi sa posetom veb-sajtu (uklju??ujuc??i ta??no vreme ulaska i izlaska sa veb-sajta, posec??ene podstranice i izvr??ene radnje na veb-sajtu) se dostavljaju trec??im licima sa sedi??tem u trec??im zemljama (Google Inc, SAD u vezi sa Google analitikom). Poseta veb stranici se dodeljuje jedinstvenom identifikatoru korisnika koji je dala gore navedena strana koja je kontrolor podataka za ove podatke). Od Google Inc. dobijamo statisti??ke podatke o korisnicima na??eg servisa koji nam ne omoguc??avaju identifikaciju posetilaca veb stranice.'
    ]
  },
  {
    header: 'Prava koja korisnici veb-sajta imaju i kako da ih ostvare.',
    text: [
      'U skladu sa principima i u obimu navedenom u GDPR-u, svaki korisnik veb stranice ima sledec??a prava:',
      '- pravo na pristup li??nim podacima,',
      '- pravo na brisanje li??nih podataka,',
      '- pravo na ograni??avanje obrade li??nih podataka,',
      '- pravo na prenos podataka,',
      '- pravo da povu??ete svoju saglasnost u bilo kom trenutku ??to nec??e uticati na zakonitost obrade na osnovu saglasnosti pre njenog povla??enja ??? u obimu u kome se obrada podataka odvija na osnovu va??e saglasnosti;',
      '- pravo na prigovor na obradu bilo kojih podataka zbog va??e posebne situacije ??? ako se va??i podaci obra??uju na osnovu legitimnog interesa kontrolora,',
      '- pravo da podnese pritu??bu nadre??enom organu, odnosno generalnom inspektoru za za??titu podataka o li??nosti, ako korisnik zaklju??i da su podaci o li??nosti nezakonito obra??eni.'
    ]
  },
  {
    header: 'Modaliteti ostvarivanja prava:',
    text: [
      'Da biste ostvarili gore navedena prava potrebno je da kontaktirate koordinatora za za??titu podataka (kontakt podaci u stavu 2. gore) koji c??e vam dati svoje li??ne podatke koji omoguc??avaju verifikaciju va??eg identiteta.'
    ]
  },
  {
    header: 'Obaveznp/dobrovoljno dostavljanje pdoataka',
    text: [
      'Davanje va??ih li??nih podataka je dobrovoljno. Me??utim, njegovo odsustvo mo??e onemoguc??iti ili ometati kori??c??enje nekih funkcija veb stranice.'
    ]
  }
]

export const PolicyContent = [
  {
    header: 'POLITIKA PRIVATNOSTI',
    text: [
      'Danito je veoma ozbiljan po pitanju politike privatnosti. Stoga, na?? prioritet je da osiguramo da ne morate da brinete o za??titi va??ih li??nih podataka dok pregledate na??u veb stranicu.',
      'Moguc??e je posetiti i pregledati vec??inu informacija o kompaniji, njenim proizvodima i uslugama bez potrebe da date svoje li??ne podatke. Me??utim, na odre??enim podstranicama mo??emo tra??iti od vas da date odre??ene informacije, od kojih se neke mogu smatrati li??nim podacima.',
      'Ova politika privatnosti precizira kako c??emo koristiti li??ne podatke koje dobijemo od vas, na primer, kada koristite na??u veb stranicu. Ova politika se odnosi na sve posetioce na??eg sajta, kao i na sva sredstva pristupa, uklju??ujuc??i, na primer, desktop ra??unare, laptopove, javne internet terminale i mobilne ure??aje.',
      'Pru??ajuc??i svoje li??ne podatke putem na??e veb stranice, izri??ito se sla??ete da koristite prikupljene podatke u skladu sa ovom politikom privatnosti. Ako imate bilo kakvih pitanja i komentara u vezi sa ovim pitanjem, slobodno kontaktirajte na??u korisni??ku podr??ku preko menija ???kontakt??? na na??oj veb stranici.'
    ]
  },
  {
    header: 'Definicije',
    text: [
      '???Korisnik (korisnici)???: korisnik ili korisnici veb stranice, zajedno ili pojedina??no, u zavisnosti od konteksta;',
      '???Veb lokacija???: veb lokacija dostupna na sledec??oj glavnoj URL adresi: vvv.drutek.eu i na??i nacionalni domeni',
      '???Li??ni podaci???: sve informacije u vezi sa identifikovanim ili identifikovanim fizi??kim licem.'
    ]
  },
  {
    header: 'Vrsta prikupljenih li??nih podataka',
    text: [
      'Na nekim podstranicama na??eg sajta, Danito c??e prikupljati va??e li??ne podatke, kao ??to su: ime i prezime, adresa, broj telefona, e-mail adresa, korisni??ko ime, lozinka.'
    ]
  },
  {
    header: 'Poverljivost li??nih podataka',
    text: [
      'Ova politika privatnosti c??e predstavljati osnovu za obavljanje svih aktivnosti u vezi sa kori??c??enjem i obradom va??ih li??nih podataka.',
      'Prioritet Danita-a je da obezbedi najbolju moguc??u za??titu va??ih li??nih podataka, poku??avajuc??i da spre??i nezakonitu obradu ili slu??ajni gubitak ili uklanjanje va??ih li??nih podataka. Posebnu pa??nju posvec??ujemo bezbednosti u sledec??im pitanjima:',
      '- usvajanje mehanizama za ??ifrovanje kad god je to prikladno;',
      '- primena za??tite lozinkom;',
      '- tra??enje ugovornih garancija od trec??ih lica;',
      '- ograni??en pristup va??im li??nim podacima'
    ]
  },
  {
    header: 'Prikupljanje i ??uvanje li??nih podataka',
    text: [
      'Ako ??elite da koristite oblast na??e veb stranice koja zahteva registraciju, od vas c??e se tra??iti da dostavite relevantne podatke. U tom slu??aju, Danito izri??ito predvi??a da c??ete dobiti pun pristup veb stranici tek nakon ??to date tra??ene informacije i prihvatite relevantnu politiku i uslove.',
      'Tako??e, Danito mo??e da prikuplja va??e li??ne podatke:',
      '- prilikom kreiranja internet naloga korisnika;',
      '- prilikom naru??ivanja;',
      '- prilikom naru??ivanja biltena;',
      '- kada u??estvujete u takmi??enju, lutriji ili drugoj promociji;',
      '- prilikom popunjavanja ankete;',
      'Danito c??e izbegavati prikupljanje li??nih podataka koji nisu korisni za gorenavedene svrhe i ??uvac??e li??ne podatke samo onoliko koliko je potrebno za ispunjavanje ovih svrha, ili, kada je to primenjivo, u trajanju navedenom u ugovoru ili propisanom zakonom.'
    ]
  },
  {
    header: 'Svrhe kori??c??enja li??nih podataka',
    text: [
      'Svi li??ni podaci koje dostavite ??uvaju se na bezbednim serverima. Danito ima pravo da koristi prikupljene li??ne podatke u sledec??e svrhe (???svrhe???):',
      '- registracija vas na veb stranici kao korisnika i pru??anje usluga putem veb stranice obezbe??ivanje da sadr??aj veb stranice bude predstavljen na najefikasniji na??in za vas i va?? ra??unar;',
      '- istra??ivanje i analiza tr??i??ta, klijenata, proizvoda i Danito usluga olak??avanje evaluacije proizvoda i usluga kompanije za Danito, kao i sprovo??enje pobolj??anja i prilago??avanja;',
      '- interna dokumentacija;',
      '- marketing, uklju??ujuc??i pru??anje informacija koje su vam potrebne ili koje bi vas mogle zanimati za mi??ljenje Danito-a, ako ste dali saglasnost da vas kontaktiramo u takvim slu??ajevima vo??enje takmi??enja i/ili drugih promotivnih aktivnosti;',
      '- regrutovanje;',
      '- Sve navedeno va??i i za kori??c??enje va??ih li??nih podataka od strane povezanih kompanija.'
    ]
  },
  {
    header: 'Otkrivanje li??nih podataka',
    text: [
      'Danito nec??e prosle??ivati va??e li??ne podatke trec??im licima bez va??eg pristanka, osim za:',
      '- situacije kada je potrebno otkriti takve informacije kako bi se zaposlenima, agentima, podizvo??a??ima, dobavlja??ima i izvo??a??ima Danito-a omoguc??ilo da pru??aju svoje usluge ili izvr??avaju zadatke u ime kupci ili potencijalni kupci Danito-ovih prava i obaveza vezanih za veb stranicu;',
      '- ako je otkrivanje podataka neophodno za za??titu legitimnih interesa Danito-a, njegovih klijenata ili povezanih kompanija, ili je to zahtevano ili dozvoljeno va??ec??im zakonima',
      '- Kao korisnik, potvr??ujete da c??e sve informacije koje date putem alata koji ??ine informacije vidljivim drugim osobama biti javno otkrivene pomoc??u alata. Treba napomenuti da treba postupati pa??ljivo i mudro kada otkrivate informacije koristec??i takve alate.',
      'Kad god Danito otkrije va??e li??ne podatke pa??ljivo odabranoj trec??oj strani ili trec??im licima navedenim iznad, oni c??e biti otkriveni u skladu sa va??ec??im zakonima koji se odnose na za??titu li??nih podataka.'
    ]
  },
  {
    header: 'Direktan marketing',
    text: [
      'Na stranicama za registraciju i drugim podstranicama ove veb stranice, od vas c??e se mo??da tra??iti da navedete da li ste saglasni da primate odre??ene informacije putem e-po??te ili po??te. Ako se sla??ete, to zna??i da prihvatate da c??e Danito koristiti va??e li??ne podatke da vam dostavi informacije o svojim proizvodima, promotivnim aktivnostima i specijalnim ponudama u vezi sa Danito proizvodima ili uslugama. U bilo kom trenutku mo??ete da izmenite svoja pode??avanja u vezi sa direktnim marketingom pratec??i uputstva za odjavu u svakoj e-po??ti povezanoj sa direktnim marketingom, ili, ako ste se registrovali kao korisnik, preko pode??avanja va??eg naloga.'
    ]
  },
  {
    header: 'Datoteke kola??ic??a',
    text: [
      'Danito kontinuirano nastoji da usavr??ava svoju veb stranicu u korist svojih korisnika. Zbog toga na nekim podstranicama koristimo datoteke kola??ic??a.',
      'Datoteka kola??ic??a je jednostavno mala tekstualna datoteka koja sadr??i podatke sa??uvane kada korisnici posete veb lokaciju. Dizajniran je da omoguc??i preuzimanje informacija o aktivnostima korisnika na odre??enim veb lokacijama u pro??losti. Oni mogu uklju??ivati podatke o aktivnostima kao ??to su klikanje na odre??ene veze ili stranice, prijavljivanje na profil korisnika ili ??itanje sadr??aja veb lokacija koje su se de??avale pre mesecima ili ??ak godinama. Datoteke kola??ic??a mogu se podeliti na nekoliko tipova. Da nije njih, veb stranice ne bi funkcionisale kako su korisnici navikli.',
      'Zahvaljujuc??i kola??ic??ima, Danito mo??e, na primer, da garantuje da c??e informacije prikazane na ekranu tokom sledec??e posete odgovarati ??eljama korisnika. Datoteke kola??ic??a omoguc??avaju Danito-u da identifikuje najpopularnije odeljke veb sajta jer registruju informacije o posec??enim veb lokacijama i vremenu pregledanja.',
      'Na osnovu prikupljenih podataka, Danito. mo??e da prilagodi veb stranicu tako da ispuni o??ekivanja korisnika i bolje odgovara njihovim ??eljama. Datoteke kola??ic??a tako??e mogu olak??ati rad aplikacija trec??ih kompanija, kao ??to su veze sa dru??tvenim mre??ama.',
      'Za vi??e informacija, pogledajte na??u politiku o datotekama kola??ic??a.'
    ]
  },
  {
    header: 'Maloletnici',
    text: [
      'Osobe mla??e od 18 godina ne bi trebalo da nam daju nikakve li??ne podatke bez saglasnosti i nadzora roditelja ili zakonskog staratelja. Bez takvog pristanka Danito nec??e ??uvati podatke takvih lica, niti c??e ih obra??ivati ili prosle??ivati trec??im licima.'
    ]
  },
  {
    header: 'Va??ec??i zakoni',
    text: [
      'Ova politika privatnosti je regulisana zakonima Evropske unije i Republike Srbije.'
    ]
  }
]

export type TActionEvent = {
    type:
        typeof CLEAR_STATE;
    payload?:
        undefined
        | string
}
