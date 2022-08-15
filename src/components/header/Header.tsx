import logo from '../../images/logo.svg'
import logoMobile from '../../images/logo-mobile.svg'
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import React, {useEffect, useRef, useState} from "react";
import Search from "./Search";
import DesktopCart from "./cart/DesktopCart"
import MobileCart from "./cart/MobileCart";

const Header: React.FC = () => {
    type scrollType = null | number;
    const location = useLocation();
    const [scroll, setScroll] = useState<scrollType>(null);
    const [headerActive, setHeaderActive] = useState<boolean>(false);
    const isMounted = useRef<boolean>(false)

    // получение блюд из LocalStorage

    // useEffect(() => {
    //     if(isMounted.current) {
    //         const json = JSON.stringify(cartItems)
    //         localStorage.setItem('items', json)
    //     }
    //     isMounted.current = true
    // }, [cartItems])


    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        if (scroll !== null && scroll > 80) {
            setHeaderActive(true)
        } else {
            setHeaderActive(false)
        }
        return () => window.removeEventListener("scroll", handleScroll)
    }, [scroll])

    const handleScroll = (): void => {
        setScroll(window.scrollY);
    };

    return (
        <header className={`header ${headerActive && 'header__mobile_active'}`}>
            <div className="container">
                <Link to="/mars-food" className="header__logo">
                    {
                        window.screen.width > 950 ?
                            <img className="header__logo-img" width="38" src={logo} alt="logo"/>
                            :
                            <img className="header__mobile-logo" src={logoMobile} alt="logo"/>
                    }
                </Link>
                <div className="header__right-block">
                    {
                        window.screen.width > 720 ? <Search/>  : <></>
                    }
                    {
                        window.screen.width > 720 ? <DesktopCart/> : <MobileCart/>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;