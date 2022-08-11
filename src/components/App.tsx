import '../scss/app.scss'
import Header from "./header/Header";
import React, {useEffect, useRef} from "react";
import {Routes, Route } from "react-router-dom";
import BuyPopup from "./BuyPopup";
import Footer from "./Footer"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Cart from "../pages/cart/Cart";
import backgroundDesktop from "../images/background_space.svg"
import backgroundMobile from "../images/background_space-mobile.svg"
import {useNavigate} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import qs from "qs"
import {selectFilter, setFilters} from "../redux/slices/filterSlice";
import {fetchItems} from "../redux/slices/itemSlice";

const App: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const {categoryId, sort, currentPage} = useSelector(selectFilter);

    // асинхронная функция получения данных из mockAPI
    function getItems () {
        const isCategory = categoryId !== 0 ? categoryId : ''
        const isSort = `sortBy=${sort.property}&order=${sort.type}`
        const filterRequest = `category=${isCategory}&${isSort}&page=${currentPage}&limit=4`
        dispatch(fetchItems(filterRequest))
    }

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

    // потставить ! isSearch.current и isSearch.current = false;
    useEffect(() => {
        if(isSearch.current) {
            getItems();
        }
        isSearch.current = true;
    },[categoryId, currentPage, sort])


  return (
      <>
          <div className="wrapper">
              <img
                  className="background-space"
                  src={window.screen.width > 520 ? backgroundDesktop : backgroundMobile}
                  alt=""
              />
              <Header/>
              <main className="content">
                  <div className="container">
                      <Routes>
                          <Route path="/mars-food" element={<Home/>}/>
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

