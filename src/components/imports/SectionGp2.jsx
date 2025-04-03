import styles from '../../styles/modulos/sectionGp2.module.css';

import { NavLink } from 'react-router-dom';

export const SectionGp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <NavLink to="/contacto" aria-label="Ir a la página de contacto para agendar una Sesión de Fotos">
                <button className="boton-1 bold-text-montserrat">AGENDAR SESIÓN</button>
            </NavLink>
        </section>
    );
};
