import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__link">
                <Link className="link" to="/PracticeBES/build/main">
                    Главная
                </Link>
                <Link className="link" to="/PracticeBES/build/about">
                    Тест
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
