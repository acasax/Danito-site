import { CLEAR_STATE, GO_BACK, SELECTED_ITEM, SET_SELECTED_TIPS } from './types'

export type TStateProducts = {
    data: TProductData[],
    selectedItems: TProductData[],
    selectedItem: string,
    flexDirection: string,
    productSectionData: TProductSectionData[],
    tipsData: TTipsData[],
    selectedTip: TTipsData
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
  window: require('constants/img/imgProduct/window.png').default,
  door: require('constants/img/imgProduct/door.png').default,
  blinds: require('constants/img/imgProduct/roletne.png').default,
  solomaticVenetians: require('constants/img/imgProduct/solomaticVenecijaneri.png').default,
  facade: require('constants/img/imgProduct/fasadaPVC.png').default,
  slidingSystems: require('constants/img/imgProduct/terasniSistemi.png').default
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
    insideBlinds = 'UNUTRAŠNJE ROLETNE',
    outsideBlinds = 'SPOLJAŠNJE ROLETNE',

    /** SubCategory solomaticVenetians */
    outsideSolomaticVenetians = 'SPOLJNI VENECIJANERI',
    underTheFacadeSolomaticVenetians = 'PODFASADNI VENECIJANERI',

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
  pvcWindow: require('constants/img/imgProduct/windowPVC.png').default,
  woodAluminumWindow: require('constants/img/imgProduct/windowWOODALUMINIUM.png').default,
  aluminumWindow: require('constants/img/imgProduct/windowALUMINIUM.png').default,

  /** SubCategory door */
  pvcDoor: require('constants/img/imgProduct/doorPVC.png').default,
  aluminumDoor: require('constants/img/imgProduct/doorALUMINIUM.png').default,
  securityDoor: require('constants/img/imgProduct/doorWOOD.png').default,

  /** SubCategory blinds */
  insideBlinds: require('constants/img/imgProduct/roletneAluminium.png').default,
  outsideBlinds: require('constants/img/imgProduct/roletnePvc.png').default,

  /** SubCategory facade */
  fundermaxFacade: require('constants/img/imgProduct/fasadaPVC.png').default,
  ventilatedAlucobondFacade: require('constants/img/imgProduct/fasadaPVC.png').default,
  glassFacade: require('constants/img/imgProduct/fasadaPVC.png').default,
  graniteFacade: require('constants/img/imgProduct/fasadaPVC.png').default,

  /** SubCategory slidingSystems */
  liftingSlidingSystems: require('constants/img/imgProduct/terasePvc.png').default,
  inRowSlidingSystems: require('constants/img/imgProduct/teraseDrvo.png').default,
  accordionSlidingSystems: require('constants/img/imgProduct/teraseAluminium.png').default
}

export enum ProductsDataInfo {
    /** Products for Category windows SubCategory pvc Windows  */
    veka70 = 'VEKA 70',
    veka82 = 'VEKA 82',

    /** Products for Category windows SubCategory wood Windows */

    /** Products for Category windows SubCategory aluminium Windows */
    aluminiumWindows1 = 'PROFIL BEZ TERMO PREKIDA',
    aluminiumWindows2 = 'PROFIL SA TERMOPREKIDOM',
    aluminiumWindows3 = 'ALUMINIUMSKI PROZOR 3',
    aluminiumWindows4 = 'ALUMINIUMSKI PROZOR 4',

    /** Products for Category windows SubCategory wood Aluminium Windows */
    woodAluminiumWindows1 = 'ALUMINIUM DRVO PROZORI',

    /** Products for Category doors SubCategory pvc door */
    entrancePvcDoor = 'ULAZNA VRATE',
    partitionPvcDoor = 'PREGRADNA VRATA',

    /** Products for Category doors SubCategory aluminium door */
    profileWithoutThermalBreakAluminiumDoor = 'PROFIL BEZ TERMO PREKIDA',
    profileWithThermalBreakAluminiumDoor = 'PROFIL SA TERMO PREKIDOM',
    doorWithHiddenWingAluminiumDoor = 'VRATA SA SKRIVENIM KRILOM',

    /** Products for Category doors SubCategory security door */
    customSecurityDoor = 'SIGURNOSNA VRATA',

    /** Products for Category blinds SubCategory inside Blinds */
    aluminiumThermoBlindsInsideBlinds = 'ALU TERMO ROLENTE',
    pvcBlindsInsideBlinds = 'PVC ROLETNE',

