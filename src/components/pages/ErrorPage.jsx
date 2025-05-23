import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modulos/errorPage.module.css';

import { BotonNav } from '../utils/BotonNav';

const ErrorPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO title="Error | TAMIR" description="Lo sentimos, la página que buscas no existe." metaNoIndex={true} />

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text-montserrat">Error 404</h1>

                    <h2 className="light-text-montserrat-b">Página no encontrada</h2>

                    <p className="light-text-montserrat">Lo sentimos, la página que estás buscando no existe.</p>
                </header>

                <div className={styles.sectionContenido}>
                    <BotonNav to="/" ariaLabel="Ir a la página de inicio" title="Haz clic para ir a la página de inicio" dataLink="error-home-btn">
                        IR AL INICIO
                    </BotonNav>
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;
