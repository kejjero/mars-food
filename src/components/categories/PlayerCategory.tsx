import {Player} from '@lottiefiles/react-lottie-player';
import React from "react";

type PlayerCategoryType = {
    animation: string;
    index: number;
    categoryId: number;
    img: string;
}

const PlayerCategory: React.FC<PlayerCategoryType> = ({animation, index, categoryId, img}):JSX.Element => {
    return (
        <React.Fragment>
            {
                index !== categoryId ?
                    <img className="categories__item-mobile" src={img} alt={'img'}/>
                    :
                    <Player
                        id={String(index)}
                        autoplay={index === categoryId}
                        src={animation}
                        style={{ height: '50px', width: '55px', marginBottom: '11px' }}
                    >
                    </Player>
            }
        </React.Fragment>
    )
}

export default React.memo(PlayerCategory);