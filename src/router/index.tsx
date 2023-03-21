import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
export const PATHS = {
    ADD_NEW_ARTICLE: "/new-article",
    ARTICLE: "/article",
    ARTICLES: "/articles",
    CONSULTATIONS: "/consultations",
    DOCTOR: "/doctor",
    DOCTORS: "/doctors",
    HOME: "/",
    LOGIN: "/login",
    REPORT: "/report",
    REPORTS: "/reports",
    SETTINGS: "/settings"
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
const Report = lazy(() => import('../pages/Report'));
const Reports = lazy(() => import('../pages/Reports'));
const Settings = lazy(() => import('../pages/Settings'));

const Router = () => {
    return (
        <Routes>
            <Route path={PATHS.LOGIN} element={<Suspense fallback={<>loading</>}>
                <Login />
            </Suspense>
            } />

            <Route path={PATHS.HOME} element={<Home />} />
            <Route path={PATHS.ADD_NEW_ARTICLE} element={<AddNewArticle />} />
            <Route path={PATHS.ARTICLE + "/:id"} element={<Article />} />
            <Route path={PATHS.ARTICLES} element={<Articles />} />
            <Route path={PATHS.CONSULTATIONS} element={<Consultations />} />
            <Route path={PATHS.DOCTOR + "/:id"} element={<Doctor />} />
            <Route path={PATHS.DOCTORS} element={<Doctors />} />
            <Route path={PATHS.REPORT + "/:id"} element={<Report />} />
            <Route path={PATHS.REPORTS} element={<Reports />} />
            <Route path={PATHS.SETTINGS} element={<Settings />} />
            <Route path={"/*"} element={<NotFound />} />
        </Routes>
    )
}

export default Router