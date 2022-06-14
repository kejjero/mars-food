import iconPizza from '../images/icon-pizza.png'
import iconBurger from '../images/icon-burger.png'
import iconLasagna from '../images/icon-lasagna.png'
import iconJuice from '../images/icon-juice.png'
import iconFork from '../images/icon-fork.png'
import {useSelector, useDispatch} from "react-redux";
import {selectCategoryId, setCategoryId, setPageCount} from "../redux/slices/filterSlice";
import {fetchCategoryItems, selectItemsCategory} from "../redux/slices/itemSlice";
import React from "react";

type CategoriesItem = {
    name: string;
    img: string;
}

const categories: CategoriesItem[]  = [
    {name: 'Все', img: iconFork},
    {name: 'Бургеры', img: iconBurger},
    {name: 'Пицца', img: iconPizza},
    {name: 'Десерты', img: iconLasagna},
    {name: 'Напитки', img: iconJuice},
]

const Categories: React.FC = () => {
    const categoryId = useSelector(selectCategoryId)
    const itemsCategory = useSelector(selectItemsCategory)
    const dispatch = useDispatch()

    function onClickCategory(index: number) {
        dispatch(setCategoryId(index))
        mathItems(index)
    }

    function mathItems(index: number) {
        const indexCategory = index !== 0 ? index : ''
        dispatch(fetchCategoryItems(indexCategory))
        const mathPages = Math.ceil(itemsCategory.length / 4)
        dispatch(setPageCount(mathPages))
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