import iconPizza from '../../images/icon-pizza.svg'
import iconBurger from '../../images/icon-burger.svg'
import iconLasagna from '../../images/icon-lasagna.svg'
import iconJuice from '../../images/icon-juice.svg'
import iconFork from '../../images/icon-fork.svg'
import {useSelector, useDispatch} from "react-redux";
import {setCategoryId} from "../../redux/filter/filterSlice";
import {selectCategoryId} from "../../redux/filter/selectors"
import {fetchCategoryItems} from "../../redux/item/asyncActions";
import Chip from '@mui/material/Chip';
// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
import React, {useCallback} from "react";
import {PlayerCategory} from "../index"
import {AppDispatch} from "../../redux/store";

type categoriesItemType = {
    name: string;
    animation: string;
    img: string;
}

type TIndexCategory = number | null;

const categories: categoriesItemType[] = [
    {name: 'Все', animation: "https://assets1.lottiefiles.com/private_files/lf30_cq4x96b3.json", img: iconFork},
    {name: 'Бургеры', animation: "https://assets10.lottiefiles.com/private_files/lf30_c9kpqjs2.json", img: iconBurger},
    {
        name: 'Пицца',
        animation: "https://lottie.host/94599d92-e526-4536-bb82-45f22457024d/G7lY67IuY6.json",
        img: iconPizza
    },
    {
        name: 'Десерты',
        animation: "https://lottie.host/4cbfe516-7cbb-4556-a322-70c6a37c3f73/vvl1hFXT4X.json",
        img: iconLasagna
    },
    {
        name: 'Напитки',
        animation: "https://lottie.host/e3708210-fd70-4d9d-849b-1253c28ef23f/hNHJgIzK8m.json",
        img: iconJuice
    },
]

const Categories: React.FC = () => {

    const categoryId = useSelector(selectCategoryId)
    const dispatch = useDispatch<AppDispatch>()

    const onClickCategory = useCallback((index: number): void => {
        dispatch(setCategoryId(index))
        mathItems(index)
    }, [])


    const mathItems = (index: number): void => {
        const indexCategory: TIndexCategory = index !== 0 ? index : null
        dispatch(fetchCategoryItems(indexCategory))
    }

    const DesktopCategories = (): JSX.Element => {
        return (
            <ul className="categories__slide">{
                categories.map((category, index) => {
                    return (
                        <li
                            key={index}
                            className={categoryId === index ? "active" : ""}
                            onClick={() => onClickCategory(index)}
                        >
                            <PlayerCategory
                                animation={category.animation}
                                index={index}
                                categoryId={categoryId}
                                img={category.img}
                            />
                            <Chip
                                variant={categoryId !== index ? "outlined" : "filled"}
                                label={category.name}
                                style={{fontSize: '16px'}}
                                color={categoryId === index ? "error" : "default"}
                            />
                        </li>
                    )
                })
            }
            </ul>
        )
    }

    // const MobileCategories = (slidesCategories:any) => {
    //     return (
    //         <Swiper
    //             slidesPerView={3}
    //             spaceBetween={10}
    //             centeredSlides
    //             watchSlidesProgress
    //             centeredSlidesBounds
    //             pagination={{type: 'fraction'}}
    //             loop
    //         >
    //             {slidesCategories}
    //         </Swiper>
    //     )
    // }

    //
    // const slidesCategories = categories.map((category, index) => {
    //     return (
    //         <SwiperSlide key={index}>
    //             {({isActive}) => (
    //                 <div>Current slide is {isActive ? 'active' : 'not active'}</div>
    //             )}
    //             <li
    //                 key={index}
    //                 className={`categories__item-mobile ${categoryId === index ? "active" : ""}`}
    //             >
    //                 <img
    //                     className="categories__img-mobile"
    //                     src={category.img} alt="category"
    //                 />
    //                 <h2 className="categories__title-mobile">{category.name}</h2>
    //             </li>
    //         </SwiperSlide>
    //     )
    // })

    return (
        <div className="categories">
            {
                window.screen.width > 520 ? <DesktopCategories/> : <></>
            }
        </div>
    )
}

export default React.memo(Categories);