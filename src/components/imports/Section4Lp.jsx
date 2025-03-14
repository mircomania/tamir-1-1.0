import styles from '../../styles/modulos/section4Lp.module.css';

import { Form } from './Form';

export const Section4Lp = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text-montserrat">Agenda tu Sesión de Fotos</h2>
            </header>

            <div className={styles.form}>
                <Form />
            </div>
        </section>
    );
};
