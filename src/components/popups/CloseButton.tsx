import {closeAllPopups} from "../../redux/popup/popupWithFormSlice";
import {useDispatch} from "react-redux";
import React from "react";

const CloseButton: React.FC = () => {
    const dispatch = useDispatch();
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