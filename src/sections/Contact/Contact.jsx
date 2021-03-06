import React from 'react';
import './contact.scss';
import {contact} from "../../data/data";
import {Element} from 'react-scroll';


const Contact = () => {
    return (
        <Element id='contact' className='contact'>
            <div className='contact--container container'>
                <h3 className='contact--title'>
                    С любовью к вашему бизнесу!
                </h3>
                <div className='contact--links'>
                    {
                        contact.map((item, i) => {
                            const {icon, title, href} = item
                            return (
                                <a className='contact--link' key={i} href={href}>
                                    <img src={icon} alt={title} />
                                    <span>{title}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </Element>
    );
};

export default Contact;