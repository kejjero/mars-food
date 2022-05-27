function PopupWithForm({isOpen, name, title, children, onClose, onSubmit}) {
    return (
        <div className={`popup popup_${name} ${isOpen && 'popup_opened'}`}>
            <div className="popup__container">
                <button
                    type="button"
                    className="popup__close-button"
                    aria-label="Закрыть"
                    onClick={onClose}
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
            <div className="popup__overlay" onClick={onClose}>
            </div>
        </div>
    )
}

export default PopupWithForm;