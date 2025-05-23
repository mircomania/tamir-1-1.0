import { TitleSEO } from '../utils/TitleSEO';

import { SectionSp1 } from '../imports/SectionSp1';
import { SectionSp2 } from '../imports/SectionSp2';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { BotonNav } from '../utils/BotonNav';

const ServiciosPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO
                title="Servicios | TAMIR"
                description="Conoce nuestros servicios de fotografía profesional en Santiago: sesiones personalizadas para newborn, niños, embarazos y familias. Creamos recuerdos únicos que duran toda la vida."
                canonical="https://tamir.cl/servicios"
            />

            <Breadcrumbs />

            <section>
                <SectionSp1 />
            </section>

            <section>
                <SectionSp2 />
            </section>

            <section className="boton-container-2">
                <BotonNav dataCta="servicios-btn" />
            </section>
        </main>
    );
};

export default ServiciosPage;
