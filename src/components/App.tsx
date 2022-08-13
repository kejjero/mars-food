import '../scss/app.scss'
import {Footer, Home} from "../pages";
import {Header, BuyPopup, LazyAlert, BackgroundSpace} from "./index";
import React, {useEffect, useRef} from "react";
import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router";
import {useSelector, useDispatch} from "react-redux";
import qs from "qs"
import {setFilters} from "../redux/filter/filterSlice";
import {selectFilter} from "../redux/filter/selectors"
import {fetchItems} from "../redux/item/asyncActions";
import Loadable from 'react-loadable';
import {AppDispatch} from "../redux/store";

const App: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const isSearch = useRef<boolean>(false);
    const isMounted = useRef<boolean>(false);
    const {categoryId, sort, currentPage} = useSelector(selectFilter);

    // Разделение бандла на чанки с ленивой подгрузкой компонентов
    const Cart = Loadable({
        loader: () => import(/* webpackChunkName: "Cart" */ '../pages/cart/Cart'),
        loading: () => <LazyAlert/>
    });
    const NotFound = Loadable({
        loader: () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound'),
        loading: () => <LazyAlert/>
    });

    // асинхронная функция получения данных из mockAPI
    const getItems = (): void => {
        const isCategory = categoryId !== 0 ? categoryId : ''
        const isSort = `sortBy=${sort.property}&order=${sort.type}`
        const filterRequest = `category=${isCategory}&${isSort}&page=${currentPage}&limit=4`
        dispatch(fetchItems(filterRequest))
    }

    useEffect(() => {
        if (isMounted.current) {
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
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilters(params))
        }
        isSearch.current = true;
    }, [])

    // потставить ! isSearch.current и isSearch.current = false;
    useEffect(() => {
        if (isSearch.current) {
            getItems();
        }
        isSearch.current = true;
    }, [categoryId, currentPage, sort])


    return (
        <>
            <div className="wrapper">
                <BackgroundSpace/>
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

