import {Link} from "react-router-dom";
import spaceEmpty from "../../images/spaceEmpty.svg"
import React from "react";

const CartEmpty: React.FC = () => {
    return (
        <div className="content content__cartEmpty">
            <div className="container">
                <div className="cartEmpty">
                        <h2 className="cartEmpty__title">Корзина пустая 😕</h2>
                        <p className="cartEmpty__description">Вы еще не добавляли товар в корзину.</p>
                    <img className="cartEmpty__img"
                         src={spaceEmpty} alt=""/>
                        <div className="cart__bottom-buttons cartEmpty_type_button">
                            <Link
                                className="button button--outline button--add go-back-btn"
                                to="/mars-food"
                                onClick={() => window.scroll(0, 0)}
                            >
                                <svg width="8" height="34" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                </svg>
                                <span>Вернуться назад</span>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartEmpty;