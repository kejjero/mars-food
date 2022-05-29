function Index(props) {
    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={props.image}
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

                <button className={`button button--outline button--add`}
                        onClick={() => props.purchasePopup(props.title, props.price, props.image)}>
                    <span>Заказать</span>
                </button>
            </div>
        </div>
    )
}

export default Index;