import { SectionGpd1 } from '../imports/SectionGpd1';
import { BotonNav } from '../utils/BotonNav';

const GaleriaPageDetail = () => {
    return (
        <main className="fade-in fondo1">
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
