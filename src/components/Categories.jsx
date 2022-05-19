import iconPizza from '../images/icon-pizza.png'
import iconBurger from '../images/icon-burger.png'
import iconSalad from '../images/icon-salad.png'
import iconPie from '../images/icon-pie.png'
import iconLasagna from '../images/icon-lasagna.png'
import iconJuice from '../images/icon-juice.png'
import iconFork from '../images/icon-fork.png'

function Categories() {
    return (
        <div className="categories">
            <ul>
                <li className="active">
                    <img src={iconFork} alt=""/>
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
                    <img src={iconSalad} alt=""/>
                    <h2 className="active">Салаты</h2>
                </li>
                <li>
                    <img src={iconPie} alt=""/>
                    <h2 className="active">Горячее</h2>
                </li>
                <li>
                    <img src={iconLasagna} alt=""/>
                    <h2 className="active">Десерты</h2>
                </li>
                <li>
                    <img src={iconJuice} alt=""/>
                    <h2 className="active">Напитки</h2>
                </li>
            </ul>
        </div>
    )
}

export default Categories;