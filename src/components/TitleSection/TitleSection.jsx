import React from 'react';
import './title-section.scss';


const TitleSection = ({className, title, subtitle}) => {
    return (
        <div className={`description ${className}`}>
            <h2 className='description--title'>
                {title}
            </h2>
            <p className='description--subtitle'>
                {subtitle}
            </p>
        </div>
    );
};

export default TitleSection;