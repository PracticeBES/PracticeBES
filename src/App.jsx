import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import MainPage from "./components/pages/Main/Main";
import Navbar from "./components/UI/navbar/Navbar";
import Footer from "./components/UI/footer/Footer";
import "./style/app.scss";

function App() {
    const arrayFiles = [
        {
            url: "https://vk.com/doc199958883_654996311?hash=WSqND8vp5uhWqAwQIrMNmxjhdzp8y9VRUTja9tFI9z8&dl=itLtcwzoPabEyM0XM9PO8PqFSLnQR0vT3SGcoo9KUyH",
            nameFiles: "21.10.2021_МУ_оформление_отчетов.docx",
        },
        {
            url: "https://vk.com/doc199958883_654996321?hash=Sbu7eBm9Wjqgzzm9Qouw05Qjbp3905JseZVB8d4j8B8&dl=2zFAAf1zZgrC5vDMbayXT1biVmZv7WZpd4CH4zd92Eo",
            nameFiles: "Подписные_документы_Образец_Приложения.docx",
        },
        {
            url: "https://vk.com/doc199958883_654996385?hash=5xH4fMWzBIarwFmwf2aUlmuAhyuqG7msXA89Z7QysKP&dl=sRfd4HkblvKB6jRXHODpfYmjD94w6KYJIBH9lTqPozk",
            nameFiles: "РП_ПП.00_Производственная_практика.pdf",
        },
        {
            url: "https://vk.com/doc199958883_654996387?hash=diGGUd8UqNZWdEHPcz1luUwZhOXlTxxReofxg59GLXP&dl=m7si1O4cmTNWIkSy8XqkoA2wTYLnKYVhmeInEw4DIVo",
            nameFiles: "РП_ППд.01_Производственная_практика.pdf",
        },
        {
            url: "https://vk.com/doc199958883_654996393?hash=EI8c0h9fkn3ieVdDrn3oFuKslhSTZmLgdVW2hcF5jYk&dl=RrcselFvrLzprdJMesJZsLa7nCbyzwDFF2m0fjrPB1w",
            nameFiles: "РП_УП.00_Учебная_практика.pdf",
        },
    ];

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/PracticeBES/main">
                    <MainPage

                    // arrayFiles={arrayFiles}
                    />
                </Route>
                <Route path="/PracticeBES/about">
                    <About />
                </Route>
                <Redirect to={"/PracticeBES/main"} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
