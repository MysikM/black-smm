import React from 'react';
import './footer.scss';
import {motion} from "framer-motion";
import logo from'../../assets/Images/footerLogo.webp';
import arrow from '../../assets/Images/arrow.svg';
import {footerLinks} from "../../data/data";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer--container container">
                <motion.img
                    animate={{ rotate: -360 }}
                    transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                    className='footer--logo' src={logo} alt="logo"
                />
                <nav className='footer--links-container'>
                    <ul className='footer--links'>
                        {
                            footerLinks.map((item,i ) => (
                                <li className='footer--link' key={i}>
                                    <a href={item.href}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <button className='footer--btn-up'>
                    <img src={arrow} alt='arrow-up'/>
                </button>
            </div>
        </footer>
    );
};

export default Footer;