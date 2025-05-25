import React, { useState } from "react";
import { Container, Row, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { FaSearch, FaFilter, FaSlidersH, FaGamepad, FaRunning, FaChess, FaFighterJet } from "react-icons/fa";
import games from "../../components/GameCard/cards";
import Card from "../../components/GameCard/Card";
import "./games.scss";

export default function Games() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showFilters, setShowFilters] = useState(false);

    const categories = [
        { value: "all", label: "Все игры", icon: <FaGamepad /> },
        { value: "Экшн", label: "Экшн", icon: <FaRunning /> },
        { value: "Стратегии", label: "Стратегии", icon: <FaChess /> },
        { value: "Шутеры", label: "Шутеры", icon: <FaFighterJet /> },
    ];

    const filteredGames = games.filter((game) =>
        (selectedCategory === "all" || game.category === selectedCategory) &&
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="games-page">
            <Container className="py-5">
                <h1 className="games-title text-center mb-4">
                    <FaGamepad className="me-3" />
                    Каталог игр
                </h1>

                <div className="games-controls mb-5">
                    <Form.Group className="search-box">
                        <div className="search-icon">
                            <FaSearch />
                        </div>
                        <Form.Control
                            type="search"
                            placeholder="Поиск игр..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                        <ButtonGroup className="filter-toggle ms-3">
                            <ToggleButton
                                id="toggle-filters"
                                type="checkbox"
                                variant="outline-primary"
                                checked={showFilters}
                                value="1"
                                onChange={() => setShowFilters(!showFilters)}
                            >
                                <FaFilter className="filter-icon" />
                                <FaSlidersH className="sliders-icon" />
                            </ToggleButton>
                        </ButtonGroup>
                    </Form.Group>

                    {showFilters && (
                        <div className="category-filters mt-3">
                            <ButtonGroup className="w-100">
                                {categories.map((category) => (
                                    <ToggleButton
                                        key={category.value}
                                        id={`category-${category.value}`}
                                        type="radio"
                                        variant="outline-primary"
                                        name="category"
                                        value={category.value}
                                        checked={selectedCategory === category.value}
                                        onChange={() => setSelectedCategory(category.value)}
                                    >
                                        {category.icon}
                                        <span className="ms-2">{category.label}</span>
                                    </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </div>
                    )}
                </div>

                {filteredGames.length === 0 ? (
                    <div className="no-results text-center py-5">
                        <h4>Игры не найдены</h4>
                        <p>Попробуйте изменить параметры поиска</p>
                    </div>
                ) : (
                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {filteredGames.map((game) => (
                            <Card
                                key={game.id}
                                id={game.id}
                                title={game.title}
                                price={game.price}
                                img={game.img}
                                description={game.description}
                                category={game.category}
                            />
                        ))}
                    </Row>
                )}
            </Container>
        </div>
    );
}