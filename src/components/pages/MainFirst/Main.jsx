import React from "react";
import Card from "../../UI/card/Card";
import CardContent from "../../UI/cardContent/CardContent";
import CardList from "./components/cardList/CardList";
import Header from "../../UI/header/Header";
import Main from "./components/main/Main";

const MainPage = ({ arrayFiles, arrayContent }) => {
    console.log(arrayContent);
    return (
        <Main>
            <Header />
            <CardList>
                <CardContent
                    arrayContent={[arrayContent[0]]}
                    header={"Залупа"}
                />
                {/* <Card
                    header={"Учебная практика"}
                    arrayFiles={[arrayFiles[0], arrayFiles[1], arrayFiles[4]]}
                />
                <Card
                    header={"Производственная практика"}
                    arrayFiles={[
                        arrayFiles[0],
                        arrayFiles[1],
                        arrayFiles[2],
                        arrayFiles[3],
                    ]}
                /> */}
            </CardList>
        </Main>
    );
};

export default MainPage;
