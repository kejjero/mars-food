import '../scss/app.scss'
import Header from "./Header";
import {useState, useEffect, createContext} from "react";
import {Routes, Route} from "react-router-dom";
import PurchasePopup from "./PurchasePopup";
import Footer from "./Footer"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";
import backgorundSpace from "../images/background_space.svg"
import {useLocation} from "react-router";

export const SearchContext = createContext('');

function App() {
    const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [titlePopup, setTitlePopup] = useState('')
    const [pricePopup, setPricePopup] = useState(0)
    const [imagePopup, setImagePopup] = useState('')
    const [purchaseCounter, setPurchaseCounter] = useState(0)
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [sortCategory, setSortCategory] = useState('');
    const [sortType, setSortType] = useState(`sortBy=rating&order=desc`)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue] = useState('');
    useEffect(() => {
        fetch(`https://6291e4289d159855f081d72e.mockapi.io/items?category=${sortCategory}&${sortType}&page=${currentPage}&limit=4`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setItems(data)
                setIsLoading(false)
            })
    },[sortCategory, sortType, currentPage])

    function handleActiveCategory(index) {
        setActiveIndex(index)
        if (index === 0) {
            setSortCategory('')
        } else {
            setSortCategory(index)
        }
    }

    function handleActiveSort(sortProperty, sortType) {
        const sortingRequest = `sortBy=${sortProperty}&order=${sortType}`
        setSortType(sortingRequest)
    }

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

  return (
      <>
          <div className="wrapper">
              {
                  location.pathname === '/' &&
                  <img className="background-space" src={backgorundSpace} alt=""/>
              }
              <SearchContext.Provider value={{searchValue, setSearchValue}}>
              <Header location={location}/>
              <main className="content">
                  <div className="container">
                      <Routes>
                          <Route exact path="/" element={
                              <Home
                                  items={items}
                                  isLoading={isLoading}
                                  handlePurchasePopup={handlePurchasePopup}
                                  handleIndexMenu={handleActiveCategory}
                                  activeIndex={activeIndex}
                                  handleActiveSort={handleActiveSort}
                                  onChangePage={(number) => setCurrentPage(number)}
                              />
                          }/>
                          <Route path="/cart" element={<Cart/>}/>
                          <Route path="*" element={<NotFound/>}/>
                      </Routes>
                  </div>
              </main>
              </SearchContext.Provider>
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

