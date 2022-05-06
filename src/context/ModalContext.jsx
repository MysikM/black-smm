import React, {useState} from 'react';
import { ModalStatusContext } from './modalContext.js';

const ModalContext = ({children}) => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const modal = {
        isOpenModal,
        setIsOpenModal
    }
    return (
        <ModalStatusContext.Provider value={modal}>
            {children}
        </ModalStatusContext.Provider>
        );
};

export default ModalContext;