import {useDispatch, useSelector} from "react-redux";
import {closeAllPopups, selectPopupWithForm} from "../redux/slices/popupWithFormSlice";
import React from "react";

type FormProps = {
    children: JSX.Element|JSX.Element[]
}

const PopupWithForm: React.FC<FormProps> = ({children}) => {
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
                >{children}
                </form>
            </div>
            <div className="popup__overlay" onClick={() => dispatch(closeAllPopups())}>
            </div>
        </div>
    )
}

export default PopupWithForm;