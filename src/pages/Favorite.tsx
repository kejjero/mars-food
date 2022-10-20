import React from "react";
import {ItemBlock} from "../components";
import {selectFavoriteData} from "../redux/favorite/FavoriteSlice";
import {useSelector} from "react-redux";

const Favorite: React.FC = () => {
    const favoriteData = useSelector(selectFavoriteData);

    return (
        <>
            <div className="content__wrapper-title">
                <h2 className="content__title">Избранное</h2>
            </div>
            <div className="content__items">
                {
                    favoriteData.map((item: any) => {
                        return (
                            <ItemBlock
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                rating={item.rating}
                                imageUrl={item.imageUrl}
                                property={item.property}
                            />
                        )
                    })
                }
                {

                }
            </div>
        </>
    )
}

export default Favorite;
