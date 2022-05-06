import React, {useContext, useState} from 'react';
import './call-me-modal.scss';
import {AiOutlineClose} from "react-icons/ai";
import {ModalStatusContext} from "../../context/modalContext.js";

const CallMeModal = () => {
    const {isOpenModal, setIsOpenModal} = useContext(ModalStatusContext);
    const [phone, setPhone] = useState('');
    const [numberStatus, setNumberStatus]= useState(false);
    const onFocus = (e) => {
        setNumberStatus(true);
    }
    const onBlur = (e) => {
        setNumberStatus(e.target.value.length > 0 ? true: false);
    }
    const closeModal = () => {
        setIsOpenModal(false);
    }
    return (
        <div className={`modal ${isOpenModal && 'modal__active'}`} onClick={closeModal}>
            <AiOutlineClose className='modal--close' />
            <div className='modal--content' onClick={(e) => e.stopPropagation()}>
                <h3 className='modal--title'>Обратная связь</h3>
                <p className='modal--subtitle'>Оставьте номер телефона и мы перезвоним вам</p>
                <div className='modal--phone-container'>
                    <span className={`modal--number-title ${numberStatus ? 'modal--number-title__active' : null }`}>Номер телефона</span>
                    <input className='modal--number'
                           type="text"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           onFocus={onFocus}
                           onBlur={onBlur}
                    />
                    <button className='modal--btn'>Перезвоните мне</button>
                </div>
            </div>
        </div>
    );
};

export default CallMeModal;