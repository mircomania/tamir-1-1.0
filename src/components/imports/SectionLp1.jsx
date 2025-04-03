import styles from '../../styles/modulos/sectionLp1.module.css';

import { NavLink } from 'react-router-dom';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="pacifico-text">Sesión de Fotos</h1>
                <h2 className="light-text-montserrat">Para bebés, embarazadas y toda tu familia</h2>
            </header>

            <div className={styles.sectionBoton}>
                <NavLink to="/contacto" aria-label="Ir a la página de contacto para agendar una Sesión de Fotos">
                    <button className="boton-1 bold-text-montserrat">AGENDAR SESIÓN</button>
                </NavLink>
            </div>

            {/* Fondos animados */}
            <div className={`${styles.bg} ${styles.bg1}`}></div>
            <div className={`${styles.bg} ${styles.bg2}`}></div>
            <div className={`${styles.bg} ${styles.bg3}`}></div>
        </section>
    );
};
