import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp1 } from '../exports/SectionLp1';
import { SectionLp2 } from '../exports/SectionLp2';
import { SectionLp3 } from '../exports/SectionLp3';
import { SectionLp4 } from '../exports/SectionLp4';

const LandingPage = () => {
    return (
        <main className="fade-in">
            <TitleSEO
                title="TAMIR Fotografía Profesional"
                description="Captura tus mejores momentos: sesiones de fotografía newborn, niños, embarazos y familia en Santiago. Deja tus datos y te contactaremos para crear recuerdos inolvidables."
                canonical="https://tamir.cl/"
            />

            <section>
                <SectionLp1 />
            </section>

            <section className="fondo1">
                <section>
                    <SectionLp2 />
                </section>

                <section>
                    <SectionLp3 />
                </section>

                <section>
                    <SectionLp4 />
                </section>
            </section>
        </main>
    );
};

export default LandingPage;
