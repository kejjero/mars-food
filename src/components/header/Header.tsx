import logo from "../../images/logo.svg";
import logoMobile from "../../images/logo-mobile.svg";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import React, {useEffect, useRef, useState} from "react";
import Search from "../search/Search";
import DesktopCart from "./cart/DesktopCart";
import MobileCart from "./cart/MobileCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Badge from "@mui/material/Badge";
import {selectFavoriteData} from "../../redux/favorite/FavoriteSlice";
import {useSelector} from "react-redux";

const Header: React.FC = () => {
    type scrollType = null | number;
    const location = useLocation();
    const [scroll, setScroll] = useState<scrollType>(null);
    const [headerActive, setHeaderActive] = useState<boolean>(false);
    const favoriteData = useSelector(selectFavoriteData);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        if (scroll !== null && scroll > 80) {
            setHeaderActive(true);
        } else {
            setHeaderActive(false);
        }
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    const handleScroll = (): void => {
        setScroll(window.scrollY);
    };

    return (
        <header className={`header ${headerActive && "header__mobile_active"}`}>
            <div className="container">
                <Link to="/mars-food" className="header__logo">
                    {window.screen.width > 950 ? (
                        <img
                            className="header__logo-img"
                            width="38"
                            src={logo}
                            alt="logo"
                        />
                    ) : (
                        <img className="header__mobile-logo" src={logoMobile} alt="logo"/>
                    )}
                </Link>
                <div className="header__right-block">
                    {
                        location.pathname === '/mars-food' && <Search/>
                    }
                    <Link to="/favorites">
                        <Badge badgeContent={favoriteData.length} color="error">
                            <FavoriteBorderIcon style={{color: "#fff"}} color={"error"} max={5}/>
                        </Badge>
                        <span className="header__text-badge">Избранное</span>
                    </Link>
                    {window.screen.width > 720 ? <DesktopCart/> : <MobileCart/>}
                </div>
            </div>
        </header>
    );
};

export default Header;
