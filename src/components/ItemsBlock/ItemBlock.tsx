import {useDispatch, useSelector} from "react-redux";
import {loadDataForPopup, resetActiveCategory} from "../../redux/slices/buyPopupSlice";
import {openBuyPopup} from "../../redux/slices/popupWithFormSlice";
import {selectCartItems} from "../../redux/slices/cartSlice";
import React, {useEffect, useState} from "react";
import itemData from "../../interfaces/interfaces"

const ItemBlock: React.FC<itemData> = ({id, title, description, imageUrl, price, property}) => {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.filter((item) => Number(item?.id === id))
    const [itemCounter, setItemCounter] = useState<itemData[]>([])

    useEffect(() => {
        filterItem.map((item) => {
            setItemCounter([...itemCounter, item?.count])
        })
    }, [cartItems])

    function handleBuyPopup() {
        dispatch(resetActiveCategory())
        dispatch(loadDataForPopup(
                {
                    id: id,
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    price: price,
                    property: property
                }
            )
        )
        dispatch(openBuyPopup({name: 'buy-popup'}))
    }

    return (
        <div className="item-block">
            <img
                className="item-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="item-block__title">{title}</h4>
            <p className="item-block__description">
                {description}
            </p>
            <div className="item-block__bottom">
                <div className="item-block__price">от {price} &lambda;</div>
                <button className={`button button--outline button--add item-block__button`}
                        onClick={handleBuyPopup}>
                    <span>Заказать</span>
                    {itemCounter.length > 0 && <i>{itemCounter.length}</i>}
                </button>
            </div>
        </div>
    )
}

export default ItemBlock;

