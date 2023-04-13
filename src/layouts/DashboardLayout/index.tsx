import React, { ReactNode, Suspense, useState } from 'react';
// components
import SideMenu from './components/SideMenu';
import Style from './style';
import Loading from '../../components/tiny/Loading';
import MobileMenuHeader from './components/MobileMenuHeader';
import { useLang } from '../../context/LanguageContext';

interface IProps {
    children: ReactNode
}
const DashboardLayout = ({ children }: IProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { lang } = useLang();
    return (
        <Style isMobileMenuOpen={isMobileMenuOpen} dir={lang.direction}>
            <SideMenu isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={() => setIsMobileMenuOpen(false)} />
            <MobileMenuHeader
                toggleMenu={() => setIsMobileMenuOpen(prev => !prev)}
                isMobileMenuOpen={isMobileMenuOpen}
            />
            <div className="content">
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
        </Style>
    )
}

export default DashboardLayout