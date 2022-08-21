import {useDispatch, useSelector} from "react-redux";
import {loadDataForPopup, resetActiveCategory} from "../../redux/popups/buyPopup/buyPopupSlice";
import {openBuyPopup} from "../../redux/popups/popupWithForm/popupWithFormSlice";
import {selectCartItems} from "../../redux/cart/selectors";
import React, {useEffect, useState} from "react";
import {itemData} from "../../@types/types"
import {AppDispatch} from "../../redux/store";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from "@mui/material"
import Button from '@mui/material/Button';

const ItemBlock: React.FC<itemData> = ({id, title, description, imageUrl, price, property, rating}) => {

    const dispatch = useDispatch<AppDispatch>()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.filter((item) => Number(item?.id === id))
    const [itemCounter, setItemCounter] = useState<itemData[]>([])
    const [favoriteItem, setFavoriteItem] = useState<boolean>(false);

    useEffect(() => {
        filterItem.map((item: any) => setItemCounter([...itemCounter, item.count]))
    }, [cartItems])

    const handleBuyPopup = (): void => {
        dispatch(resetActiveCategory())
        dispatch(loadDataForPopup(
                {
                    id: id,
                    title: title,
                    description: description,
                    imageUrl: imageUrl,
                    price: price,
                    property: property,
                    rating: rating,
                }
            )
        )
        dispatch(openBuyPopup({name: 'buy-popup'}))
    }

    const handleFavorite = () => {
        setFavoriteItem(!favoriteItem)
    }

    return (
        <div className="item-block">
            <IconButton
                style={{position: 'absolute', right: '0',color: '#fff', opacity: favoriteItem ? 1.0 : 0.5}}
                onClick={() => handleFavorite()}
            >
                {
                    favoriteItem ?
                        <FavoriteIcon sx={{fontSize: '23px'}}/> :
                        <FavoriteBorderIcon sx={{fontSize: '23px'}}/>
                }
            </IconButton>
            <img className="item-block__image" src={imageUrl} alt={title}
            />
            <h4 className="item-block__title">{title}</h4>
            <p className="item-block__description">
                {description}
            </p>
            <div className="item-block__bottom">
                <div className="item-block__price">от {price} &lambda;</div>

                <Button color={"error"} variant="outlined"
                        onClick={handleBuyPopup}>Заказать</Button>
                {/*{itemCounter.length > 0 && <i>{itemCounter.length}</i>}*/}
            </div>
        </div>
    )
}

export default ItemBlock;

