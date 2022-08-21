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
import Avatar from "@mui/material/Avatar";
import ava from "../../images/avatar.svg";
import {IconButton} from "@mui/material"
import Profile from "../profile/Profile"

const Header: React.FC = () => {
    type scrollType = null | number;
    const location = useLocation();
    const [scroll, setScroll] = useState<scrollType>(null);
    const [headerActive, setHeaderActive] = useState<boolean>(false);
    const isMounted = useRef<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openProfile = Boolean(anchorEl);

    // получение блюд из LocalStorage

    // useEffect(() => {
    //     if(isMounted.current) {
    //         const json = JSON.stringify(cartItems)
    //         localStorage.setItem('items', json)
    //     }
    //     isMounted.current = true
    // }, [cartItems])

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


    const handleProfile = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
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
                    <Search/>
                    <Link to="/favorites">
                        <Badge badgeContent={0} color="error">
                            <FavoriteBorderIcon style={{color: "#fff"}} color={"error"} max={5}/>
                        </Badge>
                        <span className="header__text-badge">Избранное</span>
                    </Link>
                    {window.screen.width > 720 ? <DesktopCart/> : <MobileCart/>}
                    <IconButton className="header__avatar" onClick={handleProfile}>
                        <Avatar sx={{ width: 46, height: 46, bgcolor: '#EF4137' }}>M</Avatar>
                    </IconButton>
                    <Profile anchorEl={anchorEl} openProfile={openProfile} handleClose={handleClose} />
                </div>
            </div>
        </header>
    );
};

export default Header;
