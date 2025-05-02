import styles from '../../styles/modulos/sectionLp1.module.css';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="pacifico-text">Sesión de Fotos</h1>
                <h2 className="light-text-montserrat">Para bebés, embarazadas y toda tu familia</h2>
            </header>

            <div className={styles.sectionBoton}>
                <BotonNav />
            </div>

            {/* FONDOS ANIMADOS */}
            <div className={`${styles.bg} ${styles.bg1}`}></div>
            <div className={`${styles.bg} ${styles.bg2}`}></div>
            <div className={`${styles.bg} ${styles.bg3}`}></div>
        </section>
    );
};
