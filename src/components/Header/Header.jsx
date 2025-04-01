import React from "react";
import "./header.scss";
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from "react-router-dom";
import logo from "./logo.png";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { MdHome } from "react-icons/md";
export default function Header() {
    return (
        <header className="header">
            <Container className="header__container">
                <Link to="/" className="header__logo-link">
                    <div className="header__logo">
                        <img src={logo} alt="GameStore Logo" />
                        <span className="header__logo-text">ИгроМир</span>
                    </div>
                </Link>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">
                            <NavLink to="/" className="header__nav-link" activeClassName="active">
                                <MdHome className="header__nav-icon" />
                                <span>Главная</span>
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink to="/games" className="header__nav-link" activeClassName="active">
                                <IoGameController className="header__nav-icon" />
                                <span>Игры</span>
                            </NavLink>
                        </li>
                        <li className="header__nav-item">
                            <NavLink to="/auth" className="header__nav-link" activeClassName="active">
                                <FaUserCircle className="header__nav-icon" />
                                <span>Профиль</span>
                            </NavLink>
                        </li>
                     
                    </ul>
                </nav>
            </Container>
        </header>
    )
}