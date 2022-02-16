import React from 'react'
import '../../../styles/NavSecond/NavSecond.css'

import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { TNavBarSecondPart } from './d'
import {
  NavSecondPartContainer,
  NavSecondPartMenuBody,
  NavSecondPartMenuBodyButton,
  NavSecondPartMenuBodyLink
} from './style'

const NavBarSecondPart = ({ setNavRightOpen, navRightOpen }: TNavBarSecondPart) => {
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

                <NavSecondPartMenuBodyLink href="/onama">O NAMA</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink href="/galerija"> GALERIJA</NavSecondPartMenuBodyLink>
                <NavSecondPartMenuBodyLink href="/kontakt"> KONTAKT</NavSecondPartMenuBodyLink>
            </NavSecondPartMenuBody>
        </NavSecondPartContainer>
  )
}

export default NavBarSecondPart
