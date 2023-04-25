import React from 'react'
// tostas
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useLang } from '../../context/LanguageContext';

const NotificationsContainer = () => {
    const { lang } = useLang();
    return (
        <ToastContainer
            position={lang.direction === 'ltr' ? 'bottom-right' : "bottom-left"}
            rtl={lang.direction === 'rtl'}
            theme='dark'
        />
    )
}

export default NotificationsContainer