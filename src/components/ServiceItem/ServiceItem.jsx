import React from 'react';
import './service-item.scss'

const ServiceItem = ({num, title, descriptions}) => {
    return (
        <article className='service-item'>
            <a className='service-item--container' href="#">
                <div className='service-item--header'>
                    <i>{num}</i>
                    <h5>{title}</h5>
                </div>
                <ul className='service-item--descriptions'>
                    {descriptions.map((item,i) => (
                        <li key={i} className='service-item--description'>{item}</li>
                    ))}
                </ul>
                <i className='service-item--btn' >></i>
            </a>
        </article>
    );
};

export default ServiceItem;