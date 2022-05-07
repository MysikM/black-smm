import React from 'react';
import './services-list.scss';
import {services} from "../../data/data";
import ServiceItem from "../ServiceItem/ServiceItem";

const ServicesList = () => {
    return (
        <div className='service-list'>
            {services.map((service, i) => (
                <ServiceItem key={i} {...service} />
            ))}
        </div>
    );
};

export default ServicesList;