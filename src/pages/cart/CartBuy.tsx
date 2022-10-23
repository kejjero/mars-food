import cartIcon from "../../images/cart.svg";
import React, {useEffect, useState} from "react";
import {Input, Form} from "../../components/index"
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CartItem from "./CartItem";
import {useDispatch, useSelector} from "react-redux";
import {selectCart} from "../../redux/cart/selectors";
import {useNavigate} from "react-router";
import {clearCart} from "../../redux/cart/cartSlice"
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";


const CartOrder = () => {
    const {cartItems, cartCount, cartPrice, cartForm, persons} = useSelector(selectCart)
    const itemsInfo = ["Имя", "Телефон", "Email", "Доставка"]
    const isCompleted = itemsInfo.some((_item, i) => Object.values(cartForm)[i])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isCompleted) {
            navigate('/cart/order')
        }
    },[])


    const handleOnSubmit = () => {
        navigate('/')
        dispatch(clearCart())
    }

    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <img className="cart__icon" src={cartIcon} alt="Корзина"/>
                            Оформление заказа
                        </h2>
                    </div>
                    <div>
                        <Form className="buy__form">
                            <ul className="buy__items">
                                {
                                    cartItems.map((item: any) => {
                                        const itemKey = item.id + item.size + item.type;
                                        const currentIndex = cartItems.indexOf(item);
                                        return (
                                            <CartItem
                                                key={itemKey}
                                                id={item.id}
                                                index={currentIndex}
                                                title={item.title}
                                                image={item.imageUrl}
                                                price={item.price}
                                                size={item.size}
                                                type={item.type}
                                                count={item.count}
                                                isBuy={true}
                                            />
                                        )
                                    })
                                }
                            </ul>
                            <div className="buy__info">
                                <ul className="buy__info-items">
                                    {
                                        itemsInfo.map((_item, i) => (
                                            <li className="buy__info-item">
                                                <span>{itemsInfo[i]}</span>
                                                <em>{Object.values(cartForm)[i]}</em>
                                            </li>
                                        ))
                                    }
                                </ul>
                                {
                                    cartForm.comment &&
                                    <div className="buy__info buy__info_comment">
                                        <p className="buy__comment">
                                            <span>Комментарий: </span>
                                            <em>{cartForm.comment}</em>
                                        </p>
                                    </div>
                                }
                            </div>
                        </Form>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Всего: <b>{cartCount}</b> шт.</span>
                                <span> Сумма заказа: <b>{cartPrice} &lambda;</b></span>
                            </div>
                            <span className="cart__persons"> Гуманоидов: <b>{persons}</b></span>
                            <div className="cart__bottom-buttons">
                                <Link
                                    to="/cart/order"
                                    onClick={() => window.scroll(0, 0)}
                                >
                                    <Button
                                        startIcon={<KeyboardBackspaceIcon/>}
                                        size="large"
                                        variant="outlined"
                                        style={{color: "#fff", border: '1px solid #fff'}}
                                        color="error"
                                    >
                                        Вернуться назад
                                    </Button>
                                </Link>
                                <Button
                                    startIcon={<ShoppingBagOutlinedIcon/>}
                                    size="large"
                                    variant="contained"
                                    color="error"
                                    type="submit"
                                    onClick={() => handleOnSubmit()}
                                >
                                    Оформить заказ
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartOrder;