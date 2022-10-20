import IconButton from "@mui/material/IconButton";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React, {useState} from "react";
import {personsSelector} from "../../../redux/cart/selectors"
import {useDispatch, useSelector} from "react-redux";
import {addPerson, deletePerson} from "../../../redux/cart/cartSlice";

const CountPersons: React.FC<any> = () => {
    const persons = useSelector(personsSelector)
    const dispatch = useDispatch()

    return(
        <div className="cart__item-count" style={{width: '100px'}}>
            <IconButton
                onClick={() => dispatch(deletePerson())}
                aria-label="fingerprint"
                color="error"
                disableRipple={persons <= 1}
                style={{
                    border: `1px solid ${persons <= 1 ? '#8d8d8d' : '#EF4137'}`,
                    width: '32px',
                    height: '32px',
                    color: `${persons <= 1 ? '#8d8d8d' : '#EF4137'}`
                }}
                size="small"
                disabled={persons <=  1}
            >
                <RemoveOutlinedIcon style={{width: '70%', padding: 0}}/>
            </IconButton>
            <b>{persons}</b>
            <IconButton
                onClick={() => dispatch(addPerson())}
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
    )
}

export default CountPersons;