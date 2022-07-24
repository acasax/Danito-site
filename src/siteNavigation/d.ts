import { TProductData } from 'store/SiteNavigation/d'

export type TSiteNavigationContext = {
    handleNavRightOpen: () => void,
    navRightOpen: boolean,
    handleSetSelectedSideNavBarItem: (s: string) => void,
    selected: string,
    flexDirection: string,
    goBack: () => void,
    selectedItems: TProductData[],
    scroll: number,
    pathTo: string,
    setPathTo: (s: string) => void,
    pageName: string,
    setPageName: (s: string) => void,
    tipsData: any,
    setTipsData: (s: any) => void,
    data: any,
    setData: (s: any) => void,
    setProductPath: (s: string, b?: boolean) => void,
    pathToTipsPage: string,
    setPathToTipsPage: (s: string) => void,
    selectedName?: string,
    pagesArr: string[],
    productCategory: string[],
    productSubCategory: string[],
    products: string[]
}
