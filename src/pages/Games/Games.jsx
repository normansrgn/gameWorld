import React, { useState } from "react";
import "./games.scss";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import games from "../../components/GameCard/cards"; // Импорт массива игр
import Card from "../../components/GameCard/Card";

export default function Games() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all"); // Добавлено состояние для категории

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category); // Функция для смены категории
    };

    const filteredGames = games.filter((game) =>
        (selectedCategory === "all" || game.category === selectedCategory) &&
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="games">


                <Container className="games__container">
                    <div className="games__title">Список игр</div>

                    <div className="games__filters">
                        <div className="games__filter-search">
                            <input
                                type="text"
                                className="games__search"
                                placeholder="Поиск игр..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                        {/* {["all", "Экшн", "Стратегии", "Шутеры"].map((category) => (
                            <label key={category} className="games__filter-label">
                                <input
                                    type="radio"
                                    name="category"
                                    checked={selectedCategory === category}
                                    onChange={() => handleCategoryChange(category)}
                                />
                                {category}
                            </label>
                        ))} */}
                    </div>
                    <Row>
                        {games.map((game) => (
                            <Card
                                key={game.id}
                                id={game.id}
                                title={game.title}
                                price={game.price}
                                img={game.img}
                                description={game.description}
                            />
                        ))}game
                    </Row>
                </Container>
            </div>
        </>
    );
}