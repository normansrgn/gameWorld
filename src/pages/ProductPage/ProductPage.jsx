import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import games from "../../components/GameCard/cards";  // Импортируем массив с товарами
import "./ProductPage.scss";

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ProductPage() {
    const { id } = useParams();
    console.log("Product ID from URL:", id);

    // Находим товар по id
    const product = games.find(game => game.id.toString() === id);

    if (!product) {
        return <div>Товар не найден</div>;
    }

    const addToBasket = () => {
        const basket = JSON.parse(localStorage.getItem("basket")) || [];
        basket.push(product);
        localStorage.setItem("basket", JSON.stringify(basket));
    };

    return (
        <div className="productPage">
            <Container className="productPage__container">
                <div className="productPage__img">
                    <img src={product.img} alt={product.title} />
                </div>
                <div className="productPage__text">
                    <div className="productPage__titleblock">
                        <div className="productPage__title">{product.title}</div>
                        <div className="productPage__price">{product.price} ₽</div>
                    </div>
                    <div className="productPage__d">
                        <div className="productPage__disTitle">О игре</div>
                        <div className="productPage__description">{product.description}</div>
                        <div>
                            <div className="productPage__disTitle">Где скачать:</div> {product.download}
                        </div>
                        <div>
                            <div className="productPage__disTitle">Системные требования:</div>
                            <ul>
                                <li>ОС:{product.systemRequirements.OS}</li>
                                <li>Процессор: {product.systemRequirements.Processor}</li>
                                <li>Оперативная память: {product.systemRequirements.Memory}</li>
                                <li>Видеокарта: {product.systemRequirements.Graphics}</li>
                                <li>Место на диске: {product.systemRequirements.Storage}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}