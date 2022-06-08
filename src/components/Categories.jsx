import iconPizza from '../images/icon-pizza.png'
import iconBurger from '../images/icon-burger.png'
import iconLasagna from '../images/icon-lasagna.png'
import iconJuice from '../images/icon-juice.png'
import iconFork from '../images/icon-fork.png'
import {useSelector, useDispatch} from "react-redux";
import {setCategoryId} from "../redux/slices/filterSlice";

const categories  = [
    {name: 'Все', img: iconFork},
    {name: 'Бургеры', img: iconBurger},
    {name: 'Пицца', img: iconPizza},
    {name: 'Десерты', img: iconLasagna},
    {name: 'Напитки', img: iconJuice},
]

function Categories({ getCountPages }) {
    const categoryId = useSelector((state) => state.filterReducer.categoryId)
    const dispatch = useDispatch()

    function onClickCategory(index) {
        dispatch(setCategoryId(index))
        getCountPages(index)
    }

    return (
        <div className="categories">
            <ul>{
                categories.map((category , index) => {
                    return (
                        <li
                            key={index}
                            className={categoryId === index ? "active" : ""}
                            onClick={() => onClickCategory(index)}
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