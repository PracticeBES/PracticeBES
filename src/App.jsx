import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import MainPage from "./components/pages/MainPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./style/app.scss";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/main">
                    <MainPage />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Redirect to={"/main"} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
