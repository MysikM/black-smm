import React from 'react';
import './case.scss';
import TitleSection from "../../components/TitleSection/TitleSection";
import CaseList from "../../components/CaseList/CaseList";

const Case = () => {
    return (
        <section className='case'>
            <div className='case--container container'>
                <TitleSection
                    title='Кейсы'
                    subtitle='Наше сотрудничество принесет реальный результат, измеряемый в точных цифрах.'
                />
                <CaseList />
            </div>
        </section>
    );
};

export default Case;