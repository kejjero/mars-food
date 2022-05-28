import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/ItemsBlock/Skeleton";
import ItemBlock from "../components/ItemsBlock";
import {useState, useEffect} from "react";

function Home(props) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://6291e4289d159855f081d72e.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((arr) => {
                // потом убрать
                setTimeout(() => {
                    setItems(arr)
                    setIsLoading(false)
                }, 1000)
            })
    },[])

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
                {isLoading ? [...new Array(5)].map((_, i) => <Skeleton key={i}/>)
                    : items.map((item) => {
                        return (
                            <ItemBlock
                                key={item.id}
                                title={item.title}
                                price={item.price}
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