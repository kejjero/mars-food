import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/ItemsBlock/Skeleton";
import ItemBlock from "../components/ItemsBlock";

function Home(props) {

    return (
        <>
            <div className="content__top">
                <Categories/>
            </div>
            <div className="content__wrapper-title">
                <h2 className="content__title">Меню</h2>
                <Sort/>
            </div>
            <div className="content__items">
                {props.isLoading ?
                    // используем фейковый массив для заполнения скелетона
                    [...new Array(5)].map((_, i) => <Skeleton key={i}/>)
                    :
                    props.items.map((item) => {
                        return (
                            <ItemBlock
                                key={item.id}
                                title={item.title}
                                price={item.price.size[0]}
                                image={item.imageUrl}
                                purchasePopup={props.handlePurchasePopup}
                            />
                        )

                    })
                }
            </div>
        </>
    )
}

export default Home;