import burger from "../images/burger.png"

function MenuBlock(props) {
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={burger}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{props.title}</h4>
            <p className="pizza-block__description">
                Ветчина, полукопченая колбаса,
                болгарский перец, маринованные огурцы,
                белый соус, сыр моцарелла, зелень
            </p>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {props.price} &psi;</div>
                <div className="button button--outline button--add" onClick={props.purchasePopup}>
                    <span>Заказать</span>
                </div>
            </div>
        </div>
    )
}

export default MenuBlock;