import React from 'react'
import { TSideNavBatItem } from './d'
import { SideNavBarItemButton, SideNavBarItemContainer, SideNavBarItemContainerImg } from './style'

const SideNavBarItem = ({ buttonName, setSelected, img, flexDirection }: TSideNavBatItem) => {
  return (
        <SideNavBarItemContainer onClick={() => setSelected(buttonName)} flexDirection={flexDirection}>
            {img && flexDirection === 'row'
              ? <SideNavBarItemContainerImg src={img} alt="img icon"/>
              : <img src={img} alt="img icon"/>}
            <SideNavBarItemButton
                textAlign={flexDirection === 'column' ? 'center' : 'left'}>{buttonName}</SideNavBarItemButton>
        </SideNavBarItemContainer>
  )
}

export default SideNavBarItem
