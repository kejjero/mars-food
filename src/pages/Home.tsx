import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/ItemsBlock/Skeleton";
import ItemBlock from "../components/ItemsBlock";
import ufoMenu from "../images/ufo_menu.svg"
import ReactPaginate from "react-paginate";
import styles from "../scss/modules/pagination.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {selectFilter, selectSearchValue, setCurrentPage, setFilters} from "../redux/slices/filterSlice";
import {fetchItems, selectItems} from "../redux/slices/itemSlice";
import {useNavigate} from "react-router";
import React, {useEffect, useRef} from "react";
import qs from "qs";

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = useRef(false);
    const isMounted = useRef(false);
    const {categoryId, sort, currentPage, pageCount} = useSelector(selectFilter)
    const searchValue = useSelector(selectSearchValue)
    const {itemsData, statusItems} = useSelector(selectItems);
    // const pageCount = useSelector((state) => state.filterReducer.pageCount)

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

    const ErrorGetItems = () => {
        return (
            <div className="errorBlock">
                <h2 className="errorBlock__title">Не удалось получить еду 😕</h2>
                <p className="errorBlock__paragraph">Пожалуйста, попробуйте еще раз...</p>
            </div>
        )
    }
    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i}/>)
    const items = itemsData.filter((obj: object) => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase())
    }).map((item) => {
        return (
            <ItemBlock
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                image={item.imageUrl}
                rating={item.rating}
                property={item.property}
            />
        )
    })

    return (
        <>
            <div className="content__top">
                <img className="content__ufo-menu" src={ufoMenu} alt=""/>
                <Categories/>
            </div>
            <div className="content__wrapper-title">
                <h2 className="content__title">Меню</h2>
                <Sort/>
            </div>
            {
                statusItems ===  'error' && <ErrorGetItems/>
            }
            <div className="content__items">
                {
                    statusItems === 'success' && items
                }
                {
                    statusItems === 'loading' && skeleton
                }
            </div>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel="→"
                onPageChange={(evt) => dispatch(setCurrentPage(evt.selected))}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="←"
            />
        </>
    )
}

export default Home;