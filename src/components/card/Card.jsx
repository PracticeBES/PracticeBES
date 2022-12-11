import React from "react";
import Pdf from "../../icon/Pdf";
import Word from "../../icon/Word";
import "./card.scss";

const Card = ({ header, arrayFiles }) => {
    const downloads = [];
    const viev = [];
    return (
        <section className="card">
            <header className="card__header">{header}</header>
            <div className="card__downloads">
                <div className="card__downloads__left">
                    <span>Скачать</span>
                    <ol>
                        <li>
                            <Word />
                            <a
                                download
                                href="https://vk.com/doc199958883_654996311?hash=WSqND8vp5uhWqAwQIrMNmxjhdzp8y9VRUTja9tFI9z8&dl=itLtcwzoPabEyM0XM9PO8PqFSLnQR0vT3SGcoo9KUyH"
                            >
                                {arrayFiles[0]}
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="card__downloads__right">
                    <span>Просмотреть</span>
                    <ol>
                        <li>
                            <a target="_blank" href="./downloads/2.pdf">
                                111111111111111111111111
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default Card;
