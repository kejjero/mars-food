import {useDispatch, useSelector} from "react-redux";
import {loadDataForPopup, resetActiveCategory} from "../../redux/popups/buyPopup/buyPopupSlice";
import {openBuyPopup} from "../../redux/popups/popupWithForm/popupWithFormSlice";
import {selectCartItems} from "../../redux/cart/selectors";
import React, {useEffect, useState} from "react";
import {itemData} from "../../@types/types"
import {AppDispatch} from "../../redux/store";

const ItemBlock: React.FC<itemData> = ({id, title, description, imageUrl, price, property}) => {

    const dispatch = useDispatch<AppDispatch>()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.filter((item) => Number(item?.id === id))
    const [itemCounter, setItemCounter] = useState<itemData[]>([])

    useEffect(() => {
        filterItem.map((item: any) => setItemCounter([...itemCounter, item.count]))
    }, [cartItems])

    const handleBuyPopup = (): void => {
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

