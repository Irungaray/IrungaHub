import React from 'react'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/noUser.png'

const Header = () => (
    <header className="header">
    <img className="header__img" src={logo} alt="Logo de antiguo proyector" />
    <h1 className="header__title">iRUNGAhUB</h1>

    <div className="header__menu">
        <div className="header__menu--profile">
            <div className="profile--p">
              <p>Ingresar</p>
            </div>
            <img src={userIcon} alt="noUser" />
        </div>

        <ul>
            <li><a href="login.html">Iniciar sesión</a></li>
            <li><a href="register.html">Registrarse</a></li>
        </ul>
    </div>
</header>
)

export default Header