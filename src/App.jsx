import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/common/NavBar';
import { Cargando } from './components/utils/cargando';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const GaleriaPage = lazy(() => import('./components/pages/GaleriaPage'));
const ServiciosPage = lazy(() => import('./components/pages/ServiciosPage'));
const ContactoPage = lazy(() => import('./components/pages/ContactoPage'));

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BrowserRouter basename="/tamir-1-1.0">
            <ScrollToTop />

            <NavBar />

            {loading ? (
                <Cargando />
            ) : (
                <Suspense fallback={<Cargando />}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/galeria" element={<GaleriaPage />} />
                        <Route path="/servicios" element={<ServiciosPage />} />
                        <Route path="/contacto" element={<ContactoPage />} />
                    </Routes>
                </Suspense>
            )}

            <Footer />
        </BrowserRouter>
    );
}

export default App;
