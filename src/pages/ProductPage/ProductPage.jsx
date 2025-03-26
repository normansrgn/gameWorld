import React from "react";
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

    return (
        <>

            <div className="productPage">
                <Container className="productPage__container">
                    <div className="productPage__img">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="productPage__text">
                        <div className="productPage__titleblock">
                            <div className="productPage__title">{product.title}</div>
                            <div className="productPage__price">{product.price} ₽</div>
                            <button className="productPage__btn">Добавить в корзину</button>
                        </div>
                        <div className="productPage__d">
                            <div className="productPage__disTitle">О товаре</div>
                            <div className="productPage__description">{product.description}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}