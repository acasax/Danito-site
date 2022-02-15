import React from 'react'
import '../../../styles/NavSecond/NavSecond.css'
import { Link } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const NavSecondPart = ({ setNavRightOpen, navRightOpen }: any) => {
  return (
        <div className="NavSecond">
            <div className="Nav__body">
                <div className="Nav__bodyMenu">
                    {navRightOpen
                      ? (
                        <ArrowBackIosIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }}/>
                        )
                      : (
                        <MenuIcon onClick={() => setNavRightOpen(!navRightOpen)} sx={{ fontSize: 35 }}/>
                        )}

                    <button onClick={() => setNavRightOpen(!navRightOpen)}>PROIZVODI</button>

                    <Link to="/onama">O NAMA</Link>
                    <Link to="/galerija"> GALERIJA</Link>
                    <Link to="/kontakt"> KONTAKT</Link>
                </div>
            </div>
        </div>
  )
}

export default NavSecondPart
