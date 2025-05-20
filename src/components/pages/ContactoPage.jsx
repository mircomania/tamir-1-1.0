import { TitleSEO } from '../utils/TitleSEO';

import { SectionCp1 } from '../imports/SectionCp1';

import { Breadcrumbs } from '../utils/Breadcrumbs';

const ContactoPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO
                title="Contacto | TAMIR"
                description="¿Listo para agendar tu sesión de fotos? Contáctanos y te ayudaremos a planificar la experiencia perfecta para capturar tus mejores momentos en Santiago."
                canonical="https://tamir.cl/contacto"
            />

            <Breadcrumbs />

            <section>
                <SectionCp1 />
            </section>
        </main>
    );
};

export default ContactoPage;
