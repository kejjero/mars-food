import '../scss/app.scss'
import Header from "./Header";
import {Routes, Route} from "react-router-dom";
import BuyPopup from "./BuyPopup";
import Footer from "./Footer"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart/Cart";
import backgroundSpace from "../images/background_space.svg"
import React from "react";

const App = () => {
    return (
        <>
            <div className="wrapper">
                <img className="background-space" src={backgroundSpace} alt=""/>
                <Header/>
                <main className="content">
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="*" element={<NotFound/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>
            <BuyPopup/>
        </>
    )
}

export default App;

