import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useSelector} from "react-redux";
import {cartSelector} from "../../../redux/cart/selectors";
import React from "react";

const MobileCart: React.FC = () => {
    const {cartCount, cartPrice} = useSelector(cartSelector);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));


    return (
        <div className="header__cart-mobile">
            <Link to="/cart">
                <div className="header__button-mobile">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={cartCount} color="secondary">
                            <ShoppingCartIcon/>
                        </StyledBadge>
                    </IconButton>
                    {
                        cartPrice > 0 &&
                        <div className="header__price-mobile">
                            <span>{cartPrice} &lambda;</span>
                        </div>
                    }
                </div>
            </Link>
        </div>
    )
}

export default MobileCart;