import React, {useState} from 'react';
import './custom-input.scss';
import {ModalStatusContext} from "../../context/modalContext";


const CustomInput = ({title, text, setText}) => {

    const [fieldStatus, setFieldStatus]= useState(false);
    const onFocus = () => {
        setFieldStatus(true);
    }
    const onBlur = (e) => {
        setFieldStatus(e.target.value.length > 0 ? true: false);
    }
    return (
        <div className='input'>
            <span className={`input--title ${fieldStatus ? 'input--title__active' : null }`}>{title}</span>
            <input className='input--field'
                   type="text"
                   value={text}
                   onChange={(e) => setText(e.target.value)}
                   onFocus={onFocus}
                   onBlur={onBlur}
            />
        </div>
    );
};

export default CustomInput;