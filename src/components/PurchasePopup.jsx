import PopupWithForm from "./PopupWithForm";

function PurchasePopup(props) {

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={"purchase-popup"}
        >
            <div className="purchase-popup">
                <div className="purchase-popup__preview">
                    <img className="purchase-popup__rating" src=""/>
                    <img className="purchase-popup__image-preview" src={props.image}/>
                </div>
                <div className="purchase-popup__wrapper">
                    <h2 className="purchase-popup__title">{props.title}</h2>
                    <p className="purchase-popup__description">Ветчина, полукопченая колбаса,
                        болгарский перец, маринованные огурцы,
                        белый соус, сыр моцарелла, зелень</p>
                    <nav className="purchase-popup__constructor">
                        <ul className="purchase-popup__category">
                            <li className="active">Острый</li>
                            <li>Нормальный</li>
                        </ul>
                        <ul className="purchase-popup__category">
                            <li>120гр.</li>
                            <li className="active">200гр.</li>
                            <li>370гр.</li>
                        </ul>
                    </nav>
                    <div className="purchase-popup__price-wrapper">
                        <div className="purchase-popup__price">{props.price} &psi;</div>
                        <button className={`button button--outline button--add`}
                                onClick={(event) => props.handlePurchaseButton(event)}
                        >
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Добавить</span>
                            {props.count > 0 && <i>{props.count}</i>}
                        </button>
                    </div>
                </div>
            </div>
        </PopupWithForm>
    )
}

export default PurchasePopup;