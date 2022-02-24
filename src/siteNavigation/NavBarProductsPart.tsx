import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavProducts/NavProducs.css'
import SideNavBarItem from './sideBarItem'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

// @ts-ignore
import { IMAGES, PRODUCTS } from '../constants/ProductNavBarData'
import {
  NavBarProductContainerText,
  NavBarProductPartHeaderContainer,
  NavBarProductSideBarContainer,
  NavBarProductsPartProductsContainer,
  NavBarProductsPartProductsText
} from './style'
import { SiteNavigationContext } from './context'
import { useSelector } from 'react-redux'
import { _selectNavBarItems } from '../store/NavBar/helpers'

const NavBarProductsPart = () => {
  const selectedItems = useSelector(_selectNavBarItems)
  const { navRightOpen, selected, goBack, setProductPath } = useContext(SiteNavigationContext)

  return (
        <NavBarProductSideBarContainer isDisplay={navRightOpen}>
            <NavBarProductPartHeaderContainer>
                {
                    selected
                      ? <ArrowBackIosIcon onClick={goBack} sx={{ fontSize: 30 }}/>
                      : <ArrowDownwardIcon/>
                }
                <NavBarProductContainerText>{!selected ? 'Izaberite kategoriju' : selected}</NavBarProductContainerText>
            </NavBarProductPartHeaderContainer>
            <NavBarProductsPartProductsContainer>
                {selectedItems.length > 1 && selectedItems.map((x, key) => {
                  return (
                        <Link to={`/${x.name.replace(/\s/g, '')}`}
                              onClick={() => setProductPath(x.name)} key={key}
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
