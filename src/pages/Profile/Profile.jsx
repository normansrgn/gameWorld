import React, { useEffect, useState, useRef } from "react";
import { Container, Button, Card, Spinner, Form, Alert } from "react-bootstrap";
import { auth, storage } from "../../../firebaseconfig";
import { signOut, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaSignOutAlt, FaCamera, FaTimes } from "react-icons/fa";

import "./Profile.scss";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser({
                    name: currentUser.displayName || "Не указано",
                    email: currentUser.email || "Не указано",
                    phone: currentUser.phoneNumber || "Не указано",
                    photo: currentUser.photoURL || "https://via.placeholder.com/150",
                    uid: currentUser.uid
                });
            }
            setLoading(false);
        });

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

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.match('image.*')) {
            setError("Пожалуйста, выберите файл изображения");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setError("Размер файла не должен превышать 2MB");
            return;
        }

        try {
            setUploading(true);
            setError("");
            setSuccess("");

            // Загружаем файл в Firebase Storage
            const storageRef = ref(storage, `avatars/${user.uid}/${file.name}`);
            await uploadBytes(storageRef, file);

            // Получаем URL загруженного файла
            const photoURL = await getDownloadURL(storageRef);

            // Обновляем профиль пользователя
            await updateProfile(auth.currentUser, { photoURL });

            // Обновляем состояние
            setUser(prev => ({ ...prev, photo: photoURL }));
            setSuccess("Аватар успешно обновлён!");
        } catch (err) {
            console.error("Ошибка при загрузке аватара:", err);
            setError("Произошла ошибка при загрузке аватара");
        } finally {
            setUploading(false);
        }
    };

    const removeAvatar = async () => {
        try {
            setUploading(true);
            setError("");
            setSuccess("");

            // Устанавливаем стандартный аватар
            await updateProfile(auth.currentUser, { photoURL: "" });

            // Обновляем состояние
            setUser(prev => ({ ...prev, photo: "https://via.placeholder.com/150" }));
            setSuccess("Аватар удалён");
        } catch (err) {
            console.error("Ошибка при удалении аватара:", err);
            setError("Произошла ошибка при удалении аватара");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="profile-page">
            <Container className="py-5">
                <h2 className="text-center mb-5">Мой профиль</h2>

                {loading ? (
                    <div className="text-center">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-3">Загрузка данных...</p>
                    </div>
                ) : user ? (
                    <Card className="profile-card shadow">
                        <Card.Body className="p-4">
                            <div className="text-center mb-4 position-relative">
                                {/* <div className="profile-avatar mx-auto">
                                    <img 
                                        src={user.photo} 
                                        alt="Аватар" 
                                        className="rounded-circle"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/150";
                                        }}
                                    />
                                    {!uploading && (
                                        <>
                                            <button 
                                                className="avatar-upload-btn"
                                                onClick={() => fileInputRef.current.click()}
                                                title="Изменить аватар"
                                            >
                                                <FaCamera />
                                            </button>
                                            {user.photo && user.photo !== "https://via.placeholder.com/150" && (
                                                <button 
                                                    className="avatar-remove-btn"
                                                    onClick={removeAvatar}
                                                    title="Удалить аватар"
                                                >
                                                    <FaTimes />
                                                </button>
                                            )}
                                        </>
                                    )}
                                </div> */}
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                />
                                <h3 className="mt-3">{user.name}</h3>
                                {uploading && (
                                    <div className="mt-2">
                                        <Spinner animation="border" size="sm" />
                                        <span className="ms-2">Загрузка...</span>
                                    </div>
                                )}
                            </div>

                            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
                            {success && <Alert variant="success" className="mt-3">{success}</Alert>}

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

                                {/* <div className="info-item d-flex align-items-center mb-4">
                                    <div className="icon-circle bg-info">
                                        <FaPhone className="text-white" />
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-0">Телефон</h6>
                                        <p className="mb-0">{user.phone}</p>
                                    </div>
                                </div> */}
                            </div>

                            <div className="text-center mt-4">
                                <Button
                                    variant="danger"
                                    onClick={handleLogout}
                                    className="logout-btn"
                                    disabled={uploading}
                                >
                                    <FaSignOutAlt className="me-2" />
                                    Выйти из аккаунта
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                ) : (
                    <div className="text-center">
                        <p>Пользователь не авторизован</p>
                        <Button variant="primary" onClick={() => navigate("/auth")}>
                            Войти в аккаунт
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    );
}