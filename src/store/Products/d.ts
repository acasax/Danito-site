import { CATEGORY_SET_SELECTED, CLEAR_STATE } from './types'

export type TStateProducts = {
    data: TProductCategory[]
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
    image?: string | any
}

export enum ProductsCategory {
    window = 'PROZORI',
    door = 'VRATA',
    blinds = 'ROLETNA',
    facade = 'FASADE',
    slidingSystems = 'KLIZNI SISTEMI',
    additions = 'DODATNO',
}

export const ProductsCategoryImages = {
  window: require('constants/img/imgProduct/window.png').default,
  door: require('constants/img/imgProduct/door.png').default,
  blinds: require('constants/img/imgProduct/roletne.png').default,
  facade: require('constants/img/imgProduct/fasadaPVC.png').default,
  slidingSystems: require('constants/img/imgProduct/terasniSistemi.png').default,
  additions: require('constants/img/imgProduct/dodatno.png').default
}

export type TActionEvent = {
    type: typeof CATEGORY_SET_SELECTED | typeof CLEAR_STATE;
    payload?: undefined | TStateProducts;
}
