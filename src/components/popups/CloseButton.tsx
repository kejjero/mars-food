import {closeAllPopups} from "../../redux/popups/popupWithForm/popupWithFormSlice";
import {useDispatch} from "react-redux";
import React from "react";
import {AppDispatch} from "../../redux/store";

const CloseButton: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    return(
        <button
            type="button"
            className="popup__close-button"
            aria-label="Закрыть"
            onClick={() => dispatch(closeAllPopups())}
        >
            <span className="popup__close popup__close_left">
            </span>
            <span className="popup__close popup__close_right">
            </span>
        </button>
    )
}

export default CloseButton;