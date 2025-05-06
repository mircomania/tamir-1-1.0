import { useParams } from 'react-router-dom';

import { TitleSEO } from '../utils/TitleSEO';

import { SectionGpd1 } from '../imports/SectionGpd1';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { BotonNav } from '../utils/BotonNav';

const GaleriaPageDetail = () => {
    const { categoria } = useParams();

    const prettyName = categoria
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const title = `Galería ${prettyName} | TAMIR`;
    const description = `Explora nuestra galería de ${prettyName}. Sesiones profesionales de fotografía en Santiago.`;
    const canonical = `https://www.tamir.cl/galeria/${categoria}`;

    return (
        <main className="fade-in fondo1">
            <TitleSEO title={title} description={description} canonical={canonical} />

            <Breadcrumbs />

            <section>
                <SectionGpd1 />
            </section>

            <section className="boton-container">
                <BotonNav />
            </section>
        </main>
    );
};

export default GaleriaPageDetail;
