import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../redux/cart/selectors";
import { Button } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ChangeHistoryOutlinedIcon from "@mui/icons-material/ChangeHistoryOutlined";
import Badge from "@mui/material/Badge";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const DesktopCart = (): JSX.Element => {
  const { cartCount, cartPrice } = useSelector(cartSelector);

  const badgeCartPrice = cartPrice ? `${cartPrice} λ` : 'Корзина';

  return (
    <Link to="/cart">
      <Badge badgeContent={cartCount} style={{ color: "#fff" }} color="error">
        <LocalMallOutlinedIcon style={{ color: "#fff" }} color={"error"} />
      </Badge>

      <span className="header__text-badge">{badgeCartPrice}</span>
    </Link>
  );
};

export default DesktopCart;

{
  /* <Button
color={"error"}
size={"large"}
variant={"contained"}
sx={{display: 'flex', gap: '10px', marginLeft: '20px'}}
>
<div
    style={{display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'center'}}
>
    <span style={{fontSize: '18px', fontWeight: '700'}}>{cartPrice}</span>
    <ChangeHistoryOutlinedIcon sx={{color: '#fff', opacity: '0.3', fontSize: '22px'}}/>
</div>
<div
    color={"error"}
    style={{display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'center'}}
>
    <span style={{fontSize: '18px', fontWeight: '700'}}>{cartCount}</span>
    <ShoppingBagOutlinedIcon sx={{color: '#fff', opacity: '0.3', fontSize: '22px'}}/>
</div>
</Button> */
}
