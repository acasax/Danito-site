import { TProductData } from '../../store/Products/d'

export type TNavBarSecondPart = {
    setNavRightOpen: (b: boolean) => void,
    navRightOpen: boolean
}

export type TNavBarContext = {
    handleNavRightOpen: () => void,
    navRightOpen: boolean,
    sideNavBarItems: TProductData[],
    handleSetSelectedSideNavBarItem: (s: string) => void,
    selected: string,
    flexDirection: string,
    goBack: () => void
}
