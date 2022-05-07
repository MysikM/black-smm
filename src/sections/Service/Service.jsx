import React from 'react';
import './service.scss';
import ServicesList from "../../components/ServicesList/ServicesList";

const Service = () => {
    return (
        <section className='service container'>
            <div className='service--description'>
                <h2 className='service--title'>
                    Услуги
                </h2>
                <p className='service--subtitle'>
                    От разработки стратегии до Production — наша команда знает, как повысить эффективность вашего продвижения.
                </p>
            </div>
            <ServicesList />
        </section>
    );
};

export default Service;