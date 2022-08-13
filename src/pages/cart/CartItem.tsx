import {useDispatch} from "react-redux";
import {addItemForCart, deleteCartItem, minusCartItem} from "../../redux/cart/cartSlice";
import React from "react";
import {AppDispatch} from "../../redux/store";

type CartItemType = {
    title: string;
    image: string;
    size: string;
    type: string;
    count: number;
    price: number;
    id: number;
    index: number;
}

const CartItem: React.FC<CartItemType> = ({title, image, size, type, count, price, id, index}) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div className="cart__item">
            <div
                className="cart__item-img">
                <img
                    className="cart__image-item"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="cart__item-info"><h3>{title}</h3><p>{type}, размер: {size}</p></div>
            <div className="cart__item-count">
                <button
                    className={`button button--outline button--circle cart__item-count-minus 
                    ${count <= 1 && 'cart__item-count_disabled'}`}
                    disabled={count <= 1}
                    onClick={() => dispatch(minusCartItem({title, image, size, type, count, price, id}))}
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E">
                        </path>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E">
                        </path>
                    </svg>
                </button>
                <b>{count}</b>
                <button
                    className='button button--outline button--circle cart__item-count-plus'
                    onClick={() => dispatch(addItemForCart({title, image, size, type, count, price, id}))}
                >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E">
                        </path>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="cart__item-price"><b>{price * count} &lambda;</b></div>
            <div className="cart__item-remove">
                <button
                    onClick={() => dispatch(deleteCartItem({count, price, index}))}
                    className="button button--outline button--circle">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                            fill="#EB5A1E">
                        </path>
                        <path
                            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                            fill="#EB5A1E">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default CartItem;