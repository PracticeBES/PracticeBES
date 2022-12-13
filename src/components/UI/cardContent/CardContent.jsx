import React from "react";
import Arrow from "../../../icon/Arrow";
import Book from "../../../icon/Book";
import "./card_content.scss";

const CardContent = ({ header, descr }) => {
    const renderItem = (arr) => {
        let count = 0;
        const items = arr.map((i) => {
            let logo = "";
            if (i.slice(0, 3) === "svg") {
                logo = <Arrow />;
                i = i.slice(3);
            }
            if (i.slice(0, 3) === "log") {
                logo = <Book />;
                i = i.slice(3);
            }
            if (i.slice(0, 3) === "ita") {
                i = i.slice(3);
                i = <span>{i}</span>;
            }
            return (
                <p key={count++ + Date.now()}>
                    {logo}
                    {i}
                </p>
            );
        });
        return <div className="descr">{items}</div>;
    };

    const items = renderItem(descr);
    return (
        <section className="card_content">
            <header className="card_content__header">{header}</header>
            <div className="card_content__wrap">{items}</div>
        </section>
    );
};

export default CardContent;
