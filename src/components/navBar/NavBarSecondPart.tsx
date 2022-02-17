import React, { useCallback } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { TNavBarSecondPart } from './d'
import {
  NavSecondPartContainer,
  NavSecondPartMenuBody,
  NavSecondPartMenuBodyButton,
  NavSecondPartMenuBodyLink
} from './style'
import { UseProducts } from 'hooks/Products/useProducts'
import { ProductsCategory, ProductsCategoryImages, TProductData } from '../../store/Products/d'

/**
 *
 * About Component
 *
 * this component is a part od navBar of WebPage
 * functionality of this component is to navigate to primary pages
 *
 * component is has tabs to link to another pages
 *
 * */

const NavBarSecondPart = ({ setNavRightOpen, navRightOpen }: TNavBarSecondPart) => {
  const { setSelectedCategory } = UseProducts()

  const handleSetSelectedCategory = useCallback(
    () => {
      setSelectedCategory({ name: ProductsCategory.window, image: ProductsCategoryImages.window } as TProductData)
    }, [setSelectedCategory, ProductsCategory, ProductsCategoryImages]
  )
  return (
        <NavSecondPartContainer>
            <NavSecondPartMenuBody>
                {navRightOpen
                  ? (
                        <ArrowBackIosIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }}/>
                    )
                  : (
                        <MenuIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }}/>
                    )}

                <NavSecondPartMenuBodyButton
                    onClick={() => setNavRightOpen(!navRightOpen)}>PROIZVODI</NavSecondPartMenuBodyButton>

                <NavSecondPartMenuBodyButton
                    onClick={handleSetSelectedCategory}>kategorijal</NavSecondPartMenuBodyButton>

                <NavSecondPartMenuBodyLink href="/onama">O NAMA</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink href="/galerija"> GALERIJA</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink href="/kontakt"> KONTAKT</NavSecondPartMenuBodyLink>
            </NavSecondPartMenuBody>
        </NavSecondPartContainer>
  )
}

export default NavBarSecondPart
