import React from 'react';
import './service.scss';
import ServicesList from "../../components/ServicesList/ServicesList";
import TitleSection from "../../components/TitleSection/TitleSection";
import {Element} from 'react-scroll';


const Service = () => {
    return (
        <Element id='service' className='service container'>
            <TitleSection
                title='Услуги'
                subtitle='От разработки стратегии до Production — наша команда знает, как повысить эффективность вашего продвижения.' />
            <ServicesList />
        </Element>
    );
};

export default Service;