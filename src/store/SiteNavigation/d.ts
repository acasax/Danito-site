import { CLEAR_STATE, GO_BACK, SELECTED_ITEM } from './types'

export type TStateProducts = {
    data: TProductData[],
    selectedItems: TProductData[],
    selectedItem: string,
    flexDirection: string,
    productSectionData: TProductSectionData[]
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
    facade = 'FASADE',
    slidingSystems = 'KLIZNI SISTEMI',
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
    aluminiumWindows1 = 'ALUMINIUMSKI PROZOR 1',
    aluminiumWindows2 = 'ALUMINIUMSKI PROZOR 2',
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
    customSecurityDoor = 'SIGURNOSNA VRATA PO MERI',

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
    name: ProductsSubCategory.woodAluminumWindow,
    parent: ProductsCategory.window,
    parentPath: `${ProductsCategory.window}/`,
    image: ProductsSubCategoryImages.woodAluminumWindow
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
    name: ProductsDataInfo.aluminiumWindows3,
    parent: ProductsSubCategory.aluminumWindow,
    parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
  },

  {
    name: ProductsDataInfo.aluminiumWindows4,
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
        name: ProductsSubCategory.woodAluminumWindow,
        children: [
          ProductsDataInfo.woodAluminiumWindows1
        ]
      },
      {
        name: ProductsSubCategory.aluminumWindow,
        children: [
          ProductsDataInfo.aluminiumWindows1,
          ProductsDataInfo.aluminiumWindows2,
          ProductsDataInfo.aluminiumWindows3,
          ProductsDataInfo.aluminiumWindows4
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

export type TActionEvent = {
    type:
        typeof SELECTED_ITEM
        | typeof GO_BACK
        | typeof CLEAR_STATE;
    payload?:
        undefined
        | string
        | TStateProducts
        | TProductData
        | ProductsSubCategory;
}
