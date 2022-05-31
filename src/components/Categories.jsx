import iconPizza from '../images/icon-pizza.png'
import iconBurger from '../images/icon-burger.png'
import iconLasagna from '../images/icon-lasagna.png'
import iconJuice from '../images/icon-juice.png'
import iconFork from '../images/icon-fork.png'
import {useState} from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);

    function handleActiveCategory(index) {
        setActiveIndex(index)
    }

    const categories  = [
        {name: 'Все', img: iconFork},
        {name: 'Бургеры', img: iconBurger},
        {name: 'Пицца', img: iconPizza},
        {name: 'Десерты', img: iconLasagna},
        {name: 'Напитки', img: iconJuice},
    ]

    return (
        <div className="categories">
            <ul>{
                categories.map((category , i) => {
                    return (
                        <li
                            key={i}
                            className={activeIndex === i ? "active" : ""}
                            onClick={() => handleActiveCategory(i)}
                        >
                            <img src={category.img} alt="category"/>
                            <h2>{category.name}</h2>
                        </li>
                        )
                })
            }
            </ul>
        </div>
    )
}

export default Categories;