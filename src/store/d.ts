import { TStateProducts } from './Products/d'
import { Dispatch } from 'redux'

export type TReduxState = {
    products: TStateProducts
}

export type TGetState = () => TReduxState;

export type TDispatch = Dispatch<any> | any
