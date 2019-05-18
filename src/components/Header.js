import React from "react";
import logo from '../pics/Logo.png';

const Header = () => (
    <div className="header">
        <h1 className="header__title">Idle Time Insertion App</h1>
        <img alt="Logo" className="logo" src={logo} />
    </div>
);

export default Header;