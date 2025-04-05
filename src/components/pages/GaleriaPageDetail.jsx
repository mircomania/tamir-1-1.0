import { SectionGpd1 } from '../imports/SectionGpd1';
import { BotonAgendar } from '../utils/BotonAgendar';

const GaleriaPageDetail = () => {
    return (
        <main className="fade-in fondo1">
            <section>
                <SectionGpd1 />
            </section>

            <section className="boton-container">
                <BotonAgendar />
            </section>
        </main>
    );
};

export default GaleriaPageDetail;
