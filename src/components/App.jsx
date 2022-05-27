import '../scss/app.scss'
import Header from "./Header";
import Categories from "./Categories";
import Sort from "./Sort";
import MenuBlock from "./menuBlock";
import products from "../assets/products.json"
import {useState} from "react";
import PurchasePopup from "./PurchasePopup";
import Footer from "./Footer"

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
                      <div className="content__top">
                          <Categories/>
                      </div>
                      <div className="content__wrapper-title">
                          <h2 className="content__title">Меню</h2>
                          <Sort/>
                      </div>
                      <div className="content__items">
                          {
                              products.map((item) => {
                                  return(
                                      <MenuBlock
                                          key={item.id}
                                          title={item.title}
                                          price={item.price}
                                          purchasePopup={handlePurchasePopup}
                                      />
                                  )
                              })
                          }
                      </div>
                  </div>
              </main>
              <Footer/>
              <PurchasePopup
                  isOpen={isPurchasePopupOpen}
                  onClose={closeAllPopups}

              />
          </div>
  )
}

export default App;
