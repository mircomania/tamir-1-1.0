import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modulos/terminosPage.module.css';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { BotonNav } from '../utils/BotonNav';

import LogoBurger from '../../assets/images/logos/logo-tamir-mobile-1.webp';

import { NavLink } from 'react-router-dom';

const URL_LINK = (
    <NavLink to="/" title="ir a www.tamir.cl">
        TAMIR
    </NavLink>
);

const TerminosPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO
                title="Términos y Condiciones | TAMIR"
                description="Consulta los términos y condiciones de nuestras sesiones fotográficas en Santiago. Aquí encontrarás información importante sobre reservas, pagos y uso de imágenes."
                canonical="https://www.tamir.cl/terminos-condiciones"
            />

            <Breadcrumbs />

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text-montserrat">TÉRMINOS Y CONDICIONES</h1>

                    <h2 className="light-text-montserrat">Fecha de entrada en vigor: Mayo 2025</h2>
                </header>

                <img src={LogoBurger} alt="Logotipo de Tamir" />

                <div className={styles.sectionContenido}>
                    <p className="light-text-montserrat">
                        Bienvenido(a) a <strong>{URL_LINK}</strong>. Al contratar nuestros servicios de fotografía, usted acepta los siguientes
                        Términos y Condiciones, que rigen el uso del sitio web y la contratación de sesiones fotográficas. Le rogamos leerlos
                        detenidamente antes de hacer una reserva.
                    </p>

                    <h3 className="bold-text-montserrat">1. Servicios Ofrecidos</h3>

                    <p className="light-text-montserrat">
                        Ofrecemos sesiones de fotografía profesional en distintas categorías, conforme a los planes y condiciones descritas en nuestro
                        sitio web.
                    </p>

                    <h3 className="bold-text-montserrat">2. Reserva y Pagos</h3>

                    <ul className="light-text-montserrat">
                        <li>
                            La reserva de una sesión se confirma únicamente mediante el pago de un abono parcial, cuyo monto será informado al momento
                            de la reserva.
                        </li>

                        <li>
                            Este abono es no reembolsable, salvo que la cancelación se realice dentro de los primeros 5 días hábiles posteriores a la
                            reserva.
                        </li>

                        <li>En caso de inasistencia injustificada o cancelación fuera de plazo, el abono se pierde sin derecho a devolución.</li>

                        <li>El monto restante debe ser abonado el día de la sesión o en la fecha acordada previamente.</li>
                    </ul>

                    <h3 className="bold-text-montserrat">3. Modificaciones y Reagendamientos</h3>

                    <ul className="light-text-montserrat">
                        <li>Se permiten cambios de fecha con al menos 72 horas de anticipación, sujetos a disponibilidad.</li>
                        <li>Reagendamientos realizados con menos de 72 horas podrán implicar costos adicionales o pérdida del abono.</li>
                    </ul>

                    <h3 className="bold-text-montserrat">4. Derechos de Autor y uso de imagen</h3>

                    <ul className="light-text-montserrat">
                        <li>
                            Las imágenes tomadas durante la sesión son propiedad intelectual de <strong>{URL_LINK}</strong>, conforme a la Ley N°
                            17.336 sobre Propiedad Intelectual.
                        </li>
                        <li>
                            El cliente recibe una licencia de uso personal sobre las fotografías entregadas, lo que le permite compartirlas y
                            almacenarlas para fines no comerciales.
                        </li>
                        <li>
                            Al aceptar estos términos, el cliente autoriza a <strong>{URL_LINK}</strong> a utilizar parte del material fotográfico
                            para fines promocionales, publicitarios y portafolio, salvo que se indique expresamente lo contrario por escrito.
                        </li>
                        <li>Si el cliente no desea que sus imágenes sean publicadas, debe informarlo al momento de contratar el servicio.</li>
                    </ul>

                    <h3 className="bold-text-montserrat">5. Entrega del Material</h3>

                    <ul className="light-text-montserrat">
                        <li>
                            El plazo estándar de entrega es de 10 a 15 días hábiles posteriores a la sesión, a través de enlace digital o el medio
                            acordado.
                        </li>
                        <li>
                            Cualquier retraso será notificado oportunamente al cliente. <strong>{URL_LINK}</strong> no se responsabiliza por demoras
                            causadas por fuerza mayor (clima, fallas técnicas, salud, etc.).
                        </li>
                    </ul>

                    <h3 className="bold-text-montserrat">6. Obligaciones del Cliente</h3>

                    <ul className="light-text-montserrat">
                        <li>
                            El cliente debe llegar puntualmente a la sesión y seguir las instrucciones del fotógrafo para garantizar el correcto
                            desarrollo del servicio.
                        </li>
                        <li>En caso de menores de edad, se requiere la presencia de un adulto responsable durante toda la sesión.</li>
                        <li>
                            <strong>{URL_LINK}</strong> no se responsabiliza por accidentes o daños personales durante la sesión si el cliente
                            incumple medidas de seguridad indicadas.
                        </li>
                    </ul>

                    <h3 className="bold-text-montserrat">7. Responsabilidad y Garantías</h3>

                    <ul className="light-text-montserrat">
                        <li>
                            <strong>{URL_LINK}</strong> garantiza la entrega del servicio comprometido según el plan elegido.
                        </li>
                        <li>
                            No se garantiza la reproducción exacta de referencias visuales proporcionadas por el cliente, aunque se hará el mejor
                            esfuerzo artístico.
                        </li>
                        <li>
                            <strong>{URL_LINK}</strong> no será responsable por pérdida o daño accidental de imágenes por causas de fuerza mayor.
                        </li>
                    </ul>

                    <h3 className="bold-text-montserrat">8. Cambios en los Términos</h3>

                    <p className="light-text-montserrat">
                        Nos reservamos el derecho de modificar estos Términos y Condiciones. Las actualizaciones serán publicadas en nuestro sitio web
                        y entrarán en vigor inmediatamente. Se recomienda revisar esta sección antes de cada contratación.
                    </p>

                    <h3 className="bold-text-montserrat">9. Contacto y Consultas</h3>

                    <p className="light-text-montserrat">
                        Para cualquier duda o requerimiento, contáctenos a través del correo electrónico <strong>contacto@tamir.cl</strong> o por
                        medio de nuestros servicio telefónico
                    </p>

                    <h4 className="bold-text-montserrat">
                        Al reservar una sesión, usted declara haber leído, comprendido y aceptado íntegramente estos Términos y Condiciones.
                    </h4>
                </div>
            </section>

            <section className="boton-container">
                <BotonNav />
            </section>
        </main>
    );
};

export default TerminosPage;
