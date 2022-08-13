import {PopupWithForm} from "./../index";
import {useDispatch, useSelector} from "react-redux";
import {
    selectBuyPopup,
    selectBuyPopupData,
    setCountSizePrice,
    setCountTypePrice
} from "../../redux/popups/buyPopup/buyPopupSlice";
import {addItemForCart} from "../../redux/cart/cartSlice";
import React from "react";
import {AppDispatch} from "../../redux/store";

const BuyPopup: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const {data, type, size, activeType, activeSize, totalPrice} = useSelector(selectBuyPopup)
    const {property, id, title, imageUrl} = useSelector(selectBuyPopupData)

    type propertyType = {
        name: string;
        value: number;
    }

    const handleActiveType = (typeId: number, property: propertyType): void => {
        dispatch(setCountTypePrice({
            id: typeId,
            price: property.value,
            name: property.name
        }))
    }

    const handleActiveSize = (sizeId: number, property: propertyType): void => {
        dispatch(setCountSizePrice({
            id: sizeId,
            price: property.value,
            name: property.name
        }))
    }

    const handleItemsForCard = (evt: React.MouseEvent<HTMLButtonElement>): void => {
        evt.preventDefault()
        dispatch(addItemForCart({
            id,
            title,
            imageUrl,
            price: totalPrice,
            type,
            size,
            count: 0,
        }))
    }

    return (
        <PopupWithForm>
            <div className="buy-popup">
                <div className="buy-popup__preview">
                    <img className="buy-popup__image-preview" alt={data.title} src={data.imageUrl}/>
                </div>
                <div className="buy-popup__wrapper">
                    <h2 className="buy-popup__title">{data.title}</h2>
                    <p className="buy-popup__description">{data.description}</p>
                    <nav className="buy-popup__constructor">
                        <ul className="buy-popup__category">
                            {
                                property.custom.map((property: propertyType, typeId: number) => {
                                    return (
                                        <li
                                            key={typeId}
                                            className={activeType === typeId ? 'active' : ''}
                                            onClick={() => handleActiveType(typeId, property)}
                                        >{property.name}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="buy-popup__category">
                            {
                                property.size.map((property: propertyType, sizeId: number) => {
                                    return (
                                        <li
                                            key={sizeId}
                                            className={activeSize === sizeId ? 'active' : ''}
                                            onClick={() => handleActiveSize(sizeId, property)}
                                        >{property.name}</li>
                                    )
                                })
                            }

                        </ul>
                    </nav>
                    <div className="buy-popup__price-wrapper">
                        <div className="buy-popup__price">{totalPrice} &lambda;</div>
                        <button className={`button button--outline button--add`}
                                onClick={handleItemsForCard}
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                        </button>
                    </div>
                </div>
            </div>
        </PopupWithForm>
    )
}

export default BuyPopup;