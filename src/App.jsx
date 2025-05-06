import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UseDisableImg } from './hooks/UseDisableImg';
import { NavBar } from './components/common/NavBar';
import { Cargando } from './components/utils/Cargando';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const GaleriaPage = lazy(() => import('./components/pages/GaleriaPage'));
const GaleriaPageDetail = lazy(() => import('./components/pages/GaleriaPageDetail'));
const ServiciosPage = lazy(() => import('./components/pages/ServiciosPage'));
const ContactoPage = lazy(() => import('./components/pages/ContactoPage'));
const FormSendPage = lazy(() => import('./components/pages/FormSendPage'));
const PoliticaPage = lazy(() => import('./components/pages/PoliticaPage'));
const TerminosPage = lazy(() => import('./components/pages/TerminosPage'));
const FaqPage = lazy(() => import('./components/pages/FaqPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

function App() {
    UseDisableImg();
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
                <main className="cargando">
                    <Cargando />
                </main>
            ) : (
                <Suspense
                    fallback={
                        <main className="cargando">
                            <Cargando />
                        </main>
                    }
                >
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/galeria" element={<GaleriaPage />} />
                        <Route path="/galeria/:categoria" element={<GaleriaPageDetail />} />
                        <Route path="/servicios" element={<ServiciosPage />} />
                        <Route path="/servicios/:servicio" element={<ServiciosPage />} />
                        <Route path="/contacto" element={<ContactoPage />} />
                        <Route path="/formulario-enviado" element={<FormSendPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/politica-privacidad" element={<PoliticaPage />} />
                        <Route path="/terminos-condiciones" element={<TerminosPage />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Suspense>
            )}

            <Footer />
        </BrowserRouter>
    );
}

export default App;
