import iconPizza from '../images/icon-pizza.png'
import iconBurger from '../images/icon-burger.png'
import iconSalad from '../images/icon-salad.png'
import iconPie from '../images/icon-pie.png'
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
        {name: 'Салаты', img: iconSalad},
        {name: 'Горячее', img: iconPie},
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

// <ul>
//     <li className="active">
//         <img src={iconFork} alt=""/>
//         <h2>Все</h2>
//     </li>
//     <li>
//         <img src={iconBurger} alt=""/>
//         <h2>Бургеры</h2>
//     </li>
//     <li>
//         <img src={iconPizza} alt=""/>
//         <h2>Пицца</h2>
//     </li>
//     <li>
//         <img src={iconSalad} alt=""/>
//         <h2>Салаты</h2>
//     </li>
//     <li>
//         <img src={iconPie} alt=""/>
//         <h2>Горячее</h2>
//     </li>
//     <li>
//         <img src={iconLasagna} alt=""/>
//         <h2 className="">Десерты</h2>
//     </li>
//     <li>
//         <img src={iconJuice} alt=""/>
//         <h2 className="">Напитки</h2>
//     </li>
// </ul>