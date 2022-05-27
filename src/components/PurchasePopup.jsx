import PopupWithForm from "./PopupWithForm";

function PurchasePopup(props) {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            name={"purchase-popup"}
        >
            <div className="__wrapper">
                <div className="preview">
                    <img className="rating" src=""/>
                    <img className="image-preview"/>
                </div>
                <div className="">

                </div>
                <h2 className="__title">название позиции</h2>
                <p className="__description">description</p>
                <nav>
                    <ul>
                        <li className="active">Острый</li>
                        <li>Нормальный</li>
                    </ul>
                    <ul>
                        <li>120гр.</li>
                        <li className="active">200гр.</li>
                        <li>370гр.</li>
                    </ul>
                </nav>
            </div>
        </PopupWithForm>
    )
}

export default PurchasePopup;