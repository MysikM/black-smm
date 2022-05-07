import React from 'react';
import './case-list.scss';
import {caseItems} from "../../data/data";
import CaseItem from "../CaseItem/CaseItem";

const CaseList = () => {
    return (
        <>
            <div className='case-list'>
                {caseItems.map((item,i ) => (
                    <CaseItem key={i} {...item} />
                ))}
            </div>
            <button className='button all-case'>Смотреть все кейсы <span>></span></button>
        </>
    );
};

export default CaseList;