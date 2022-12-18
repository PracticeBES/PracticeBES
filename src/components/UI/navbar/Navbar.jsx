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
                <Link className="link" to="/PracticeBES/build/firstkurs">
                    1 курс
                </Link>
                <Link className="link" to="/PracticeBES/build/secondkurs">
                    2 курс
                </Link>
                <Link className="link" to="/PracticeBES/build/thirdkurs">
                    3 курс
                </Link>
                <Link className="link" to="/PracticeBES/build/fourthkurs">
                    4 курс
                </Link>
                <Link className="link" to="/PracticeBES/build/utility">
                    Утилита
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
