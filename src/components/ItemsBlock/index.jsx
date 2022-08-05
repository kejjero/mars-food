import {useDispatch, useSelector} from "react-redux";
import {loadDataForPopup, resetActiveCategory} from "../../redux/slices/buyPopupSlice";
import {openBuyPopup} from "../../redux/slices/popupWithFormSlice";
import {selectCartItems} from "../../redux/slices/cartSlice";

function Index(props) {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.find((item) => item.id === props.id)


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
                    {filterItem && <i>{filterItem.count}</i>}
                </button>
            </div>
        </div>
    )
}

export default Index;