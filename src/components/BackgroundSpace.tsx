import React from "react";
import backgroundDesktop from "../images/background_space.svg";
import backgroundMobile from "../images/background_space-mobile.svg";

const BackgroundSpace: React.FC = () => {
    return(
        <img
            className="background-space"
            src={window.screen.width > 520 ? backgroundDesktop : backgroundMobile}
            alt=""
        />
    )
}

export default BackgroundSpace;