import {useDispatch, useSelector} from "react-redux";
import {closeAllPopups} from "../redux/slices/popupWithFormSlice";

function PopupWithForm({children, onSubmit}) {
    const dispatch = useDispatch();
    const popup = useSelector(state => state.popupWithFormReducer)

    return (
        <div className={`popup popup_${popup.name} ${popup.isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close-button"
                    aria-label="Закрыть"
                    onClick={() => dispatch(closeAllPopups())}
                >
                </button>
                <form
                    className={"popup__form"}
                    method={"post"}
                    name={popup.name}
                    onSubmit={onSubmit}
                >{children}
                </form>
            </div>
            <div className="popup__overlay" onClick={() => dispatch(closeAllPopups())}>
            </div>
        </div>
    )
}

export default PopupWithForm;