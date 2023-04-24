import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Loading from '../components/tiny/Loading';

export const PATHS = {
    ADD_NEW_ARTICLE: "/new-article",
    ARTICLE: "/article",
    ARTICLES: "/articles",
    CONSULTATIONS: "/consultations",
    DOCTOR: "/doctor",
    DOCTORS: "/doctors",
    HOME: "/",
    LOGIN: "/login",
    TICKET: "/ticket",
    TICKETS: "/tickets",
    STATIC_PAGES: "/static-pages",
    NEW_STATIC_PAGES: "/static-pages/new",
    HISTORY_QUESTIONS: "/history-questions"
}

const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const AddNewArticle = lazy(() => import('../pages/AddNewArticle'));
const Article = lazy(() => import('../pages/Article'));
const Articles = lazy(() => import('../pages/Articles'));
const Consultations = lazy(() => import('../pages/Consultations'));
const Doctor = lazy(() => import('../pages/Doctor'));
const Doctors = lazy(() => import('../pages/Doctors'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Ticket = lazy(() => import('../pages/Ticket'));
const Tickets = lazy(() => import('../pages/Tickets'));
const StaticPages = lazy(() => import('../pages/StaticPages'));
const NewStaticPage = lazy(() => import('../pages/NewStaticPage'));
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
            <Route path={PATHS.ADD_NEW_ARTICLE} element={<DashboardLayout>
                <AddNewArticle />
            </DashboardLayout>} />
            <Route path={PATHS.ARTICLE + "/:id"} element={<DashboardLayout>
                <Article />
            </DashboardLayout>} />
            <Route path={PATHS.ARTICLES} element={<DashboardLayout>
                <Articles />
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
            <Route path={PATHS.STATIC_PAGES} element={<DashboardLayout>
                <StaticPages />
            </DashboardLayout>} />
            <Route path={PATHS.NEW_STATIC_PAGES} element={<DashboardLayout>
                <NewStaticPage />
            </DashboardLayout>} />
            <Route path={PATHS.HISTORY_QUESTIONS} element={<DashboardLayout>
                <HistoryQuestions />
            </DashboardLayout>} />
            <Route path={"/*"} element={<DashboardLayout>
                <NotFound />
            </DashboardLayout>} />
        </Routes>
    )
}

export default Router