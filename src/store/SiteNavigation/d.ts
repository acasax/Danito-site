import { CLEAR_STATE, GO_BACK, SELECTED_ITEM, SET_SELECTED_PAGE, SET_SELECTED_TIPS } from './types'

export type TStateProducts = {
    data: TProductData[],
    selectedItems: TProductData[],
    selectedItem: string,
    flexDirection: string,
    productSectionData: TProductSectionData[],
    tipsData: TTipsData[],
    selectedTip: TTipsData,
    productsDate: TProductsData[],
    selectedPage: string,
}

export type TProductData = {
    name: string,
    parent: string,
    parentPath: string,
    image?: string | any,
    productSectionImage?: string | any
}

export enum ProductsCategory {
    window = 'PROZORI',
    door = 'VRATA',
    blinds = 'ROLETNA',
    solomaticVenetians = 'SOLOMATIC VENECIJANERI',
    slidingSystems = 'KLIZNI SISTEMI',
    facade = 'FASADE',
}

export const ProductsCategoryImages = {
  window: require('constants/img/imgProduct/window.png'),
  door: require('constants/img/imgProduct/door.png'),
  blinds: require('constants/img/imgProduct/roletne.png'),
  solomaticVenetians: require('constants/img/imgProduct/solomaticVenecijaneri.png'),
  facade: require('constants/img/imgProduct/fasadaPVC.png'),
  slidingSystems: require('constants/img/imgProduct/terasniSistemi.png')
}

export enum ProductsSubCategory {
    /** SubCategory windows */
    pvcWindow = 'PVC PROZORI',
    woodAluminumWindow = 'ALUMINIUM DRVO PROZORI',
    aluminumWindow = 'ALUMINIUM PROZORI',

    /** SubCategory door */
    pvcDoor = 'PVC VRATA',
    aluminumDoor = 'ALUMINIUM VRATA',
    securityDoor = 'SIGURNOSNA VRATA',

    /** SubCategory blinds */
    outsideBlinds = 'SPOLJAŠNJE ROLETNE',

    /** SubCategory facade */
    fundermaxFacade = 'FUNDERMAX FASADE',
    ventilatedAlucobondFacade = 'VENTILISANE ALUCOBOND FASADE',
    glassFacade = 'STAKLENE FASADE',
    graniteFacade = 'GRANIT FASADE',

    /** SubCategory slidingSystems */
    liftingSlidingSystems = 'PODIZNO KLIZNI',
    inRowSlidingSystems = 'USKOČNO KLIZNI',
    accordionSlidingSystems = 'HARMONIKA'
}

export const ProductsSubCategoryImages = {
  /** SubCategory windows */
  pvcWindow: require('constants/img/imgProduct/windowPVC.png'),
  woodAluminumWindow: require('constants/img/imgProduct/windowWOODALUMINIUM.png'),
  aluminumWindow: require('constants/img/imgProduct/windowALUMINIUM.png'),

  /** SubCategory door */
  pvcDoor: require('constants/img/imgProduct/doorPVC.png'),
  aluminumDoor: require('constants/img/imgProduct/doorALUMINIUM.png'),
  securityDoor: require('constants/img/imgProduct/doorWOOD.png'),

  /** SubCategory blinds */
  insideBlinds: require('constants/img/imgProduct/roletneAluminium.png'),
  outsideBlinds: require('constants/img/imgProduct/roletnePvc.png'),

  /** SubCategory facade */
  fundermaxFacade: require('constants/img/imgProduct/fasadaPVC.png'),
  ventilatedAlucobondFacade: require('constants/img/imgProduct/fasadaPVC.png'),
  glassFacade: require('constants/img/imgProduct/fasadaPVC.png'),
  graniteFacade: require('constants/img/imgProduct/fasadaPVC.png'),

  /** SubCategory slidingSystems */
  liftingSlidingSystems: require('constants/img/imgProduct/terasePvc.png'),
  inRowSlidingSystems: require('constants/img/imgProduct/teraseDrvo.png'),
  accordionSlidingSystems: require('constants/img/imgProduct/teraseAluminium.png')
}

export enum ProductsDataInfo {
    /** Products for Category windows SubCategory pvc Windows  */
    veka70 = 'VEKA 70',
    veka82 = 'VEKA 82',

    /** Products for Category windows SubCategory aluminium Windows */
    aluminiumWindows1 = 'PROFIL BEZ TERMO PREKIDA',
    aluminiumWindows2 = 'PROFIL SA TERMOPREKIDOM',
    woodAluminiumWindows1 = 'ALUMINIUM DRVO PROZORI',

    /** Products for Category doors SubCategory pvc door */
    entrancePvcDoor = 'ULAZNA VRATA',
    partitionPvcDoor = 'PREGRADNA VRATA',

    /** Products for Category doors SubCategory aluminium door */
    profileWithoutThermalBreakAluminiumDoor = 'VRATA BEZ TERMO PREKIDA',
    profileWithThermalBreakAluminiumDoor = 'VRATA SA TERMO PREKIDOM',
    doorWithHiddenWingAluminiumDoor = 'VRATA SA SKRIVENIM KRILOM',

    /** Products for Category doors SubCategory security door */
    customSecurityDoor = 'SIGURNOSNA VRATA',

    /** Products for Category blinds SubCategory inside Blinds */
    insideBlinds = 'UNUTRAŠNJE ROLETNE',

    /** Products for Category blinds SubCategory outsideBlinds */
    outsideBlinds = 'SPOLJAŠNJE ROLETNE',

    /** Products for Category blinds SubCategory outsideBlinds */
    glassFacade = 'STAKLENE FASADE',

    /** Products for Category facade SubCategory fundermax facade */
    fundermaxFacadeFundermaxFacade = 'FUNDERMAX FASADE',

    /** Products for Category facade SubCategory ventilated alucobond facade */
    ventilatedAlucobondFacadeVentilatedAlucobondFacade = 'VENTILISANE ALUCOBOND FASADE',

    /** Products for Category facade SubCategory granit facade */
    granitFacadeGranitFacade = 'GRANIT FASADE',

    /** Products for Category slidingSystems SubCategory lifting sliding systems */
    pvcVekaSlideSlidingSystem = 'PVC - VEKA SLIDE',
    aluUltraSlideSlidingSystem = 'ALU - ULTRA SLIDE',
    aluVgPlusSlidingSystem = 'ALU - VG PLUS',

    /** Products for Category slidingSystems SubCategory in Row sliding systems */
    pvcVekaSoftline7082InRowSlidingSystem = 'PVC -VEKA SOFTLINE 70/82',
    aluInRowSlidingSystem = 'ALU - USKOČNO KLIZNI',

    /** Products for Category slidingSystems SubCategory accordion sliding systems */
    pvcAccordionSlidingSystems = 'ALU - HARMONIKA',
    aluSmartiaM9800AccordionSlidingSystems = 'ALU - SMARTIA M9800',
    aluSmartiaM19800AccordionSlidingSystems = 'ALU - SMARTIA M19800',

    /** Products for Category solomatic Venetians */
    solomaticVenetians = 'SOLOMATIC VENECIJANERI',
}

