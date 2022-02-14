import React from 'react'
import '../../../../styles/NavFirst/NavFirst.css'
import Logo from '../../../../constants/img/Logo.png'

const NavFirst = () => {
  return (
    <div className="NavFirst">
      <div className="Nav__header">
        <a className="Nav__headerLogo" href="/">
          <img src={Logo} alt="datito logo" />
          <div className="Nav__headerLogoText">
            <h3>DANITO</h3>
            <p>construction</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default NavFirst
