import React from 'react';
import './burger.scss';


const Burger = ({isOpen}) => {
    return (
        <div className={`burger-icon ${isOpen && 'open'}`}>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    );
};

export default Burger;