    /** Products for Category blinds SubCategory outsideBlinds */
    aluminiumOutsideBlindsRoundedOutsideBlinds = 'ALU SPOLJNE ROLETNE ZAOBLJENE',
    aluminiumOutsideBlindsPentagonalOutsideBlinds = 'ALU SPOLJNE ROLETNE PETOUGAONE',
    subFacadeAluminiumBlinds = 'ALU PODFASADNE ROLETNE',

    /** Products for Category facade SubCategory fundermax facade */
    fundermaxFacadeFundermaxFacade = 'FUNDERMAX FASADE',

    /** Products for Category facade SubCategory ventilated alucobond facade */
    ventilatedAlucobondFacadeVentilatedAlucobondFacade = 'VENTILISANE ALUCOBOND FASADE',

    /** Products for Category facade SubCategory glass facade */
    structuralGlassFacade = 'STRUKTURNA',
    standardGlassFacade = 'STANDARDNA',

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
  {
    name: ProductsDataInfo.woodAluminiumWindows1,
    parent: ProductsSubCategory.woodAluminumWindow,
    parentPath: `${ProductsCategory.window}/${ProductsSubCategory.woodAluminumWindow}/`
  },
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
    name: ProductsDataInfo.woodAluminiumWindows1,
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
    name: ProductsSubCategory.insideBlinds,
    parent: ProductsCategory.blinds,
    parentPath: `${ProductsCategory.blinds}/`,
    image: ProductsSubCategoryImages.insideBlinds
  },

  {
    name: ProductsDataInfo.aluminiumThermoBlindsInsideBlinds,
    parent: ProductsSubCategory.insideBlinds,
    parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.insideBlinds}/`
  },
  {
    name: ProductsDataInfo.pvcBlindsInsideBlinds,
    parent: ProductsSubCategory.insideBlinds,
    parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.insideBlinds}/`
  },
  {
    name: ProductsSubCategory.outsideBlinds,
    parent: ProductsCategory.blinds,
    parentPath: `${ProductsCategory.blinds}/`,
    image: ProductsSubCategoryImages.outsideBlinds
  },
  {
    name: ProductsDataInfo.aluminiumOutsideBlindsRoundedOutsideBlinds,
    parent: ProductsSubCategory.outsideBlinds,
    parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.outsideBlinds}/`
  },
  {
    name: ProductsDataInfo.aluminiumOutsideBlindsPentagonalOutsideBlinds,
    parent: ProductsSubCategory.outsideBlinds,
    parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.outsideBlinds}/`
  },
  {
    name: ProductsDataInfo.subFacadeAluminiumBlinds,
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
    name: ProductsDataInfo.structuralGlassFacade,
    parent: ProductsSubCategory.glassFacade,
    parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.glassFacade}/`
  },
  {
    name: ProductsDataInfo.standardGlassFacade,
    parent: ProductsSubCategory.glassFacade,
    parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.glassFacade}/`
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
  window: require('constants/img/landingPageCategoryPart/prozori.png').default,
  door: require('constants/img/landingPageCategoryPart/vrata.png').default,
  facade: require('constants/img/landingPageCategoryPart/fasade.png').default,
  slidingSystems: require('constants/img/landingPageCategoryPart/klizni-sistemi.png').default
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
          ProductsDataInfo.aluminiumWindows2,
          ProductsDataInfo.woodAluminiumWindows1
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
          ProductsDataInfo.structuralGlassFacade,
          ProductsDataInfo.standardGlassFacade
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
export type TTipsData = {
    coverImg: string | any,
    header: string,
    date: Date | string,
    landingPageText: string,
    text: string[]
}

export const TipsImages = {
  tip1: require('constants/img/imgProduct/ImgPageProduct/WindowImg4.jpg').default,
  tip2: require('constants/img/imgProduct/ImgPageProduct/WindowImg5.jpg').default,
  tip3: require('constants/img/imgProduct/ImgPageProduct/WindowImg6.jpg').default
}

