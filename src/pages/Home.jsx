import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/ItemsBlock/Skeleton";
import ItemBlock from "../components/ItemsBlock";
import ufoMenu from "../images/ufo_menu.svg"
import ReactPaginate from "react-paginate";
import styles from "../scss/modules/pagination.module.scss"
import {useContext} from "react";
import {SearchContext} from "../components/App";
import {useDispatch} from "react-redux";
import {setCurrentPage, setPageCount} from "../redux/slices/filterSlice";
import axios from "axios";

function Home(props) {
    const dispatch = useDispatch();
    const {searchValue} = useContext(SearchContext);
    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i}/>)
    const items = props.items.filter(obj => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase())
    }).map((item) => {
        return (
            <ItemBlock
                key={item.id}
                title={item.title}
                price={item.price}
                image={item.imageUrl}
                purchasePopup={props.handlePurchasePopup}
            />
        )
    })

    // Пришлось сделать костыль, так как бэкенд не дает количество страниц для корректной пагинации
    function getCountPages (index) {
        const request = index !== 0 ? index : ''
        axios.get(`https://6291e4289d159855f081d72e.mockapi.io/items?category=${request}`)
            .then((res) => countItems(res.data))
    }

    function countItems(items) {
        const mathPages = Math.ceil(items.length / 4)
        dispatch(setPageCount(mathPages))
    }

    return (
        <>
            <div className="content__top">
                <img className="content__ufo-menu" src={ufoMenu} alt=""/>
                <Categories getCountPages={getCountPages}/>
            </div>
            <div className="content__wrapper-title">
                <h2 className="content__title">Меню</h2>
                <Sort/>
            </div>
            <div className="content__items">
                {props.isLoading ? skeleton : items}
            </div>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel="→"
                onPageChange={(evt) => dispatch(setCurrentPage(evt.selected))}
                pageRangeDisplayed={4}
                pageCount={props.pageCount}
                previousLabel="←"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Home;