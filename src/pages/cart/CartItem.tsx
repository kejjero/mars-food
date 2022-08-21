import {useDispatch} from "react-redux";
import {addItemForCart, deleteCartItem, minusCartItem} from "../../redux/cart/cartSlice";
import React from "react";
import {AppDispatch} from "../../redux/store";
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

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
                <IconButton
                    aria-label="fingerprint"
                    color="error"
                    onClick={() => dispatch(minusCartItem({title, image, size, type, count, price, id}))}
                    disableRipple={count <= 1}
                    style={{
                        border: `1px solid ${count <= 1 ? '#8d8d8d' : '#EF4137'}`,
                        width: '32px',
                        height: '32px',
                        color: `${count <= 1 ? '#8d8d8d' : '#EF4137'}`
                }}
                    size="small"
                >
                    <RemoveOutlinedIcon style={{width: '70%', padding: 0}} />
                </IconButton>
                <b>{count}</b>
                <IconButton
                    aria-label="fingerprint"
                    color="error"
                    onClick={() => dispatch(addItemForCart({title, image, size, type, count, price, id}))}
                    style={{
                        border: '1px solid #EF4137',
                        width: '32px',
                        height: '32px'
                    }}
                    size="small"
                >
                    <AddOutlinedIcon style={{width: '70%', padding: 0}} />
                </IconButton>
            </div>
            <div className="cart__item-price"><b>{price * count} &lambda;</b></div>
            <div className="cart__item-remove">
                <IconButton
                    onClick={() => dispatch(deleteCartItem({count, price, index}))}
                    style={{
                        border: '1px solid #fff',
                        width: '32px',
                        height: '32px'
                    }}
                    size="small"
                >
                    <ClearOutlinedIcon style={{width: '70%', padding: 0, color: '#fff'}} />
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem;