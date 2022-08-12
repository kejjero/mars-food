import iconPizza from '../../images/icon-pizza.svg'
import iconBurger from '../../images/icon-burger.svg'
import iconLasagna from '../../images/icon-lasagna.svg'
import iconJuice from '../../images/icon-juice.svg'
import iconFork from '../../images/icon-fork.svg'
import {useSelector, useDispatch} from "react-redux";
import {selectCategoryId, setCategoryId} from "../../redux/filter/filterSlice";
import {fetchCategoryItems} from "../../redux/item/asyncActions";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import React, {useCallback} from     "react";
import {PlayerCategory} from "../index"

type CategoriesItem = {
    name: string;
    animation: string;
    img: string;
}

type CurrentIndexItem = number | string;

const categories: CategoriesItem[] = [
    {name: 'Все', animation: "https://assets1.lottiefiles.com/private_files/lf30_cq4x96b3.json", img: iconFork},
    {name: 'Бургеры', animation: "https://assets6.lottiefiles.com/private_files/lf30_xmcqzkqy.json", img: iconBurger},
    {name: 'Пицца', animation: "https://assets6.lottiefiles.com/private_files/lf30_xmcqzkqy.json", img: iconPizza},
    {name: 'Десерты', animation: "https://assets6.lottiefiles.com/private_files/lf30_xmcqzkqy.json", img: iconLasagna},
    {name: 'Напитки', animation: "https://assets6.lottiefiles.com/private_files/lf30_xmcqzkqy.json", img: iconJuice},
]

const Categories: React.FC<any> = () => {

    const categoryId = useSelector(selectCategoryId)
    const dispatch = useDispatch<any>()


    const onClickCategory = useCallback((index: number) => {
        dispatch(setCategoryId(index))
        mathItems(index)
    }, [])


    function mathItems(index: number) {
        const indexCategory: CurrentIndexItem = index !== 0 ? index : ''
        dispatch(fetchCategoryItems(indexCategory))
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
                            <PlayerCategory
                                key={index}
                                animation={category.animation}
                                index={index}
                                categoryId={categoryId}
                                img={category.img}
                            />
                            <h2 className="categories__title-mobile">{category.name}</h2>
                        </li>
                    )
                })
            }
            </ul>
        )
    }

    const MobileCategories = (slidesCategories:any) => {
        return (
            <Swiper
                slidesPerView={3}
                spaceBetween={10}
                centeredSlides
                watchSlidesProgress
                centeredSlidesBounds
                pagination={{type: 'fraction'}}
                loop
            >
                {slidesCategories}
            </Swiper>
        )
    }

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
                <DesktopCategories/>  //window.screen.width > 520 ? <DesktopCategories/> //: <MobileCategories/>
            }
        </div>
    )
}

export default React.memo(Categories);