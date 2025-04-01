import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { auth } from "../../../firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaSignInAlt, FaUserPlus } from "react-icons/fa";

import "./Auth.scss";

export default function Auth() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser) {
            navigate("/profile");
        }
    }, [navigate]);

    const handleAuth = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isRegistering) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                await updateProfile(userCredential.user, {
                    displayName: name,
                    phoneNumber: phone,
                });
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            navigate("/profile");
        } catch (error) {
            setError(getErrorMessage(error.code));
        } finally {
            setLoading(false);
        }
    };

    const getErrorMessage = (code) => {
        switch(code) {
            case "auth/email-already-in-use":
                return "Этот email уже используется";
            case "auth/invalid-email":
                return "Неверный формат email";
            case "auth/weak-password":
                return "Пароль должен содержать минимум 6 символов";
            case "auth/user-not-found":
                return "Пользователь не найден";
            case "auth/wrong-password":
                return "Неверный пароль";
            default:
                return "Произошла ошибка. Попробуйте снова";
        }
    };

    return (
        <div className="auth-page">
            <Container className="d-flex justify-content-center align-items-center min-vh-100">
                <Card className="auth-card shadow-lg">
                    <Card.Body className="p-4 p-md-5">
                        <div className="text-center mb-4">
                            <h2 className="auth-title">
                                {isRegistering ? (
                                    <>
                                        <FaUserPlus className="me-2" />
                                        Регистрация
                                    </>
                                ) : (
                                    <>
                                        <FaSignInAlt className="me-2" />
                                        Вход
                                    </>
                                )}
                            </h2>
                            <p className="text-muted">
                                {isRegistering ? "Создайте новый аккаунт" : "Войдите в свой аккаунт"}
                            </p>
                        </div>

                        {error && (
                            <Alert variant="danger" className="text-center">
                                {error}
                            </Alert>
                        )}

                        <Form onSubmit={handleAuth}>
                            {isRegistering && (
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <FaUser className="me-2" />
                                        Имя
                                    </Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Ваше имя" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                            )}

                            {isRegistering && (
                                <Form.Group className="mb-3">
                                    <Form.Label>
                                        <FaPhone className="me-2" />
                                        Телефон
                                    </Form.Label>
                                    <Form.Control 
                                        type="tel" 
                                        placeholder="+7 (___) ___-__-__" 
                                        value={phone} 
                                        onChange={(e) => setPhone(e.target.value)} 
                                        required 
                                    />
                                </Form.Group>
                            )}

                            <Form.Group className="mb-3">
                                <Form.Label>
                                    <FaEnvelope className="me-2" />
                                    Email
                                </Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="example@mail.com" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>
                                    <FaLock className="me-2" />
                                    Пароль
                                </Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="••••••••" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                                {isRegistering && (
                                    <Form.Text className="text-muted">
                                        Минимум 6 символов
                                    </Form.Text>
                                )}
                            </Form.Group>

                            <Button 
                                variant="primary" 
                                type="submit" 
                                className="w-100 auth-btn"
                                disabled={loading}
                            >
                                {loading ? (
                                    <Spinner animation="border" size="sm" />
                                ) : isRegistering ? (
                                    "Зарегистрироваться"
                                ) : (
                                    "Войти"
                                )}
                            </Button>
                        </Form>

                        <div className="text-center mt-4">
                            <p className="text-muted mb-0">
                                {isRegistering ? "Уже есть аккаунт?" : "Нет аккаунта?"}
                                <Button 
                                    variant="link" 
                                    onClick={() => setIsRegistering(!isRegistering)}
                                    className="switch-mode-btn"
                                >
                                    {isRegistering ? "Войти" : "Зарегистрироваться"}
                                </Button>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}