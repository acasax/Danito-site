import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ProductWindow/ProductWindow.css'
import { SiteNavigationContext } from 'siteNavigation/context'
import {
  ProductPartChildrenButton,
  ProductPartChildrenButtonContainer,
  ProductPartChildrenContainer,
  ProductPartChildrenLinksContainer,
  ProductPartContainer,
  ProductPartElementContainer,
  ProductPartElementImage,
  ProductPartElementImageContainer,
  ProductPartHeaderContainer,
  ProductPartHeaderText
} from './style'
import { _selectProductSectionData } from 'store/SiteNavigation/helpers'
import { useSelector } from 'react-redux'
import { Styles } from '../../constants/StyleConstants'
import { calcSize } from '../../constants/ResponsiveBreakpoints'

/**
 *
 * About Component
 *
 * @author SaxDev 03.02.2022
 *
 * This component is display Product Section on landing page
 *
 * Work Method
 *
 * Use data from store and setProductPath function from context to send data to Products layout and render data based on selected product
 *
 * */

const ProductWindow = () => {
  const { setProductPath } = useContext(SiteNavigationContext)
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  const productData = useSelector(_selectProductSectionData)
  const [width, setWidth] = useState(0)

  const updateDimension = () => {
    const width = window.innerWidth
    setWidth(width)
  }

  useEffect(() => {
    updateDimension()
  }, [updateDimension])

  const ProductPartChildrenLinksText = {
    fontSize:
            width > calcSize.large && width <= calcSize.extralarge
              ? calcSize.extralarge * 15 / calcSize.hd
              : width > calcSize.medium && width <= calcSize.large
                ? calcSize.large * 15 / calcSize.hd
                : width > calcSize.small && width <= calcSize.medium
                  ? calcSize.medium * 15 / calcSize.hd
                  : width > calcSize.xsmall && width <= calcSize.small
                    ? calcSize.small * 15 / calcSize.hd
                    : width > 0 && width <= calcSize.xsmall
                      ? calcSize.xsmall * 15 / calcSize.hd
                      : 15,
    textDecoration: 'none',
    color: Styles.Colours.PALETTE.DANITO._white,
    fontWeight: 'normal',
    letterSpacing: width > calcSize.large && width <= calcSize.extralarge
      ? calcSize.extralarge * 2 / calcSize.hd
      : width > calcSize.medium && width <= calcSize.large
        ? calcSize.large * 2 / calcSize.hd
        : width > calcSize.small && width <= calcSize.medium
          ? calcSize.medium * 2 / calcSize.hd
          : width > calcSize.xsmall && width <= calcSize.small
            ? calcSize.small * 2 / calcSize.hd
            : width > 0 && width <= calcSize.xsmall
              ? calcSize.xsmall * 2 / calcSize.hd
              : 2,
    transition: '0.5s ease-in-out',
    borderBottomColor: Styles.Colours.PALETTE.DANITO._white,
    borderBlockWidth: 1,
    borderBottomStyle: 'solid',

    hover: {
      borderBottomColor: Styles.Colours.PALETTE.DANITO._yellow,
      borderBlockWidth: width > calcSize.large && width <= calcSize.extralarge
        ? calcSize.extralarge * 2 / calcSize.hd
        : width > calcSize.medium && width <= calcSize.large
          ? calcSize.large * 2 / calcSize.hd
          : width > calcSize.small && width <= calcSize.medium
            ? calcSize.medium * 2 / calcSize.hd
            : width > calcSize.xsmall && width <= calcSize.small
              ? calcSize.small * 2 / calcSize.hd
              : width > 0 && width <= calcSize.xsmall
                ? calcSize.xsmall * 2 / calcSize.hd
                : 2,
      borderBottomStyle: 'solid'
    }
  }

  const handleSetSelectedSubCategory = useCallback((selectedSubCategoryName: string) => {
    if (selectedSubCategoryName === selectedSubCategory) {
      setSelectedSubCategory('')
    } else {
      setSelectedSubCategory(selectedSubCategoryName)
    }
  }, [setSelectedSubCategory, selectedSubCategory])

  return (
        <ProductPartContainer>
            {
                productData.map((element, key) => {
                  return (
                        <ProductPartElementContainer key={key}>
                            <ProductPartElementImageContainer>
                                <ProductPartElementImage src={element.image} alt={element.header}/>
                            </ProductPartElementImageContainer>
                            <ProductPartChildrenContainer>
                                {
                                    element.subCategory.map((x, key) => {
                                      return (
                                            <ProductPartChildrenButtonContainer key={key}>
                                                <ProductPartChildrenButton isOpen={selectedSubCategory === x.name}
                                                                           onClick={() => handleSetSelectedSubCategory(x.name)}>
                                                    {x.name}
                                                </ProductPartChildrenButton>
                                                {selectedSubCategory !== x.name
                                                  ? null
                                                  : (
                                                        <ProductPartChildrenLinksContainer>
                                                            {
                                                                x.children && x.children.map((c, key) => {
                                                                  return (
                                                                        <Link
                                                                            to={`/${c.replace(/\s/g, '')}`}
                                                                            onClick={(event) => setProductPath(event.currentTarget.innerHTML)}
                                                                            style={ProductPartChildrenLinksText}
                                                                            key={key}
                                                                        >
                                                                            {c}
                                                                        </Link>
                                                                  )
                                                                })
                                                            }
                                                        </ProductPartChildrenLinksContainer>
                                                    )}
                                            </ProductPartChildrenButtonContainer>
                                      )
                                    })
                                }
                            </ProductPartChildrenContainer>
                            <ProductPartHeaderContainer>
                                <ProductPartHeaderText>{element.header}</ProductPartHeaderText>
                            </ProductPartHeaderContainer>
                        </ProductPartElementContainer>
                  )
                })
            }
        </ProductPartContainer>
  )
}

export default ProductWindow
