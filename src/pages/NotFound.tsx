import image from "../images/error404.svg"
import React from "react";

const NotFound: React.FC = () => {
    return(
        <div className="noteFound">
            <img className="noteFound__image" src={image} alt=""/>
        </div>
    )
}

export default NotFound;