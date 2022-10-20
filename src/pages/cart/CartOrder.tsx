import cartIcon from "../../images/cart.svg";
import React, {useEffect, useRef, useState} from "react";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import {Input, Form} from "../../components/index"
import {Link} from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {parsePhoneNumberFromString} from "libphonenumber-js"
import {useNavigate} from "react-router";
import CountPersons from "./components/CountPersons";

const CartOrder = () => {
    const navigate = useNavigate()

    const schema = yup.object().shape({
        firstName: yup.string()
            .required("Вы не заполнили")
            .matches(/^([^0-9]*)$/, 'Некорректное имя'),
        phone: yup.string()
            .required("Вы не заполнили")
            .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, 'Некорректный номер телефона'),
        email: yup.string()
            .email('Некорректный Email'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const normalizePhoneNumber = (value: any) => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if(!phoneNumber) {
            return value
        }
        return phoneNumber.formatInternational()
    }

    const onSubmit = (data: any) => {
        if(data) {
            navigate('/cart/order/buy')
        }
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
                        <Form className="order__form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="order__left-side">
                                <Input
                                    required
                                    type="text"
                                    placeholder="Имя"
                                    {...register('firstName')}
                                    error={!!errors.firstName}
                                    helperText={errors?.firstName?.message}
                                />
                                <Input
                                    required
                                    type="tel"
                                    placeholder="Телефон"
                                    {...register('phone')}
                                    error={!!errors.phone}
                                    helperText={errors?.phone?.message}
                                    onChange={(evt: any) => {
                                        evt.target.value = normalizePhoneNumber(evt.target.value);
                                    }}
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    {...register('email')}
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}
                                />
                                <div>
                                    <FormLabel>Доставка</FormLabel>
                                    <RadioGroup
                                        row
                                        defaultValue="Курьером"
                                    >
                                        <FormControlLabel
                                            value="Курьером"
                                            control={<Radio/>}
                                            label="Курьером"
                                            {...register('variant')}
                                        />
                                        <FormControlLabel
                                            value="Телепорт"
                                            control={<Radio/>}
                                            label="Телепорт"
                                            {...register('variant')}
                                        />
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="order__right-side">
                                <div className="order__person" style={{display: 'flex', gap: '10px'}}>
                                    <FormLabel
                                        style={{color: '#fff'}}
                                    >
                                        Количество гуманоидов
                                    </FormLabel>
                                    <CountPersons/>
                                </div>
                                <Input
                                    size="small"
                                    placeholder="Комментарий к заказу"
                                    variant="outlined"
                                    multiline
                                    rows={6}
                                    {...register('comment')}
                                />
                                <div className="cart__bottom-details" style={{justifyContent: 'flex-end'}}>
                                    <span> Сумма заказа: <b>{1231} &lambda;</b> </span>
                                </div>
                            </div>
                            <div className="cart__bottom-buttons" style={{gridArea: 'submit'}}>
                                <Link
                                    to="/cart"
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
                                    type="submit"
                                    size="large"
                                    color="error"
                                    variant="contained"
                                >
                                    Продолжить
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartOrder;