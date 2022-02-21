import {
  CATEGORY_SET_SELECTED,
  CLEAR_STATE,
  GO_BACK,
  SELECTED_ITEM,
  SELECTED_PATH_ITEM,
  SUB_CATEGORY_SET_SELECTED
} from './types'

export type TStateProducts = {
    data: TProductData[],
    selectedItem: TProductData,
}

export type TProductCategory = {
    categoryInfo: TProductData,
    subCategory: TProductSubCategory[],
}

export type TProductSubCategory = {
    subCategoryInfo: TProductData,
    products: TProductData[],
}

export type TProductData = {
    name: string,
    parent: string,
    parentPath: string,
    image?: string | any,
    children?: TProductData[]
}

export enum ProductsCategory {
    window = 'PROZORI',
    door = 'VRATA',
    blinds = 'ROLETNA',
    solomaticVenetians = 'SOLOMATIC VENECIJANERI',
    facade = 'FASADE',
    slidingSystems = 'KLIZNI SISTEMI',
    additions = 'DODATNO',
}

export const ProductsCategoryImages = {
  window: require('constants/img/imgProduct/window.png').default,
  door: require('constants/img/imgProduct/door.png').default,
  blinds: require('constants/img/imgProduct/roletne.png').default,
  solomaticVenetians: require('constants/img/imgProduct/solomaticVenecijaneri.png').default,
  facade: require('constants/img/imgProduct/fasadaPVC.png').default,
  slidingSystems: require('constants/img/imgProduct/terasniSistemi.png').default,
  additions: require('constants/img/imgProduct/dodatno.png').default
}

export enum ProductsSubCategory {
    /** SubCategory windows */
    pvcWindow = 'PVC PROZORI',
    woodWindow = 'DRVENI PROZORI',
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
  woodWindow: require('constants/img/imgProduct/windowWOOD.png').default,
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
    woodAluminiumWindows1 = 'DRVO ALUMINIUM PROZOR 1',

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
}

export type TActionEvent = {
    type:
        typeof CATEGORY_SET_SELECTED
        | typeof CLEAR_STATE
        | typeof SUB_CATEGORY_SET_SELECTED
        | typeof SELECTED_PATH_ITEM
        | typeof SELECTED_ITEM
        | typeof GO_BACK;
    payload?:
        undefined
        | string
        | TStateProducts
        | TProductCategory
        | TProductData
        | TProductSubCategory;
}
