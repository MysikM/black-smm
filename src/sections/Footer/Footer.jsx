import React from 'react';
import './footer.scss';
import {motion} from "framer-motion";
import logo from'../../assets/Images/footerLogo.webp';
import arrow from '../../assets/Images/arrow.svg';
import {footerLinks} from "../../data/data";
import {Link} from 'react-scroll';

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
                                    <Link to={item.href} spy={true} smooth={true} duration={500}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <Link to='home' spy={true} smooth={true} duration={500} className='footer--btn-up'>
                    <img src={arrow} alt='arrow-up'/>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;