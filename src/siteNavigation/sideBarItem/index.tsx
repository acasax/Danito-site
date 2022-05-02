import React, { useContext } from 'react'
import { TSideNavBatItem } from './d'
import {
  SideNavBarItemButton,
  SideNavBarItemCategoryContainerImg,
  SideNavBarItemContainer,
  SideNavBarItemContainerImg
} from './style'
import { SiteNavigationContext } from '../context'

/**
 * About Component
 *
 * @author saxDev 02.19.2022
 *
 * This is component for sidebar item with category of products and products
 *
 * buttonText - text to display on button
 * img - src to image for display
 *
 * in this case subcategory is column display other is row
 * */

const SideNavBarItem = ({ buttonText, img }: TSideNavBatItem) => {
  const { handleSetSelectedSideNavBarItem, flexDirection } = useContext(SiteNavigationContext)
  return (
        <SideNavBarItemContainer onClick={() => handleSetSelectedSideNavBarItem(buttonText)}
                                 flexDirection={flexDirection}>
            {img
              ? flexDirection === 'row'
                ? <SideNavBarItemContainerImg src={img} alt="img icon"/>
                : <SideNavBarItemCategoryContainerImg src={img} alt="img icon"/>
              : null}
            <SideNavBarItemButton
                textAlign={flexDirection === 'column' ? 'center' : 'left'}>{buttonText}</SideNavBarItemButton>
        </SideNavBarItemContainer>
  )
}

export default SideNavBarItem
