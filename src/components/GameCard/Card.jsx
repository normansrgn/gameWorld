import React from "react";
import { useNavigate } from "react-router-dom";
import "./card.scss";

export default function Card({ title, img, description, id }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        console.log("Navigating to product with id:", id); // Лог для проверки
        navigate(`/product/${id}`); // Передаем id товара в URL
    };

    return (
        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="card" >
                <div className="card__img">
                    <img src={img} alt={title} />
                </div>
                <div className="card__text">
                    <div className="card__title">{title}</div>
                    <button className="card__btn" onClick={handleCardClick}>Подробнее</button>
                </div>
            </div>
        </div>
    );
}