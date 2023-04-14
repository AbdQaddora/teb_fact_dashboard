import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import Style from './style'
import { AiOutlineClose } from 'react-icons/ai'
import { useLang } from '../../context/LanguageContext'

interface IProps {
    children: ReactNode,
    close: () => void
}

const Modal = ({ children, close }: IProps) => {
    const { lang: { direction } } = useLang();

    return createPortal(
        <Style className={direction}>
            <div className="overlay" onClick={close}></div>
            <div className="container">
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="head">
                        <button className='close_modal_btn' onClick={close}>
                            <AiOutlineClose className='close_modal_btn_icon' />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </Style>
        , document.getElementById("modal") as HTMLElement)
}

export default Modal