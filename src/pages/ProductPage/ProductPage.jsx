import React from "react";
import { useParams } from "react-router-dom";
import games from "../../components/GameCard/cards";  // Импортируем массив с товарами
import "./ProductPage.scss";

export default function ProductPage() {
    const { id } = useParams();  // Получаем id из URL
    console.log("Product ID from URL:", id);  // Проверяем, что id выводится в консоль

    // Находим товар по id
    const product = games.find(game => game.id.toString() === id);  // Преобразуем id в строку для сравнения

    if (!product) {
        return <div>Товар не найден</div>;  // Покажет сообщение, если товар не найден
    }

    return (
        <div className="product-page">
            <h1>{product.title}</h1>
            <img src={product.img} alt={product.title} />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    );
}