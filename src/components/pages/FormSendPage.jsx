import styles from '../../styles/modulos/formSendPage.module.css';

import LogoBurger from '../../assets/images/logos/logo-tamir-mobile-1.webp';

import { BotonNav } from '../utils/BotonNav';

const FormSendPage = () => {
    return (
        <main className="fade-in fondo1">
            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <img src={LogoBurger} alt="Logotipo de Tamir" />

                    <h1 className="bold-text-montserrat">Formulario Enviado</h1>

                    <h2 className="light-text-montserrat"> Muchas gracias por enviar tus datos, muy pronto nos pondremos en contacto contigo</h2>
                </header>

                <div className={styles.sectionContenido}>
                    <h3 className="light-text-montserrat-b">¿Buscas inspiracion para tu proxima sesion de fotos?</h3>

                    <p className="light-text-montserrat">Visita nuestra galeria fotografica</p>

                    <BotonNav
                        to="/galeria"
                        ariaLabel="Ver todas las Sesiones de Fotos en nuestra galería"
                        title="Haz clic para ver todas la Galería de Fotos"
                    >
                        VER GALERÍA
                    </BotonNav>
                </div>
            </section>
        </main>
    );
};

export default FormSendPage;
