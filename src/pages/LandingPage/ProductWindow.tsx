import React, { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ProductWindow/ProductWindow.css'
import { SiteNavigationContext } from 'siteNavigation/context'
import {
  ProductPartChildrenButton,
  ProductPartChildrenButtonContainer,
  ProductPartChildrenContainer,
  ProductPartChildrenLinksContainer,
  ProductPartChildrenLinksText,
  ProductPartContainer,
  ProductPartElementContainer,
  ProductPartElementImage,
  ProductPartElementImageContainer,
  ProductPartHeaderContainer,
  ProductPartHeaderText
} from './style'
import { _selectProductSectionData } from 'store/SiteNavigation/helpers'
import { useSelector } from 'react-redux'

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
