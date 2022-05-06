import React, {useState} from 'react';
import './mobile-nav-bar.scss';
import Burger from "../Burger/Burger";
import Navbar from "../NavBar/Navbar";

const MobileNavBar = () => {
    const [openMenu, setOpenMenu] = useState(true);

    const menuHandler = () => setOpenMenu(!openMenu);

    return (
        <div className='mobile-nav'>
            <div className="mobile-nav--container" onClick={menuHandler}>
                <Burger isOpen={openMenu} />
                <h3>Black SMM</h3>
            </div>
            <Navbar className={`home--navigation ${openMenu && 'home--navigation__active'}`}/>
        </div>
    );
};

export default MobileNavBar;