import React, { useEffect, useState } from "react";
import { Container, Button, Card, Spinner, Alert, ListGroup } from "react-bootstrap";
import { auth } from "../../../firebaseconfig";
import { signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaSignOutAlt, FaHeart } from "react-icons/fa";
import games from "../../components/GameCard/cards";

import "./Profile.scss";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    // Basic game-themed SVG avatar (pixelated character head)
    const defaultAvatar = (
        <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-circle"
        >
            <rect width="24" height="24" fill="#e0e0e0" />
            <path
                d="M7 6H17V10H7V6ZM8 7H9V8H8V7ZM15 7H16V8H15V7ZM10 12H14V14H10V12ZM11 16H13V18H11V16Z"
                fill="#333333"
            />
            <path
                d="M6 5H18V11H6V5ZM7 6V10H17V6H7Z"
                fill="#666666"
            />
        </svg>
    );

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser({
                    name: currentUser.displayName || "Не указано",
                    email: currentUser.email || "Не указано",
                    phone: currentUser.phoneNumber || "Не указано",
                    photo: defaultAvatar, // Set SVG as default avatar
                    uid: currentUser.uid,
                });
            }
            setLoading(false);
        });

        // Загрузка избранных игр
        const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(favoriteIds);

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/auth");
        } catch (error) {
            console.error("Ошибка при выходе:", error);
        }
    };

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter((favId) => favId !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    return (
        <div className="profile-page">
            <Container className="profile__container py-5">
                <h2 className="profile__title text-center mb-5">Мой профиль</h2>

                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3">Загрузка данных...</p>
                    </div>
                ) : user ? (
                    <div className="profile__layout">
                        {/* Левая колонка - Профиль */}
                        <div className="profile__column profile__column--left">
                            <Card className="profile-card shadow">
                                <Card.Body className="p-4">
                                    <div className="profile__avatar-container text-center mb-4">
                                        <div className="profile-avatar mx-auto">
                                            {user.photo}
                                        </div>
                                        <h3 className="mt-3">{user.name}</h3>
                                    </div>

                                    <div className="profile-info">
                                        <div className="info-item d-flex align-items-center mb-3">
                                            <div className="icon-circle bg-primary">
                                                <FaUser className="text-white" />
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="mb-0">Имя пользователя</h6>
                                                <p className="mb-0">{user.name}</p>
                                            </div>
                                        </div>

                                        <div className="info-item d-flex align-items-center mb-3">
                                            <div className="icon-circle bg-success">
                                                <FaEnvelope className="text-white" />
                                            </div>
                                            <div className="ms-3">
                                                <h6 className="mb-0">Email</h6>
                                                <p className="mb-0">{user.email}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center mt-4">
                                        <Button
                                            variant="danger"
                                            onClick={handleLogout}
                                            className="logout-btn"
                                        >
                                            <FaSignOutAlt className="me-2" />
                                            Выйти из аккаунта
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                        {/* Правая колонка - Избранное */}
                        <div className="profile__column profile__column--right">
                            <Card className="favorites-card shadow">
                                <Card.Header className="favorites-card__header">
                                    <h5 className="mb-0">
                                        <FaHeart className="me-2 text-danger" />
                                        Избранное ({favorites.length})
                                    </h5>
                                </Card.Header>
                                <Card.Body>
                                    {favorites.length === 0 ? (
                                        <Alert variant="info" className="text-center">
                                            У вас пока нет избранных игр.{" "}
                                            <Link to="/">Найдите игры</Link> для добавления!
                                        </Alert>
                                    ) : (
                                        <ListGroup variant="flush" className="favorites-list">
                                            {favorites.map((favId) => {
                                                const game = games.find((g) => g.id.toString() === favId);
                                                if (!game) return null;
                                                return (
                                                    <ListGroup.Item key={favId} className="favorites-list__item">
                                                        <div className="d-flex align-items-center">
                                                            <Link
                                                                to={`/product/${game.id}`}
                                                                className="favorites-list__image-link"
                                                            >
                                                                <img
                                                                    src={game.img}
                                                                    alt={game.title}
                                                                    className="favorites-list__image"
                                                                />
                                                            </Link>
                                                            <div className="favorites-list__info flex-grow-1">
                                                                <Link
                                                                    to={`/product/${game.id}`}
                                                                    className="favorites-list__title"
                                                                >
                                                                    {game.title}
                                                                </Link>
                                                                <p className="favorites-list__price mb-0">
                                                                    {game.price} ₽
                                                                </p>
                                                            </div>
                                                            <Button
                                                                variant="outline-danger"
                                                                size="sm"
                                                                onClick={() => removeFavorite(favId)}
                                                                className="favorites-list__remove-btn"
                                                            >
                                                                Удалить
                                                            </Button>
                                                        </div>
                                                    </ListGroup.Item>
                                                );
                                            })}
                                        </ListGroup>
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <p>Пользователь не авторизован</p>
                        <Button
                            variant="primary"
                            onClick={() => navigate("/auth")}
                            className="auth-btn"
                        >
                            Войти в аккаунт
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    );
}