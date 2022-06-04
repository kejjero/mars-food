import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/ItemsBlock/Skeleton";
import ItemBlock from "../components/ItemsBlock";
import ufoMenu from "../images/ufo_menu.svg"
import ReactPaginate from "react-paginate";
import styles from "../scss/modules/pagination.module.scss"

function Home(props) {
    const items = props.items.filter(obj => {
        return obj.title.toLowerCase().includes(props.searchValue.toLowerCase())
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
    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i}/>)

    return (
        <>
            <div className="content__top">
                <img className="content__ufo-menu" src={ufoMenu} alt=""/>
                <Categories
                    handleIndexMenu={props.handleIndexMenu}
                    activeIndex={props.activeIndex}
                />
            </div>
            <div className="content__wrapper-title">
                <h2 className="content__title">Меню</h2>
                <Sort
                    handleActiveSort={props.handleActiveSort}
                />
            </div>
            <div className="content__items">
                {props.isLoading ? skeleton : items}
            </div>
            <ReactPaginate
                className={styles.pagination}
                breakLabel="..."
                nextLabel="→"
                onPageChange={(evt) => props.onChangePage(evt.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                previousLabel="←"
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Home;