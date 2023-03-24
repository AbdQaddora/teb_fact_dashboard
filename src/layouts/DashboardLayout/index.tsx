import React, { ReactNode, Suspense } from 'react';
// components
import SideMenu from './components/SideMenu';
import Style from './style';

interface IProps {
    children: ReactNode
}
const DashboardLayout = ({ children }: IProps) => {
    return (
        <Style>
            <SideMenu />
            <Suspense fallback={<>loading..</>}>
                {children}
            </Suspense>
        </Style>
    )
}

export default DashboardLayout