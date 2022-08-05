import {closeAllPopups} from "../redux/slices/popupWithFormSlice";
import {useDispatch} from "react-redux";

function CloseButton() {

    const dispatch = useDispatch();
    return(
        <button
            type="button"
            className="popup__close-button"
            aria-label="Закрыть"
            onClick={() => dispatch(closeAllPopups())}
        >
            <span className="popup__close popup__close_left"></span>
            <span className="popup__close popup__close_right"></span>
        </button>
    )
}

export default CloseButton;