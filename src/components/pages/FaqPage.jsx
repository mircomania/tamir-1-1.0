import styles from '../../styles/modulos/faqPage.module.css';

import { BotonNav } from '../utils/BotonNav';

import LogoBurger from '../../assets/images/logos/logo-tamir-mobile-1.webp';

import { NavLink } from 'react-router-dom';

const URL_LINK = (
    <NavLink to="/" title="ir a www.tamir.cl">
        TAMIR
    </NavLink>
);

const LINK_CONTACTO = (
    <NavLink to="/contacto" title="ir al formulario de contacto">
        formulario de contacto
    </NavLink>
);

const FaqPage = () => {
    return (
        <main className="fade-in fondo1">
            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text-montserrat">PREGUNTAS FRECUENTES</h1>
                    <h2 className="light-text-montserrat-b">TAMIR</h2>
                </header>

                <img src={LogoBurger} alt="Logotipo de Tamir" />

                <div className={styles.sectionContenido}>
                    <h3 className="bold-text-montserrat">1. ¿Cómo agendar una sesión?</h3>

                    <p className="light-text-montserrat">
                        Para reservar tu sesión de fotografía, completa el <strong>{LINK_CONTACTO}</strong> en nuestro sitio web con tus datos
                        (nombre, email, teléfono, etc...) y realiza el pago del abono parcial que se te indicará. Una vez recibido el abono, te
                        confirmaremos la fecha y hora de la sesión acordada.
                    </p>

                    <hr />

                    <h3 className="bold-text-montserrat">2. ¿Cuánto tiempo tengo para cancelar mi reserva?</h3>

                    <p className="light-text-montserrat">
                        Tienes un plazo de <strong>5 días hábiles</strong> desde la fecha de reserva para cancelar y solicitar devolución del abono.
                        Pasado ese plazo, el abono es <strong>no reembolsable</strong>.
                    </p>

                    <hr />

                    <h3 className="bold-text-montserrat">3. ¿Puedo cambiar la fecha de mi sesión?</h3>

                    <p className="light-text-montserrat">
                        Sí. Los cambios de fecha están permitidos si los solicitas con al menos <strong>72 horas de anticipación</strong>, sujetos a
                        disponibilidad. Si lo solicitas con menos de 72 horas, podrías incurrir en un cargo adicional o pérdida del abono.
                    </p>

                    <hr />

                    <h3 className="bold-text-montserrat">4. ¿En cuánto tiempo recibiré mis fotografías?</h3>

                    <p className="light-text-montserrat">
                        El plazo estándar de entrega es de 10 a 15 días hábiles después de la sesión. Te enviaremos un enlace seguro (WeTransfer,
                        Google Drive, etc.) para que descargues todas las imágenes.
                    </p>

                    <hr />

                    <h3 className="bold-text-montserrat">5. ¿Puedo solicitar retoques o ediciones adicionales?</h3>

                    <p className="light-text-montserrat">
                        Incluimos retoques básicos (ajuste de luz, color y recorte). Si deseas ediciones especiales (montajes, retoque de piel
                        avanzado, composiciones), podremos cotizar un servicio extra según el alcance.
                    </p>

                    <hr />

                    <h3 className="bold-text-montserrat">6. ¿Dónde se realizan las sesiones?</h3>

                    <p className="light-text-montserrat">Nuestras sesiones pueden ser en:</p>

                    <ul className="light-text-montserrat">
                        <li>Estudio (ubicación central, totalmente equipado).</li>
                        <li>Exteriores (parques, locaciones urbanas).</li>
                        <li>Locación a domicilio (Los gastos de traslado fuera de nuestra zona de cobertura pueden tener un recargo.)</li>
                    </ul>

                    <hr />

                    <h3 className="bold-text-montserrat">7. ¿Puedo usar mis fotos con fines comerciales?</h3>

                    <p className="light-text-montserrat">
                        Las imágenes son propiedad intelectual de <strong>{URL_LINK}</strong>, pero te otorgamos una{' '}
                        <strong>licencia de uso personal</strong>. Para usos comerciales (publicidad, venta de productos, licenciamiento), necesitas
                        una autorización escrita y podría aplicar un cargo adicional.
                    </p>

                    <hr />

                    <h3 className="bold-text-montserrat">8. ¿Cómo puedo pedir impresiones o álbumes físicos?</h3>

                    <p className="light-text-montserrat">
                        Ofrecemos paquetes de impresiones y álbumes premium. Contáctanos después de recibir tus fotos digitales para cotizar según
                        tamaño, materiales y cantidad.
                    </p>

                    <hr />

                    <div className={styles.textoAdicional}>
                        <h4 className="bold-text-montserrat">¿Tienes otra pregunta?</h4>

                        <p className="light-text-montserrat">
                            Escríbenos a <strong>contacto@tamir.cl</strong> o por WhatsApp al número que aparece en nuestra página.
                        </p>

                        <p className="light-text-montserrat">¡Estaremos encantados de ayudarte!</p>
                    </div>
                </div>
            </section>

            <section className="boton-container">
                <BotonNav />
            </section>
        </main>
    );
};

export default FaqPage;
