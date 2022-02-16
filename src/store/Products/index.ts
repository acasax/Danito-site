import { ProductsCategory, ProductsCategoryImages, TActionEvent, TStateProducts } from './d'

const init = {
  data: [
    {
      categoryInfo: {
        name: ProductsCategory.window,
        image: ProductsCategoryImages.window
      },
      subCategory: []
    },
    {
      categoryInfo: {
        name: ProductsCategory.door,
        image: ProductsCategoryImages.door
      },
      subCategory: []
    },
    {
      categoryInfo: {
        name: ProductsCategory.blinds,
        image: ProductsCategoryImages.blinds
      },
      subCategory: []
    },
    {
      categoryInfo: {
        name: ProductsCategory.facade,
        image: ProductsCategoryImages.facade
      },
      subCategory: []
    },
    {
      categoryInfo: {
        name: ProductsCategory.slidingSystems,
        image: ProductsCategoryImages.slidingSystems
      },
      subCategory: []
    },
    {
      categoryInfo: {
        name: ProductsCategory.additions,
        image: ProductsCategoryImages.additions
      },
      subCategory: []
    }
  ]
} as TStateProducts

export default (
  state: TStateProducts = init,
  action: TActionEvent = {} as TActionEvent
) => {
  switch (action.type) {
    case 'CATEGORY_SET_SELECTED': {
      return {
        ...state,
        selected: action.payload
      }
    }
    case 'CLEAR_STATE': {
      return {
        ...state,
        selected: undefined
      }
    }
    default:
      return state
  }
}
