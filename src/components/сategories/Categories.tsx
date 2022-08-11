import iconPizza from '../../images/icon-pizza.svg'
import iconBurger from '../../images/icon-burger.svg'
import iconLasagna from '../../images/icon-lasagna.svg'
import iconJuice from '../../images/icon-juice.svg'
import iconFork from '../../images/icon-fork.svg'
import {useSelector, useDispatch} from "react-redux";
import {selectCategoryId, setCategoryId, setPageCount} from "../../redux/slices/filterSlice";
import {fetchCategoryItems, selectItemsCategory} from "../../redux/slices/itemSlice";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {memo} from "react";

type CategoriesItem = {
    name: string;
    img: string;
}

type CurrentIndexItem = number | string;

const categories: CategoriesItem[] = [
    {name: 'Все', img: iconFork},
    {name: 'Бургеры', img: iconBurger},
    {name: 'Пицца', img: iconPizza},
    {name: 'Десерты', img: iconLasagna},
    {name: 'Напитки', img: iconJuice},
]

const Categories = () => {
    const categoryId = useSelector(selectCategoryId)
    const itemsCategory = useSelector(selectItemsCategory)
    const dispatch = useDispatch<any>()


    function onClickCategory(index: number) {
        dispatch(setCategoryId(index))
        mathItems(index)
    }

    function mathItems(index: number) {
        const indexCategory: CurrentIndexItem = index !== 0 ? index : ''
        dispatch(fetchCategoryItems(indexCategory))
        const mathPages = Math.ceil(itemsCategory.length / 4)
        dispatch(setPageCount(mathPages))
    }

    const DesktopCategories = () => {
        return (
            <ul className="categories__slide">{
                categories.map((category, index) => {
                    return (
                        <li
                            key={index}
                            className={categoryId === index ? "active" : ""}
                            onClick={() => onClickCategory(index)}
                        >
                            <img className="categories__img-mobile" src={category.img} alt="category"/>
                            <h2 className="categories__title-mobile">{category.name}</h2>
                        </li>
                    )
                })
            }
            </ul>
        )
    }

    const MobileCategories = () => {
        return (
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides
                watchSlidesProgress
                centeredSlidesBounds
                pagination={{
                    type: 'fraction',
                }}
                loop
            >
                {slidesCategories}
            </Swiper>
        )
    }


    const slidesCategories = categories.map((category, index) => {
        return (
            <SwiperSlide key={index}>
                {({ isActive }) => (
                    <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                )}
                <li
                    key={index}
                    className={`categories__item-mobile ${categoryId === index ? "active" : ""}`}
                >
                    <img
                        className="categories__img-mobile"
                        src={category.img} alt="category"
                    />
                    <h2 className="categories__title-mobile">{category.name}</h2>
                </li>
            </SwiperSlide>
        )
    })

    return (
        <div className="categories">
            {
                window.screen.width > 520 ? <DesktopCategories/> : <MobileCategories/>
            }
        </div>
    )
}

export default memo(Categories);