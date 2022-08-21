import { PopupWithForm } from "./../index";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBuyPopup,
  selectBuyPopupData,
  setCountSizePrice,
  setCountTypePrice,
} from "../../redux/popups/buyPopup/buyPopupSlice";
import { addItemForCart } from "../../redux/cart/cartSlice";
import React from "react";
import { AppDispatch } from "../../redux/store";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';

const BuyPopup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, type, size, activeType, activeSize, totalPrice } =
    useSelector(selectBuyPopup);
  const { property, id, title, imageUrl, rating } = useSelector(selectBuyPopupData);

  type propertyType = {
    name: string;
    value: number;
  };

  const handleActiveType = (typeId: number, property: propertyType): void => {
    dispatch(
      setCountTypePrice({
        id: typeId,
        price: property.value,
        name: property.name,
      })
    );
  };

  const handleActiveSize = (sizeId: number, property: propertyType): void => {
    dispatch(
      setCountSizePrice({
        id: sizeId,
        price: property.value,
        name: property.name,
      })
    );
  };

  const handleItemsForCard = (
    evt: React.MouseEvent<HTMLButtonElement>
  ): void => {
    evt.preventDefault();
    dispatch(
      addItemForCart({
        id,
        title,
        imageUrl,
        price: totalPrice,
        type,
        size,
        count: 0,
      })
    );
  };

  return (
    <PopupWithForm>
      <div className="buy-popup">
        <div className="buy-popup__preview">
          <div className="buy-popup__raiting">
            <span className="buy-popup__raiting-text">Рейтинг</span>
            <Rating readOnly value={rating} precision={0.5} />
          </div>
          <img
            className="buy-popup__image-preview"
            alt={data.title}
            src={data.imageUrl}
          />
        </div>
        <div className="buy-popup__wrapper">
          <h2 className="buy-popup__title">{data.title}</h2>
          <p className="buy-popup__description">{data.description}</p>
          <nav className="buy-popup__constructor">
            <ul className="buy-popup__category">
              {property.custom.map((property: propertyType, typeId: number) => {
                return (
                  <li
                    key={typeId}
                    className={activeType === typeId ? "active" : ""}
                    onClick={() => handleActiveType(typeId, property)}
                  >
                    {property.name}
                  </li>
                );
              })}
            </ul>
            <ul className="buy-popup__category">
              {property.size.map((property: propertyType, sizeId: number) => {
                return (
                  <li
                    key={sizeId}
                    className={activeSize === sizeId ? "active" : ""}
                    onClick={() => handleActiveSize(sizeId, property)}
                  >
                    {property.name}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="buy-popup__price-wrapper">
            <div className="buy-popup__price">{totalPrice} &lambda;</div>
            <Button
                startIcon={<AddIcon/>}
                color={"error"}
                variant="contained"
                onClick={handleItemsForCard}>
              Добавить
            </Button>
          </div>
        </div>
      </div>
    </PopupWithForm>
  );
};

export default BuyPopup;
