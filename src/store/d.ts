import { TStateProducts } from './NavBar/d'
import { Dispatch } from 'redux'

export type TReduxState = {
    products: TStateProducts
}

export type TGetState = () => TReduxState;

export type TDispatch = Dispatch<any> | any
