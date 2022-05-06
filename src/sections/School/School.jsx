import React from 'react';
import './school.scss';
import titleLogo from '../../assets/Images/title-school.png';

const School = () => {
    return (
        <section className='school'>
           <div className='container school--container'>
               <img className='school--img' src={titleLogo} alt="school"/>
               <p className='school--description'>Оффлайн курсы SMM & Target</p>
               <p className='school--description'>от агентства BLACK SMM</p>
               <a className='btn school--button' href='#'>Подробнее</a>
           </div>
        </section>
    );
};

export default School;