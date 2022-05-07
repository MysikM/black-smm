import React from 'react';
import './case-item.scss';

const CaseItem = ({title, icon, bg, description}) => {
    return (
        <article className='case-item' style={{backgroundImage: `url(${bg})`}}>
            <a href="#" className="case-item--container">
                <div className='case-item--title'>
                    <img src={icon} alt={title} />
                    <h5>{title}</h5>
                </div>
                <p className='case-item--description'>
                    {description}
                </p>
                <i className='case-item--icon'>></i>
            </a>
        </article>
    );
};

export default CaseItem;