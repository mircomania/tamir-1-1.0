import { SectionGp1 } from '../imports/SectionGp1';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { BotonNav } from '../utils/BotonNav';

const GaleriaPage = () => {
    return (
        <main className="fade-in fondo1">
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
