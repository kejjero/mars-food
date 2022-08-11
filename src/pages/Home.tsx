import Categories from "../components/сategories/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/ItemsBlock/Skeleton";
import ItemBlock from "../components/ItemsBlock/ItemBlock";
import ufoMenu from "../images/ufo_menu.svg"
import ReactPaginate from "react-paginate";
import styles from "../scss/modules/pagination.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {selectSearchValue, setCurrentPage} from "../redux/slices/filterSlice";
import {selectItems} from "../redux/slices/itemSlice";
import React from "react";
import itemData from "../interfaces/interfaces"

const Home: React.FC = () => {

    const dispatch = useDispatch();
    const searchValue = useSelector(selectSearchValue)
    const {itemsData, statusItems} = useSelector(selectItems);
    // const pageCount = useSelector((state) => state.filterReducer.pageCount)
    const ErrorGetItems = () => {
        return (
            <div className="errorBlock">
                <h2 className="errorBlock__title">Не удалось получить еду 😕</h2>
                <p className="errorBlock__paragraph">Пожалуйста, попробуйте еще раз...</p>
            </div>
        )
    }
    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i}/>)
    const items = itemsData.filter((obj: itemData) => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase())
    }).map((item: itemData) => {
        return (
            <ItemBlock
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                imageUrl={item.imageUrl}
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
                statusItems === 'error' && <ErrorGetItems/>
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