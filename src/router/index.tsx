import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Loading from '../components/tiny/Loading';

export const PATHS = {
    CONSULTATIONS: "/consultations",
    DOCTOR: "/doctor",
    DOCTORS: "/doctors",
    HOME: "/",
    LOGIN: "/login",
    TICKET: "/ticket",
    TICKETS: "/tickets",
    STATIC_PAGES: "/static-pages",
    STATIC_PAGE: "/static-page",
    NEW_STATIC_PAGE: "/static-page-new",
    HISTORY_QUESTIONS: "/history-questions"
}

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const Consultations = lazy(() => import('../pages/Consultations'));
const Doctor = lazy(() => import('../pages/Doctor'));
const Doctors = lazy(() => import('../pages/Doctors'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Ticket = lazy(() => import('../pages/Ticket'));
const Tickets = lazy(() => import('../pages/Tickets'));
const StaticPages = lazy(() => import('../pages/StaticPages'));
const StaticPage = lazy(() => import('../pages/StaticPage'));
const HistoryQuestions = lazy(() => import('../pages/HistoryQuestions'));

const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<Suspense fallback={<Loading />}>
                <Login />
            </Suspense>
            } />

            <Route path={PATHS.HOME} element={<DashboardLayout>
                <Home />
            </DashboardLayout>} />
            <Route path={PATHS.CONSULTATIONS} element={<DashboardLayout>
                <Consultations />
            </DashboardLayout>} />
            <Route path={PATHS.DOCTOR + "/:id"} element={<DashboardLayout>
                <Doctor />
            </DashboardLayout>} />
            <Route path={PATHS.DOCTORS} element={<DashboardLayout>
                <Doctors />
            </DashboardLayout>} />
            <Route path={PATHS.TICKET + "/:id"} element={<DashboardLayout>
                <Ticket />
            </DashboardLayout>} />
            <Route path={PATHS.TICKETS} element={<DashboardLayout>
                <Tickets />
            </DashboardLayout>} />
            {/* STATIC PAGES TABLE */}
            <Route path={PATHS.STATIC_PAGES} element={<DashboardLayout>
                <StaticPages />
            </DashboardLayout>} />
            {/* FOR EDIT PAGE */}
            <Route path={PATHS.STATIC_PAGE + "/:id"} element={<DashboardLayout>
                <StaticPage />
            </DashboardLayout>} />

            {/* FOR NEW PAGE */}
            <Route path={PATHS.NEW_STATIC_PAGE} element={<DashboardLayout>
                <StaticPage />
            </DashboardLayout>} />

            <Route path={PATHS.HISTORY_QUESTIONS} element={<DashboardLayout>
                <HistoryQuestions />
            </DashboardLayout>} />
            <Route path={"/*"} element={<NotFound />} />
        </Routes>
    )
}

export default Router