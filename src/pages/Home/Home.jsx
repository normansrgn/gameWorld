import React, { useState } from "react";

import "./home.scss";

import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import games from "../../components/GameCard/cards";

import Card from "../../components/GameCard/Card";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const handleCategoryChange = (category) => {
        setSelectedCategory((prev) => (prev === category ? "all" : category));
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredGames = games
        .slice(0, 8)
        .filter((game) =>
            (selectedCategory === "all" || game.category === selectedCategory) &&
            game.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <>
            <div className="home">
                <Container className="home__container">

                    <div className="home__title">
                        Компьютерные игры — это видеоигры, которые запускаются и играются на компьютерах. Они могут быть одиночными или многопользовательскими и охватывают широкий спектр жанров, таких как экшн, приключения, стратегии, ролевые игры и симуляторы. Игроки взаимодействуют с виртуальными мирами, управляя персонажами или объектами, выполняя задачи, решая головоломки и соревнуясь с другими игроками. Компьютерные игры часто включают элементы графики, звука и сюжета, что делает их увлекательным способом развлечения и обучения.
                    </div>

                    <div className="home__fcont">

                        <div className="home__populargames">
                            <div className="home__popularTitle">Игры обладающие большой популярностью</div>
                            <div className="home__filter-search">
                                <div className="home__filters">
                                    {["all", "Экшн", "Стратегии", "Шутеры"].map((category) => (
                                        <label key={category} className="home__filter-label">
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategory === category}
                                                onChange={() => handleCategoryChange(category)}
                                            />
                                            {category}
                                        </label>
                                    ))}
                                </div>
                                <input
                                    type="text"
                                    className="home__search"
                                    placeholder="Поиск игр..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <Row>
                                {filteredGames.map((game) => (
                                    <Card key={game.id} title={game.title} img={game.img} description={game.description} id={game.id} />
                                ))}
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}