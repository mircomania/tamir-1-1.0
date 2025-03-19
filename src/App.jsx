import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/common/NavBar';
import { Cargando } from './components/utils/cargando';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));

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
                    </Routes>
                </Suspense>
            )}

            <Footer />
        </BrowserRouter>
    );
}

export default App;
