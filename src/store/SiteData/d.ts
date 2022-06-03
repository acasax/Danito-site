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
    header: 'Celopečka, Beograd',
    scroll: 0,
    images: [
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/2.jpg'),
        smallSrc: require('constants/img/objects/2/small/2.jpg')
      },
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/3.jpg'),
        smallSrc: require('constants/img/objects/2/small/3.jpg')
      },
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/4.jpg'),
        smallSrc: require('constants/img/objects/2/small/4.jpg')
      },
      {
        name: 'Celopečka, Beograd',
        src: require('constants/img/objects/2/5.jpg'),
        smallSrc: require('constants/img/objects/2/small/5.jpg')
      },
      {
        name: 'Celopečka, Beograd',
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
    header: 'Karađorđeva, Pančevo',
    scroll: 0,
    images: [
      {
        name: 'Karađorđeva, Pančevo',
        src: require('constants/img/objects/4/1.jpg'),
        smallSrc: require('constants/img/objects/4/small/1.jpg')
      },
      {
        name: 'Karađorđeva, Pančevo',
        src: require('constants/img/objects/4/2.jpg'),
        smallSrc: require('constants/img/objects/4/small/2.jpg')
      },
      {
        name: 'Karađorđeva, Pančevo',
        src: require('constants/img/objects/4/3.jpg'),
        smallSrc: require('constants/img/objects/4/small/3.jpg')
      },
      {
        name: 'Karađorđeva, Pančevo',
        src: require('constants/img/objects/4/4.jpg'),
        smallSrc: require('constants/img/objects/4/small/4.jpg')
      },
      {
        name: 'Karađorđeva, Pančevo',
        src: require('constants/img/objects/4/5.jpg'),
        smallSrc: require('constants/img/objects/4/small/5.jpg')
      },
      {
        name: 'Karađorđeva, Pančevo',
        src: require('constants/img/objects/4/6.jpg'),
        smallSrc: require('constants/img/objects/4/small/6.jpg')
      },
      {
        name: 'Karađorđeva, Pančevo',
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
    header: 'Mia-Dorćol Beograd',
    scroll: 0,
    images: [
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1.JPG')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_1.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_1.JPG')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_2.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_2.JPG')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_3.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_3.JPG')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_4.JPG'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_4.JPG')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_5.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_5.jpg')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_6.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_6.jpg')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_7.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_7.jpg')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_8.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_8.jpg')
      },
      {
        name: 'Mia-Dorćol Beograd',
        src: require('constants/img/objects/6/Mia-Dorcol Beorad 1_9.jpg'),
        smallSrc: require('constants/img/objects/6/small/Mia-Dorcol Beorad 1_9.jpg')
      }
    ]
  },
  {
    header: 'Smart Blok Pančeva',
    scroll: 0,
    images: [
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1.JPG')
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_1.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_1.JPG')
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_2.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_2.JPG')
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_3.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_3.JPG')
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_4.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_4.JPG')
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_5.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_5.JPG')
      },
      {
        name: 'Smart Blok Pančeva',
        src: require('constants/img/objects/7/Smart Blok Pancevo 1_6.JPG'),
        smallSrc: require('constants/img/objects/7/small/Smart Blok Pancevo 1_6.JPG')
      },
      {
        name: 'Smart Blok Pančeva',
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
    header: 'Ko je kontrolor ličnih podataka korisnika www.danito.rs (u daljem tekstu: veb stranica).',
    text: [
      'Rukovaoci vaših ličnih podataka su:',
      'Danito construction,',
      'u daljem tekstu „Danito ”',
      'U daljem tekstu „Kontroler“.',
      'Rukovalac je imenovao kontakt koja je Rukovalac ličnih podataka, rukovalac se može kontaktirati:',
      'Dopisnim putem – slanje upita na adresu kontrolora',
      'E-mailom na: office@danito.rs'
    ]
  },
  {
    header: 'Lične podatke dobijene putem veb-sajta mogu da obrađuju kontrolori, odnosno u svrhu:',
    text: [
      '- Slanje biltena sa marketinškim informacijama u vezi sa Drutek proizvodima i sopstvenim uslugama Drutek SA, u skladu sa članom 6 (1) (A) GDPR), koje sledi vaš prethodni pristanak. Lični podaci će se obrađivati u ovu svrhu sve dok saglasnost ne bude povučena.',
      '- Odgovaranje na pitanja koja su poslata putem kontakt forme na https://www,danito.rs/kontakt/ u skladu sa članom 6 (1) (F) GDPR), što je u vašem legitimnom interesu da dobijete tražene informacije. Lični podaci će se obrađivati u ovu svrhu do davanja odgovora.',
      '- Optimizacija internet usluga i marketinškog sadržaja na osnovu statističkih podataka koje dostavljaju eksterni provajderi, uz vašu saglasnost izraženu primenom odgovarajuće konfiguracije pretraživača - u trajanju koje je navedeno u politici kolačića.',
      '- Organizovanje i sprovođenje takmičenja i drugih marketinških akcija u kojima ste odlučili da učestvujete, u skladu sa članom 6 (1) (A) GDPR-a, to je vaša saglasnost. Podaci će se obrađivati u ovu svrhu tokom perioda navedenog u uslovima konkursa ili marketinške akcije ili dok saglasnost ne bude povučena (saglasnost se može povući u bilo kom trenutku).',
      '- Verifikaciju statusa distributera prilikom kreiranja naloga u panelu distributera, nakon vaše prethodne saglasnosti u skladu sa članom 6 (1) (A) GDPR) dok se proces verifikacije ne završi.',
      '- Prenoseći vaš upit izabranom distributeru Danito constraction, na vaš zahtev, u vašem legitimnom interesu (član 6 (1) (F) GDPR), upiti se čuvaju do potvrde da vas je distributer kontaktirao.'
    ]
  },
  {
    header: 'Štaviše, Danito može da obrađuje lične podatke dobijene preko veb stranice, u zavisnosti od namere korisnika veb stranice, I u svrhu:',
    text: [
      '- Priprema ponude i vođenje pregovora kao odgovor na vaš upit, u skladu sa članom 6 (1) (F) GDPR), što je u legitimnom interesu Danito. Podaci će se obrađivati do iznošenja prigovora, a najduže 3 godine od podnošenja zahteva. ',
      '- Svoj pristanak za obradu ličnih podataka možete povući u bilo kom trenutku. Povlačenje saglasnosti neće uticati na zakonitost obrade na osnovu saglasnosti pre njenog povlačenja. Svoju saglasnost možete povući tako što ćete kontaktirati kontrolora ličnih podataka (kontakt naveden u stavu 1 iznad).'
    ]
  },
  {
    header: 'Ko će dobiti pristup ličnim podacima korisnika veb stranice.',
    text: [
      'Pristup ličnim podacima biće ograničen na ovlašćeno osoblje kontrolora u okviru obavljanja dužnosti i pružaoce IT usluga kojima je Danito poverio obradu ličnih podataka.',
      'Distributeri proizvoda Danito ako su korisnici veb stranice poslali upit distributeru preko veb stranice.',
      'Štaviše, informacije u vezi sa posetom veb-sajtu (uključujući tačno vreme ulaska i izlaska sa veb-sajta, posećene podstranice i izvršene radnje na veb-sajtu) se dostavljaju trećim licima sa sedištem u trećim zemljama (Google Inc, SAD u vezi sa Google analitikom). Poseta veb stranici se dodeljuje jedinstvenom identifikatoru korisnika koji je dala gore navedena strana koja je kontrolor podataka za ove podatke). Od Google Inc. dobijamo statističke podatke o korisnicima našeg servisa koji nam ne omogućavaju identifikaciju posetilaca veb stranice.'
    ]
  },
  {
    header: 'Prava koja korisnici veb-sajta imaju i kako da ih ostvare.',
    text: [
      'U skladu sa principima i u obimu navedenom u GDPR-u, svaki korisnik veb stranice ima sledeća prava:',
      '- pravo na pristup ličnim podacima,',
      '- pravo na brisanje ličnih podataka,',
      '- pravo na ograničavanje obrade ličnih podataka,',
      '- pravo na prenos podataka,',
      '- pravo da povučete svoju saglasnost u bilo kom trenutku što neće uticati na zakonitost obrade na osnovu saglasnosti pre njenog povlačenja – u obimu u kome se obrada podataka odvija na osnovu vaše saglasnosti;',
      '- pravo na prigovor na obradu bilo kojih podataka zbog vaše posebne situacije – ako se vaši podaci obrađuju na osnovu legitimnog interesa kontrolora,',
      '- pravo da podnese pritužbu nadređenom organu, odnosno generalnom inspektoru za zaštitu podataka o ličnosti, ako korisnik zaključi da su podaci o ličnosti nezakonito obrađeni.'
    ]
  },
  {
    header: 'Modaliteti ostvarivanja prava:',
    text: [
      'Da biste ostvarili gore navedena prava potrebno je da kontaktirate koordinatora za zaštitu podataka (kontakt podaci u stavu 2. gore) koji će vam dati svoje lične podatke koji omogućavaju verifikaciju vašeg identiteta.'
    ]
  },
  {
    header: 'Obaveznp/dobrovoljno dostavljanje pdoataka',
    text: [
      'Davanje vaših ličnih podataka je dobrovoljno. Međutim, njegovo odsustvo može onemogućiti ili ometati korišćenje nekih funkcija veb stranice.'
    ]
  }
]

