import {useDispatch, useSelector} from "react-redux";
import {loadDataForPopup, resetActiveCategory} from "../../redux/slices/buyPopupSlice";
import {openBuyPopup} from "../../redux/slices/popupWithFormSlice";
import {selectCartItems} from "../../redux/slices/cartSlice";
import {useEffect, useState} from "react";


function ItemBlock(props) {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.filter((item) => Number(item.id === props.id))

    const [itemCounter, setItemCounter] = useState([])

    useEffect(() => {
        filterItem.map((item) => {
            setItemCounter([...itemCounter, item.count])
        })
    }, [cartItems])

    function handleBuyPopup() {
        dispatch(resetActiveCategory())
        dispatch(loadDataForPopup(
                {
                    id: props.id,
                    title: props.title,
                    description: props.description,
                    imageUrl: props.image,
                    rating: props.rating,
                    price: props.price,
                    property: props.property
                }
            )
        )
        dispatch(openBuyPopup({name: 'buy-popup'}))
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.image}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.title}</h4>
            <p className="pizza-block__description">
                {props.description}
            </p>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {props.price} &lambda;</div>
                <button className={`button button--outline button--add pizza-block__button`}
                        onClick={(evt) => handleBuyPopup(evt)}>
                    <span>Заказать</span>
                    {itemCounter.length > 0 && <i>{itemCounter.length}</i>}
                </button>
            </div>
        </div>
    )
}

export default ItemBlock;

