import {useDispatch, useSelector} from "react-redux";
import {closeAllPopups, selectPopupWithForm} from "../redux/slices/popupWithFormSlice";

function PopupWithForm({children, onSubmit}) {
    const dispatch = useDispatch();
    const {name, isOpen} = useSelector(selectPopupWithForm)
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
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
                    name={name}
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