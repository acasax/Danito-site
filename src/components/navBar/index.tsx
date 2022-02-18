import React from 'react'
import NavBarFirstPart from './NavBarFirstPart'
import NavBarContextContainer from './context'
import NavBarSecondPart from './NavBarSecondPart'

const NavBar = () => {
  return (
      <NavBarContextContainer>
        <NavBarFirstPart/>
        <NavBarSecondPart/>
      </NavBarContextContainer>
  )
}

export default NavBar
