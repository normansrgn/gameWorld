import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGamepad, FaArrowRight } from "react-icons/fa";
import "./card.scss";

export default function Card({ title, img, description, id }) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
            <div className="game-card" onClick={handleCardClick}>
                <div className="game-card__image">
                    <img src={img} alt={title} className="game-card__img" />
                    <div className="game-card__overlay"></div>
                </div>
                <div className="game-card__content">
                    <div className="game-card__header">
                        <FaGamepad className="game-card__icon" />
                        <h3 className="game-card__title">{title}</h3>
                    </div>
                    <p className="game-card__description">{description.substring(0, 100)}...</p>
                    <button className="game-card__button">
                        Подробнее <FaArrowRight className="game-card__arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}