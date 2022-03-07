import { TStateProducts } from './SiteNavigation/d'
import { Dispatch } from 'redux'
import { TStateWebSiteData } from './SiteData/d'

export type TReduxState = {
    products: TStateProducts,
    webSiteData: TStateWebSiteData
}

export type TGetState = () => TReduxState;

export type TDispatch = Dispatch<any> | any
