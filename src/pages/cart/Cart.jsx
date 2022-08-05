import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {clearCart, selectCart} from "../../redux/slices/cartSlice";
import CartEmpty from "./CartEmpty";
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import cartIcon from '../../images/cart.svg'

function Cart() {
    const { cartItems, cartCount, cartPrice } = useSelector(selectCart)
    const [isPay, setIsPay] = useState(true);
    const dispatch = useDispatch();

    const widthButton = window.screen.width > 520 ? 210 : 160;

    const BorderLinearProgress = styled(LinearProgress)(() => ({
        height: 53.5,
        width: widthButton,
        borderRadius: 30,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: '#fff',
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 0,
            backgroundColor: '#EF4137',
        },
    }));

    const ProgressBlock = () => {
        return (
            <div className="cart__bottom-progress">
                <h3 className="cart__bottom-progress-title">Заказ от 1 000 λ</h3>
                <Box sx={{ width: '210px'}}>
                    <BorderLinearProgress variant="determinate" value={(cartPrice / 1000) * 100} />
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
        return <CartEmpty />
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
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
                                      stroke-linejoin="round">
                                </path>
                                <path
                                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                    stroke="#B6B6B6" stroke-width="1.2" stroke-linecap="round"
                                    stroke-linejoin="round">
                                </path>
                                <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2"
                                      stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" stroke-width="1.2"
                                      stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                            <span onClick={() => dispatch(clearCart())}>Очистить корзину</span></div>
                    </div>
                    <div className="cart__items">
                        {
                            cartItems.map((item) => {
                                return (
                                    <CartItem
                                        key={item.id}
                                        id={item.id}
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
                                className="button button--outline button--add go-back-btn"
                                to="/mars-food"
                                onClick={() => window.scroll(0, 0)}
                            >
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                            <span>Вернуться назад</span>
                            </Link>
                            {
                                isPay ? <ProgressBlock/> :
                                    <div className={`button pay-btn ${isPay && 'pay-btn-disabled'}`}>
                                        <span>Оформить заказ</span>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;