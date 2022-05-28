import PopupWithForm from "./PopupWithForm";
import OrderButton from "./OrderButton";

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
                    <img className="purchase-popup__image-preview" src={'https://www.svgrepo.com/show/124413/burger.svg'}/>
                </div>
                <div className="purchase-popup__wrapper">
                    <h2 className="purchase-popup__title">Саларианcкий малыш</h2>
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
                        <OrderButton
                            name={'В корзину'}
                            addIconButton={true}
                            count={0}
                        />
                    </div>
                </div>
            </div>
        </PopupWithForm>
    )
}

export default PurchasePopup;