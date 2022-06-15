import {useDispatch, useSelector} from "react-redux";
import {fetchItemId, resetActiveCategory} from "../../redux/slices/buyPopupSlice";
import {openBuyPopup} from "../../redux/slices/popupWithFormSlice";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import {styled} from "@mui/material/styles";
import {selectCartItems} from "../../redux/slices/cartSlice";
import React from "react";

type IndexProps = {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
}


const Index: React.FC<IndexProps> = ({id, image, title, description, price}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.find((item) => item.id === id)

    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: 'rgb(239, 65, 55)',
            color: 'rgb(255, 255, 255)',
            boxShadow: theme.shadows[1],
            fontSize: 14,
        },
    }));

    const titleTooltip: string =
        `${filterItem && filterItem.type}, 
        размер: ${filterItem && filterItem.size}, 
        ${filterItem && filterItem.count}шт. `

    const handleBuyPopup = (): void => {
        dispatch(resetActiveCategory())
        dispatch(fetchItemId(id))
        dispatch(openBuyPopup({name: 'buy-popup'}))
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={image}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{title}</h4>
            <p className="pizza-block__description">
                {description}
            </p>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} &lambda;</div>
                {
                    <LightTooltip title={titleTooltip} placement="top">
                            <button className={`button button--outline button--add`}
                                    onClick={() => handleBuyPopup()}>
                                <span>Заказать</span>
                                { filterItem && <i>{filterItem.count}</i> }
                            </button>
                    </LightTooltip>
                }
            </div>
        </div>
    )
}

export default Index;