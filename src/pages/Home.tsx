import {Sort, Skeleton, ItemBlock, Categories} from "../components";
import ufoMenu from "../images/ufo_menu.svg"
import ReactPaginate from "react-paginate";
import styles from "../scss/modules/pagination.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/filter/filterSlice";
import {selectSearchValue} from "../redux/filter/selectors"
import {selectItems} from "../redux/item/itemSlice";
import React from "react";
import {itemData} from "../@types/types"
import {AppDispatch} from "../redux/store";

const Home: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const searchValue = useSelector(selectSearchValue)
    const {itemsData, statusItems} = useSelector(selectItems);
    // const pageCount = useSelector((state) => state.filterReducer.pageCount)

    const ErrorGetItems = (): JSX.Element => {
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
                rating={item.rating}
                imageUrl={item.imageUrl}
                property={item.property}
            />
        )
    })

    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

export default Home;