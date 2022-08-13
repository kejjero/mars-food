import {useDispatch, useSelector} from "react-redux";
import {closeAllPopups, selectPopupWithForm} from "../../redux/popups/popupWithForm/popupWithFormSlice";
import {CloseButton} from "./../index";
import React, {useEffect} from "react";
import {AppDispatch} from "../../redux/store";

type PopupWithFormType = {
    children: JSX.Element|JSX.Element[];
}

const PopupWithForm: React.FC <PopupWithFormType> = ({children}) => {
    const dispatch = useDispatch<AppDispatch>();
    const {name, isOpen} = useSelector(selectPopupWithForm)

    useEffect(() => {
      if(isOpen) {
          document.body.classList.add("hidden");
      } else {
          document.body.classList.remove("hidden");
      }
    },[isOpen])

    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
            {
                window.screen.width < 620 && <CloseButton/>
            }
            <div className="popup__container">
                {
                    window.screen.width > 620 && <CloseButton/>
                }
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