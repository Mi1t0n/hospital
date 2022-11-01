import style from './Modal.module.scss';
import {createPortal} from 'react-dom';
import {FC, ReactNode} from "react";

interface IModal {
    isOpen: boolean
    closeModal: () => void
    children: ReactNode
}

const Modal:FC<IModal> = ({isOpen, closeModal, children}) => {

    const modalWindow = (
        <>
            <div className={style.background} onClick={closeModal}/>
            <div className={style.window} onClick={event => event.stopPropagation()}>
                {children}
            </div>
        </>
    );

    return createPortal(isOpen ? modalWindow : null, document.getElementById('modal')!);
};

export default Modal;