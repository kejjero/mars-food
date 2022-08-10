import errorImage from "../images/error404.svg"
import errorImageMobile from "../images/error404-mobile.svg"
import React from "react";

const NotFound: React.FC = () => {
    return(
        <div className="noteFound">
            <img className="noteFound__image" src={ window.screen.width > 820 ? errorImage : errorImageMobile} alt=""/>
        </div>
    )
}

export default NotFound;