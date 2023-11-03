import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

const Panel = lazy(() => import("../../views/dashboard/Panel"))

export const DashboardRoutes = () => {
    const { status } = useSelector(state => state.auth);

    return (
        <>
            <Header />
            {
                status === 'auth' &&
                <Routes>
                    <Route exact path="/" element={
                        <Suspense fallback={<>..</>}>
                            <Panel />
                        </Suspense>
                    } />
                </Routes>
            }
            <Footer />
        </>
    )
}
