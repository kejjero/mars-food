import '../scss/app.scss'
import Header from "./Header";
import {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import PurchasePopup from "./PurchasePopup";
import Footer from "./Footer"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import axios from "axios";

function App() {
    const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [titlePopup, setTitlePopup] = useState('')
    const [pricePopup, setPricePopup] = useState(0)
    const [imagePopup, setImagePopup] = useState('')
    const [purchaseCounter, setPurchaseCounter] = useState(0)

    function handlePurchasePopup(title, price, image) {
        setIsPurchasePopupOpen(true)
        setTitlePopup(title)
        setPricePopup(price)
        setImagePopup(image)
    }

    function closeAllPopups() {
        setIsPurchasePopupOpen(false)
    }

    function handlePurchaseButton(e) {
        e.preventDefault()
        setPurchaseCounter(purchaseCounter + 1)
    }

    useEffect(() => {
        const getItems = () => {
            return async () => {
                const response = axios.get('https://6291e4289d159855f081d72e.mockapi.io/items')
                return await response.data
            }
        }
        console.log(getItems())
        setIsLoading(false)
    },[])


  return (
      <>
          <div className="wrapper">
              <Header/>
              <main className="content">
                  <div className="container">
                      <Routes>
                          <Route exact path="/" element={
                              <Home
                                  items={items}
                                  isLoading={isLoading}
                                  handlePurchasePopup={handlePurchasePopup}
                              />
                          }/>
                          <Route path="/cart" element={<Cart/>}/>
                          <Route path="*" element={<NotFound/>}/>
                      </Routes>
                  </div>
              </main>
              <Footer/>
          </div>
          <PurchasePopup
              isOpen={isPurchasePopupOpen}
              onClose={closeAllPopups}
              price={pricePopup}
              title={titlePopup}
              image={imagePopup}
              handlePurchaseButton={handlePurchaseButton}
              count={purchaseCounter}
          />
      </>
  )
}

export default App;

// setItems(res)
// setIsLoading(false)