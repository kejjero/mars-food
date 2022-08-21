import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {selectCart} from "../../redux/cart/selectors";
import {clearCart} from "../../redux/cart/cartSlice"
import CartEmpty from "./CartEmpty";
import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import cartIcon from '../../images/cart.svg'
import {AppDispatch} from "../../redux/store";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Chip from '@mui/material/Chip';
import DeleteIcon from '@mui/icons-material/Delete';

type CartItemType = {
    count: number;
    id: number;
    imageUrl: string;
    price: number;
    size: string;
    title: string;
    type: string;
}

const Cart: React.FC = () => {
    const { cartItems, cartCount, cartPrice } = useSelector(selectCart)
    const [isPay, setIsPay] = useState<boolean>(true);
    const dispatch = useDispatch<AppDispatch>();

    const BorderLinearProgress = styled(LinearProgress)(() => ({
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#fff',
        },
        [`& .${linearProgressClasses.bar}`]: {
            backgroundColor: '#EF4137',
        },
    }));

    const ProgressBlock = (): JSX.Element => {
        return (
            <div className="cart__bottom-progress">
                <h3 className="cart__bottom-progress-title">Заказ от 1 000 λ</h3>
                <Box>
                    <BorderLinearProgress style={{borderRadius: '5px', height: '42.25px', width: '219px'}} variant="determinate" value={(cartPrice / 1000) * 100} />
                </Box>
            </div>
        )
    }

    useEffect(() => {
        if (cartPrice >= 1000) {
            setIsPay(false)
        } else {
            setIsPay(true)
        }
    },[cartPrice, isPay])

    if (cartCount === 0){
        return <CartEmpty/>
    }

    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart">
                    <div className="cart__top">
                        <h2 className="content__title">
                            <img className="cart__icon" src={cartIcon} alt="Корзина"/>
                            Корзина
                        </h2>
                        <div className="cart__clear">
                            <Chip
                                label="Очистить корзину"
                                color="default"
                                onClick={() => dispatch(clearCart())}
                                icon={<DeleteIcon />}
                            />
                        </div>
                    </div>
                    <div className="cart__items">
                        {
                            cartItems.map((item: CartItemType) => {
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
                                    />
                                )
                            })
                        }
                    </div>
                    <div className="cart__bottom">
                        <div className="cart__bottom-details"><span> Всего: <b>{cartCount} шт.</b> </span><span> Сумма заказа: <b>{cartPrice} &lambda;</b> </span>
                        </div>
                        <div className="cart__bottom-buttons">
                            <Link
                                to="/mars-food"
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
                            {
                                isPay ? <ProgressBlock/> :
                                    <Button
                                        startIcon={<ShoppingBagOutlinedIcon/>}
                                        size="large"
                                        variant="contained"
                                        color="error"
                                    >
                                        Оформить заказ
                                    </Button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;