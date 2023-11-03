import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from '../../components/layout/Header'
import { Footer } from '../../components/layout/Footer'

const Home = lazy(() => import("../../views/main/Home"))
const Conditions = lazy(() => import("../../views/main/Conditions"))
const Policy = lazy(() => import("../../views/main/Policy"))
const MemberShip = lazy(() => import("../../views/main/MemberShip"))

export const PublicRoutes = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={
                    <Suspense fallback={<>..</>}>
                        <Home />
                    </Suspense>
                } />
                <Route exact path="/planes" element={
                    <Suspense fallback={<>..</>}>
                        <MemberShip />
                    </Suspense>
                } />
                <Route exact path="/policy" element={
                    <Suspense fallback={<>..</>}>
                        <Policy />
                    </Suspense>
                } />
                <Route exact path="/terms" element={
                    <Suspense fallback={<>..</>}>
                        <Conditions />
                    </Suspense>
                } />
            </Routes>
            <Footer />
        </>
    )
}