export const PolicyContent = [
  {
    header: 'POLITIKA PRIVATNOSTI',
    text: [
      'Danito je veoma ozbiljan po pitanju politike privatnosti. Stoga, naš prioritet je da osiguramo da ne morate da brinete o zaštiti vaših ličnih podataka dok pregledate našu veb stranicu.',
      'Moguće je posetiti i pregledati većinu informacija o kompaniji, njenim proizvodima i uslugama bez potrebe da date svoje lične podatke. Međutim, na određenim podstranicama možemo tražiti od vas da date određene informacije, od kojih se neke mogu smatrati ličnim podacima.',
      'Ova politika privatnosti precizira kako ćemo koristiti lične podatke koje dobijemo od vas, na primer, kada koristite našu veb stranicu. Ova politika se odnosi na sve posetioce našeg sajta, kao i na sva sredstva pristupa, uključujući, na primer, desktop računare, laptopove, javne internet terminale i mobilne uređaje.',
      'Pružajući svoje lične podatke putem naše veb stranice, izričito se slažete da koristite prikupljene podatke u skladu sa ovom politikom privatnosti. Ako imate bilo kakvih pitanja i komentara u vezi sa ovim pitanjem, slobodno kontaktirajte našu korisničku podršku preko menija „kontakt“ na našoj veb stranici.'
    ]
  },
  {
    header: 'Definicije',
    text: [
      '„Korisnik (korisnici)“: korisnik ili korisnici veb stranice, zajedno ili pojedinačno, u zavisnosti od konteksta;',
      '„Veb lokacija“: veb lokacija dostupna na sledećoj glavnoj URL adresi: vvv.drutek.eu i naši nacionalni domeni',
      '„Lični podaci”: sve informacije u vezi sa identifikovanim ili identifikovanim fizičkim licem.'
    ]
  },
  {
    header: 'Vrsta prikupljenih ličnih podataka',
    text: [
      'Na nekim podstranicama našeg sajta, Danito će prikupljati vaše lične podatke, kao što su: ime i prezime, adresa, broj telefona, e-mail adresa, korisničko ime, lozinka.'
    ]
  },
  {
    header: 'Poverljivost ličnih podataka',
    text: [
      'Ova politika privatnosti će predstavljati osnovu za obavljanje svih aktivnosti u vezi sa korišćenjem i obradom vaših ličnih podataka.',
      'Prioritet Danita-a je da obezbedi najbolju moguću zaštitu vaših ličnih podataka, pokušavajući da spreči nezakonitu obradu ili slučajni gubitak ili uklanjanje vaših ličnih podataka. Posebnu pažnju posvećujemo bezbednosti u sledećim pitanjima:',
      '- usvajanje mehanizama za šifrovanje kad god je to prikladno;',
      '- primena zaštite lozinkom;',
      '- traženje ugovornih garancija od trećih lica;',
      '- ograničen pristup vašim ličnim podacima'
    ]
  },
  {
    header: 'Prikupljanje i čuvanje ličnih podataka',
    text: [
      'Ako želite da koristite oblast naše veb stranice koja zahteva registraciju, od vas će se tražiti da dostavite relevantne podatke. U tom slučaju, Danito izričito predviđa da ćete dobiti pun pristup veb stranici tek nakon što date tražene informacije i prihvatite relevantnu politiku i uslove.',
      'Takođe, Danito može da prikuplja vaše lične podatke:',
      '- prilikom kreiranja internet naloga korisnika;',
      '- prilikom naručivanja;',
      '- prilikom naručivanja biltena;',
      '- kada učestvujete u takmičenju, lutriji ili drugoj promociji;',
      '- prilikom popunjavanja ankete;',
      'Danito će izbegavati prikupljanje ličnih podataka koji nisu korisni za gorenavedene svrhe i čuvaće lične podatke samo onoliko koliko je potrebno za ispunjavanje ovih svrha, ili, kada je to primenjivo, u trajanju navedenom u ugovoru ili propisanom zakonom.'
    ]
  },
  {
    header: 'Svrhe korišćenja ličnih podataka',
    text: [
      'Svi lični podaci koje dostavite čuvaju se na bezbednim serverima. Danito ima pravo da koristi prikupljene lične podatke u sledeće svrhe („svrhe“):',
      '- registracija vas na veb stranici kao korisnika i pružanje usluga putem veb stranice obezbeđivanje da sadržaj veb stranice bude predstavljen na najefikasniji način za vas i vaš računar;',
      '- istraživanje i analiza tržišta, klijenata, proizvoda i Danito usluga olakšavanje evaluacije proizvoda i usluga kompanije za Danito, kao i sprovođenje poboljšanja i prilagođavanja;',
      '- interna dokumentacija;',
      '- marketing, uključujući pružanje informacija koje su vam potrebne ili koje bi vas mogle zanimati za mišljenje Danito-a, ako ste dali saglasnost da vas kontaktiramo u takvim slučajevima vođenje takmičenja i/ili drugih promotivnih aktivnosti;',
      '- regrutovanje;',
      '- Sve navedeno važi i za korišćenje vaših ličnih podataka od strane povezanih kompanija.'
    ]
  },
  {
    header: 'Otkrivanje ličnih podataka',
    text: [
      'Danito neće prosleđivati vaše lične podatke trećim licima bez vašeg pristanka, osim za:',
      '- situacije kada je potrebno otkriti takve informacije kako bi se zaposlenima, agentima, podizvođačima, dobavljačima i izvođačima Danito-a omogućilo da pružaju svoje usluge ili izvršavaju zadatke u ime kupci ili potencijalni kupci Danito-ovih prava i obaveza vezanih za veb stranicu;',
      '- ako je otkrivanje podataka neophodno za zaštitu legitimnih interesa Danito-a, njegovih klijenata ili povezanih kompanija, ili je to zahtevano ili dozvoljeno važećim zakonima',
      '- Kao korisnik, potvrđujete da će sve informacije koje date putem alata koji čine informacije vidljivim drugim osobama biti javno otkrivene pomoću alata. Treba napomenuti da treba postupati pažljivo i mudro kada otkrivate informacije koristeći takve alate.',
      'Kad god Danito otkrije vaše lične podatke pažljivo odabranoj trećoj strani ili trećim licima navedenim iznad, oni će biti otkriveni u skladu sa važećim zakonima koji se odnose na zaštitu ličnih podataka.'
    ]
  },
  {
    header: 'Direktan marketing',
    text: [
      'Na stranicama za registraciju i drugim podstranicama ove veb stranice, od vas će se možda tražiti da navedete da li ste saglasni da primate određene informacije putem e-pošte ili pošte. Ako se slažete, to znači da prihvatate da će Danito koristiti vaše lične podatke da vam dostavi informacije o svojim proizvodima, promotivnim aktivnostima i specijalnim ponudama u vezi sa Danito proizvodima ili uslugama. U bilo kom trenutku možete da izmenite svoja podešavanja u vezi sa direktnim marketingom prateći uputstva za odjavu u svakoj e-pošti povezanoj sa direktnim marketingom, ili, ako ste se registrovali kao korisnik, preko podešavanja vašeg naloga.'
    ]
  },
  {
    header: 'Datoteke kolačića',
    text: [
      'Danito kontinuirano nastoji da usavršava svoju veb stranicu u korist svojih korisnika. Zbog toga na nekim podstranicama koristimo datoteke kolačića.',
      'Datoteka kolačića je jednostavno mala tekstualna datoteka koja sadrži podatke sačuvane kada korisnici posete veb lokaciju. Dizajniran je da omogući preuzimanje informacija o aktivnostima korisnika na određenim veb lokacijama u prošlosti. Oni mogu uključivati podatke o aktivnostima kao što su klikanje na određene veze ili stranice, prijavljivanje na profil korisnika ili čitanje sadržaja veb lokacija koje su se dešavale pre mesecima ili čak godinama. Datoteke kolačića mogu se podeliti na nekoliko tipova. Da nije njih, veb stranice ne bi funkcionisale kako su korisnici navikli.',
      'Zahvaljujući kolačićima, Danito može, na primer, da garantuje da će informacije prikazane na ekranu tokom sledeće posete odgovarati željama korisnika. Datoteke kolačića omogućavaju Danito-u da identifikuje najpopularnije odeljke veb sajta jer registruju informacije o posećenim veb lokacijama i vremenu pregledanja.',
      'Na osnovu prikupljenih podataka, Danito. može da prilagodi veb stranicu tako da ispuni očekivanja korisnika i bolje odgovara njihovim željama. Datoteke kolačića takođe mogu olakšati rad aplikacija trećih kompanija, kao što su veze sa društvenim mrežama.',
      'Za više informacija, pogledajte našu politiku o datotekama kolačića.'
    ]
  },
  {
    header: 'Maloletnici',
    text: [
      'Osobe mlađe od 18 godina ne bi trebalo da nam daju nikakve lične podatke bez saglasnosti i nadzora roditelja ili zakonskog staratelja. Bez takvog pristanka Danito neće čuvati podatke takvih lica, niti će ih obrađivati ili prosleđivati trećim licima.'
    ]
  },
  {
    header: 'Važeći zakoni',
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
