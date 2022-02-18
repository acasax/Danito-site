import {
  ProductsCategory,
  ProductsCategoryImages,
  ProductsDataInfo,
  ProductsSubCategory,
  ProductsSubCategoryImages,
  TActionEvent,
  TProductCategory,
  TProductSubCategory,
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
          products: [
            {
              name: ProductsDataInfo.veka70
            },
            {
              name: ProductsDataInfo.veka82
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.woodAluminumWindow,
            image: ProductsSubCategoryImages.woodAluminumWindow
          },
          products: [
            {
              name: ProductsDataInfo.woodAluminiumWindows1
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.aluminumWindow,
            image: ProductsSubCategoryImages.aluminumWindow
          },
          products: [
            {
              name: ProductsDataInfo.aluminiumWindows1
            },
            {
              name: ProductsDataInfo.aluminiumWindows2
            },
            {
              name: ProductsDataInfo.aluminiumWindows3
            },
            {
              name: ProductsDataInfo.aluminiumWindows4
            }
          ]
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
          products: [
            {
              name: ProductsDataInfo.entrancePvcDoor
            },
            {
              name: ProductsDataInfo.partitionPvcDoor
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.aluminumDoor,
            image: ProductsSubCategoryImages.aluminumDoor
          },
          products: [
            {
              name: ProductsDataInfo.profileWithoutThermalBreakAluminiumDoor
            },
            {
              name: ProductsDataInfo.profileWithThermalBreakAluminiumDoor
            },
            {
              name: ProductsDataInfo.doorWithHiddenWingAluminiumDoor
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.securityDoor,
            image: ProductsSubCategoryImages.securityDoor
          },
          products: [
            {
              name: ProductsDataInfo.customSecurityDoor
            }
          ]
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
          products: [
            {
              name: ProductsDataInfo.aluminiumThermoBlindsInsideBlinds
            },
            {
              name: ProductsDataInfo.pvcBlindsInsideBlinds
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.outsideBlinds,
            image: ProductsSubCategoryImages.outsideBlinds
          },
          products: [
            {
              name: ProductsDataInfo.aluminiumOutsideBlindsRoundedOutsideBlinds
            },
            {
              name: ProductsDataInfo.aluminiumOutsideBlindsPentagonalOutsideBlinds
            }
          ]
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
          products: [
            {
              name: ProductsDataInfo.fundermaxFacadeFundermaxFacade
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.ventilatedAlucobondFacade,
            image: ProductsSubCategoryImages.ventilatedAlucobondFacade
          },
          products: [
            {
              name: ProductsDataInfo.ventilatedAlucobondFacadeVentilatedAlucobondFacade
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.glassFacade,
            image: ProductsSubCategoryImages.glassFacade
          },
          products: [
            {
              name: ProductsDataInfo.structuralGlassFacade
            },
            {
              name: ProductsDataInfo.standardGlassFacade
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.graniteFacade,
            image: ProductsSubCategoryImages.graniteFacade
          },
          products: [
            {
              name: ProductsDataInfo.granitFacadeGranitFacade
            }
          ]
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
          products: [
            {
              name: ProductsDataInfo.pvcVekaSlideSlidingSystem
            },
            {
              name: ProductsDataInfo.aluUltraSlideSlidingSystem
            },
            {
              name: ProductsDataInfo.aluVgPlusSlidingSystem
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.inRowSlidingSystems,
            image: ProductsSubCategoryImages.inRowSlidingSystems
          },
          products: [
            {
              name: ProductsDataInfo.pvcVekaSoftline7082InRowSlidingSystem
            },
            {
              name: ProductsDataInfo.aluInRowSlidingSystem
            }
          ]
        },
        {
          subCategoryInfo: {
            name: ProductsSubCategory.accordionSlidingSystems,
            image: ProductsSubCategoryImages.accordionSlidingSystems
          },
          products: [
            {
              name: ProductsDataInfo.pvcAccordionSlidingSystems
            },
            {
              name: ProductsDataInfo.aluSmartiaM9800AccordionSlidingSystems
            },
            {
              name: ProductsDataInfo.aluSmartiaM19800AccordionSlidingSystems
            }
          ]
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
  selectedCategory: {} as TProductCategory,
  selectedSubCategory: {} as TProductSubCategory,
  selected: ''
} as TStateProducts

export default (
  state: TStateProducts = init,
  action: TActionEvent = {} as TActionEvent
) => {
  switch (action.type) {
    case 'CATEGORY_SET_SELECTED': {
      const selectedCategory = init.data.filter(x => x.categoryInfo.name === action.payload)
      return {
        ...state,
        selectedCategory: selectedCategory
      }
    }
    case 'SUB_CATEGORY_SET_SELECTED': {
      const selectedSubCategory = state.selectedCategory[0].subCategory.filter(x => x.subCategoryInfo.name === action.payload)
      return {
        ...state,
        selectedSubCategory: selectedSubCategory
      }
    }
    case 'SELECTED_ITEM': {
      return {
        ...state,
        selected: action.payload
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
