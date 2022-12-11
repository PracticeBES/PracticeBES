import React from "react";
import "./card_list.scss";

const cardList = (props) => {
    return <div className="main__content">{props.children}</div>;
};

export default cardList;
