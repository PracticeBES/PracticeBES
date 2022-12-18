import React, { useState } from "react";
import Arrow from "../../../icon/Arrow";
import Book from "../../../icon/Book";
import "./card_content.scss";

const CardContent = ({ header, descr }) => {
    const [status, setStatus] = useState(true);

    const switcher = () => {
        if (status === true) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    };
    const renderItem = (arr) => {
        let count = 0;
        const items = arr.map((i) => {
            let logo = "";
            let arrow = "";
            if (i.slice(0, 3) === "svg") {
                arrow = <Arrow />;
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
                <div
                    className={"card_content__wrap_content"}
                    key={count++ + Date.now()}
                >
                    <div className="card_content__wrap_content__img">
                        {logo}
                    </div>
                    <p className="card_content__wrap_content__text">
                        {arrow}
                        {i}
                    </p>
                </div>
            );
        });
        return <div className="descr">{items}</div>;
    };
    const items = renderItem(descr);

    let clazz = status ? "card_content__wrap" : "card_content__wrap_hidden";

    return (
        <section className="card_content">
            <header className="card_content__header">{header}</header>
            <div className={clazz}>{items}</div>
            <div className={"card_content__footer"}>
                <button onClick={switcher} className="card_content__footer_btn">
                    Прочитано
                </button>
            </div>
        </section>
    );
};

export default CardContent;
