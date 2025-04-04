import { SectionGp1 } from '../imports/SectionGp1';
import { BotonAgendar } from '../utils/BotonAgendar';

const GaleriaPage = () => {
    return (
        <main className="fade-in fondo1">
            <section>
                <SectionGp1 />
            </section>

            <section className="boton-container">
                <BotonAgendar />
            </section>
        </main>
    );
};

export default GaleriaPage;
