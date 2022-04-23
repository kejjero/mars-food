import iconPizza from '../images/icon-pizza.png'
import iconBurger from '../images/icon-burger.png'

function Categories() {
    return (
        <div className="categories">
            <ul>
                <li className="active">
                    <img src={iconPizza} alt=""/>
                    <h2 className="active">Все</h2>
                </li>
                <li>
                    <img src={iconBurger} alt=""/>
                    <h2 className="active">Бургеры</h2>
                </li>
                <li>
                    <img src={iconPizza} alt=""/>
                    <h2 className="active">Пицца</h2>
                </li>
                <li className="active">
                    <img src={iconPizza} alt=""/>
                    <h2 className="active">Все</h2>
                </li>
                <li>
                    <img src={iconBurger} alt=""/>
                    <h2 className="active">Бургеры</h2>
                </li>
                <li>
                    <img src={iconPizza} alt=""/>
                    <h2 className="active">Пицца</h2>
                </li>
                <li>
                    <img src={iconPizza} alt=""/>
                    <h2 className="active">Пицца</h2>
                </li>
            </ul>
        </div>
    )
}

export default Categories;