import cartIcon from "../../images/cart.svg";
import React, {useState} from "react";

import Select, {SelectChangeEvent} from "@mui/material/Select";

import {Input, Form} from "../../components/index"


const CartOrder = () => {
    const [planet, setPlanet] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setPlanet(event.target.value as string);
    };

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
                        <Form className="order__form">

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartOrder;