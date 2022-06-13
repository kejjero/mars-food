import {useDispatch, useSelector} from "react-redux";
import {fetchItemId, resetActiveCategory} from "../../redux/slices/buyPopupSlice";
import {openBuyPopup} from "../../redux/slices/popupWithFormSlice";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import {styled} from "@mui/material/styles";
import {selectCartItems} from "../../redux/slices/cartSlice";

function Index(props) {

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.find((item) => item.id === props.id)

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

    const titleTooltip =
        `${filterItem && filterItem.type}, 
        размер: ${filterItem && filterItem.size}, 
        ${filterItem && filterItem.count}шт. `

    function handleBuyPopup() {
        dispatch(resetActiveCategory())
        dispatch(fetchItemId(props.id))
        dispatch(openBuyPopup({name: 'buy-popup'}))
    }

    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.image}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.title}</h4>
            <p className="pizza-block__description">
                {props.description}
            </p>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {props.price} &lambda;</div>
                {

                    <LightTooltip title={titleTooltip} placement="top">
                            <button className={`button button--outline button--add`}
                                    onClick={(evt) => handleBuyPopup(evt)}>
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