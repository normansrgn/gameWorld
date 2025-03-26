import React from "react";

import "./Basket.scss";

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Basket() {
    return (
        <>
            <div className="basket">
                <Container className="basket__container">
                    <h1>Корзина</h1>
                </Container>
            </div>
        </>
    );
}