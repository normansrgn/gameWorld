import React from "react";

import "./header.scss";

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Link } from "react-router-dom";

import logo from "./logo.png"

export default function Header() {

    return (

        <>
            <header className="header">
                <Container className="header__container">
                    <div className="header__logo">
                        <img src={logo} alt="" />

                    </div>

                    <nav className="header__nav">
                        <ol>
                            <Link to="/">
                                <li>Главная</li>
                            </Link>
                            <Link to="/games">
                                <li>Игры</li>
                            </Link>
                            <li>Мой профиль</li>
                        </ol>
                    </nav>

                </Container>

            </header>
        </>
    )
}