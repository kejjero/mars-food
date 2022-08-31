import cartIcon from "../../images/cart.svg";
import React, {useState, useEffect, useRef} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {Input, Form, InputPlanet} from "../../components/index"
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import {Link} from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {parsePhoneNumberFromString} from "libphonenumber-js"
import {useNavigate} from "react-router";

const CartOrder = () => {
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate()
    const isMounted = useRef<boolean>(false);

    const schema = yup.object().shape({
        firstName: yup.string()
            .matches(/^([^0-9]*)$/, 'Некорректное имя')
            .required("Вы не заполнили эту графу"),
        phone: yup.string()
            .matches(/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/, 'Некорректный номер телефона')
            .required("Некорректный номер телефона"),
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
        // console.log(data)
        navigate('/cart/order/buy')
    }

    useEffect(() => {
        if (isMounted) {
            Object.keys(errors).length === 0 ?
                setDisabled(false) :
                setDisabled(true)
        }
        isMounted.current = true
    }, [errors])

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
                                    label="Имя"
                                    {...register('firstName')}
                                    error={!!errors.firstName}
                                    helperText={errors?.firstName?.message}
                                />
                                <Input
                                    required
                                    type="tel"
                                    label="Телефон"
                                    {...register('phone')}
                                    error={!!errors.phone}
                                    helperText={errors?.phone?.message}
                                    onChange={(evt: any) => {
                                        evt.target.value = normalizePhoneNumber(evt.target.value);
                                    }}
                                />
                                <Input
                                    type="email"
                                    label="Email"
                                    {...register('email')}
                                    error={!!errors.email}
                                    helperText={errors?.email?.message}
                                />
                                <div>
                                    <FormLabel>Доставка</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue="Курьером"
                                    >
                                        <FormControlLabel value="Курьером" control={<Radio/>} label="Курьером"/>
                                        <FormControlLabel value="Телепорт" control={<Radio/>} label="Телепорт"/>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="order__right-side">
                                <div className="order__person" style={{display: 'flex', gap: '10px'}}>
                                    <FormLabel style={{color: '#fff'}}>Количество персон</FormLabel>
                                    <div className="cart__item-count" style={{width: '100px'}}>
                                        <IconButton
                                            aria-label="fingerprint"
                                            color="error"
                                            disableRipple={1 <= 1}
                                            style={{
                                                border: `1px solid ${1 <= 1 ? '#8d8d8d' : '#EF4137'}`,
                                                width: '32px',
                                                height: '32px',
                                                color: `${1 <= 1 ? '#8d8d8d' : '#EF4137'}`
                                            }}
                                            size="small"
                                        >
                                            <RemoveOutlinedIcon style={{width: '70%', padding: 0}}/>
                                        </IconButton>
                                        <b>{1}</b>
                                        <IconButton
                                            aria-label="fingerprint"
                                            color="error"
                                            style={{
                                                border: '1px solid #EF4137',
                                                width: '32px',
                                                height: '32px'
                                            }}
                                            size="small"
                                        >
                                            <AddOutlinedIcon style={{width: '70%', padding: 0}}/>
                                        </IconButton>
                                    </div>
                                </div>
                                <Input size="small" label="Комментарий к заказу" variant="outlined" multiline rows={6}/>
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
                                    disabled={disabled}
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