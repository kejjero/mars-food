import '../scss/app.scss'
import Header from "./Header";
import {useState, useEffect, createContext, useRef} from "react";
import {Routes, Route } from "react-router-dom";
import BuyPopup from "./BuyPopup";
import Footer from "./Footer"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart/Cart";
import backgorundSpace from "../images/background_space.svg"
import {useLocation, useNavigate} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import qs from "qs"
import {setFilters} from "../redux/slices/filterSlice";

export const SearchContext = createContext('');

function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isPurchasePopupOpen, setIsPurchasePopupOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [purchaseCounter, setPurchaseCounter] = useState(0)
    const [searchValue, setSearchValue] = useState('');
    const {categoryId, sort, currentPage, pageCount} = useSelector((state) => state.filterReducer)

    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const isCategory = categoryId !== 0 ? categoryId : ''
    const isSort = `sortBy=${sort.property}&order=${sort.type}`
    const filterRequest = `category=${isCategory}&${isSort}&page=${currentPage}&limit=4`

    useEffect(() => {
        if(isMounted.current) {
            const queryString = qs.stringify({
                category: categoryId,
                property: sort.property,
                order: sort.type,
                sortId: sort.sortId,
                page: currentPage
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true;
    }, [categoryId, currentPage, sort])

    useEffect(() => {
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters(params))
        }
        isSearch.current = true;
    }, [])


    function fetchItems() {
        axios.get(`https://6291e4289d159855f081d72e.mockapi.io/items?${filterRequest}`)
            .then((res) => {
                if(res.status === 200) {
                    setItems(res.data)
                    setIsLoading(false)
                }
                else {
                    alert('Статус ошибки: ' + res.status)
                }
            })
            .catch((err) => alert('Ошибка: ' + err))
    }

    // потставить ! isSearch.current и isSearch.current = false;
    useEffect(() => {
        if(isSearch.current) {
            fetchItems();
        }
        isSearch.current = true;
    },[categoryId, currentPage, sort])

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
                                  pageCount={pageCount}
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
          <BuyPopup
              isOpen={isPurchasePopupOpen}
              onClose={closeAllPopups}
              handlePurchaseButton={handlePurchaseButton}
              count={purchaseCounter}
          />
      </>
  )
}

export default App;

