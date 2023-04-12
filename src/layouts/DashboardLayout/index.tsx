import React, { ReactNode, Suspense } from 'react';
// components
import SideMenu from './components/SideMenu';
import Style from './style';
import Loading from '../../components/Loading';

interface IProps {
    children: ReactNode
}
const DashboardLayout = ({ children }: IProps) => {
    return (
        <Style>
            <SideMenu />
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </Style>
    )
}

export default DashboardLayout