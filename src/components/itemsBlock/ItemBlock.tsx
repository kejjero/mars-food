import {useDispatch, useSelector} from "react-redux";
import {loadDataForPopup, resetActiveCategory} from "../../redux/popups/buyPopup/buyPopupSlice";
import {openBuyPopup} from "../../redux/popups/popupWithForm/popupWithFormSlice";
import {selectCartItems} from "../../redux/cart/selectors";
import {addFavorite, selectFavoriteData, deleteFavoriteItem} from "../../redux/favorite/FavoriteSlice"
import React, {useEffect, useState} from "react";
import {itemData} from "../../@types/types"
import {AppDispatch} from "../../redux/store";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {IconButton} from "@mui/material"
import Button from '@mui/material/Button';
import {SnackbarProvider, useSnackbar} from "notistack";
import SnackBar from "../SnackBar"

const ItemBlock: React.FC<itemData> = (props) => {
    const {id, title, description, imageUrl, price} = props
    const dispatch = useDispatch<AppDispatch>()
    const cartItems = useSelector(selectCartItems)
    const filterItem = cartItems.filter((item) => Number(item?.id === id))
    const [itemCounter, setItemCounter] = useState<itemData[]>([])
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const favoriteData = useSelector(selectFavoriteData)
    const isFavorite = favoriteData.some((favorite: any) => favorite.id === id)

    useEffect(() => {
        filterItem.map((item: any) => setItemCounter([...itemCounter, item.count]))
    }, [cartItems])

    useEffect(() => {
        if (isFavorite) {
            setIsLiked(true)
        }
    }, [])

    const handleBuyPopup = (): void => {
        dispatch(resetActiveCategory())
        dispatch(loadDataForPopup(props))
        dispatch(openBuyPopup({name: 'buy-popup'}))
    }


    const handleIsFavorite = () => {
        if (!isLiked) {
            dispatch(addFavorite(props))
            return true
        }
        const withoutItemsFavorite = favoriteData.filter((favorite: any) => favorite.id !== id)
        dispatch(deleteFavoriteItem(withoutItemsFavorite))
        return false
    }

    const onClickFavoriteButton = () => {
        setIsLiked(handleIsFavorite())
    }

    //
    // const { enqueueSnackbar } = useSnackbar();
    //
    // const handleClickVariant = () => () => {
    //     const text = isLiked ? "добавлен в избранное" : "удален из избранного"
    //     const span = <span>{`${title} ${text}`}</span>
    //     enqueueSnackbar(span);
    // };


    return (
        <div className="item-block">
            <IconButton
                style={{position: 'absolute', right: '0', color: '#fff', opacity: isLiked ? 1.0 : 0.5}}
                onClick={() => onClickFavoriteButton()}
            >
                <SnackbarProvider maxSnack={3}>
                    <SnackBar>
                    {
                        isLiked ?
                            <FavoriteIcon sx={{fontSize: '23px'}}/>
                            :
                            <FavoriteBorderIcon sx={{fontSize: '23px'}}/>
                    }
                    </SnackBar>
                </SnackbarProvider>
            </IconButton>
            <img className="item-block__image" src={imageUrl} alt={title}
            />
            <h4 className="item-block__title">{title}</h4>
            <p className="item-block__description">
                {description}
            </p>
            <div className="item-block__bottom">
                <div className="item-block__price">от {price} &lambda;</div>

                <Button color={"error"} variant="outlined" onClick={handleBuyPopup}>Заказать</Button>
            </div>
        </div>
    )
}

export default ItemBlock;

