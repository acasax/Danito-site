import React from 'react'
import NavBarFirstPart from './NavBarFirstPart'
import NavBarContextContainer from './context'
import NavBarSecondPart from './NavBarSecondPart'
import NavBarProductsPart from './NavBarProductsPart'

const NavBar = () => {
  return (
      <NavBarContextContainer>
        <NavBarFirstPart/>
        <NavBarSecondPart/>
        <NavBarProductsPart/>
      </NavBarContextContainer>
  )
}

export default NavBar
