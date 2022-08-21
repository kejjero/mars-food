import {Link} from "react-router-dom";
import spaceEmpty from "../../images/spaceEmpty.svg"
import React from "react";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const CartEmpty: React.FC = () => {
    return (
        <div className="content content__cartEmpty">
            <div className="container">
                <div className="cartEmpty">
                    <h2 className="cartEmpty__title">Корзина пустая 😕</h2>
                    <p className="cartEmpty__description">Вы еще не добавляли товар в корзину.</p>
                    <img className="cartEmpty__img"
                         src={spaceEmpty} alt=""/>

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

                </div>
            </div>
        </div>
    )
}

export default CartEmpty;