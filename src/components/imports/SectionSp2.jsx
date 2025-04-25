import styles from '../../styles/modulos/sectionSp2.module.css';

import { NavLink } from 'react-router-dom';

export const SectionSp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text-montserrat">Instrucciones Generales</h2>
            </header>

            <div className={styles.sectionContenido}>
                <ul className="light-text-montserrat">
                    <li>
                        Para reservar una sesión se debe abonar un <strong>porcentaje del valor de plan </strong> como abono inicial.
                    </li>

                    <li>Si no hay un estilo de vestimenta acordado, utiliza ropa con colores neutros y sin estampados llamativos.</li>

                    <li>
                        Las sesiones pueden durar entre <strong>45 min y 2 horas</strong>, dependiendo del plan seleccionado.
                    </li>

                    <li>
                        Llegar al menos <strong>10 minutos antes</strong> para preparativos y briefing.
                    </li>

                    <li>Trae accesorios o props personales si deseas incluirlos en las fotografías.</li>

                    <li>En caso de menores de edad, asegúrate de que un adulto responsable esté presente durante toda la sesión.</li>
                </ul>

                <p className="light-text-montserrat">
                    Para más detalles o consultas, visita nuestras{' '}
                    <NavLink to="/faq" title="ir a las preguntas frecuentes">
                        Preguntas Frecuentes
                    </NavLink>{' '}
                    o escribenos a <strong>contacto@tamir.cl</strong>
                </p>
            </div>
        </section>
    );
};
