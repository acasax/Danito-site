import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NavProducts/NavProducs.css'
import SideNavBarItem from './sideNavBarItem'
import { ProductData } from '../../constants/ProductData'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

// @ts-ignore
import { IMAGES, PRODUCTS } from '../../constants/ProductNavBarData'
import {
  NavBarProductContainerText,
  NavBarProductPartHeaderContainer,
  NavBarProductSideBarContainer,
  NavBarProductsPartProductsContainer,
  NavBarProductsPartProductsText
} from './style'
import { NavBarContext } from './context'

const NavBarProductsPart = ({ setPathTo, setPageName, setData }: any) => {
  const [flexDirection, setFlexDirection] = useState('row')
  const { navRightOpen, sideNavBarItems, selected } = useContext(NavBarContext)

  const backHandler = () => {
    // setButtons(initialButtonsState)
    // setImg(initialImgState)
    // @ts-ignore
    // setSelected(false)
    setFlexDirection('row')
  }

  /** funkcija za stranicu proizvodi */
  const setProductPath = (value, productDatum: any) => {
    const newData = ProductData.filter((product) => {
      return product.name === value
    })
    setData(...newData)
    Object.values(PRODUCTS.allProducts).forEach((product) => {
      if (product === value) {
        setPathTo(`/${product.replace(/\s/g, '')}`)
        setPageName(value)
      } else return ''
    })
  }

  return (
        <NavBarProductSideBarContainer isDisplay={navRightOpen}>
            <NavBarProductPartHeaderContainer>
                {
                    selected
                      ? <ArrowBackIosIcon onClick={backHandler} sx={{ fontSize: 35 }}/>
                      : <ArrowDownwardIcon/>
                }
                <NavBarProductContainerText>{!selected ? 'Izaberite kategoriju' : selected}</NavBarProductContainerText>
            </NavBarProductPartHeaderContainer>
            <NavBarProductsPartProductsContainer>
                {sideNavBarItems.length > 1 && sideNavBarItems.map((x, key) => {
                  return (
                        <Link to={`/${x.name.replace(/\s/g, '')}`}
                              onClick={() => setProductPath(x.name, ProductData[key])} key={key}
                              style={NavBarProductsPartProductsText}>
                            <SideNavBarItem
                                img={x.image}
                                buttonText={x.name}
                            />
                        </Link>
                  )
                })}
            </NavBarProductsPartProductsContainer>
        </NavBarProductSideBarContainer>
  )
}

export default NavBarProductsPart
