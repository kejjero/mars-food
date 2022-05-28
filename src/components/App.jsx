import '../scss/app.scss'
import Header from "./Header";
import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import PurchasePopup from "./PurchasePopup";
import Footer from "./Footer"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";

function App() {
    const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);

    function handlePurchasePopup() {
        setIsPurchasePopupOpen(true)
    }

    function closeAllPopups() {
        setIsPurchasePopupOpen(false)
    }


  return (
          <div className="wrapper">
              <Header/>
              <main className="content">
                  <div className="container">
                      <Routes>
                          <Route exact path="/" element={
                              <Home
                                  handlePurchasePopup={handlePurchasePopup}
                              />
                          }/>
                          <Route path="/cart" element={<Cart/>}/>
                          <Route path="*" element={<NotFound/>}/>
                      </Routes>
                  </div>
              </main>
              <Footer/>
              <PurchasePopup
                  isOpen={isPurchasePopupOpen}
                  onClose={closeAllPopups}
                  price={232}

              />
          </div>
  )
}

export default App;

