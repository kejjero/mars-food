import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import React, {useEffect, useState} from "react";

const ButtonPay: React.FC<any> = ({cartPrice, ProgressBlock=false}) => {
    const [isPay, setIsPay] = useState<boolean>(true);

    console.log(isPay)
    useEffect(() => {
        if (cartPrice >= 1000) {
            setIsPay(false)
        } else {
            setIsPay(true)
        }
    }, [cartPrice, isPay])

    return (
        !isPay ? ProgressBlock
            :
            <Link to="/cart/order">
                <Button
                    startIcon={<ShoppingBagOutlinedIcon/>}
                    size="large"
                    variant="contained"
                    color="error"
                    type="submit"
                >
                    Продолжить
                </Button>
            </Link>
    )
}


export default ButtonPay;