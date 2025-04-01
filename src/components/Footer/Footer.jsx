import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="footer-content">
                    <Col md={4} className="footer-section">
                        <h5 className="footer-title">GameWorld</h5>
                        <p className="footer-text">
                            Лучший выбор игр для всех платформ. Мы предлагаем самые популярные новинки и классические хиты.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><FaFacebook /></a>
                            <a href="#" className="social-link"><FaTwitter /></a>
                            <a href="#" className="social-link"><FaInstagram /></a>
                            <a href="#" className="social-link"><FaYoutube /></a>
                        </div>
                    </Col>

                    <Col md={4} className="footer-section">
                        <h5 className="footer-title">Быстрые ссылки</h5>
                        <ul className="footer-links">
                            <li><a href="/">Главная</a></li>
                            <li><a href="/games">Каталог игр</a></li>
                            <li><a href="/about">О нас</a></li>
                            <li><a href="/contact">Контакты</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </Col>

                    <Col md={4} className="footer-section">
                        <h5 className="footer-title">Контакты</h5>
                        <ul className="contact-info">
                            <li>
                                <FaMapMarkerAlt className="contact-icon" />
                                <span>г. Москва, ул. Примерная, 123</span>
                            </li>
                            <li>
                                <FaPhone className="contact-icon" />
                                <span>+7 (123) 456-78-90</span>
                            </li>
                            <li>
                                <FaEnvelope className="contact-icon" />
                                <span>info@gameworld.ru</span>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <Row>
                        <Col className="text-center">
                            <p className="copyright">
                                &copy; {new Date().getFullYear()} GameWorld. Все права защищены.
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
}