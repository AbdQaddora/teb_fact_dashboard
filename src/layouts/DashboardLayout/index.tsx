import React, { ReactNode, Suspense, useState } from 'react';
// components
import SideMenu from './components/SideMenu';
import Style from './style';
import Loading from '../../components/tiny/Loading';
import MobileMenuHeader from './components/MobileMenuHeader';
import { useLang } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router';

interface IProps {
    children: ReactNode
}
const DashboardLayout = ({ children }: IProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { lang } = useLang();
    const { token } = useAuth();
    if(!token){
        return <Navigate to={PATHS.LOGIN}/>
    }

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