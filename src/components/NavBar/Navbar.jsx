import React, {useContext} from 'react';
import './navbar.scss';
import {navigationLinks} from "../../data/data";
import { ModalStatusContext } from "../../context/modalContext.js";
import {Link} from 'react-scroll';
import CallMeModal from "../CallMeModal/CallMeModal";

const Navbar = ({className}) => {
    const {setIsOpenModal} = useContext(ModalStatusContext);
    return (
        <nav className={`navigation ${className}`}>
            <div className='navigation--container'>
                <a className='navigation--logo' href="#top">Black SMM</a>
                <ul className="navigation--links">
                    {
                        navigationLinks.map((link) => {
                            const {path, title} = link
                            return (
                                <li className='navigation--item' key={title}>
                                    <Link to={path} spy={true} smooth={true} duration={500}>{title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className='navigation--contact'>
                    <a className='navigation--phone' href="tel:+380950349281">+38 (095) 034 92 81</a>
                    <button className='navigation--btn' onClick={() => setIsOpenModal(true)} >Перезвонить мне</button>
                </div>
            </div>
            <CallMeModal />
        </nav>
    );
};

export default Navbar;