import React, { useState, useEffect } from "react";
import { Container, Row, Form, ButtonGroup, ToggleButton } from "react-bootstrap";
import { FaSearch, FaGamepad, FaRunning, FaChess, FaFighterJet, FaStar } from "react-icons/fa";
import games from "../../components/GameCard/cards";
import Card from "../../components/GameCard/Card";
import "./home.scss";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(true); // Set to true to open search on load

  const categories = [
    { value: "all", label: "Все игры", icon: <FaGamepad /> },
    { value: "Экшн", label: "Экшн", icon: <FaRunning /> },
    { value: "Стратегии", label: "Стратегии", icon: <FaChess /> },
    { value: "Шутеры", label: "Шутеры", icon: <FaFighterJet /> },
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.currentTarget.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const filteredGames = games
    .filter(
      (game) =>
        (selectedCategory === "all" || game.category === selectedCategory) &&
        game.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 8);

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Добро пожаловать в мир игр</h1>
          <p className="hero-description">
            Компьютерные игры — это видеоигры, которые запускаются и играются на компьютерах. 
            Они могут быть одиночными или многопользовательскими и охватывают широкий спектр жанров, 
            таких как экшн, приключения, стратегии, ролевые игры и симуляторы.
          </p>
        </div>
      </div>

      <Container className="games-section">
        <div className="section-header">
          <h2 className="section-title">
            <FaStar className="me-2" />
            Популярные игры
          </h2>

          <div className="games-controls">
            <div className="search-box">
              <button
                className={`search-toggle-btn ${isSearchOpen ? "active" : ""}`}
                onClick={toggleSearch}
                aria-label={isSearchOpen ? "Закрыть поиск" : "Открыть поиск"}
              >
                <FaSearch className="search-icon" />
              </button>
              <Form.Group className={`search-input-container ${isSearchOpen ? "open" : ""}`}>
                <Form.Control
                  type="search"
                  placeholder="Поиск игр..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </Form.Group>
            </div>

            <ButtonGroup className="category-filters">
              {categories.map((category) => (
                <ToggleButton
                  key={category.value}
                  id={`category-${category.value}`}
                  type="radio"
                  variant="outline-light"
                  name="category"
                  value={category.value}
                  checked={selectedCategory === category.value}
                  onChange={handleCategoryChange}
                >
                  {category.icon}
                  <span className="ms-2">{category.label}</span>
                </ToggleButton>
              ))}
            </ButtonGroup>
          </div>
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