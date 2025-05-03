import { SectionSp1 } from '../imports/SectionSp1';
import { SectionSp2 } from '../imports/SectionSp2';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { BotonNav } from '../utils/BotonNav';

const ServiciosPage = () => {
    return (
        <main className="fade-in fondo1">
            <Breadcrumbs />
            <section>
                <SectionSp1 />
            </section>

            <section>
                <SectionSp2 />
            </section>

            <section className="boton-container-2">
                <BotonNav />
            </section>
        </main>
    );
};

export default ServiciosPage;
