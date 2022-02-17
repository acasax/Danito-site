import {
  ProductsCategory,
  ProductsCategoryImages,
  ProductsSubCategory,
  ProductsSubCategoryImages,
  TActionEvent,
  TProductCategory,
  TStateProducts
} from './d'

const init = {
  data: [
    {
      categoryInfo: {
        name: ProductsCategory.window,
        image: ProductsCategoryImages.window
      },
      subCategory: [
        {
          subCategoryInfo: {
            name: ProductsSubCategory.pvcWindow,
            image: ProductsSubCategoryImages.pvcWindow
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.woodWindow,
            image: ProductsSubCategoryImages.woodWindow
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.woodAluminumWindow,
            image: ProductsSubCategoryImages.woodAluminumWindow
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.aluminumWindow,
            image: ProductsSubCategoryImages.aluminumWindow
          },
          products: [{}]
        }
      ]
    },
    {
      categoryInfo: {
        name: ProductsCategory.door,
        image: ProductsCategoryImages.door
      },
      subCategory: [
        {
          subCategoryInfo: {
            name: ProductsSubCategory.pvcDoor,
            image: ProductsSubCategoryImages.pvcDoor
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.aluminumDoor,
            image: ProductsSubCategoryImages.aluminumDoor
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.securityDoor,
            image: ProductsSubCategoryImages.securityDoor
          },
          products: [{}]
        }
      ]
    },
    {
      categoryInfo: {
        name: ProductsCategory.blinds,
        image: ProductsCategoryImages.blinds
      },
      subCategory: [
        {
          subCategoryInfo: {
            name: ProductsSubCategory.insideBlinds,
            image: ProductsSubCategoryImages.insideBlinds
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.outsideBlinds,
            image: ProductsSubCategoryImages.outsideBlinds
          },
          products: [{}]
        }
      ]
    },
    {
      categoryInfo: {
        name: ProductsCategory.solomaticVenetians,
        image: ProductsCategoryImages.solomaticVenetians
      },
      subCategory: [
        {
          subCategoryInfo: {
            name: ProductsSubCategory.outsideSolomaticVenetians
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.underTheFacadeSolomaticVenetians
          },
          products: [{}]
        }
      ]
    },
    {
      categoryInfo: {
        name: ProductsCategory.facade,
        image: ProductsCategoryImages.facade
      },
      subCategory: [
        {
          subCategoryInfo: {
            name: ProductsSubCategory.fundermaxFacade,
            image: ProductsSubCategoryImages.fundermaxFacade
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.ventilatedAlucobondFacade,
            image: ProductsSubCategoryImages.ventilatedAlucobondFacade
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.glassFacade,
            image: ProductsSubCategoryImages.glassFacade
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.graniteFacade,
            image: ProductsSubCategoryImages.graniteFacade
          },
          products: [{}]
        }
      ]
    },
    {
      categoryInfo: {
        name: ProductsCategory.slidingSystems,
        image: ProductsCategoryImages.slidingSystems
      },
      subCategory: [
        {
          subCategoryInfo: {
            name: ProductsSubCategory.liftingSlidingSystems,
            image: ProductsSubCategoryImages.liftingSlidingSystems
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.inRowSlidingSystems,
            image: ProductsSubCategoryImages.inRowSlidingSystems
          },
          products: [{}]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.accordionSlidingSystems,
            image: ProductsSubCategoryImages.accordionSlidingSystems
          },
          products: [{}]
        }
      ]
    },
    {
      categoryInfo: {
        name: ProductsCategory.additions,
        image: ProductsCategoryImages.additions
      },
      subCategory: []
    }
  ],
  selectedCategory: {} as TProductCategory
} as TStateProducts

export default (
  state: TStateProducts = init,
  action: TActionEvent = {} as TActionEvent
) => {
  switch (action.type) {
    case 'CATEGORY_SET_SELECTED': {
      return {
        ...state,
        selectedCategory: action.payload
      }
    }
    case 'CLEAR_STATE': {
      return {
        ...state,
        data: undefined,
        selected: undefined
      }
    }
    default:
      return state
  }
}
