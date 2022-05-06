import React from 'react';
import './title-color.scss';

const TitleColor = ({color, text}) => {
    return (
        <h5 className={`${color} title`}>
            {text}
        </h5>
    );
};

export default TitleColor;