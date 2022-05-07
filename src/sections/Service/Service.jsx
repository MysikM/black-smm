import React from 'react';
import './service.scss';
import ServicesList from "../../components/ServicesList/ServicesList";
import TitleSection from "../../components/TitleSection/TitleSection";

const Service = () => {
    return (
        <section className='service container'>
            <TitleSection
                title='Услуги'
                subtitle='От разработки стратегии до Production — наша команда знает, как повысить эффективность вашего продвижения.' />
            <ServicesList />
        </section>
    );
};

export default Service;