/** Init NavBar data */
export const navBarData = [
  {
    name: ProductsCategory.window,
    parent: '',
    parentPath: '',
    image: ProductsCategoryImages.window
  },
  {
    name: ProductsSubCategory.pvcWindow,
    parent: ProductsCategory.window,
    parentPath: `${ProductsCategory.window}/`,
    image: ProductsSubCategoryImages.pvcWindow
  },
  {
    name: ProductsDataInfo.veka70,
    parent: ProductsSubCategory.pvcWindow,
    parentPath: `${ProductsCategory.window}/${ProductsSubCategory.pvcWindow}/`
  },
  {
    name: ProductsDataInfo.veka82,
    parent: ProductsSubCategory.pvcWindow,
    parentPath: `${ProductsCategory.window}/${ProductsSubCategory.pvcWindow}/`
  },
  // {
  //   name: ProductsDataInfo.woodAluminiumWindows1,
  //   parent: ProductsSubCategory.aluminumWindow,
  //   parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
  // },
  {
    name: ProductsSubCategory.aluminumWindow,
    parent: ProductsCategory.window,
    parentPath: `${ProductsCategory.window}/`,
    image: ProductsSubCategoryImages.aluminumWindow
  },
  {
    name: ProductsDataInfo.aluminiumWindows1,
    parent: ProductsSubCategory.aluminumWindow,
    parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
  },
  {
    name: ProductsDataInfo.aluminiumWindows2,
    parent: ProductsSubCategory.aluminumWindow,
    parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
  },
  {
    name: ProductsCategory.door,
    parent: '',
    parentPath: '',
    image: ProductsCategoryImages.door
  },
  {
    name: ProductsSubCategory.pvcDoor,
    parent: ProductsCategory.door,
    parentPath: `${ProductsCategory.door}/`,
    image: ProductsSubCategoryImages.pvcDoor
  },
  {
    name: ProductsDataInfo.entrancePvcDoor,
    parent: ProductsSubCategory.pvcDoor,
    parentPath: `${ProductsCategory.door}/${ProductsSubCategory.pvcDoor}/`
  },
  {
    name: ProductsDataInfo.partitionPvcDoor,
    parent: ProductsSubCategory.pvcDoor,
    parentPath: `${ProductsCategory.door}/${ProductsSubCategory.pvcDoor}/`

  },
  {
    name: ProductsSubCategory.aluminumDoor,
    parent: ProductsCategory.door,
    parentPath: `${ProductsCategory.door}/`,
    image: ProductsSubCategoryImages.aluminumDoor
  },
  {
    name: ProductsDataInfo.profileWithoutThermalBreakAluminiumDoor,
    parent: ProductsSubCategory.aluminumDoor,
    parentPath: `${ProductsCategory.door}/${ProductsSubCategory.aluminumDoor}/`
  },
  {
    name: ProductsDataInfo.profileWithThermalBreakAluminiumDoor,
    parent: ProductsSubCategory.aluminumDoor,
    parentPath: `${ProductsCategory.door}/${ProductsSubCategory.aluminumDoor}/`
  },
  {
    name: ProductsDataInfo.doorWithHiddenWingAluminiumDoor,
    parent: ProductsSubCategory.aluminumDoor,
    parentPath: `${ProductsCategory.door}/${ProductsSubCategory.aluminumDoor}/`

  },
  {
    name: ProductsSubCategory.securityDoor,
    parent: ProductsCategory.door,
    parentPath: `${ProductsCategory.door}/`,
    image: ProductsSubCategoryImages.securityDoor
  },

  {
    name: ProductsDataInfo.customSecurityDoor,
    parent: ProductsSubCategory.securityDoor,
    parentPath: `${ProductsCategory.door}/${ProductsSubCategory.securityDoor}/`
  },
  {
    name: ProductsCategory.blinds,
    parent: '',
    parentPath: '',
    image: ProductsCategoryImages.blinds
  },
  {
    name: ProductsDataInfo.insideBlinds,
    parent: ProductsCategory.blinds,
    parentPath: `${ProductsCategory.blinds}/`,
    image: ProductsSubCategoryImages.insideBlinds
  },
  {
    name: ProductsSubCategory.outsideBlinds,
    parent: ProductsCategory.blinds,
    parentPath: `${ProductsCategory.blinds}/`,
    image: ProductsSubCategoryImages.outsideBlinds
  },
  {
    name: ProductsDataInfo.outsideBlinds,
    parent: ProductsSubCategory.outsideBlinds,
    parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.outsideBlinds}/`
  },
  {
    name: ProductsCategory.solomaticVenetians,
    parent: '',
    parentPath: '',
    image: ProductsCategoryImages.solomaticVenetians
  },
  {
    name: ProductsCategory.slidingSystems,
    parent: '',
    parentPath: '',
    image: ProductsCategoryImages.slidingSystems
  },
  {
    name: ProductsSubCategory.liftingSlidingSystems,
    parent: ProductsCategory.slidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/`,
    image: ProductsSubCategoryImages.liftingSlidingSystems
  },
  {
    name: ProductsDataInfo.pvcVekaSlideSlidingSystem,
    parent: ProductsSubCategory.liftingSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.liftingSlidingSystems}/`
  },
  {
    name: ProductsDataInfo.aluUltraSlideSlidingSystem,
    parent: ProductsSubCategory.liftingSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.liftingSlidingSystems}/`
  },
  {
    name: ProductsDataInfo.aluVgPlusSlidingSystem,
    parent: ProductsSubCategory.liftingSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.liftingSlidingSystems}/`
  },
  {
    name: ProductsSubCategory.inRowSlidingSystems,
    parent: ProductsCategory.slidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/`,
    image: ProductsSubCategoryImages.inRowSlidingSystems
  },
  {
    name: ProductsDataInfo.pvcVekaSoftline7082InRowSlidingSystem,
    parent: ProductsSubCategory.inRowSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.inRowSlidingSystems}/`
  },
  {
    name: ProductsDataInfo.aluInRowSlidingSystem,
    parent: ProductsSubCategory.inRowSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.inRowSlidingSystems}/`
  },
  {
    name: ProductsSubCategory.accordionSlidingSystems,
    parent: ProductsCategory.slidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/`,
    image: ProductsSubCategoryImages.accordionSlidingSystems
  },
  {
    name: ProductsDataInfo.pvcAccordionSlidingSystems,
    parent: ProductsSubCategory.accordionSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.accordionSlidingSystems}/`
  },
  {
    name: ProductsDataInfo.aluSmartiaM9800AccordionSlidingSystems,
    parent: ProductsSubCategory.accordionSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.accordionSlidingSystems}/`
  },
  {
    name: ProductsDataInfo.aluSmartiaM19800AccordionSlidingSystems,
    parent: ProductsSubCategory.accordionSlidingSystems,
    parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.accordionSlidingSystems}/`
  },
  {
    name: ProductsCategory.facade,
    parent: '',
    parentPath: '',
    image: ProductsCategoryImages.facade
  },

  {
    name: ProductsSubCategory.fundermaxFacade,
    parent: ProductsCategory.facade,
    parentPath: `${ProductsCategory.facade}/`,
    image: ProductsSubCategoryImages.fundermaxFacade
  },
  {
    name: ProductsDataInfo.fundermaxFacadeFundermaxFacade,
    parent: ProductsSubCategory.fundermaxFacade,
    parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.fundermaxFacade}/`
  },
  {
    name: ProductsSubCategory.ventilatedAlucobondFacade,
    parent: ProductsCategory.facade,
    parentPath: `${ProductsCategory.facade}/`,
    image: ProductsSubCategoryImages.ventilatedAlucobondFacade
  },
  {
    name: ProductsDataInfo.ventilatedAlucobondFacadeVentilatedAlucobondFacade,
    parent: ProductsSubCategory.ventilatedAlucobondFacade,
    parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.ventilatedAlucobondFacade}/`
  },

  {
    name: ProductsSubCategory.glassFacade,
    parent: ProductsCategory.facade,
    parentPath: `${ProductsCategory.facade}/`,
    image: ProductsSubCategoryImages.glassFacade
  },
  {
    name: ProductsSubCategory.graniteFacade,
    parent: ProductsCategory.facade,
    parentPath: `${ProductsCategory.facade}/`,
    image: ProductsSubCategoryImages.graniteFacade
  },

  {
    name: ProductsDataInfo.granitFacadeGranitFacade,
    parent: ProductsSubCategory.graniteFacade,
    parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.graniteFacade}/`
  }

]

/** Part of Product Section Landing Page */

export const ProductSectionImages = {
  window: require('constants/img/landingPageCategoryPart/prozori.png'),
  door: require('constants/img/landingPageCategoryPart/vrata.png'),
  facade: require('constants/img/landingPageCategoryPart/fasade.png'),
  slidingSystems: require('constants/img/landingPageCategoryPart/klizni-sistemi.png')
}

export type TProductSectionSubCategory = {
    name: string,
    children?: string[]
}

export type TProductSectionData = {
    image: string | any,
    header: string,
    subCategory: TProductSectionSubCategory[]
}

/** Init data od Product Section Landing Page */
export const productSectionData = [
  {
    image: ProductSectionImages.window,
    header: ProductsCategory.window,
    subCategory: [
      {
        name: ProductsSubCategory.pvcWindow,
        children: [
          ProductsDataInfo.veka70,
          ProductsDataInfo.veka82
        ]
      },
      {
        name: ProductsSubCategory.aluminumWindow,
        children: [
          ProductsDataInfo.aluminiumWindows1,
          ProductsDataInfo.aluminiumWindows2
          // ProductsDataInfo.woodAluminiumWindows1
        ]
      }
    ]
  },
  {
    image: ProductSectionImages.door,
    header: ProductsCategory.door,
    subCategory: [
      {
        name: ProductsSubCategory.pvcDoor,
        children: [
          ProductsDataInfo.entrancePvcDoor,
          ProductsDataInfo.partitionPvcDoor
        ]
      },
      {
        name: ProductsSubCategory.aluminumDoor,
        children: [
          ProductsDataInfo.profileWithoutThermalBreakAluminiumDoor,
          ProductsDataInfo.profileWithThermalBreakAluminiumDoor,
          ProductsDataInfo.doorWithHiddenWingAluminiumDoor
        ]
      },
      {
        name: ProductsSubCategory.securityDoor,
        children: [ProductsDataInfo.customSecurityDoor]
      }
    ]
  },
  {
    image: ProductSectionImages.facade,
    header: ProductsCategory.facade,
    subCategory: [
      {
        name: ProductsSubCategory.fundermaxFacade,
        children: [ProductsDataInfo.fundermaxFacadeFundermaxFacade]
      },
      {
        name: ProductsSubCategory.ventilatedAlucobondFacade,
        children: [ProductsDataInfo.ventilatedAlucobondFacadeVentilatedAlucobondFacade]
      },
      {
        name: ProductsSubCategory.glassFacade,
        children: [
          ProductsDataInfo.glassFacade
        ]
      },
      {
        name: ProductsSubCategory.graniteFacade,
        children: [ProductsDataInfo.granitFacadeGranitFacade]
      }
    ]
  },
  {
    image: ProductSectionImages.slidingSystems,
    header: ProductsCategory.slidingSystems,
    subCategory: [
      {
        name: ProductsSubCategory.liftingSlidingSystems,
        children: [
          ProductsDataInfo.pvcVekaSlideSlidingSystem,
          ProductsDataInfo.aluUltraSlideSlidingSystem,
          ProductsDataInfo.aluVgPlusSlidingSystem
        ]
      },
      {
        name: ProductsSubCategory.inRowSlidingSystems,
        children: [
          ProductsDataInfo.pvcVekaSoftline7082InRowSlidingSystem,
          ProductsDataInfo.aluInRowSlidingSystem
        ]
      },
      {
        name: ProductsSubCategory.accordionSlidingSystems,
        children: [
          ProductsDataInfo.pvcAccordionSlidingSystems,
          ProductsDataInfo.aluSmartiaM9800AccordionSlidingSystems,
          ProductsDataInfo.aluSmartiaM19800AccordionSlidingSystems
        ]
      }
    ]
  }
]

/** Part of data for tips */
export type TTipsTextPart = {
    header: string,
    text: string[],
    img?: string | any
}

export type TTipsData = {
    cardImg: string | any,
    coverImg: string | any,
    header: string,
    date: Date | string,
    landingPageText: string,
    text: TTipsTextPart[]
}

export const TipsImages = {
  tip1: require('constants/img/tips/card/img1.jpg'),
  tip2: require('constants/img/tips/card/img4.png'),
  tip3: require('constants/img/tips/card/WindowImg6.jpg')
}

export const InTipsImages = {
  default: require('constants/img/tips/in/default.png'),
  img1: require('constants/img/tips/in/img1.jpg'),
  img2: require('constants/img/tips/in/img2.jpg'),
  img3: require('constants/img/tips/in/img3.png'),
  img4: require('constants/img/tips/in/img4.png'),
  img5: require('constants/img/tips/in/img5.jpg'),
  img6: require('constants/img/tips/in/img6.jpg'),
  img7: require('constants/img/tips/in/img7.jpg'),
  img8: require('constants/img/tips/in/img8.jpg')
}

export const TipsInitData = [
  {
    cardImg: TipsImages.tip1,
    coverImg: InTipsImages.img1,
    header: 'KOJA PVC STOLARIJA JE NAJBOLJA',
    date: new Date().toDateString(),
    landingPageText:
            'KOJA PVC STOLARIJA JE NAJBOLJA',
    text: [
      {
        header: 'Kako da odaberete prozore',
        text: [
          'U moru onoga što se nudi na tržištu, mi i dalje ne znamo koja PVC stolarija je najbolja. Prvi poriv je uvek da se raspitamo šta se nudi i koliko košta, pa da se odlučimo od koga ćemo kupiti. Ipak, previše netačnih informacija onlajn nas dovede u zabunu, svako hvali svoj proizvod ili nudi sumnjive popuste, i mi i dalje nismo načisto šta bi i kako trebalo da uradimo.',
          'Upravo zbog toga smo odlučili da vam pomognemo oko toga kako da odaberete prozore, tako da možete lako da steknete utisak na šta bi uopšte trebalo da obratite pažnju.',
          'Evo nekoliko termina, koje ćete čuti kada se budete raspitivali o zameni prozora.'
        ],
        img: InTipsImages.img4
      },
      {
        header: 'Šta su PVC profili',
        text: [
          'PVC profili za prozore se najčešće isporučuju u šipkama od nekoliko metara, koje se nakon toga seku u skladu sa dimenzijama prozora koje su majstori izmerili kod vas. Posle toga se unutra ubacuje čelično ojačanje, koje se šrafi i fiksira. Kada prođe dodatnu obradu, dobije se krilo prozora ili štok, što je zapravo gotov profil. Na to se dalje postavljaju okov i stakla.',
          'Ranije je važilo pravilo da je profil kvalitetniji što ima više komora, ali kako je na tržištu počelo da se pojavljuje sve više nekvalitenih prozvoda, tako ni ovo više nije slučaj. Ipak, kada kupite nemački proizvod, bar o kvalitetu ne morate da brinete. Tu i broj komora ima svoj značaj.'
        ]
      },
      {
        header: 'Šta je okov',
        text: [
          'Okov je mehanizam koji omogućava da se prozor otvara i zatvara. Bez obzira na to na koji način se prozor otvara, on mora da ima kvalitetan okov da bi besprekorno funkcionisao. Kvalitet okova zavisi od izrade, i uvek je bolje da se uzme nemački nego turski ili kineski.',
          'Kada menjate prozore, povedite računa i o tome da vam sleduje i garancija nemačkog proizvođača, kako na profile, tako i na okove, i da ona uvek traje više godina. Često možete da čujete i da treba uzeti okove koji su na domaćem tržištu dosta zastupljeni, jer onda lakše možete da nađete delove i servis.',
          'Ali, ne treba vi da brinete o tome. U Srbiji smo navikli sami da prekrajamo i popravljamo i neretko upadamo u krpljenja kojima nema kraja, a zapravo samo treba da se odlučite za ozbiljnog prodavca koji ima svoj servis i sam daje garanciju. (Kod nas, na primer, garancija traje dve godine.)',
          'Kvalitetan okov izrađuje se od nerđajućeg čelika, što znači da dugo traje i da je otporan na vremenske prilike i spoljne uticaje. '
        ],
        img: InTipsImages.img3
      },
      {
        header: 'Kako se bira staklo',
        text: [
          'Najveća površina kod prozora ide na staklo, što vam daje ne samo dovoljno svetlosti u stanu ili kući, već i dobru izolaciju. Zato je važno da prodavcu naznačite ako želite bolju termo i zvučnu izolaciju, da može, na primer, da vam ponudi troslojno staklo. Postoje stakla koja su idealna za određene temperature, pa tako leti odbijaju toplotu, a zimi će pomoći da se ona zadrži u prostoriji.',
          'Takođe, PVC stolarija je danas tako uznapredovala da možete da odaberete i staklo koje će biti bezbednije za dečije sobe. To su takozvana sigurnosna stakla, koja se ne raspadaju u komade ako se kojim slučajem razbiju, te samim tim smanjuju opasnost od povreda.'
        ],
        img: InTipsImages.img6
      },
      {
        header: 'Naša preporuka',
        text: [
          'Ako tražite ekonomična rešenja i najbolji odnos kvaliteta i cene, onda su VEKA profili svakako na prvom mestu. Nemačka izrada im garantuje kvalitet po visokim standardima, a iskustva naših kupaca su više nego pozitivna. Odlični su kada je u pitanju izolacija, lako se održavaju, i biće vam napravljeni i ugrađeni za oko tri nedelje.'
        ]
      }
    ]
  },
  {
    cardImg: TipsImages.tip2,
    coverImg: InTipsImages.img4,
    header: 'NAJBOLJA STOLARIJA ZA KUĆU',
    date: new Date().toDateString(),
    landingPageText:
            'Hoćete da menjate prozore ili vrata, a ne znate odakle da počnete?',
    text: [
      {
        header: 'NAJBOLJA STOLARIJA ZA KUĆU: Kako da naručite',
        text: [
          'Hoćete da menjate prozore ili vrata, a ne znate odakle da počnete?',
          'Nije ni čudo, kada smo zatrpani svakakvim informacijama preko interneta i društvenih mreža, i prilično zaplašeni nejasnim procedurama i lošim iskustvima. Upravo zbog toga vam donosimo ovaj vodič - kako da naručite najbolju stolariju za kuću, i to korak po korak, da znate šta kupujete i budete zadovoljni kvalitetom i ugradnjom.'
        ],
        img: InTipsImages.img1
      },
      {
        header: 'Pozovite ili pošaljite mejl',
        text: [
          'Kontaktirajte nas telefonom (013367700) ili imejlom (office@danito.rs). To je prvi korak kada menjate stolariju. Jer, treba da čujemo šta vam tačno treba, i da se sa vama dogovorimo kada da pošaljemo naš tim da uzmu dimenzije i pogledaju prostor za vašu novu stolariju. (Dolazak i merenje su BESPLATNI.) Za prozore se, recimo, meri otvor na zidu sa unutrašnje strane, širina i visina od zida do zida. Ako imate roletne, meri se i ukupna visina prozora bez kutije za roletne.',
          'Od momenta kada pozovete ili pošaljete mejl, mi dolazimo za nekoliko dana. Dakle, nema čekanja i odugovlačenja. Umesto da gubite vreme na pretraživanje po internetu, da čitate "uputstva" o tome kako da izmerite svoj prozor ili vrata, jednostavnije je da pozovete one koji se u to razumeju. I mi stižemo!'
        ],
        img: InTipsImages.img3
      },
      {
        header: 'Dođite u naš salon',
        text: [
          'Zašto je ovo važno? Kada dođete kod nas, na licu mesta možemo da vam pokažemo kako izgledaju nemački profili, prozori ili vrata, klizni sistemi koji se prave i prodaju u našem salonu.',
          'Nakon što je naša ekipa bila kod vas u kući ili stanu i uzela mere, najbolje je da uživo vidite šta bi najbolje moglo da se uklopi u vaš prostor. Jer, svakom kupcu se posvećuje posebna pažnja, ne odgovara isti profil svima, niti svi imaju isti ukus. Ovo je, takođe, prilika da postavite sva pitanja koja eventualno imate i da vam objasnimo ono što vas možda zbunjuje.'
        ],
        img: InTipsImages.img5
      },
      {
        header: 'Posebna ponuda za vas',
        text: [
          'Na osnovu dimenzija i vašeg izbora profila, stakla i sličnog, kao i toga da li ste se odlučili za PVC ili alu stolariju, da li biste i roletne ili ne, i tako dalje, formira se specijalna cena. Jer, stolarija se ne ugrađuje po kvadratu, već prema tome da li vam treba dvokrilni ili trokrilni prozor, na primer, da li biste posebno staklo za vrata ili klizni sistem duž čitavog zida. Postoji puno kombinacija, koje samim tim i različito koštaju.',
          'Kada nam dođete u posetu, sve ćemo varijante da pretresemo i napravićemo najbolju moguću ponudu.'
        ],
        img: InTipsImages.img2
      },
      {
        header: 'Pravljenje stolarije i ugradnja',
        text: [
          'Nakon što prihvatite našu ponudu i legne uplata, više ne morate da brinete. Tog momenta pripremamo stolariju za koju ste se odučili i najavljujemo se da dođemo za ugradnju.',
          'Svesni smo da se ljudi često suočavaju sa lošim nastupom majstora, da kolege koje rade manje kvalitetno ili nude nerealne popuste a onda štede na materijalu - izazivaju sumnju i podozrenje koje utiče na sve nas. Upravo zato, naš tim je uvek tačan, ne troši vaše vreme uludo, i završava posao u rekordnom roku. Od uplate do završetka ugradnje proći će oko tri nedelje. Mi skidamo i staru stolariju, a sama ugradnja nove gotova je za jedan dan.',
          'Treba napomenuti da završni radovi oko prozora ili vrata ne spadaju u naš domen, već u molerske radove. Ali, da ne biste dodatno gubili vreme na traženje još jednog majstora, i da bi vam sve bilo gotovo odjednom, nudimo i uslugu angažovanja molera koji će brzo obaviti ove sitne estetske popravke.'
        ],
        img: InTipsImages.img4
      },
      {
        header: 'Garancija i servis',
        text: [
          'Kada sve završimo, daćemo vam i osnovne smernice kako da održavate svoju novu stolariju. Sa naše strane, dobijete garanciju nemačkog proizvođača na sve proizvode, kao i garanciju naše firme na 24 meseca. Sve što se eventualno dogodi u tom periodu, rešavamo za kratko vreme.',
          'Ako prođu dve godine od ugradnje, a vi imate problema sa našom stolarijom, rado ćemo doći da proverimo šta se događa. Doduše, PVC ili alu stolarija je izuzetno otporna i dugo traje, te će joj posle mnogo godina korišćenja, zatrebati tek zatezanje ponekog šrafa.'
        ],
        img: InTipsImages.img6
      }
    ]
  },
  {
    cardImg: TipsImages.tip3,
    coverImg: InTipsImages.img8,
    header: 'PVC PROZORI: Cena, ugradnja i zablude',
    date: new Date().toDateString(),
    landingPageText:
            'Mnogi ljudi danas ne znaju kako da promene stolariju. Plaše se onoga što ih čeka...',
    text: [
      {
        header: 'PVC PROZORI: Cena, ugradnja i zablude',
        text: [
          'Mnogi ljudi danas ne znaju kako da promene stolariju. Plaše se onoga što ih čeka, iako se godinama kane da konačno zamene stare prozore koji škripe i koje nam je mučno više i da peremo. Živimo u Srbiji, pa moramo dobro da razmislimo pre nego što se upustimo u bilo kakvu „vanrednu“ investiciju, jer će nam to dodatno istanjiti kućni buždet. Ipak, u želji da sve prođe što lakše i jeftinije, često dobijemo lošu robu, navučemo na vrat majstore, dodatne troškove, i nikad kraja gunguli i prašini po kući!',
          'U ovom tekstu ćete naći smernice kako da sve ovo izbegnete. Jer, kao firma koja se stolarijom uspešno bavi punu deceniju i imala je klijente poput Strabaga, Messer-a, BigPizze, SrbijaGasa, AMSS-a, shvatili smo da niko ne posvećuje dovoljno pažnje običnim ljudima, koji u današnjim uslovima pokušavaju da vode računa o sopstvenim domaćinstvima i porodici – najbolje što mogu. I to, bez bilo čije pomoći.'
        ],
        img: InTipsImages.img4
      },
      {
        header: 'Cena PVC prozora: Šta je skuplje',
        text: [
          'Cena PVC prozora je, naravno, prvo što ljude zanima, jer pokušavaju sve nekako da uklope u budžet kojim raspolažu. Jure po internetu raznorazne savete ili se povedu za nekom reklamom koja daje „najjeftinije na tržištu“. Često mere sami, nadajući se da će to dodatno da im smanji cenu, navodno završe posao (sa kineskim ili turskim prozorima lošeg kvaliteta) - a onda dođu u situaciju da se novi PVC prozori brzo rasklimaju, počnu da škripe, moraju da ih poguraju da bi se zatvorili, a da ne pominjemo da se mnogima dešavalo da im pri ugradnji, majstori razbiju veći deo zida, pa onda fijuče i duva na sve strane.',
          'Kada pozovu servis, njima treba „sto godina“ (čitajte: nekoliko nedelja) da dođu, a i onda posao završe ili ne. Jer, ono što u startu nije postavljeno kako treba, uvek može ponovo da se „razvali“ i iskrivi.'
        ]
      },
      {
        header: 'Pa, onda nađem majstora koji će to na brzaka da mi reši.',
        text: [
          'Ovo je najčešća reakcija, ali odavde se problemi samo gomilaju. Evo, okvirno saberite: koliko god da ste („jeftino“) platili prvobitni prozor i ugradnju, tome sada morate da dodate i (skup) trošak za majstora. Njega pride tražite po preporuci (ne možemo svakoga ni da pustimo u kuću), i to sve zajedno uvek em košta, em traje.',
          'Na primer, ljudi se istroše oko renoviranja stana i već su izgubili i novac i vreme (i živce), a onda ispadne da treba prepravljati i dorađivati prozore. Taman kad ste mislili da ste gotovi i da ćete svu onu prašinu da isperete iz kose i odeće, morate da tražite - novog majstora. („Zar opet?!“)',
          'Ali, ne treba vi da brinete o tome. U Srbiji smo navikli sami da prekrajamo i popravljamo i neretko upadamo u krpljenja kojima nema kraja, a zapravo samo treba da se odlučite za ozbiljnog prodavca koji ima svoj servis i sam daje garanciju. (Kod nas, na primer, garancija traje dve godine.)',
          'Ovakve situacije se lako izbegnu ako se obratite ljudima koji znaju šta rade. Zašto vas da boli glava oko toga koje su vam dimenzije potrebne? Naša firma lepo pošalje svoje ljude sve da izmere, a vi uz kafu izaberete kako bi da vam novi prozori izgledaju. I posle dve-tri nedelje imate – novi i lepši „pogled na svet“. '
        ],
        img: InTipsImages.img1
      },
      {
        header: 'Da, ali to sigurno papreno košta kad se sve sabere.',
        text: [
          'Tačno je da u Srbiji sve ima „skrivene troškove“ i toga se svi plašimo, ali kod nas u firmi platite samo ono što uradimo. Pride, cena se formira u odnosu na ono što vama treba za vaš stan ili kuću, a ne „odoka“. Ako vam neko tek tako, napamet da cenu, znajte da ga nije mnogo briga da li će da vam duva oko prozora ili ne. Bitno mu je da proda, a ne da vi dobijete kvalitetnu uslugu i proizvod. Ozbiljna firma neće sebi dozvoliti da se bruka „fuš“ robom, odnosno da pravi loše profile ili okvire, i još da ruši svoju reputaciju lošom uslugom.',
          'Pride, izlazak naše ekipe na teren i samo merenje su - besplatni. Tek ako vam se dopadne naša ideja, vi platite, a mi počnemo da radimo. I „mirna Bačka“',
          'A kad se sve završi za par nedelja, čudićete se prijateljima što su se toliko iscimali i dežurali s majstorima kod kuće, kad su mogli da vam prave društvo da zajedno odete u šoping ili na dečiju utakmicu.'
        ]
      },
      {
        header: 'PVC ili aluminijumski prozori, šta izabrati',
        text: [
          'Kao što obično ne znamo koliko u stvari lako možemo da zamenimo prozore, tako nismo sigurni ni za koje da se odlučimo. Deluje kao se svugde koriste PVC prozori, ali nam onda jedni kažu kako su aluminijumski „skuplji, ali bolji“, a drugi se kunu samo u drvo. Zato ćemo ovde da vam damo osnovne odrednice nekih od najisplativijih opcija, a vi ćete već izabrati da li biste PVC ili aluminijumske prozore, ili neku kombinaciju.',
          'Osnovna razlika jeste što su jedni od plastike, drugi od aluminijuma. Prvi lepše izgledaju, drugi su malo dugotrajniji. Ako vam trebaju prozori za kuću ili stan, preporuka su PVC prozori, jer sasvim su laki za održavanje, dugo traju, štede vam struju, a još su i jeftiniji.',
          'Jedan od najpopularnijih kod nas je VEKA 70, dvokrilni prozor, specijalizovan za stanove. Klasičnog je dizajna, zbog čega se lakše uklapa u bilo koji dekor. U pitanju je petokomorni profil osnovne ugradnje dubine od 70 mm, čime poboljšavate izolaciju - da vam ne odlazi topao vazduh, a grejanje radi u prazno.',
          'Takođe jedan od najtraženijih – VEKA 82, trokrilni model koji predstavlja višekomorni sistem ugradnje dubine od 82mm, čime dobijate još bolju toplotnu izolaciju. Ima tri nivoa zaptivanja, što ga štiti od niskih i visokih temperatura, promaje i vlage. Ovaj sistem je stabilan i dobro izoluje čak i kod staklenih zidova. Nećete morati da brinete ni o buci sa ulice, jer VEKA 82 ima odličnu zvučnu izolaciju.',
          'PVC prozori sa aluminijumskom oblogom su kombinacija koju naši klijenti rado uzimaju, jer jednim udarcem dobijaju i trajnost i konfor. Pored toga, obloge možemo da plastificiramo u svim bojama.',
          'Naravno da u našoj ponudi imamo i aluminijumske prozore, aluminijumske sa termoprekidom, kao i kombijanciju alu-drvo, ali su VEKA 70 i VEKA 82 dva ubedljivo najtraženija i najisplativija modela, zbog čega smo sigurni da će najpre zanimati i vas.'
        ],
        img: InTipsImages.img2
      },
      {
        header: 'Zašto baš VEKA prozori',
        text: [
          'Profil VEKA je kvalitetan, a uzmite u obzir da ako on ne valja, sve drugo „pada u vodu“. Dovoljno je da vam kažemo da se radi o pravom nemačkom standardu. Dakle, dobijate kvalitet, prozore nemačke izrade, koji su trajni i čvrsti na spojevima.',
          'VEKA će vam, takođe, pomoći da smanjite troškove struje i grejanja. Dobra izolacija omogućava da se topao ili hladan vazduh zadrži unutra, tako da vam grejanje ne radi uludo i da ne morate leti da držite klimu non-stop uključenu. (A svi znamo koliko klima uređaj „vuče“ struje tokom letnjih meseci.)',
          'Postoje podaci da će vam u ovom smislu, dobar PVC prozor na godišnjem nivou uštedeti čak 1.000 evra, a samo zamislite koliko ste novca već bacili svih ovih godina!',
          'Naravno da VEKA nije jedini nemački proizvođač, ali ima još jednu bitnu osobinu zbog koje smo ga odabrali. Firma je osnovana još 1969. godine i sve vreme se modernizuje i prati svetske trendove. Tako je i poslednjih decenija dala svoj doprinos zaštiti životne sredine. VEKA reciklira stare prozore i na taj način pravi manje otpada. Svi njeni sistemi profila mogu gotovo u potpunosti da se recikliraju, tako da stari elementi postaju vredna sirovina, a novi sadrže ekološki materijal koji se dalje prerađuje - bez gubitka kvaliteta.',
          'Za nas kojima je zagađen vazduh postao svakodnevica, vrlo smo zainteresovani kako da i sami doprinesemo očuvanju životne sredine, pa zato koristimo društveno odgovorne partnere. Pride, kad je napolju zagađeno, važno je da možete lepo da zatvorite prozor i ne brinete da li će deca da vam udišu štetni vazduh.'
        ],
        img: InTipsImages.img6
      },
      {
        header: 'PVC stolarija u boji drveta, vi birate',
        text: [
          'Još jedan mit koji kruži jeste da PVC stolarija uvek ide u dosadnoj beloj boji. Tačno je da ona neznatno manje košta, ali je prosto šteta ne odabrati neku iz palete boja ako vam prozor ima aluminijumsku oblogu.',
          'VEKA prozori su elegantnog dizajna, a onda vam samo ostaje da izaberete boju i ukopite je uz ostatak enterijera. Možda biste mahagoni, ili boju zlatnog hrasta, ili neku već boju drveta koja vam najviše leži.'
        ],
        img: InTipsImages.img5
      },
      {
        header: 'I ne samo to!',
        text: [
          'Laki za održavanje',
          'PVC prozore ne treba da premazujete jednom godišnje kao drvene, niti se oni krive vremenom i ne napadaju ih raznorazni insekti. Dovoljno je da profil obrišete vlažnom krpom i blagim deterdžentom.',
          'Garancija dve godine',
          'Od datuma kupovine prozora kod nas imate dve godine garancije. Šta god da se u tom periodu dogodi, kontaktirate naš servis koji odmah izlazi na teren. Nas nećete čekati nedeljama.',
          'Servis',
          'Čak i kada prođe vreme garancije, kad god da vam zatreba pomoć oko prozora koji ste ugradili kod nas, slobodno nas pozovite. Na prozorima će posle puno godina možda biti potrebno da se pritegne poneki šraf.',
          'Završni radovi',
          'Da bi iza nas sve ostalo čisto, kao da niste ni imali majstore, možemo vam pomoći i tako što ćemo angažovati molera da obradi sve pozicije oko prozora. Na taj način, dobijate sve cakum-pakum sređeno.'
        ],
        img: InTipsImages.img7
      },
      {
        header: 'Česta pitanja:',
        text: [
          'Kolika je cena stolarije po kvadratu?',
          'Cena stolarije se obračunava na osnovu dimenzije otvora za prozor i modela koji vi izaberete. Dakle, ne ide po kvadratu niti po komadu. Treba samo da nas kontaktirate da pošaljemo svoje ljude da to izmere i da dođete da izaberete prozor. Mi onda na osnovu toga pravimo ponudu specijalno za vas.',
          'Koliko se čeka na merenje?',
          'Naš tim dolazi posle dva-tri dana od poziva.',
          'Koliko traje zamena prozora?',
          'Od momenta kada prihvatite našu ponudu, čitav proces traje 15 do 20 dana.',
          'Da li postoji garancija?',
          'Da, dobijate garanciju od nemačkih proizvođača profila i okova, a od nas i dodatnu garanciju na 24 meseca koja uključuje besplatan servis za sve eventualne probleme nakon ugradnje.',
          'Da li su profili nemački?',
          'Da, oni se prave u Nemačkoj i odande stižu u našu firmu.'
        ],
        img: InTipsImages.img3
      },
      {
        header: 'KAKO NARUČITI',
        text: [
          '1. Pozovete telefonom ili pošaljete mejl.',
          '2. Naša ekipa dolazi da izmeri dimenzije otvora u roku od dva-tri dana',
          '3. Svratite kod nas da izaberete prozore i da vam sve još jednom uživo objasnimo',
          '4. Dobijete specijalizovanu ponudu pravljenu samo za vas.',
          '5. Čim legne uplata, mi počinjemo sa radom.',
          '6. Za tri nedelje imate nove prozore - da u njima uživate godinama i vremenom zaboravite kad ste ih stavili.'
        ]
      }
    ]
  }
]

/** Part of data for products */

export type TThirdPartOptionsColors = {
    text: string,
    image: string | any
}

export type TThirdPartOptions = {
    description: string,
    colors?: TThirdPartOptionsColors[]
}

export type TPanelsImg = {
    img: string,
    smallImg: string,
    text: string,
}

export type TPanels = {
    name: string,
    image: TPanelsImg[],
    text: string
}

export type TProductsData = {
    name: string,
    nameHeader: string,
    imgCover: string | any,
    video?: any,
    imgVideo?: string,
    optionHeaders: string[],
    options: any[],
    material?: string[],
    panels?: TPanels[]
}

export const ProductsImages = {
  pvcWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg1.jpg'),
  pvcWindow2overImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg2.jpg'),
  pvcWindow3CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg3.jpg'),
  pvcWindow4CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg4.jpg'),
  pvcWindow5CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg5.jpg'),
  woodWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg6.jpg'),
  woodAluminiumWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg7.jpg'),
  aluminiumWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg8.jpg'),
  aluminiumWindow2CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg9.jpg'),
  aluminiumWindow3CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg10.jpg'),
  aluminiumWindow4CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg11.jpg'),
  entrancePvcDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg1.jpg'),
  partitionPvcDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg2.jpg'),
  profileWithoutThermalBreakAluminiumDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/AluminijumskiProzorBezTermoPrekida.jpg'),
  profileWithThermalBreakAluminiumDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/AluminijumProzoriProfilSaTermoprekidom.jpg'),
  doorWithHiddenWingAluminiumDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg6.jpg'),

  aluminiumThermoBlindsInsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Roletne1.jpg'),
  pvcBlindsInsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Roletne2.jpg'),
  aluminiumOutsideBlindsRoundedOutsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Roletne3.jpg'),

  aluminiumOutsideBlindsPentagonalOutsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Fasade1.jpg'),
  subFacadeAluminiumBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Fasade2.jpg'),

  fundermaxFacadeFundermaxFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/FundermaxFasada.jpg'),
  ventilatedAlucobondFacadeVentilatedAlucobondFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/AlucoBondFasade.jpg'),
  structuralGlassFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/StaklenaFasada.jpg'),
  standardGlassFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/StaklenaFasada.jpg'),
  granitFacadeGranitFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/GranitFasada.jpg'),
  pvcVekaSlideSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/PodiznoKlizniPvcVekaSlide.jpg'),
  aluUltraSlideSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/PodiznoKlizniAluUltraSlide.jpg'),
  aluVgPlusSlideSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/PodiznoKlizniAluVgPlus.jpg'),
  pvcVekaSoftline7082InRowSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi8.jpg'),
  aluInRowSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi9.jpg'),
  pvcAccordionSlidingSystemsCoverImg: require('constants/img/imgProduct/ImgPageProduct/HarmonikaAluHarmonika.jpg'),
  aluSmartiaM9800AccordionSlidingSystemsCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi11.jpg'),
  aluSmartiaM19800AccordionSlidingSystemsCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi12.jpg'),

  solomaticVenetiansCoverImg: require('constants/img/imgProduct/ImgPageProduct/SolomatikVenecijaneri.jpg')
}

export const PreviewVideo = {
  veka70Video: require('constants/video/VEKA70.mp4'),
  veka82Video: require('constants/video/VEKA82.mp4'),
  PvcUlaznaVrata: require('constants/video/PvcUlaznaVrata.mp4'),
  PvcPregradnaVrata: require('constants/video/PvcPregradnaVrata.mp4'),
  VrataSkrivenioKrilo: require('constants/video/VrataSkrivenioKrilo.mp4'),
  SigurnosnaVrataSlika: require('constants/video/SigurnosnaVrata.jpg')
}

export const Panels = {
  inox: [
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 51-126E i 51_1-72E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 51-126E i 51_1-72E.jpg'),
      text: 'PVC 51 cena: 126e i 51_1 cena: 72e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 52-150E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 52-150E.jpg'),
      text: 'PVC 52 cena: 150e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 53-114E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 53-114E.jpg'),
      text: 'PVC 53 cena: 114e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 60-150E i 60_1-84E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 60-150E i 60_1-84E.jpg'),
      text: 'PVC 60 cena: 150e i 60_1 cena: 84e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 61-144E i 61_1-84E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 61-144E i 61_1-84E.jpg'),
      text: 'PVC 61 cena: 144e i 61_1 cena: 84e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 70-150E i 70_1-84E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 70-150E i 70_1-84E.jpg'),
      text: 'PVC 70 cena: 150e i 70_1 cena: 84e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 71-144E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 71-144E.jpg'),
      text: 'PVC 71 cena: 144e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 80-162E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 80-162E.jpg'),
      text: 'PVC 80 cena: 162e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 90-144E i 90_1-78E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 90-144E i 90_1-78E.jpg'),
      text: 'PVC 90 cena: 144e i 90_1 cena: 78e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 91-144E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 91-144E.jpg'),
      text: 'PVC 91 cena: 144e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 100-144E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 100-144E.jpg'),
      text: 'PVC 100 cena: 144e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 110-156E i 110_1-84E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 110-156E i 110_1-84E.jpg'),
      text: 'PVC 110 cena: 156e i 110_1 cena: 84e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC 120-150E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC 120-150E.jpg'),
      text: 'PVC 120 cena: 150e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-M 1-144E I PVC-M 1_1-96E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-M 1-144E I PVC-M 1_1-96E.jpg'),
      text: 'PVC-M 1 cena: 144e i PVC-M 1_1 cena: 96e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-M 2-144E I PVC-M 2_1-108E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-M 2-144E I PVC-M 2_1-108E.jpg'),
      text: 'PVC-M 2 cena: 144e i PVC-M 2_1 cena: 108e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-M 3-132E I PVC-M 3_1-108E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-M 3-132E I PVC-M 3_1-108E.jpg'),
      text: 'PVC-M 3 cena: 132e i PVC-M 3_1 cena: 108e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-M 4-132E I PVC-M 4_1-108E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-M 4-132E I PVC-M 4_1-108E.jpg'),
      text: 'PVC-M 4 cena: 132e i PVC-M 4_1 cena: 108e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-M 5-132E I PVC-M 5_1-96E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-M 5-132E I PVC-M 5_1-96E.jpg'),
      text: 'PVC-M 5 cena: 132e i PVC-M 5_1 cena: 96e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-M 6-132E I PVC-M 6_1-108E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-M 6-132E I PVC-M 6_1-108E.jpg'),
      text: 'PVC-M 6 cena: 132e i PVC-M 6_1 cena: 108e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-M 7-144E I PVC-M 7_1-108E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-M 7-144E I PVC-M 7_1-108E.jpg'),
      text: 'PVC-M 7 cena: 144e i PVC-M 7_1 cena: 108e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-1- INOX-180E.png'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-1- INOX-180E.png'),
      text: 'PVC-S-1-INOX cena: 180e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-1-144E.png'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-1-144E.png'),
      text: 'PVC-S-1 cena: 144e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-2-144E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-2-144E.jpg'),
      text: 'PVC-S-2 cena: 144e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-2-INOX-180E.png'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-2-INOX-180E.png'),
      text: 'PVC-S-2-INOX cena: 180e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-3- INOX-180E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-3- INOX-180E.jpg'),
      text: 'PVC-S-3-INOX cena: 180e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-3-120E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-3-120E.jpg'),
      text: 'PVC-S-3 cena: 120e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-4 INOX-180E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-4 INOX-180E.jpg'),
      text: 'PVC-S-4-INOX cena: 180e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-4-144E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-4-144E.jpg'),
      text: 'PVC-S-4 cena: 144e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-5 - INOX-180E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-5 - INOX-180E.jpg'),
      text: 'PVC-S-5-INOX cena: 180e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-5-144E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-5-144E.jpg'),
      text: 'PVC-S-5 cena: 144e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-6 - INOX-180E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-6 - INOX-180E.jpg'),
      text: 'PVC-S-6-INOX cena: 180e'
    },
    {
      img: require('constants/img/panels/newPanels/pvcPanels/PVC-S-6-144E.jpg'),
      smallImg: require('constants/img/panels/newPanels/pvcPanels/small/PVC-S-6-144E.jpg'),
      text: 'PVC-S-6 cena: 144e'
    }
  ],
  premium: [
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-1-540e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-1-540e.jpg'),
      text: 'PREMIUM-1 cena: 540e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-2-504e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-2-504e.jpg'),
      text: 'PREMIUM-2 cena: 504e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-3-576e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-3-576e.jpg'),
      text: 'PREMIUM-3 cena: 576e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-4-660e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-4-660e.jpg'),
      text: 'PREMIUM-4 cena: 660e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-5-504e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-5-504e.jpg'),
      text: 'PREMIUM-5 cena: 504e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-6-540e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-6-540e.jpg'),
      text: 'PREMIUM-6 cena: 540e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-7-720e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-7-720e.jpg'),
      text: 'PREMIUM-7 cena: 720e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-8-540e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-8-540e.jpg'),
      text: 'PREMIUM-8 cena: 540e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-9-600e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-9-600e.jpg'),
      text: 'PREMIUM-9 cena: 600e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-10-540e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-10-540e.jpg'),
      text: 'PREMIUM-10 cena: 540e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-11-540e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-11-540e.jpg'),
      text: 'PREMIUM-11 cena: 540e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-12-504e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-12-504e.jpg'),
      text: 'PREMIUM-12 cena: 504e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-14-480e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-14-480e.jpg'),
      text: 'PREMIUM-14 cena: 480e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-15-540e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-15-540e.jpg'),
      text: 'PREMIUM-15 cena: 540e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-16-480e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-16-480e.jpg'),
      text: 'PREMIUM-16 cena: 480e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-17-696e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-17-696e.jpg'),
      text: 'PREMIUM-17 cena: 696e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-18-576.JPG'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-18-576.JPG'),
      text: 'PREMIUM-18 cena: 576e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-19-540e.PNG'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-19-540e.PNG'),
      text: 'PREMIUM-19 cena: 540e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-20-576e.png'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-20-576e.png'),
      text: 'PREMIUM-20 cena: 576e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-21-576e.PNG'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-21-576e.PNG'),
      text: 'PREMIUM-21 cena: 576e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-22-660e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-22-660e.jpg'),
      text: 'PREMIUM-22 cena: 660e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-23-576e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-23-576e.jpg'),
      text: 'PREMIUM-23 cena: 576e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-24-600e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-24-600e.jpg'),
      text: 'PREMIUM-24 cena: 600e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-25-576e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-25-576e.jpg'),
      text: 'PREMIUM-25 cena: 576e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-26-660e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-26-660e.jpg'),
      text: 'PREMIUM-26 cena: 660e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-27-420e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-27-420e.jpg'),
      text: 'PREMIUM-27 cena: 420e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-28-696e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-28-696e.jpg'),
      text: 'PREMIUM-28 cena: 696e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-29-600e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-29-600e.jpg'),
      text: 'PREMIUM-29 cena: 600e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-30-504e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-30-504e.jpg'),
      text: 'PREMIUM-30 cena: 504e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-31-720e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-31-720e.jpg'),
      text: 'PREMIUM-31 cena: 720e'
    },
    {
      img: require('constants/img/panels/newPanels/premiumPanels/PREMIUM-32-540e.jpg'),
      smallImg: require('constants/img/panels/newPanels/premiumPanels/small/PREMIUM-32-540e.jpg'),
      text: 'PREMIUM-32 cena: 540e'
    }
  ],
  aluminium: [
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX - 101-264E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX - 101-264E.jpg'),
      text: 'INOX  101 cena: 264e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 102-216E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 102-216E.jpg'),
      text: 'INOX  102 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 103-216E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 103-216E.jpg'),
      text: 'INOX 103 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 104-216E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 104-216E.jpg'),
      text: 'INOX 104 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 105-264E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 105-264E.jpg'),
      text: 'INOX 105 cena: 264e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 106-240E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 106-240E.jpg'),
      text: 'INOX 106 cena: 240e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 107-216E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 107-216E.jpg'),
      text: 'INOX 107 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 108-216E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 108-216E.jpg'),
      text: 'INOX 108 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 109-276E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 109-276E.jpg'),
      text: 'INOX 109 cena: 276e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 110-156E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 110-156E.jpg'),
      text: 'INOX 110 cena: 156e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 111-216E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 111-216E.jpg'),
      text: 'INOX 111 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 112-240E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 112-240E.jpg'),
      text: 'INOX 112 cena: 240e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 113-216.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 113-216.jpg'),
      text: 'INOX 113 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 114-240E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 114-240E.jpg'),
      text: 'INOX 114 cena: 240e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 115-360E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 115-360E.jpg'),
      text: 'INOX 115 cena: 360e'
    },
    {
      img: require('constants/img/panels/newPanels/aluPanels/INOX 116-336E.jpg'),
      smallImg: require('constants/img/panels/newPanels/aluPanels/small/INOX 116-336E.jpg'),
      text: 'INOX 116 cena: 336e'
    }
  ],
  elegant: [
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1001-264E.jpg'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1001-264E.jpg'),
      text: 'E-1001 cena: 264e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1002-204E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1002-204E.png'),
      text: 'E-1002 cena: 204e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1003-216EE.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1003-216EE.png'),
      text: 'E-1003 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1005-216E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1005-216E.png'),
      text: 'E-1005 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1007-216E.jpg'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1007-216E.jpg'),
      text: 'E-1007 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1008-216E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1008-216E.png'),
      text: 'E-1008 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1009-216E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1009-216E.png'),
      text: 'E-1009 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1010-204E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1010-204E.png'),
      text: 'E-1010 cena: 204e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1011-204E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1011-204E.png'),
      text: 'E-1011 cena: 204e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1012-216E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1012-216E.png'),
      text: 'E-1012 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1013-216E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1013-216E.png'),
      text: 'E-1013 cena: 216e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1014-264E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1014-264E.png'),
      text: 'E-1014 cena: 264e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1015-264E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1015-264E.png'),
      text: 'E-1015 cena: 264e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1016-264E.png'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1016-264E.png'),
      text: 'E-1016 cena: 264e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1017-288E.jpg'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1017-288E.jpg'),
      text: 'E-1017 cena: 288e'
    },
    {
      img: require('constants/img/panels/newPanels/elegantPanels/E-1018-204E.jpg'),
      smallImg: require('constants/img/panels/newPanels/elegantPanels/small/E-1018-204E.jpg'),
      text: 'E-1018 cena: 204e'
    }
  ]
}

/** Sredi init state za products */

export const ProductsDataCoverImage = {
  outsideBlinds: require('constants/img/productsCoverImage/aluminiumOutsideBlindsPentagonalOutsideBlinds.mp4'),
  aluminiumWindow1: require('constants/img/productsCoverImage/aluminiumWindows1.mp4'),
  aluminiumWindow2: require('constants/img/productsCoverImage/aluminiumWindows2.mp4'),
  aluSmartiaM9800AccordionSlidingSystems: require('constants/img/productsCoverImage/aluSmartiaM9800AccordionSlidingSystems.mp4'),
  aluSmartiaM19800AccordionSlidingSystems: require('constants/img/productsCoverImage/aluSmartiaM19800AccordionSlidingSystems.mp4'),
  aluUltraSlideSlidingSystem: require('constants/img/productsCoverImage/PodiznoKlizniAluUltraSlide.mp4'),
  aluVgPluslideSlidingSystem: require('constants/img/productsCoverImage/PodiznoKlizniAluVgPlus.mp4'),
  doorWithHiddenWingAluminiumDoor: require('constants/img/productsCoverImage/doorWithHiddenWingAluminiumDoor.webm'),
  entrancePvcDoor: require('constants/img/productsCoverImage/entrancePvcDoor.mp4'),
  facade: require('constants/img/productsCoverImage/facade.mp4'),
  InRowSlidingSystem: require('constants/img/productsCoverImage/facade.mp4'),
  insideBlinds: require('constants/img/productsCoverImage/insideBlinds.mp4'),
  partionPvcDoor: require('constants/img/productsCoverImage/partitionPvcDoor.mp4'),
  profileWithoutThermalBreakAluminiumDoor: require('constants/img/productsCoverImage/profileWithoutThermalBreakAluminiumDoor.mp4'),
  profileWithThermalBreakAluminiumDoor: require('constants/img/productsCoverImage/profileWithThermalBreakAluminiumDoor.mp4'),
  pvcAccordionSlidingSystems: require('constants/img/productsCoverImage/HarmonikaAluHarmonika.mp4'),
  pvcVekaSlideSlidingSystem: require('constants/img/productsCoverImage/PodiznoKlizniPvcVekaSlide.mp4'),
  pvcVekaSoftline7082InRowSlidingSystem: require('constants/img/productsCoverImage/pvcVekaSoftline7082InRowSlidingSystem.mp4'),
  solomaticVenetians: require('constants/img/productsCoverImage/solomaticVenetians.mp4'),
  veka70: require('constants/img/productsCoverImage/veka70.mp4'),
  veka82: require('constants/img/productsCoverImage/veka82.mp4'),
  woodAluminumWindow: require('constants/img/productsCoverImage/woodAluminiumWindows.mp4')
}

export const ProductsDataDecorsImages = {
  antracitWindow: require('constants/img/productsCoverImage/window/PvcProzorAntracit.png'),
  goldenOakZlatniWindow: require('constants/img/productsCoverImage/window/PvcProzorGoldenOak-ZlatniHrast.png'),
  mahagoniWindow: require('constants/img/productsCoverImage/window/PvcProzorMahagoni.png'),
  nussbaumWindow: require('constants/img/productsCoverImage/window/PvcProzorNussbaum-TamniOrah.png'),
  antracitDoor: require('constants/img/productsCoverImage/door/PvcVrataUlaznaVrataAntracit.png'),
  goldenOakZlatniDoor: require('constants/img/productsCoverImage/door/PvcVrataUlaznaVrataGoldenOak-ZlatniHrast.png'),
  mahagoniDoor: require('constants/img/productsCoverImage/door/PvcVrataUlaznaVrataMahagoni.png'),
  nussbaumDoor: require('constants/img/productsCoverImage/door/PvcVrataUlaznaVrataNussbaum-TamniOrah.png')
}

export const ProductData = [
  {
    name: ProductsDataInfo.veka70,
    nameHeader: 'VEKA 70 EFFECTLINE',
    imgCover: ProductsImages.pvcWindow1CoverImg,
    video: PreviewVideo.veka70Video,
    imgVideo: ProductsDataCoverImage.veka70,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Petokomorni profil obezbeđuje optimalnu termičku izolaciju,što omogućava značajnu uštedu energije pri grejanju i hlađenju.',
        ' Sistem specijalizovan za upotrebu u stambenim i poslovnim objektima.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi dvoslojni paket termopan stakla ispunjen argonom.'
      ],
      [
        ' Moderan dizajn i odlični parametri u pogledu energetske efikasnosti,    vodootpornosti, otpornosti na vetar i propustljivosti vazduha!',
        'Visok nivo bezbednosti obezbeđen je visokokvalitetnim petokomornim profilima A klase, napravljenim isključivo od prvoklasnog materijala.',
        'Mnogo dnevne svetlosti, kao rezultat najužih profila i veće površine zastakljenja u poređenju sa standardnim sistemima.'
      ],
      {
        description: 'Veka 70 profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: ProductsDataDecorsImages.nussbaumWindow
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: ProductsDataDecorsImages.goldenOakZlatniWindow
          },
          {
            text: 'Antracit (tamno siva)',
            image: ProductsDataDecorsImages.antracitWindow
          },
          {
            text: 'Mahagoni',
            image: ProductsDataDecorsImages.mahagoniWindow
          }
        ]
      }
    ]
  },
  {
    name: ProductsDataInfo.veka82,
    nameHeader: 'VEKA 82 SOFTLINE',
    imgCover: ProductsImages.pvcWindow2overImg,
    video: PreviewVideo.veka82Video,
    imgVideo: ProductsDataCoverImage.veka82,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Sedmokomorni profil sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      {
        description: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: ProductsDataDecorsImages.nussbaumWindow
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: ProductsDataDecorsImages.goldenOakZlatniWindow
          },
          {
            text: 'Antracit (tamno siva)',
            image: ProductsDataDecorsImages.antracitWindow
          },
          {
            text: 'Mahagoni',
            image: ProductsDataDecorsImages.mahagoniWindow
          }
        ]
      }
    ],
    material: [
      'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    ]
  },
  // {
  //   name: ProductsDataInfo.woodAluminiumWindows1,
  //   nameHeader: ProductsDataInfo.woodAluminiumWindows1,
  //   imgCover: ProductsImages.woodAluminiumWindow1CoverImg,
  //   imgVideo: ProductsDataCoverImage.woodAluminumWindow,
  //   optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
  //   options: [
  //     [
  //       'Kompletan sistem sa termicki prekinutim aluminijumskim profilima,',
  //       'oblozen profilima od punog drveta, okovom i gumenim profilima',
  //       'moguce je primeniti kod:',
  //       '- nagibno-zaokretnih prozora i balkonskih vrata,',
  //       '- nagibnih prozora i balkonskih vrata,',
  //       '- klizno-uskocni prozora i balkonskih vrata,',
  //       '- fiksnih prozora.'
  //     ],
  //     [
  //       'Drveni profili sluze kao enterijerska obloga termoizolovanih',
  //       'aluminijumskih profila. Drveni profili su ravnih ivica, cistih formi',
  //       'i u izgledu pozicije dominira jedan profil kao ram stakla.',
  //       'Kit lajsna je utopljena u dimenziju vidnog rama i kod otvarajuceg',
  //       'krila montira se zajedno sa oblogom.'
  //     ],
  //     {
  //       description: 'Mogućnost izbora iz širokog spektra RAL boja.'
  //     }
  //   ]
  // },
  {
    name: ProductsDataInfo.aluminiumWindows1,
    nameHeader: ProductsDataInfo.aluminiumWindows1,
    imgCover: ProductsImages.aluminiumWindow1CoverImg,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    imgVideo: ProductsDataCoverImage.aluminiumWindow1,
    options: [
      [
        'Moderan i stabilan aluminijumski profil omogućava postizanje efekta istog nivoa rama i krila spolja nakon zatvaranja vrata.',
        'Mogućnost prilagođavanja enterijera kao rezultat širokog spektra RAL boja.',
        'Sistem hladnog profila je kompatibilan sa ostalim aluminijumskim sistemima iz Danito ponude.'
      ],
      [
        '- Sistem omogućava primenu raznih ispuna staklenih kao i ukrasnih panela.',
        '- Nepropusnost se obezbeđuje primenom specijalnih zaptivki od sintetičke EPDM gume.',
        '- Visoka udobnost upotrebe i minimalna potreba za održavanjem, kao i dugi rok trajanja.',
        '- U ponudi su vrata dostupna sa niskim pragom ili bez njega.',
        '- Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
      ],
      {
        description: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    ],
    material: [
      'Moderan i stabilan aluminijumski profil omogućava postizanje efekta istog nivoa rama i krila spolja nakon zatvaranja vrata.Mogućnost prilagođavanja enterijera kao rezultat širokog spektra RAL boja.Sistem hladnog profila je kompatibilan sa ostalim aluminijumskim sistemima iz Danito ponude.',
      'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    ]
  },
  {
    name: ProductsDataInfo.aluminiumWindows2,
    nameHeader: ProductsDataInfo.aluminiumWindows2,
    imgCover: ProductsImages.aluminiumWindow2CoverImg,
    imgVideo: ProductsDataCoverImage.aluminiumWindow2,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Vrata u sistemu profila sa termoprekidom odlikuju se višim stepenom toplotne izolacije usled primene specijalnih izolacionih umetaka i termičkih prekida, kao i zaptivki od EPDM dvokomponentne sintetičke gume: čvrste i ćelijske.'
      ],
      [
        'Vrata napravljena u ovom sistemu su odlično rešenje i za energetski efikasnu zgradu.',
        'Mogućnost izbora iz širokog spektra RAL boja.',
        'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
      ],
      {
        description: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    ],
    material: [
      'Vrata u sistemu profila sa termoprekidom odlikuju se višim stepenom toplotne izolacije usled primene specijalnih izolacionih umetaka i termičkih prekida, kao i zaptivki od EPDM dvokomponentne sintetičke gume: čvrste i ćelijske. Vrata napravljena u ovom sistemu su odlično rešenje i za energetski efikasnu zgradu. Mogućnost izbora iz širokog spektra RAL boja. Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.',
      'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    ]
  },
  {
    name: ProductsDataInfo.entrancePvcDoor,
    nameHeader: ProductsDataInfo.entrancePvcDoor,
    imgCover: ProductsImages.entrancePvcDoorCoverImg,
    video: PreviewVideo.PvcUlaznaVrata,
    imgVideo: ProductsDataCoverImage.entrancePvcDoor,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Klasičan dizajn sa elegantno zaobljenim ivicama.',
        'Sistem ulaznih vrata sa ugradnom dubinom od 70 mm.',
        'Profil VEKA SOFTLINE 70 AD specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju dodatnu čvrstinu vratima.',
        'Dublja površina zastakljivanja omogućava upotrebu velikog izbora ispuna za vrata i time pruža brojne mogućnosti izbora.',
        'Termički odvojen prag garantuje perfektnu izolaciju čak i u donjem predelu vrata.'
      ],
      [
        'Ulazna vrata su najbitniji stilski element svake fasade i moraju zadovoljiti sve Vaše visoke zahteve. Oni moraju da apsolutno pouzdano funkcionišu, da Vas štite od vremenskih nepogoda i da pružaju najviši nivo sigurnosti. VEKA sistemi ulaznih vrata Vam ne samo zbog vrhunskog kvaliteta profila mogu pružiti sve to.',
        'Pomoću dodatnog ojačanja, specijalnih okova i stakla se dodatno može povećati nivo sigurnosti i zaštita od provale. Neiscrpan asortiman oblika i kombinacija vrata – individualna i po Vašoj meri – ispuniće i Vaše najviše zahteve. ',
        'Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane, modernih neobičnih linija ili jednostavno elegantne - VEKA sistemi ulaznih vrata su idealno rešenje za najrazličitije situacije ugradnje kako pri novogradnji tako i za renoviranje.'
      ],
      {
        description: 'Profil VEKA SOFTLINE 70 AD profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: ProductsDataDecorsImages.nussbaumDoor
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: ProductsDataDecorsImages.goldenOakZlatniDoor
          },
          {
            text: 'Antracit (tamno siva)',
            image: ProductsDataDecorsImages.antracitDoor
          },
          {
            text: 'Mahagoni',
            image: ProductsDataDecorsImages.mahagoniDoor
          }
        ]
      }
    ],
    material: [
      'Sistem ulaznih vrata sa ugradnom dubinom od 70 mm opciono 82mm. U standarnoj varijanti usklađeno za dvostruko termo-staklo ili ispuna ukrasnim panelima. Debljina zida profila 3mm, u skladu sa najvišim RAL standardom kvaliteta (prema DIN EN 12608, klasa A). Profil specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju izuzetnu čvrstinu vratima.',
      'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    ],
    panels: [
      {
        name: 'Inox',
        image: Panels.inox,
        text: 'Aluminijumski paneli sa INOX aplikacijama.'
      },
      {
        name: 'Elegant',
        image: Panels.elegant,
        text: 'Mogu biti sastavljeni od dve aluminijumske table sa različitim bojama, aplikacije mogu biti od aluminijuma ili inoxa. Najčešće staklo koje se ugradjuje je flot + saten.'
      },
      {
        name: 'Aluminium',
        image: Panels.aluminium,
        text: 'Aluminijumski panels sa kornizama.'
      }
    ]
  },
  {
    name: ProductsDataInfo.partitionPvcDoor,
    nameHeader: ProductsDataInfo.partitionPvcDoor,
    imgCover: ProductsImages.partitionPvcDoorCoverImg,
    video: PreviewVideo.PvcPregradnaVrata,
    imgVideo: ProductsDataCoverImage.partionPvcDoor,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Klasičan dizajn sa elegantno zaobljenim ivicama.',
        'Sistem pegradnih vrata sa ugradnom dubinom od 70 mm.',
        'Profil VEKA SOFTLINE 70 AD specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju dodatnu čvrstinu vratima.'
      ],
      [
        'Ulazna vrata su najbitniji stilski element svake fasade i moraju zadovoljiti sve Vaše visoke zahteve. Oni moraju da apsolutno pouzdano funkcionišu, da Vas štite od vremenskih nepogoda i da pružaju najviši nivo sigurnosti. VEKA sistemi ulaznih vrata Vam ne samo zbog vrhunskog kvaliteta profila mogu pružiti sve to.',
        'Pomoću dodatnog ojačanja, specijalnih okova i stakla se dodatno može povećati nivo sigurnosti i zaštita od provale. Neiscrpan asortiman oblika i kombinacija vrata – individualna i po Vašoj meri – ispuniće i Vaše najviše zahteve.',
        'Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane, modernih neobičnih linija ili jednostavno elegantne - VEKA sistemi ulaznih vrata su idealno rešenje za najrazličitije situacije ugradnje kako pri novogradnji tako i za renoviranje.'
      ],
      {
        description: 'Profil VEKA SOFTLINE 70 AD profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: ProductsDataDecorsImages.nussbaumDoor
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: ProductsDataDecorsImages.goldenOakZlatniDoor
          },
          {
            text: 'Antracit (tamno siva)',
            image: ProductsDataDecorsImages.antracitDoor
          },
          {
            text: 'Mahagoni',
            image: ProductsDataDecorsImages.mahagoniDoor
          }
        ]
      }
    ],
    material: [
      'Sistem pregradnih vrata sa ugradnom dubinom od 70 mm. U standarnoj varijanti usklađeno za dvostruko termo-staklo ili ispuna panelima. Debljina zida profila 3mm, u skladu sa najvišim RAL standardom kvaliteta (prema DIN EN 12608, klasa A). Profil specijalno namenjen za izradu vrata, sa ojačanim čelicima u krilu, sa specijalnim ugaonim spojnicama koje omogućavaju jedinstvenost vara i daju izuzetnu čvrstinu vratima.',
      'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa više elemenata za velike kuće, klasičnog ili modernog stila, sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    ]
  },
  {
    name: ProductsDataInfo.profileWithoutThermalBreakAluminiumDoor,
    nameHeader: ProductsDataInfo.profileWithoutThermalBreakAluminiumDoor,
    imgCover: ProductsImages.profileWithoutThermalBreakAluminiumDoorCoverImg,
    imgVideo: ProductsDataCoverImage.profileWithoutThermalBreakAluminiumDoor,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Moderan i stabilan aluminijumski profil omogućava postizanje efekta istog nivoa rama i krila spolja nakon zatvaranja vrata.',
        'Mogućnost prilagođavanja enterijera kao rezultat širokog spektra RAL boja.',
        'Sistem hladnog profila je kompatibilan sa ostalim aluminijumskim sistemima iz Danito ponude.'
      ],
      [
        'Sistem omogućava primenu raznih ispuna staklenih kao i ukrasnih panela.',
        'Nepropusnost se obezbeđuje primenom specijalnih zaptivki od sintetičke EPDM gume. ',
        'Visoka udobnost upotrebe i minimalna potreba za održavanjem, kao i dugi rok trajanja.',
        'U ponudi su vrata dostupna sa niskim pragom ili bez njega.',
        'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
      ],
      {
        description: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    ],
    material: [
      'Moderan i stabilan aluminijumski profil omogućava postizanje efekta istog nivoa rama i krila spolja nakon zatvaranja vrata. Mogućnost prilagođavanja enterijera kao rezultat širokog spektra RAL boja. Sistem hladnog profila je kompatibilan sa ostalim aluminijumskim sistemima iz Danito ponude.',
      'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    ],
    panels: [
      {
        name: 'Inox',
        image: Panels.inox,
        text: 'Aluminijumski paneli sa INOX aplikacijama.'
      },
      {
        name: 'Elegant',
        image: Panels.elegant,
        text: 'Mogu biti sastavljeni od dve aluminijumske table sa različitim bojama, aplikacije mogu biti od aluminijuma ili inoxa. Najčešće staklo koje se ugradjuje je flot + saten.'
      },
      {
        name: 'Aluminium',
        image: Panels.aluminium,
        text: 'Aluminijumski panels sa kornizama.'
      }
    ]
  },
  {
    name: ProductsDataInfo.profileWithThermalBreakAluminiumDoor,
    nameHeader: ProductsDataInfo.profileWithThermalBreakAluminiumDoor,
    imgCover: ProductsImages.profileWithThermalBreakAluminiumDoorCoverImg,
    imgVideo: ProductsDataCoverImage.profileWithThermalBreakAluminiumDoor,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Vrata u sistemu profila sa termoprekidom odlikuju se višim stepenom toplotne izolacije usled primene specijalnih izolacionih umetaka i termičkih prekida, kao i zaptivki od EPDM dvokomponentne sintetičke gume: čvrste i ćelijske.'
      ],
      [
        'Vrata napravljena u ovom sistemu su odlično rešenje i za energetski efikasnu zgradu. Mogućnost izbora iz širokog spektra RAL boja.',
        'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
      ],
      {
        description: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    ],
    material: [
      'Vrata u sistemu profila sa termoprekidom odlikuju se višim stepenom toplotne izolacije usled primene specijalnih izolacionih umetaka i termičkih prekida, kao i zaptivki od EPDM dvokomponentne sintetičke gume: čvrste i ćelijske. Vrata napravljena u ovom sistemu su odlično rešenje i za energetski efikasnu zgradu. Mogućnost izbora iz širokog spektra RAL boja. Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.',
      'Neiscrpan asortiman oblika i kombinacija vrata – individualna i po meri – ispuniće i najviše zahteve. Jednokrilna, dvokrilna ili vrata sa ispunom od stakla ili ukrasnih panela, sa jednim ili više elemenata sa strane.',
      'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    ],
    panels: [
      {
        name: 'Inox',
        image: Panels.inox,
        text: 'Aluminijumski panels sa INOX aplikacijama.'
      },
      {
        name: 'Elegant',
        image: Panels.elegant,
        text: 'Mogu biti sastavljeni od dve aluminijumske table sa različitim bojama, aplikacije mogu biti od aluminijuma ili inoxa. Najčešće staklo koje se ugradjuje je flot + saten.'
      },
      {
        name: 'Aluminium',
        image: Panels.aluminium,
        text: 'Aluminijumski panels sa kornizama.'
      }
    ]
  },
  {
    name: ProductsDataInfo.doorWithHiddenWingAluminiumDoor,
    nameHeader: ProductsDataInfo.doorWithHiddenWingAluminiumDoor,
    imgCover: ProductsImages.doorWithHiddenWingAluminiumDoorCoverImg,
    video: PreviewVideo.VrataSkrivenioKrilo,
    imgVideo: ProductsDataCoverImage.doorWithHiddenWingAluminiumDoor,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Vrata sa skrivenim krilom mogu se koristiti i na pojedinačnim zgradama i na aluminijumskim fasadama.',
        'Povećana toplotna izolacija postignuta je primenom dodatne komore u termičkom prekidu.',
        'Veoma dobar koeficijent propusnosti toplote (U-vrednost) zahvaljujući primeni termičkih prekida.',
        'Veliki izbor boja u standardnoj paleti boja, omogućava da se zadovolje i najzahtevniji klijenti'
      ],
      [
        'Oblik profila omogućava dobijanje tankih i izdržljivih konstrukcija prozora i vrata.',
        'Nepropusnost je obezbeđena primenom specijalnih zaptivki od dvokomponentne EPDM sintetičke gume: čvrste i celularne, što garantuje otpornost na starenje tokom godina eksploatacije kao i odličnu toplotnu izolaciju.'
      ],
      {
        description: 'Mogućnost izbora iz širokog spektra RAL boja. Širok raspon debljina punjenja garantuje mogućnost primene bilo kojih standardnih i nestandardnih stakala i ukrasnih panela.'
      }
    ],
    material: [
      'Vrata sa skrivenim krilom mogu se koristiti i na pojedinačnim zgradama i na aluminijumskim fasadama. Povećana toplotna izolacija postignuta je primenom dodatne komore u termičkom prekidu. Veoma dobar koeficijent propusnosti toplote (U-vrednost) zahvaljujući primeni termičkih prekida. Veliki izbor boja u standardnoj paleti boja, omogućava da se zadovolje i najzahtevniji klijenti',
      'Mogućnost izbora iz širokog spektra RAL boja. Širok raspon debljina punjenja garantuje mogućnost primene bilo kojih standardnih i nestandardnih stakala i ukrasnih panela.',
      'Okovi visoke klase koji se primenjuju u aluminijumskim vratima pružaju odličnu zaštitu od provale.'
    ],
    panels: [
      {
        name: 'Premium',
        image: Panels.premium,
        text: 'Paneli iz PREMIUM kolekcije su pogodni za izradu vrata sa skrivenim krilom. Prilikom izrade, odnosno u proizvodnji, aluminijumski lim ukrasnog panela se lepi za krilo i time se dobija efekat skrivenog krila. Efekat skrivenog krila se,u stvari, odnosi na ravnomernu povrsinu ploce ukrasnog panela koja je integrisana na celokupnoj povrsini krila(ne vide se uglovi profila) i time se pospesuje vizuelni efekata.'
      }
    ]
  },
  {
    name: ProductsDataInfo.customSecurityDoor,
    nameHeader: ProductsDataInfo.customSecurityDoor,
    imgCover: ProductsImages.doorWithHiddenWingAluminiumDoorCoverImg,
    img: PreviewVideo.SigurnosnaVrataSlika,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Štok je izradjen od  čeličnih kutija 60x40/2.0mm.',
        'Krilo izradjeno od ramovske konstrukcije (kutija 50x30), spolja je ugradjen čelični lim 1,5mm sa vertikalnim ojačanjima od L profila.',
        'Ukupna debljina krila je 72mm.',
        'Krilo je okačeno na štok preko dve šarke Ø22 od punog metala sa aksijalnim ležajem.',
        'Izolacija je tvrdo presovana kamena vuna debljine 5cm, pruža optimalnu zvučnu i termičku zaštitu koja nosi vatrootpornu oznaku A1.',
        'Brava – Doro, sigurnosna sa Italijanskim cilindrom ISEO. Uz cilindar isporučuju se pet ključeva. Cilindar pokreće bravu koja zaključava u 4 tačke bočno, 2 tačke (gore/dole) + 3 šipa koja se nalaze na strani šarki i koja su fiksna.',
        'Okov – Hoppe (Nemačka); kvaka/kugla, nikl, špijunka širokougaona 180º.',
        'Završna obrada – krilo obostrano obloženo MDFom po 8mm u dekoru po izboru (u ponudi 7 dezena).',
        'Štok,prag i svi vidni metalni delovi plastificirani u boju po izboru (boja u prahu nanosi se na metal elektrostatičkim putem, a zatim se vrši pečenje na temperature polimerizacije).'
      ],
      [
        'Sigurnosna vrata domaće proizvodnje.',
        'Izrađuje se isključivo po zahtevanim merama.',
        'Dvostruko dihtovanje i odlična termo i zvučna izolovanost od 40dB. Garancija na sigurnosna vrata – 24 meseca.'
      ],
      {
        description: 'Štok,prag i svi vidni metalni delovi plastificirani u boju po izboru (boja u prahu nanosi se na metal elektrostatičkim putem, a zatim se vrši pečenje na temperature polimerizacije). Završna obrada – krilo obostrano obloženo MDFom po 8mm u dekoru po izboru:',
        colors: [
          {
            text: 'Crna',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Wenge',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          },
          {
            text: 'Hrast natur',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          },
          {
            text: 'Hrast rover',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    ],
    material: [
      'Štok je izradjen od  čeličnih kutija 60x40/2.0mm. Krilo izradjeno od ramovske konstrukcije (kutija 50x30), spolja je ugradjen čelični lim 1,5mm sa vertikalnim ojačanjima  od L profila. Ukupna debljina krila je 72mm',
      'Završna obrada – krilo obostrano obloženo MDFom po 8mm u dekoru po izboru (u ponudi 7 dezena). Štok,prag i svi vidni metalni delovi plastificirani u boju po izboru (boja u prahu nanosi se na metal elektrostatičkim putem, a zatim se vrši pečenje na temperature polimerizacije).',
      'Brava – Doro, sigurnosna sa Italijanskim cilindrom ISEO. Uz cilindar isporučuju se pet ključeva. Cilindar pokreće bravu koja zaključava u 4 tačke bočno, 2 tačke (gore/dole) + 3 šipa koja se nalaze na strani šarki i koja su fiksna'
    ]
  },
  {
    name: ProductsDataInfo.insideBlinds,
    nameHeader: ProductsDataInfo.insideBlinds,
    imgCover: ProductsImages.pvcBlindsInsideBlindsCoverImg,
    imgVideo: ProductsDataCoverImage.insideBlinds,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Napravljene su od PVC kutije dimenzija: 15 i 20cm sa pvc ili aluminijumskim zastorom, aluminijumskom zavrsnom lamelom u koju je uvučena guma balonka(MO60) i aluminijumskim ili pvc vodjicama sa četkicama. '
      ],
      [
        'U kutijama se na zahtev kupca moze nalaziti i termoizolacija od stiropora.Veliki izbor drvo dekora ( zlatni hrast, mahagoni, orah...)'
      ],
      {
        description: 'Veliki izbor boja po RAL karti.'
      }
    ]
  },
  {
    name: ProductsDataInfo.outsideBlinds,
    nameHeader: ProductsDataInfo.outsideBlinds,
    imgCover: ProductsImages.aluminiumOutsideBlindsRoundedOutsideBlindsCoverImg,
    imgVideo: ProductsDataCoverImage.outsideBlinds,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Napravljene su od ALUMINIJUMSKE ekstrudirane kutije dimenzija: 14.5 i 18 cm sa aluminijumskim zastorom, aluminijumskom završnom lamelom u koju je uvučena guma balonka(MO60), aluminijumskim bočnim poklopcima i aluminijumskim vodjicama sa četkicama.'
      ],
      [
        'Uskoro!'
      ],
      {
        description: 'Veliki izbor boja po RAL karti.'
      }
    ]
  },
  {
    name: ProductsDataInfo.fundermaxFacadeFundermaxFacade,
    nameHeader: ProductsDataInfo.fundermaxFacadeFundermaxFacade,
    imgCover: ProductsImages.fundermaxFacadeFundermaxFacadeCoverImg,
    imgVideo: ProductsDataCoverImage.facade,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Dekorativne HPL COMPAKTNE fasadne ploce.',
        'Primenjive za fasade kao i za balkonske ograde'
      ],
      [
        'Veliki izbor standardnih formata kao I velika paleta dekora',
        'Mogucnost savijanja elemenata, jednostavnost obrade I montaze',
        'Visoka tvrdoca povrsine, visoka cvrstoca prilikom savijanja.',
        'Visoka hemijska I bioloska otpornost na udarce'
      ],
      {
        description: 'Izbor dekora zadovoljiće svačije zahteve i ukuse. Dekori se dele na kategorije poput onih sa metalnim ili prirodnim dezenom. Tako vaša fasada može izgledati kao da je optočena bakrom,ali i tako kao da je ušuškana u hrast ili bor. Na raspologanju su i živopisne jednoobrazne boje ploča koje su odličan izbor ukoliko želite da istaknete jedna deo objekata kao što su na primer, terase ili ograde. Žute, plave ili zelene ploče učiniće fasadu zanimljivom i koloritnom.'
      }
    ]
  },
  {
    name: ProductsDataInfo.ventilatedAlucobondFacadeVentilatedAlucobondFacade,
    nameHeader: ProductsDataInfo.ventilatedAlucobondFacadeVentilatedAlucobondFacade,
    imgCover: ProductsImages.ventilatedAlucobondFacadeVentilatedAlucobondFacadeCoverImg,
    imgVideo: ProductsDataCoverImage.facade,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Lagane, čvrste i izdržljive kompozitne ploče, sa višestrukom primenom, sastavljene od dve strane aluminijuma i jezgra od polietilena niske gustine (LD-PE) ili mineralnom jezgru visoke temperature ( FR ili A2 klase gorivosti).',
        'Ploče sa mineralnim jezgrom su klasifikovane kao vatrostalne i imaju A2 klasu gorivosti.',
        'Slojevi se ucvršćuju hemijskim i mehanickim postupcima, čime se dobija vrlo otporan materijal.'
      ],
      [
        'Ravnost površine, njegova čvrstina, odličan odnos njegove težine i težine otpora preporučuje Albond kao jedno od najefikasnijih tehničkih rešenja za spoljnu upotrebu.'
      ],
      {
        description: 'Ploče mogu biti jednostrano ili dvostrano obojene ; na zahtev - posebne boje iz RAL ili Pantone asortimana. Nudimo preko 20 boja koje su stalno na raspolaganju !!!.'
      }
    ]
  },
  {
    name: ProductsDataInfo.glassFacade,
    nameHeader: ProductsDataInfo.glassFacade,
    imgCover: ProductsImages.structuralGlassFacadeCoverImg,
    imgVideo: ProductsDataCoverImage.facade,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Staklene fasade predstavljaju samonoseći, u celini zastakljen i toplo izolovan tip fasadne konstrukcije od aluminijumskih i statički odabranih vertikalnih i horizontalnih profila. Vertikalni i horizontalni profili podrazumevaju višekomorne profile i mogu vršiti odvodnjavanje konstrukcije u tri ravni na osnovu preklapanja profila.'
      ],
      [
        'Kompleksnost staklenih površina predmetnog tipa fasada postavlja definisan uslov u pogledu izrade detaljne ponude širokog spektra aluminijumskih fasada, uključujući:',
        'Kontinualne fasade',
        'Polustrukturalne fasade',
        'Strukturalne fasade',
        'Spajder fasade'
      ],
      {
        description: 'Izbor stakla zadovoljiće svačije zahteve i ukuse.'
      }
    ]
  },
  {
    name: ProductsDataInfo.granitFacadeGranitFacade,
    nameHeader: ProductsDataInfo.granitFacadeGranitFacade,
    imgCover: ProductsImages.granitFacadeGranitFacadeCoverImg,
    imgVideo: ProductsDataCoverImage.facade,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Coverlam keramika je napravljena od prirodnih materijala : kvarcnog peska, gline i kamena. Izrađuju se tokom procesa glodanja, presovanja pri temperaturi od 1220 c u specijalnim hibridnim pećnicama.',
        'Materijal nudi visoke karakteristike mehaničke otpornosti na atmosferske agense, udarce i agresivne uslove, veoma je pogodna za širenje i otporna na mraz i sunčevo zračenje. Granit pruža mogućnost izrade svih formata ploča, raznih oblika i dimenzija, a sve prema zahtevu projektanta i investitora.'
      ],
      [
        'Coverlam fasadne ploče se proizvode pomoću napredne tehnologije pa kao rezultat toga imamo smanjenu debljinu i velike dimenzije sa visokom otpornošću na mehanička naprezanja, hemikalije, habanja, ogrebotine i duboke abrazije. Ploče su otporane na mraz, plesni i efekte UV zraka.'
      ],
      {
        description: 'Sva kreativnost Coverlama prikazana je u više od 130 tekstura.'
      }
    ]
  },
  {
    name: ProductsDataInfo.pvcVekaSlideSlidingSystem,
    nameHeader: ProductsDataInfo.pvcVekaSlideSlidingSystem,
    imgCover: ProductsImages.pvcVekaSlideSlidingSystemCoverImg,
    imgVideo: ProductsDataCoverImage.pvcVekaSlideSlidingSystem,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Izvrsna toplotna izolacija Uf = 1,6 W/(m²K).',
        'Debljina zastakljivanja i do 42 mm omogućava upotrebu trostrukog izolacionog stakla, a time se postiže optimalna vrednost Ud = 0,8 W/(m²K).'
      ],
      [
        "Dupli prekid termičkog mosta u pragu garantuje vrhunsku toplotnu izolaciju, kao i prag 'bez barijere', skoro u nivou sa podom (50 mm visine).",
        'Klasičan dizajn sa elegantno zaobljenim konturama.',
        'Mogućnost oplemenjivanja površine aluminijumskim oblogama. '
      ],
      {
        description: 'Standardni dekori za pvc profile kao i mogućnost izbora iz širokog spektra RAL boja koid varijante sa Alu oblogama.'
      }
    ],
    material: [
      'Izvrsna toplotna izolacija Uf = 1,6 W/(m²K). Debljina zastakljivanja i do 42 mm omogućava upotrebu trostrukog izolacionog stakla, a time se postiže optimalna vrednost Ud = 0,8 W/(m²K)',
      'Dostupni stakleni paketi do 42 mm. Jednokomorni staklopaket sa toplotnom propusnošću - Ug =1,0 V/(m2K) prema normi PN-EN674 u standardu. Mogućnost primene trostaklopaketa sa koeficijentom Ug = 0,5 V/(m2K) mogućnost primene stakala sa pojačanom zvučnom izolacijom, kaljenih, sigurnosnih, protivprovalnih, ukrasnih ili solarnih zaštitnih. Čelični pocinkovani odstojni okvir u standardnoj verziji, opciono Svisspacer Ultimate dostupan u različitim bojama.',
      'Podizanje i klizanje, dve tačke zaključavanja i mikro ventilacioni vijak u standardu; mogućnost izrade krila težine 400 kg.'
    ]
  },
  {
    name: ProductsDataInfo.aluUltraSlideSlidingSystem,
    nameHeader: ProductsDataInfo.aluUltraSlideSlidingSystem,
    imgCover: ProductsImages.aluUltraSlideSlidingSystemCoverImg,
    imgVideo: ProductsDataCoverImage.aluUltraSlideSlidingSystem,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Sistem sa povećanom sposobnošću termičke izolacije namenjen za projektovanje kliznih ili podizno-kliznih konstrukcija',
        'Klizne konstrukcije UG su namenjene za primenu kod stambenih objekata, pre svega u stanovima i javnim objektima.',
        'Sistem je prilagođen najnovijim zahtevima u pogledu termičke izolacije, estetike i bezbednosti: dostupne opcije sistema: UG verzija sa niskim pragom, UG – rešenje sa uglom 90°'
      ],
      [
        'Zahvaljujući svojim parametrima sistem Ultraglide omogućava projektovanje konstrukcija vrlo velikih dimenzija kliznih krila: maksimalne dimenzije konstrukcije koje je moguće izraditi u ovom sistemu su: visina krila Hs=3300 mm i širina krila Bs=3200 mm.',
        'Sistem Ultraglide omogućava konstruisanje velikih, a istovremeno i stabilnih prozora i kliznih vrata sa maksimalnom masom krila koja iznosi: 250 kg za kliznu varijantu i 400 kg za podizno-kliznu varijantu.'
      ],
      {
        description: 'Široki izbor boja – paleta RAL (Qualicoat 1518), strukturne boje, boje koje imitiraju drvo Aliplast Wood..',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    ]
  },
  {
    name: ProductsDataInfo.aluVgPlusSlidingSystem,
    nameHeader: ProductsDataInfo.aluVgPlusSlidingSystem,
    imgCover: ProductsImages.aluVgPlusSlideSlidingSystemCoverImg,
    imgVideo: ProductsDataCoverImage.aluVgPluslideSlidingSystem,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Trokomorni sistem namenjen za projektovanje kliznih vrata.',
        'Sistem sa termičkom izolacijom (termičke pregrade od materijala sa povećanom sposobnošću termičke izolacije)',
        'Opcije sistema: klizni i podizno-klizni',
        'Dostupno je rešenje monorail.'
      ],
      [
        'Dostupno je rešenje monorail.',
        'Ekstremno uzak lavirintni stubić, klizna krila i podizno-klizna krila – širina 34mm',
        'Moguće su kombinacije sa dva, tri, četiri i šest elemenata na bazi okvira sa dve ili tri šine',
        'Postoji mogućnost montaže sistema Flyscreen (Flyscreen sistem mreža protiv insekata)'
      ],
      {
        description: 'Široki izbor boja– paleta RAL (Qualicoat 1518), strukturne boje, boje koje imitiraju drvo Aliplast Wood Colour Effect (Qualideco PL-0001), anoda (Qualanod 1808), bikolor',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    ]
  },
  {
    name: ProductsDataInfo.pvcVekaSoftline7082InRowSlidingSystem,
    nameHeader: ProductsDataInfo.pvcVekaSoftline7082InRowSlidingSystem,
    imgCover: ProductsImages.pvcVekaSoftline7082InRowSlidingSystemCoverImg,
    imgVideo: ProductsDataCoverImage.pvcVekaSoftline7082InRowSlidingSystem,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Izvrsna toplotna izolacija: Uf = 1,4 W/(m2K)',
        'Profili kvaliteta klase A',
        'Debljina zastakljivanja i do 52 mm omogućava upotrebu trostrukog izolacionog stakla, a time se postiže optimalna vrednost Ud = 0,8 W/(m2K)'
      ],
      [
        'Dupli prekid termičkog mosta u pragu garantuje vrhunsku toplotnu izolaciju, kao i prag „bez barijere“, skoro u nivou sa podom (50 mm visine)',
        'Klasičan dizajn sa elegantno zaobljenim konturama',
        'Mogućnost oplemenjivanja površine aluminijumskim oblogama'
      ],
      {
        description: 'profil može biti u jednostranom i dvostranom dekoru. Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    ]
  },
  {
    name: ProductsDataInfo.aluInRowSlidingSystem,
    nameHeader: ProductsDataInfo.aluInRowSlidingSystem,
    imgCover: ProductsImages.aluInRowSlidingSystemCoverImg,
    imgVideo: ProductsDataCoverImage.InRowSlidingSystem,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Savremeni profili čine da je ovaj sistem vrata, u kombinaciji sa odgovarajućim ostakljenjem i energetski optimizovanim odstojnicima, veoma energetski efikasan. Dva ili tri nivoa zaptivanja između krila vrata i okvira osiguravaju vrlo dobru nepropusnost kada su zatvoreni.'
      ],
      [
        'Opcija naginjanja omogućava vam ventilaciju bez otvaranja vrata u potpunosti, što je vrlo važno sa bezbednosnog aspekta. Sigurnosno staklo ili zvučno izolirano staklo pružaju dodatnu sigurnost i udobnost po želji.'
      ],
      {
        description: 'Široki izbor boja – paleta RAL (Qualicoat 1518), strukturne boje, boje koje imitiraju drvo Aliplast Wood..',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    ]
  },
  {
    name: ProductsDataInfo.pvcAccordionSlidingSystems,
    nameHeader: ProductsDataInfo.pvcAccordionSlidingSystems,
    imgCover: ProductsImages.pvcAccordionSlidingSystemsCoverImg,
    imgVideo: ProductsDataCoverImage.pvcAccordionSlidingSystems,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Harmonika vrata je termički neizolovani sistem harmonika vrata sa pogonom sa gornje strane i pogodan za standardne i velike konstrukcije. Nudi izdržljiva i elegantna rešenja koja se primenjuju na srednje i vrhunske projekte kao što su luksuzni objekti, poslovne zgrade, konferencijske centri, hoteli, restorani i mnogi drugi.'
      ],
      [
        'Jednostavna obrada i montaža.',
        'Visoke performanse u pogledu otpornosti na vetar, propustljivost vazduha i vodonepropustljivost.',
        'Jednostavna obrada i ugradnja velikih dimenzija do visine 2,8 m i 125 kg po otvoru.',
        'Čvrsta struktura sa besprekornom i dugotrajnom operabilnošću.'
      ],
      {
        description: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    ]
  },
  {
    name: ProductsDataInfo.aluSmartiaM9800AccordionSlidingSystems,
    nameHeader: ProductsDataInfo.aluSmartiaM9800AccordionSlidingSystems,
    imgCover: ProductsImages.aluSmartiaM9800AccordionSlidingSystemsCoverImg,
    imgVideo: ProductsDataCoverImage.aluSmartiaM9800AccordionSlidingSystems,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'SMARTIA M19800 je termički izolovani sistem harmonika vrata sa pogonom na vrhu i pogodan za standardne i velike konstrukcije. Nudi izdržljiva i elegantna rešenja koja se primenjuju na srednje i vrhunske projekte kao što su luksuzni objekti, poslovne zgrade, konferencijske centri, hoteli, restorani i mnogi drugi.'
      ],
      [
        'Velike dimenzije do 2.8 m visine i 125 kg po krilu',
        'Čvrsta struktura sa besprekornom i dugotrajnom operabilnošću',
        'Visoka termička izolacija i ušteda energije',
        'Visoke performanse u pogledu otpornosti na vetar, propustljivost vazduha i vodonepropustljivost',
        'Jednostavna obrada i montaža'
      ],
      {
        description: 'Mogućnost izbora iz širokog spektra RAL boja.'
      }
    ],
    material: [
      'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    ]
  },
  {
    name: ProductsDataInfo.aluSmartiaM19800AccordionSlidingSystems,
    nameHeader: ProductsDataInfo.aluSmartiaM19800AccordionSlidingSystems,
    imgCover: ProductsImages.aluSmartiaM19800AccordionSlidingSystemsCoverImg,
    imgVideo: ProductsDataCoverImage.aluSmartiaM19800AccordionSlidingSystems,
    optionHeaders: ['OPIS', 'PREDNOSTI', 'DEKORI'],
    options: [
      [
        'Sedmokomorni štok, šestokomorno krilo, sa čeličnim ojačanjima, sa tri dihtung gume.',
        'Energetska efikasnost prve klase: prozori za kuće sa niskom potrošnjom energije kao i za pasivne kuće.',
        'Vrhunski kvalitet profila debljine 3 mm.',
        'Široka paleta boja dekora profila jednostranog i dvostranog dekora omogućava svaki dizajn enterijera.',
        'Koristi troslojni paket termopan stakla ispunjen argonom.',
        'Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.',
        'Dodatna srednja guma, neprekidno postavljena duž obima rama prozora  pouzdano štiti i od niskih i od visokih temperatura, promaje i vlage.'
      ],
      [
        'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.',
        'Harmonično se uklapa u sve građevinske stilove, od moderne novogradnje do saniranih starih objekata.',
        'Mogućnost odabira svih boja iz RAL - palete upotrebom aluminijumskih - obloga..',
        'Mogućnost oplemenjivanja površine profila sa više od 50 boja i rustikalnih tekstura/dezena, kao i aluminijumskim oblogama.'
      ],
      {
        description: 'Veka 82 profil može biti u jednostranom i dvostranom dekoru.  Pored velikog broja dekora izdvajamo standard dekore koji su trenutno u trendu i sa najboljom cenom.',
        colors: [
          {
            text: 'Nussbaum (orah)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Golden Oak (svetli hrast)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/bialy-fx.jpg'
          },
          {
            text: 'Antracit (tamno siva)',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/winchester_kk.jpg'
          },
          {
            text: 'Mahagoni',
            image: 'https://www.drutex.eu/media/_upload/kolory/okleiny/szary-kwarcytowy.jpg'
          }
        ]
      }
    ],
    material: [
      'Inovativni višekomorni sistem osnovne ugradne dubine od 82mm za vrhunsku toplotnu izolaciju.Koeficijent prolaska toplote čak i do Uw = 0,67 W/(m²K) upotrebom termo –trostrukog stakla sa Ug = 0,4 W/(m²K). Rastojanje prozorskih stakala od 28 mm smanjuje pojavu toplotnog mosta. Tri nivoa zaptivanja pouzdano štite i od niskih i od visokih temperatura, promaje i vlage. Vrhunski VEKA profils u skladu sa najvišim RAL standardom kvaliteta – klasa A prema DIN EN 12608. Mogućnost odabira svih boja iz RAL - palete upotrebom al - obloga.',
      'Maksimalna debljina zastakljenja do 48 mm. Staklopaket 4/16/4/16/4 sa toplotnom propusnošću Ug = 0,5 V/(m2K) u standardu. Mogućnost nanošenja stakla sa pojačanom zvučnom izolacijom, kaljeno, sigurnosno, protivprovalno, ukrasno, solarno zaštitno.',
      'Koristimo najkvalitetniji nemacki okov renomiranog proizvođača ROTO, koji osigurava kvalitetno zatvaranje i poseduje veći stepen protivprovalne zaštite.'
    ]
  },
  {
    name: ProductsDataInfo.solomaticVenetians,
    nameHeader: ProductsDataInfo.solomaticVenetians,
    imgCover: ProductsImages.solomaticVenetiansCoverImg,
    imgVideo: ProductsDataCoverImage.solomaticVenetians,
    optionHeaders: ['OPIS', 'PREDNOSTI'],
    options: [
      [
        'Fasadne roletne su savršeno rešenje koje štiti prostorije pri primeni velikih zastakljivanja.',
        'Tehnicki detalji',
        'beskonačna regulacija ugla nagiba lamela',
        'Somfi motori kao standard sa funkcijom preopterećenja',
        'detekcijom prepreka i opcijom upravljanja pomoću pametnog telefona ili tableta',
        'mogućnost primene vanredne kontrole koja predstavlja važnu zaštitu od požara',
        'letvice širine 80 mm (C 80) sa uvijenim stranama',
        'širok spektar boja letvica',
        'primena skrivenih ili samonosećih vodilica',
        'proizvod je dostupan u fasadnom ili montažnom sistemu.'
      ],
      [
        'Fasadne vezice su savršeno rešenje koje štiti prostorije od preteranog sunčevog zračenja.',
        'Osiguravaju veću privatnost kao i značajno smanjenje računa za struju za klimatizaciju.',
        'Mogućnost povezivanja sa meteorološkim stanicama što značajno povećava udobnost korišćenja..',
        'U skladu sa aktuelnim arhitektonskim trendovima koji se opredeljuju za veliko zastakljivanje.',
        'Proizvod se može koristiti u postojećim zgradama i zgradama u izgradnji.',
        'Mogućnost integracije sa pametnim kontrolnim sistemima koji omogućavaju upravljanje njima pomoću tableta ili pametnog telefona.'
      ]
    ]
  }
]

export type TActionEvent = {
    type:
        typeof SELECTED_ITEM
        | typeof GO_BACK
        | typeof CLEAR_STATE
        | typeof SET_SELECTED_TIPS
        | typeof SET_SELECTED_PAGE;
    payload?:
        undefined
        | string
        | TStateProducts
        | TProductData
        | ProductsSubCategory;
}