export const TipsInitData = [
  {
    coverImg: TipsImages.tip1,
    header: 'How to choose the best door?',
    date: new Date().toDateString(),
    landingPageText:
            'Front door is not just a key technical element of the building, but also the showcase of the house. Therefore, it must be pretty, and at the same time it should fulfil our expectations regarding sound insulation, energy efficiency and safety.',
    text: [
      'DRUTEX has been one of the best-known Polish brands for ages, trusted by clients and business partners worldwide. The position has been confirmed by the Superbrands title, given by a globally famous organization that for 25 years has been awarding the strongest most trusted brands in the world. The research was conducted in over 90 countries,  selecting the winners in each market and presenting their success stories. DRUTEX has gained the title for the seventh time.',
      '- This is the best confirmation that consistent and coherent building of the DRUTEX brand position in Poland and abroad brings the expected results. Today DRUTEX stands for top quality and innovation, as well as business credibility. In the window and door woodwork sector we are among  European leaders. We offer top quality products, which is appreciated by clients all over the world – says Leszek Gierszewski, the founder and president – DRUTEX is also involved in CSR actions, supporting various initiatives i.a. contributing to healthcare. It is appreciated and noticed. ',
      'This year, the 15th edition of the Superbrands contest was based on a wide consumer survey conducted among 15 thousand respondents, as well as the opinion of Brands Council experts. They evaluated the market position of the brand in Poland, the quality of products or services, the quality of B2B relations, as well as innovation and CSR actions. They also took into account the development dynamics of the brand and its strength in the specific category.',
      'DRUTEX received the title on 30 September, during a gala in Warsaw.'
    ]
  },
  {
    coverImg: TipsImages.tip2,
    header: 'Are you tired of noise from the street or the yard? Choosing the right windows will help!',
    date: new Date().toDateString(),
    landingPageText:
            'Drutex SA yet again has been awarded the European Medal in the prestigious contest held by Business Centre Club. This time the leading European producer of woodwork was appreciated for the MB-86 SI aluminum doors.',
    text: [
      'This is 32nd edition of the initiative organized by BCC under the aegis of the European Economic and Social Committee which aims at awarding and promoting top-quality products and services offered by companies operating in Poland. This year Drutex received the award for the MB-86 SI aluminum doors. Previously, the Bytów company was awarded i.a. for PVC windows, Iglo-HS lift and slide doors, as well as innovative system of roller shutters. ',
      '- We are delighted to have received the award, especially that we received it once again. It proves that the strategy that we have adopted, based on investment in top quality and cutting-edge technology, works out perfectly. As a result, we consistently strengthen our market position, winning over clients all over the world – points out Adam Leik, marketing director at Drutex SA. ',
      'The doors awarded in this year’s BCC contest are manufactured in the MB-86 SI system. They are a product for the 21st century. They may be used both in individual development, as well as aluminum facades, and thanks to their enhanced thermal insulation they may be dedicated to energy efficient building.  Their additional advantage is the color range  and wide variety of panel patterns. All external doors offered by Drutex may be equipped with smart access control system that allows to open and lock them with e.g. a smartphone, a tablet or a fingerprint reader. ',
      'Aluminum windows and doors have been produced by Drutex SA since 1999. The company has been investing in cutting-edge technology for years and just last year it launched i.a. Poland’s most modern powder paint shop for aluminum woodwork which is also one of the most modern in the world. As a result, it is possible to guarantee top-quality products and optimum speed of order execution. ',
      'The European Medals awards ceremony took place on 23 June in the Lubomirski Palace in Warsaw.'
    ]
  },
  {
    coverImg: TipsImages.tip3,
    header: 'A good window is not all. How about the installation?',
    date: new Date().toDateString(),
    landingPageText:
            ' DRUTEX yet again has been awarded the Golden Construction Brand of the Year in the ‘elevation windows’ category. The title is given basing on national surveys conducted among construction companies in Poland.',
    text: [
      'The award given to Drutex is a confirmation of top quality of the products, as well as their reputation and popularity with professionals. The Golden Construction Brand ranking has therefore an exceptionally unique and impartial character, and it has been considered to be the most reliable in Poland for many years.',
      '- We are happy to have received the award yet again, especially that it is given, in fact, by numerous professionals in the construction industry. It is a confirmation that investment in cutting-edge technology and top quality bring the expected results, and, above all, clients’ satisfaction and trust all over the world. It has always been our priority and it determines other investment projects that we carry out – says Leszek Gierszewski, the president and founder of Drutex SA.',
      'It is worth pointing out that the Bytów company, having launched the most cutting edge paint shop for aluminum woodwork in Poland, also started the construction of an impressive office building and high-bay warehouse. Completion of both investments is planned for 2021, and this year the company will launch the construction of the biggest production hall covering over',
      '7,5 ha. Apart from that, Drutex constantly invests in the innovative machine park and its own transport fleet consisting of over 400 vehicles. 2020, despite the pandemic, was a record year for the Bytów tycoon. The company – apart the above mentioned investments – for the first time ever exceeded PLN 1 billion of  sales revenue, hiring at the same time extra 550 staff. ',
      'The ranking of the Construction Brand of the Year has been conducted by ASM ( Market Research and Analysis Centre) for the 17th time. This year ca. 2.6 Polish companies participated in the survey. The award ceremony took place on 10 June at the Windsor Hotel in Jachranka.'
    ]
  },
  {
    coverImg: TipsImages.tip1,
    header: 'How to choose the best door?',
    date: new Date().toDateString(),
    landingPageText:
            'Front door is not just a key technical element of the building, but also the showcase of the house. Therefore, it must be pretty, and at the same time it should fulfil our expectations regarding sound insulation, energy efficiency and safety.',
    text: [
      'DRUTEX has been one of the best-known Polish brands for ages, trusted by clients and business partners worldwide. The position has been confirmed by the Superbrands title, given by a globally famous organization that for 25 years has been awarding the strongest most trusted brands in the world. The research was conducted in over 90 countries,  selecting the winners in each market and presenting their success stories. DRUTEX has gained the title for the seventh time.',
      '- This is the best confirmation that consistent and coherent building of the DRUTEX brand position in Poland and abroad brings the expected results. Today DRUTEX stands for top quality and innovation, as well as business credibility. In the window and door woodwork sector we are among  European leaders. We offer top quality products, which is appreciated by clients all over the world – says Leszek Gierszewski, the founder and president – DRUTEX is also involved in CSR actions, supporting various initiatives i.a. contributing to healthcare. It is appreciated and noticed. ',
      'This year, the 15th edition of the Superbrands contest was based on a wide consumer survey conducted among 15 thousand respondents, as well as the opinion of Brands Council experts. They evaluated the market position of the brand in Poland, the quality of products or services, the quality of B2B relations, as well as innovation and CSR actions. They also took into account the development dynamics of the brand and its strength in the specific category.',
      'DRUTEX received the title on 30 September, during a gala in Warsaw.'
    ]
  },
  {
    coverImg: TipsImages.tip2,
    header: 'Are you tired of noise from the street or the yard? Choosing the right windows will help!',
    date: new Date().toDateString(),
    landingPageText:
            'Drutex SA yet again has been awarded the European Medal in the prestigious contest held by Business Centre Club. This time the leading European producer of woodwork was appreciated for the MB-86 SI aluminum doors.',
    text: [
      'This is 32nd edition of the initiative organized by BCC under the aegis of the European Economic and Social Committee which aims at awarding and promoting top-quality products and services offered by companies operating in Poland. This year Drutex received the award for the MB-86 SI aluminum doors. Previously, the Bytów company was awarded i.a. for PVC windows, Iglo-HS lift and slide doors, as well as innovative system of roller shutters. ',
      '- We are delighted to have received the award, especially that we received it once again. It proves that the strategy that we have adopted, based on investment in top quality and cutting-edge technology, works out perfectly. As a result, we consistently strengthen our market position, winning over clients all over the world – points out Adam Leik, marketing director at Drutex SA. ',
      'The doors awarded in this year’s BCC contest are manufactured in the MB-86 SI system. They are a product for the 21st century. They may be used both in individual development, as well as aluminum facades, and thanks to their enhanced thermal insulation they may be dedicated to energy efficient building.  Their additional advantage is the color range  and wide variety of panel patterns. All external doors offered by Drutex may be equipped with smart access control system that allows to open and lock them with e.g. a smartphone, a tablet or a fingerprint reader. ',
      'Aluminum windows and doors have been produced by Drutex SA since 1999. The company has been investing in cutting-edge technology for years and just last year it launched i.a. Poland’s most modern powder paint shop for aluminum woodwork which is also one of the most modern in the world. As a result, it is possible to guarantee top-quality products and optimum speed of order execution. ',
      'The European Medals awards ceremony took place on 23 June in the Lubomirski Palace in Warsaw.'
    ]
  },
  {
    coverImg: TipsImages.tip3,
    header: 'A good window is not all. How about the installation?',
    date: new Date().toDateString(),
    landingPageText:
            ' DRUTEX yet again has been awarded the Golden Construction Brand of the Year in the ‘elevation windows’ category. The title is given basing on national surveys conducted among construction companies in Poland.',
    text: [
      'The award given to Drutex is a confirmation of top quality of the products, as well as their reputation and popularity with professionals. The Golden Construction Brand ranking has therefore an exceptionally unique and impartial character, and it has been considered to be the most reliable in Poland for many years.',
      '- We are happy to have received the award yet again, especially that it is given, in fact, by numerous professionals in the construction industry. It is a confirmation that investment in cutting-edge technology and top quality bring the expected results, and, above all, clients’ satisfaction and trust all over the world. It has always been our priority and it determines other investment projects that we carry out – says Leszek Gierszewski, the president and founder of Drutex SA.',
      'It is worth pointing out that the Bytów company, having launched the most cutting edge paint shop for aluminum woodwork in Poland, also started the construction of an impressive office building and high-bay warehouse. Completion of both investments is planned for 2021, and this year the company will launch the construction of the biggest production hall covering over',
      '7,5 ha. Apart from that, Drutex constantly invests in the innovative machine park and its own transport fleet consisting of over 400 vehicles. 2020, despite the pandemic, was a record year for the Bytów tycoon. The company – apart the above mentioned investments – for the first time ever exceeded PLN 1 billion of  sales revenue, hiring at the same time extra 550 staff. ',
      'The ranking of the Construction Brand of the Year has been conducted by ASM ( Market Research and Analysis Centre) for the 17th time. This year ca. 2.6 Polish companies participated in the survey. The award ceremony took place on 10 June at the Windsor Hotel in Jachranka.'
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
    colors: TThirdPartOptionsColors[]
}

export type TProductsData = {
    name: string,
    nameHeader: string,
    imgCover: string | any,
    video: any,
    imgVideo: string,
    optionHeaders: string[],
    options: TThirdPartOptions | string[],
    material: string[]
}

export const ProductsImages = {
  pvcWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg1.jpg').default,
  pvcWindow2overImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg2.jpg').default,
  pvcWindow3CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg3.jpg').default,
  pvcWindow4CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg4.jpg').default,
  pvcWindow5CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg5.jpg').default,
  woodWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg6.jpg').default,
  woodAluminiumWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg7.jpg').default,
  aluminiumWindow1CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg8.jpg').default,
  aluminiumWindow2CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg9.jpg').default,
  aluminiumWindow3CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg10.jpg').default,
  aluminiumWindow4CoverImg: require('constants/img/imgProduct/ImgPageProduct/WindowImg11.jpg').default,
  entrancePvcDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg1.jpg').default,
  partitionPvcDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg2.jpg').default,
  profileWithoutThermalBreakAluminiumDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg4.jpg').default,
  profileWithThermalBreakAluminiumDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg5.jpg').default,
  doorWithHiddenWingAluminiumDoorCoverImg: require('constants/img/imgProduct/ImgPageProduct/DoorImg6.jpg').default,

  aluminiumThermoBlindsInsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Roletne1.jpg').default,
  pvcBlindsInsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Roletne2.jpg').default,
  aluminiumOutsideBlindsRoundedOutsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Roletne3.jpg').default,

  aluminiumOutsideBlindsPentagonalOutsideBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Fasade1.jpg').default,
  subFacadeAluminiumBlindsCoverImg: require('constants/img/imgProduct/ImgPageProduct/Fasade2.jpg').default,

  fundermaxFacadeFundermaxFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi1.jpg').default,
  ventilatedAlucobondFacadeVentilatedAlucobondFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi2.jpg').default,
  structuralGlassFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi3.jpg').default,
  standardGlassFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi4.jpg').default,
  granitFacadeGranitFacadeCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi5.jpg').default,
  pvcVekaSlideSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi6.jpg').default,
  aluUltraSlideSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi7.jpg').default,
  pvcVekaSoftline7082InRowSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi8.jpg').default,
  aluInRowSlidingSystemCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi9.jpg').default,
  pvcAccordionSlidingSystemsCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi10.jpg').default,
  aluSmartiaM9800AccordionSlidingSystemsCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi11.jpg').default,
  aluSmartiaM19800AccordionSlidingSystemsCoverImg: require('constants/img/imgProduct/ImgPageProduct/TerasniSistemi12.jpg').default,

  solomaticVenetiansCoverImg: require('constants/img/imgProduct/ImgPageProduct/SolomatikVenecijaneri.jpg').default
}

/** Sredi init state za products */
export const ProductsData = [
  /*    {
                  name: ProductsDataInfo.veka70,
                  nameHeader: 'VEKA 70 EFFECTLINE',
                  imgCover: Products.pvcProzor1CoverImg,
                  video: veka70Video,
                  imgVideo: 'https://www.drutex.eu/media/_upload/produkty/iglo_light/video/iglo_light.mp4',

              } */
]

export type TActionEvent = {
    type:
        typeof SELECTED_ITEM
        | typeof GO_BACK
        | typeof CLEAR_STATE
        | typeof SET_SELECTED_TIPS;
    payload?:
        undefined
        | string
        | TStateProducts
        | TProductData
        | ProductsSubCategory;
}
