import {
  ProductsCategory,
  ProductsCategoryImages,
  ProductsDataInfo,
  ProductsSubCategory,
  ProductsSubCategoryImages,
  TActionEvent,
  TProductData,
  TStateProducts
} from './d'

const init = {
  data: [
    {
      name: ProductsCategory.window,
      parent: '',
      parentPath: '',
      image: ProductsCategoryImages.window,
      children: [
        {
          name: ProductsSubCategory.pvcWindow,
          parent: ProductsCategory.window,
          parentPath: `${ProductsCategory.window}/`,
          image: ProductsSubCategoryImages.pvcWindow,
          children: [
            {
              name: ProductsDataInfo.veka70,
              parent: ProductsSubCategory.pvcWindow,
              parentPath: `${ProductsCategory.window}/${ProductsSubCategory.pvcWindow}/`
            },
            {
              name: ProductsDataInfo.veka82,
              parent: ProductsSubCategory.pvcWindow,
              parentPath: `${ProductsCategory.window}/${ProductsSubCategory.pvcWindow}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.woodAluminumWindow,
          parent: ProductsCategory.window,
          parentPath: `${ProductsCategory.window}/`,
          image: ProductsSubCategoryImages.woodAluminumWindow,
          children: [
            {
              name: ProductsDataInfo.woodAluminiumWindows1,
              parent: ProductsSubCategory.woodAluminumWindow,
              parentPath: `${ProductsCategory.window}/${ProductsSubCategory.woodAluminumWindow}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.aluminumWindow,
          parent: ProductsCategory.window,
          parentPath: `${ProductsCategory.window}/`,
          image: ProductsSubCategoryImages.aluminumWindow,
          children: [
            {
              name: ProductsDataInfo.aluminiumWindows1,
              parent: ProductsSubCategory.aluminumWindow,
              parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
            },
            {
              name: ProductsDataInfo.aluminiumWindows2,
              parent: ProductsSubCategory.aluminumWindow,
              parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
            },
            {
              name: ProductsDataInfo.aluminiumWindows3,
              parent: ProductsSubCategory.aluminumWindow,
              parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
            },

            {
              name: ProductsDataInfo.aluminiumWindows4,
              parent: ProductsSubCategory.aluminumWindow,
              parentPath: `${ProductsCategory.window}/${ProductsSubCategory.aluminumWindow}/`
            }
          ]
        }
      ]
    },
    {
      name: ProductsCategory.door,
      parent: '',
      parentPath: '',
      image: ProductsCategoryImages.door,
      children: [
        {
          name: ProductsSubCategory.pvcDoor,
          parent: ProductsCategory.door,
          parentPath: `${ProductsCategory.door}/`,
          image: ProductsSubCategoryImages.pvcDoor,
          children: [
            {
              name: ProductsDataInfo.entrancePvcDoor,
              parent: ProductsSubCategory.pvcDoor,
              parentPath: `${ProductsCategory.door}/${ProductsSubCategory.pvcDoor}/`
            },
            {
              name: ProductsDataInfo.partitionPvcDoor,
              parent: ProductsSubCategory.pvcWindow,
              parentPath: `${ProductsCategory.door}/${ProductsSubCategory.pvcDoor}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.aluminumDoor,
          parent: ProductsCategory.door,
          parentPath: `${ProductsCategory.door}/`,
          image: ProductsSubCategoryImages.aluminumDoor,
          children: [
            {
              name: ProductsDataInfo.profileWithoutThermalBreakAluminiumDoor,
              parent: ProductsSubCategory.aluminumDoor,
              parentPath: `${ProductsCategory.door}/${ProductsSubCategory.aluminumDoor}/`
            },
            {
              name: ProductsDataInfo.profileWithThermalBreakAluminiumDoor,
              parent: ProductsSubCategory.aluminumDoor,
              parentPath: `${ProductsCategory.door}/${ProductsSubCategory.aluminumDoor}/`
            },
            {
              name: ProductsDataInfo.doorWithHiddenWingAluminiumDoor,
              parent: ProductsSubCategory.aluminumDoor,
              parentPath: `${ProductsCategory.door}/${ProductsSubCategory.aluminumDoor}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.securityDoor,
          parent: ProductsCategory.door,
          parentPath: `${ProductsCategory.door}/`,
          image: ProductsSubCategoryImages.securityDoor,
          children: [
            {
              name: ProductsDataInfo.customSecurityDoor,
              parent: ProductsSubCategory.securityDoor,
              parentPath: `${ProductsCategory.door}/${ProductsSubCategory.securityDoor}/`
            }
          ]
        }
      ]
    },
    {
      name: ProductsCategory.blinds,
      parent: '',
      parentPath: '',
      image: ProductsCategoryImages.blinds,
      children: [
        {
          name: ProductsSubCategory.insideBlinds,
          parent: ProductsCategory.blinds,
          parentPath: `${ProductsCategory.blinds}/`,
          image: ProductsSubCategoryImages.insideBlinds,
          children: [
            {
              name: ProductsDataInfo.aluminiumThermoBlindsInsideBlinds,
              parent: ProductsSubCategory.insideBlinds,
              parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.insideBlinds}/`
            },
            {
              name: ProductsDataInfo.pvcBlindsInsideBlinds,
              parent: ProductsSubCategory.insideBlinds,
              parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.insideBlinds}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.outsideBlinds,
          parent: ProductsCategory.blinds,
          parentPath: `${ProductsCategory.blinds}/`,
          image: ProductsSubCategoryImages.outsideBlinds,
          children: [
            {
              name: ProductsDataInfo.aluminiumOutsideBlindsRoundedOutsideBlinds,
              parent: ProductsSubCategory.outsideBlinds,
              parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.outsideBlinds}/`
            },
            {
              name: ProductsDataInfo.aluminiumOutsideBlindsPentagonalOutsideBlinds,
              parent: ProductsSubCategory.outsideBlinds,
              parentPath: `${ProductsCategory.blinds}/${ProductsSubCategory.outsideBlinds}/`
            }
          ]
        }
      ]
    },
    {
      name: ProductsCategory.solomaticVenetians,
      parent: '',
      parentPath: '',
      image: ProductsCategoryImages.solomaticVenetians,
      children: [
        {
          name: ProductsSubCategory.outsideSolomaticVenetians,
          parent: ProductsCategory.solomaticVenetians,
          parentPath: `${ProductsCategory.solomaticVenetians}/`
        },
        {
          name: ProductsSubCategory.underTheFacadeSolomaticVenetians,
          parent: ProductsCategory.solomaticVenetians,
          parentPath: `${ProductsCategory.solomaticVenetians}/`
        }
      ]
    },
    {
      name: ProductsCategory.facade,
      parent: '',
      parentPath: '',
      image: ProductsCategoryImages.facade,
      children: [
        {
          name: ProductsSubCategory.fundermaxFacade,
          parent: ProductsCategory.facade,
          parentPath: `${ProductsCategory.facade}/`,
          image: ProductsSubCategoryImages.fundermaxFacade,
          children: [
            {
              name: ProductsDataInfo.fundermaxFacadeFundermaxFacade,
              parent: ProductsSubCategory.fundermaxFacade,
              parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.fundermaxFacade}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.ventilatedAlucobondFacade,
          parent: ProductsCategory.facade,
          parentPath: `${ProductsCategory.facade}/`,
          image: ProductsSubCategoryImages.ventilatedAlucobondFacade,
          children: [
            {
              name: ProductsDataInfo.ventilatedAlucobondFacadeVentilatedAlucobondFacade,
              parent: ProductsSubCategory.ventilatedAlucobondFacade,
              parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.ventilatedAlucobondFacade}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.glassFacade,
          parent: ProductsCategory.facade,
          parentPath: `${ProductsCategory.facade}/`,
          image: ProductsSubCategoryImages.glassFacade,
          children: [
            {
              name: ProductsDataInfo.structuralGlassFacade,
              parent: ProductsSubCategory.glassFacade,
              parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.glassFacade}/`
            },
            {
              name: ProductsDataInfo.standardGlassFacade,
              parent: ProductsSubCategory.glassFacade,
              parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.glassFacade}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.graniteFacade,
          parent: ProductsCategory.facade,
          parentPath: `${ProductsCategory.facade}/`,
          image: ProductsSubCategoryImages.graniteFacade,
          children: [
            {
              name: ProductsDataInfo.granitFacadeGranitFacade,
              parent: ProductsSubCategory.graniteFacade,
              parentPath: `${ProductsCategory.facade}/${ProductsSubCategory.graniteFacade}/`
            }
          ]
        }
      ]
    },
    {
      name: ProductsCategory.slidingSystems,
      parent: '',
      parentPath: '',
      image: ProductsCategoryImages.slidingSystems,
      children: [
        {
          name: ProductsSubCategory.liftingSlidingSystems,
          parent: ProductsCategory.slidingSystems,
          parentPath: `${ProductsCategory.slidingSystems}/`,
          image: ProductsSubCategoryImages.liftingSlidingSystems,
          children: [
            {
              name: ProductsDataInfo.pvcVekaSlideSlidingSystem,
              parent: ProductsSubCategory.liftingSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.liftingSlidingSystems}/`
            },
            {
              name: ProductsDataInfo.aluUltraSlideSlidingSystem,
              parent: ProductsSubCategory.liftingSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.liftingSlidingSystems}/`
            },
            {
              name: ProductsDataInfo.aluVgPlusSlidingSystem,
              parent: ProductsSubCategory.liftingSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.liftingSlidingSystems}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.inRowSlidingSystems,
          parent: ProductsCategory.slidingSystems,
          parentPath: `${ProductsCategory.slidingSystems}/`,
          image: ProductsSubCategoryImages.inRowSlidingSystems,
          children: [
            {
              name: ProductsDataInfo.pvcVekaSoftline7082InRowSlidingSystem,
              parent: ProductsSubCategory.inRowSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.inRowSlidingSystems}/`
            },
            {
              name: ProductsDataInfo.aluInRowSlidingSystem,
              parent: ProductsSubCategory.inRowSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.inRowSlidingSystems}/`
            }
          ]
        },
        {
          name: ProductsSubCategory.accordionSlidingSystems,
          parent: ProductsCategory.slidingSystems,
          parentPath: `${ProductsCategory.slidingSystems}/`,
          image: ProductsSubCategoryImages.accordionSlidingSystems,
          children: [
            {
              name: ProductsDataInfo.pvcAccordionSlidingSystems,
              parent: ProductsSubCategory.accordionSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.accordionSlidingSystems}/`
            },
            {
              name: ProductsDataInfo.aluSmartiaM9800AccordionSlidingSystems,
              parent: ProductsSubCategory.accordionSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.accordionSlidingSystems}/`
            },
            {
              name: ProductsDataInfo.aluSmartiaM19800AccordionSlidingSystems,
              parent: ProductsSubCategory.accordionSlidingSystems,
              parentPath: `${ProductsCategory.slidingSystems}/${ProductsSubCategory.accordionSlidingSystems}/`
            }
          ]
        }
      ]
    },
    {
      name: ProductsCategory.additions,
      parent: '',
      parentPath: '',
      image: ProductsCategoryImages.additions
    }
  ],
  selectedItem: {} as TProductData

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
    case 'SELECTED_PATH_ITEM': {
      const path = state.selectedPath
      return {
        ...state,
        selectedPath: path ? `${path}/${action.payload}` : action.payload
      }
    }
    case 'SELECTED_ITEM': {
      return {
        ...state,
        selected: action.payload
      }
    }
    case 'GO_BACK': {
      return {
        ...state,
        selected: '',
        selectedPath: ''
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
