import { useState } from 'react';

import Style from './style'
import { Span, Subtitle1 } from '../../../../components/tiny/Typography/style';

// hooks
import { useLang } from '../../../../context/LanguageContext';
import { useTranslation } from 'react-i18next';
// icons
import { BiWorld } from 'react-icons/bi';
interface IProps {
    closeMobileMenu: () => void,
}

const LanguageController = ({ closeMobileMenu }: IProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { changeLang, lang } = useLang();
    const { t } = useTranslation('', { keyPrefix: "sideMenu" })
    return (
        <Style>
            <Subtitle1 className={`lang_menu_head ${isMenuOpen ? " active" : ""}`} onClick={() => setIsMenuOpen(prev => !prev)}>
                <BiWorld className='link_icon' />
                <Span>{t("language")}</Span>
            </Subtitle1>
            <div className={`lang_menu_body${isMenuOpen ? " open" : ""}`}>
                <Subtitle1
                    color='neutral/n300'
                    onClick={() => {
                        closeMobileMenu();
                        changeLang('en')
                    }}
                    className={`lang_menu_item ${lang.langName === 'en' ? "active" : ""}`}>
                    English
                </Subtitle1>
                <Subtitle1
                    color='neutral/n300'
                    onClick={() => {
                        closeMobileMenu();
                        changeLang('ar');
                    }}
                    className={`lang_menu_item ${lang.langName === 'ar' ? "active" : ""}`}>
                    العربية
                </Subtitle1>
            </div>
        </Style>
    )
}

export default LanguageController