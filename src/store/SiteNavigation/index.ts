import {
  navBarData,
  ProductsCategory,
  productSectionData,
  TActionEvent,
  TipsInitData,
  TProductData,
  TStateProducts,
  TTipsData
} from './d'
import { CLEAR_STATE, GO_BACK, SELECTED_ITEM, SET_SELECTED_TIPS } from './types'

const init = {
  data: navBarData,
  selectedItems: navBarData.filter(x => x.parent === '') as TProductData[],
  selectedItem: '',
  flexDirection: 'row',
  productSectionData: productSectionData,
  tipsData: TipsInitData,
  selectedTip: {} as TTipsData
} as TStateProducts

export default (
  state: TStateProducts = init,
  action: TActionEvent = {} as TActionEvent
) => {
  switch (action.type) {
    case SELECTED_ITEM: {
      return {
        ...state,
        selectedItems: state.data.filter(x => x.parent === action.payload),
        selectedItem: action.payload,
        flexDirection: Object.values(ProductsCategory).includes(action.payload as ProductsCategory) ? 'column' : 'row'
      }
    }
    case GO_BACK: {
      const selectedItemForBack = init.data.filter(x => state.selectedItem === x.name)
      return {
        ...state,
        selectedItem: selectedItemForBack[0].parent,
        selectedItems: state.data.filter(x => x.parent === selectedItemForBack[0].parent),
        flexDirection: Object.values(ProductsCategory).includes(selectedItemForBack[0].parent as ProductsCategory) ? 'column' : 'row'
      }
    }
    case CLEAR_STATE: {
      return {
        ...state,
        data: undefined,
        selectedCategory: undefined,
        selectedSubCategory: undefined,
        selectedPath: undefined
      }
    }

    case SET_SELECTED_TIPS: {
      const selectedTip = init.tipsData.filter(x => action.payload === x.header)
      return {
        ...state,
        selectedTip: selectedTip
      }
    }
    default:
      return state
  }
}
