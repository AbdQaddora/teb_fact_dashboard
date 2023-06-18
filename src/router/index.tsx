import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Loading from '../components/tiny/Loading';

export const PATHS = {
    CONSULTATIONS: "/consultations",
    DOCTOR: "/dermatologist",
    DOCTORS: "/dermatologists",
    PATIENTS: "/patients",
    PATIENT: "/patient",
    HOME: "/",
    SETTINGS: "/settings",
    LOGIN: "/login",
    TICKET: "/ticket",
    TICKETS: "/tickets",
    ADVERTISEMENTS: "/advertisements",
    STATIC_PAGES: "/static-pages",
    STATIC_PAGE: "/static-page",
    NEW_STATIC_PAGE: "/static-page-new",
    HISTORY_QUESTIONS: "/history-questions"
}

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const Consultations = lazy(() => import('../pages/Consultations'));
const Dermatologist = lazy(() => import('../pages/Dermatologist'));
const Dermatologists = lazy(() => import('../pages/Dermatologists'));
const Patients = lazy(() => import('../pages/Patients'));
const Patient = lazy(() => import('../pages/Patient'));
const Ticket = lazy(() => import('../pages/Ticket'));
const Tickets = lazy(() => import('../pages/Tickets'));
const Advertisements = lazy(() => import('../pages/Advertisements'));
const Settings = lazy(() => import('../pages/Settings'));
const StaticPages = lazy(() => import('../pages/StaticPages'));
const StaticPage = lazy(() => import('../pages/StaticPage'));
const HistoryQuestions = lazy(() => import('../pages/HistoryQuestions'));
const NotFound = lazy(() => import('../pages/NotFound'));

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
            <Route path={PATHS.DOCTORS + "/:id"} element={<DashboardLayout>
                <Dermatologist />
            </DashboardLayout>} />
            <Route path={PATHS.DOCTORS} element={<DashboardLayout>
                <Dermatologists />
            </DashboardLayout>} />
            <Route path={PATHS.PATIENTS} element={<DashboardLayout>
                <Patients />
            </DashboardLayout>} />
            <Route path={PATHS.PATIENTS + "/:id"} element={<DashboardLayout>
                <Patient />
            </DashboardLayout>} />
            <Route path={PATHS.TICKET + "/:id"} element={<DashboardLayout>
                <Ticket />
            </DashboardLayout>} />
            <Route path={PATHS.TICKETS} element={<DashboardLayout>
                <Tickets />
            </DashboardLayout>} />
            <Route path={PATHS.ADVERTISEMENTS} element={<DashboardLayout>
                <Advertisements />
            </DashboardLayout>} />
            <Route path={PATHS.SETTINGS} element={<DashboardLayout>
                <Settings />
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