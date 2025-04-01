import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Games from "./pages/Games/Games";
import ProductPage from "./pages/ProductPage/ProductPage";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import ScrollToTop from "./components/ScrollTop/ScrollTop";

export default function App() {
  const location = useLocation();

  return (
    <>
    <ScrollToTop />
      <Header />
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/product/:id" element={<ProductPage />} /> {/* Обратите внимание на :id */}
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </main>
      <Footer />

    </>
  )
}


