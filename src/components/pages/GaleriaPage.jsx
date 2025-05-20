import { TitleSEO } from '../utils/TitleSEO';

import { SectionGp1 } from '../imports/SectionGp1';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { BotonNav } from '../utils/BotonNav';

const GaleriaPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO
                title="Galeía | TAMIR"
                description="Descubre nuestras sesiones de fotos en Santiago: newborn, niños, embarazo y familia. Inspírate con nuestro trabajo profesional y encuentra la sesión perfecta para ti."
                canonical="https://tamir.cl/galeria"
            />

            <Breadcrumbs />
            <section>
                <SectionGp1 />
            </section>

            <section className="boton-container">
                <BotonNav />
            </section>
        </main>
    );
};

export default GaleriaPage;
