import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth } from "../../../firebaseconfig";
import games from "../../components/GameCard/cards";  
import "./ProductPage.scss";
import { Container, Form, Button, Card, ListGroup, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductPage() {
    const { id } = useParams();
    const product = games.find(game => game.id.toString() === id);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(5);
    const [error, setError] = useState("");
    const [authChecked, setAuthChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName || "Аноним");
            }
            setAuthChecked(true);
        });

        // Загрузка комментариев с задержкой для демонстрации
        const timer = setTimeout(() => {
            const savedComments = JSON.parse(localStorage.getItem(`comments_${id}`)) || [];
            const productComments = product?.comments || [];
            setComments([...productComments, ...savedComments]);
            setIsLoading(false);
        }, 500);

        return () => {
            unsubscribe();
            clearTimeout(timer);
        };
    }, [id, product]);

    const addComment = () => {
        if (!auth.currentUser) {
            setError("Вы должны быть авторизованы для добавления комментария.");
            return;
        }
        if (newComment.trim() === "") {
            setError("Комментарий не может быть пустым.");
            return;
        }

        const commentObject = { 
            name: userName, 
            text: newComment,
            rating: rating,
            date: new Date().toLocaleDateString()
        };

        const updatedComments = [commentObject, ...comments]; // Новые комментарии сверху
        setComments(updatedComments);
        localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
        setNewComment("");
        setError("");
    };

    if (!product) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">Товар не найден</Alert>
            </Container>
        );
    }

    if (!authChecked || isLoading) {
        return (
            <Container className="mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Загрузка...</span>
                </div>
            </Container>
        );
    }

    return (
        <div className="productPage">
            <Container className="productPage__container mt-4 mb-5">
                <div className="row">
                    {/* Левая колонка - изображение */}
                    <div className="col-md-4 mb-4">
                        <Card  className="card h-100 product-image-card">
                            <Card.Img variant="top" src={product.img} alt={product.title} className="product-image" />
                        </Card>
                    </div>
                    
                    {/* Правая колонка - информация */}
                    <div className="col-md-8">
                        <Card className="mb-4 product-info-card">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <Card.Title className="mb-0 product-title">{product.title}</Card.Title>
                                    <span className="badge bg-primary product-price">{product.price} ₽</span>
                                </div>
                                
                                <Card.Subtitle className="mb-2 text-muted product-category">{product.category}</Card.Subtitle>
                                
                                <Card.Text className="mt-3 product-description">
                                    <strong>О игре:</strong> {product.description}
                                </Card.Text>
                                
                                <Card.Text className="product-download">
                                    <strong>Где скачать:</strong> {product.download}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Системные требования */}
                        <Card className="mb-4 system-requirements">
                            <Card.Header as="h5">Системные требования</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>ОС: {product.systemRequirements.OS}</ListGroup.Item>
                                <ListGroup.Item>Процессор: {product.systemRequirements.Processor}</ListGroup.Item>
                                <ListGroup.Item>Оперативная память: {product.systemRequirements.Memory}</ListGroup.Item>
                                <ListGroup.Item>Видеокарта: {product.systemRequirements.Graphics}</ListGroup.Item>
                                <ListGroup.Item>Место на диске: {product.systemRequirements.Storage}</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        {/* Комментарии */}
                        <Card className="comments-section">
                            <Card.Header as="h5">Комментарии ({comments.length})</Card.Header>
                            <Card.Body className="p-0">
                                {error && <Alert variant="danger" className="comment-error m-3">{error}</Alert>}
                                
                                {auth.currentUser ? (
                                    <div className="comment-form p-3 border-bottom">
                                        <Form.Group className="mb-3">
                                            <Form.Label>Ваш комментарий</Form.Label>
                                            <Form.Control 
                                                as="textarea" 
                                                rows={3} 
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                                placeholder="Поделитесь своим мнением об игре..."
                                                className="comment-textarea"
                                            />
                                        </Form.Group>
                                        
                                        <Form.Group className="mb-3 rating-group">
                                            <Form.Label>Оценка: <span className="rating-value">{rating}</span>/5</Form.Label>
                                            <Form.Range 
                                                min="1" 
                                                max="5" 
                                                value={rating}
                                                onChange={(e) => setRating(e.target.value)}
                                                className="rating-slider"
                                            />
                                        </Form.Group>
                                        
                                        <Button 
                                            variant="primary" 
                                            onClick={addComment}
                                            disabled={!newComment.trim()}
                                            className="submit-comment-btn"
                                        >
                                            Отправить
                                        </Button>
                                    </div>
                                ) : (
                                    <Alert variant="info" className="auth-alert m-3">
                                        Войдите в аккаунт, чтобы оставить комментарий
                                    </Alert>
                                )}

                                <div className="comments-list-container" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                                    <ListGroup variant="flush" className="comments-list">
                                        {comments.length === 0 ? (
                                            <ListGroup.Item className="no-comments p-3">
                                                Пока нет комментариев. Будьте первым!
                                            </ListGroup.Item>
                                        ) : (
                                            comments.map((comment, index) => (
                                                <ListGroup.Item key={index} className="comment-item p-3 border-bottom">
                                                    <div className="d-flex justify-content-between comment-header">
                                                        <strong className="comment-author">{comment.name}</strong>
                                                        <span className="comment-date">{comment.date}</span>
                                                    </div>
                                                    <div className="rating-stars mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <span 
                                                                key={i} 
                                                                className={i < comment.rating ? "star-filled" : "star-empty"}
                                                            >
                                                                ★
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="comment-text">{comment.text}</div>
                                                </ListGroup.Item>
                                            ))
                                        )}
                                    </ListGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </div>
    );
}