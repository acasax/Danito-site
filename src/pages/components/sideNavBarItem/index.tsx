import React from 'react'
import { TSideNavBatItem } from './d'
import { SideNavBarItemButton, SideNavBarItemContainer, SideNavBarItemContainerImg } from './style'

/**
 * About Component
 *
 * This is component for display side nav menu with category of products and products
 *
 * buttonText - text to display on button
 * setSelected - function to get path where go
 * img - src to image for display
 * flexDirection - The way to display item, column display big image and under text, row display small image and text right from image
 *
 * in this case subcategory is column display other is row
 * */

const SideNavBarItem = ({ buttonText, setSelected, img, flexDirection }: TSideNavBatItem) => {
  return (
        <SideNavBarItemContainer onClick={() => setSelected(buttonText)} flexDirection={flexDirection}>
            {img && flexDirection === 'row'
              ? <SideNavBarItemContainerImg src={img} alt="img icon"/>
              : <img src={img} alt="img icon"/>}
            <SideNavBarItemButton
                textAlign={flexDirection === 'column' ? 'center' : 'left'}>{buttonText}</SideNavBarItemButton>
        </SideNavBarItemContainer>
  )
}

export default SideNavBarItem
