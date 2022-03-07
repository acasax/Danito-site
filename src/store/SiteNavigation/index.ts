import { navBarData, ProductsCategory, productSectionData, TActionEvent, TProductData, TStateProducts } from './d'

const init = {
  data: navBarData,
  selectedItems: navBarData.filter(x => x.parent === '') as TProductData[],
  selectedItem: '',
  flexDirection: 'row',
  productSectionData: productSectionData
} as TStateProducts

export default (
  state: TStateProducts = init,
  action: TActionEvent = {} as TActionEvent
) => {
  switch (action.type) {
    case 'SELECTED_ITEM': {
      return {
        ...state,
        selectedItems: state.data.filter(x => x.parent === action.payload),
        selectedItem: action.payload,
        flexDirection: Object.values(ProductsCategory).includes(action.payload as ProductsCategory) ? 'column' : 'row'
      }
    }
    case 'GO_BACK': {
      const selectedItemForBack = init.data.filter(x => state.selectedItem === x.name)
      return {
        ...state,
        selectedItem: selectedItemForBack[0].parent,
        selectedItems: state.data.filter(x => x.parent === selectedItemForBack[0].parent),
        flexDirection: Object.values(ProductsCategory).includes(selectedItemForBack[0].parent as ProductsCategory) ? 'column' : 'row'
      }
    }
    case 'CLEAR_STATE': {
      return {
        ...state,
        data: undefined,
        selectedCategory: undefined,
        selectedSubCategory: undefined,
        selectedPath: undefined
      }
    }
    default:
      return state
  }
}
