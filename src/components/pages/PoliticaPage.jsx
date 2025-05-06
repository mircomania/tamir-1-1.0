import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modulos/politicaPage.module.css';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { BotonNav } from '../utils/BotonNav';

import LogoBurger from '../../assets/images/logos/logo-tamir-mobile-1.webp';

import { NavLink } from 'react-router-dom';

const URL_LINK = (
    <NavLink to="/" title="ir a www.tamir.cl">
        TAMIR
    </NavLink>
);

const PoliticaPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO
                title="Política de Privacidad | TAMIR"
                description="Valoramos tu privacidad. Revisa cómo protegemos tus datos personales al agendar una sesión de fotos con nosotros y cómo usamos la información en nuestro sitio web."
                canonical="https://www.tamir.cl/politica-privacidad"
            />

            <Breadcrumbs />

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text-montserrat">Politicas de Privacidad</h1>

                    <p className="light-text-montserrat small-text">Última actualización: Mayo 2025</p>

                    <h2 className="light-text-montserrat-b">TAMIR 2025</h2>
                </header>

                <img src={LogoBurger} alt="Logotipo de Tamir" />

                <div className={styles.sectionContenido}>
                    <p className="light-text-montserrat">
                        En <strong>{URL_LINK}</strong>, en calidad de Responsable del Tratamiento de Datos Personales, nos regimos por la Ley N°
                        19.628 sobre Protección de la Vida Privada y sus normas complementarias. A continuación, describimos cómo recopilamos,
                        utilizamos, conservamos y protegemos sus datos personales, así como los derechos que le asisten conforme al marco legal
                        chileno.
                    </p>

                    <h3 className="bold-text-montserrat">1. Responsable y Punto de Contacto</h3>

                    <ul className="light-text-montserrat">
                        <li>
                            Responsable: <strong>{URL_LINK}</strong>
                        </li>
                        <li>
                            Correo electrónico de contacto: <strong>contacto@tamir.cl</strong>
                        </li>
                    </ul>

                    <p className="light-text-montserrat">
                        Para ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación, Oposición) o para cualquier consulta relativa a sus datos
                        personales, puede dirigirse al correo electrónico indicado o solicitarlo por contacto telefónico.
                    </p>

                    <h3 className="bold-text-montserrat">2. Marco Legal</h3>

                    <p className="light-text-montserrat">El tratamiento de sus datos personales se realiza en conformidad con:</p>

                    <ul className="light-text-montserrat">
                        <li>
                            Ley N° 19.628 sobre Protección de la Vida Privada, artículos relevantes que establecen principios de calidad, finalidad,
                            proporcionalidad y seguridad.
                        </li>

                        <li>
                            Decreto Supremo N° 50/2011 del Ministro del Interior, que reglamenta la citada Ley en materia de medidas de seguridad.
                        </li>
                    </ul>

                    <h3 className="bold-text-montserrat">3. Datos que Recopilamos</h3>

                    <p className="light-text-montserrat">
                        Mediante el formulario de contacto, solicitamos únicamente los datos estrictamente necesarios para la finalidad indicada:
                    </p>

                    <ul className="light-text-montserrat">
                        <li>Nombre completo</li>
                        <li>Correo electrónico </li>
                        <li>Número de teléfono</li>
                        <li>Tipo de sesión</li>
                        <li>Plan de sesión</li>
                        <li>Mensaje personalizado</li>
                        <li>Aceptación de recibir novedades y promociones</li>
                    </ul>

                    <h3 className="bold-text-montserrat">4. Finalidades del Tratamiento</h3>

                    <p className="light-text-montserrat">
                        Sus datos serán utilizados para las siguientes finalidades, siempre con su consentimiento previo y expreso:
                    </p>

                    <ul className="light-text-montserrat">
                        <li>Gestión de reservas y coordinación de servicios de fotografía profesional.</li>
                        <li>Comunicación de información relevante sobre el servicio contratado.</li>
                        <li>
                            Marketing y publicidad: solo si usted marcó la casilla de aceptación, podrá recibir novedades, ofertas y promociones de{' '}
                            <strong>{URL_LINK}</strong>.
                        </li>
                    </ul>

                    <p className="light-text-montserrat">
                        No destinamos sus datos a finalidades distintas sin informarle y recabar su consentimiento adicional.
                    </p>

                    <h3 className="bold-text-montserrat">5. Base Legal</h3>

                    <p className="light-text-montserrat">El fundamento jurídico para el tratamiento de sus datos personales es:</p>

                    <ul className="light-text-montserrat">
                        <li>Consentimiento: otorgado explícitamente al completar y enviar el formulario.</li>
                        <li>
                            Ejecución de un contrato o precontrato: en la medida en que los datos sean necesarios para prestar el servicio de
                            fotografía.
                        </li>
                    </ul>

                    <h3 className="bold-text-montserrat">6. Conservación y Transferencia</h3>

                    <ul className="light-text-montserrat">
                        <li>
                            Conservaremos sus datos mientras duren las gestiones relacionadas con su solicitud, y posteriormente por el plazo legal
                            aplicable para responder a posibles responsabilidades.
                        </li>
                        <li>
                            No transferiremos ni comunicaremos sus datos a terceros ajenos a <strong>{URL_LINK}</strong>, salvo obligación legal o
                            para prestar el servicio (por ejemplo, laboratorios de revelado), informándole previamente si ello fuera necesario.
                        </li>
                        <li>
                            En caso de transferencias internacionales, garantizamos niveles de protección adecuados conforme al artículo 8 de la Ley
                            19.628.
                        </li>
                    </ul>

                    <h3 className="bold-text-montserrat">7. Medidas de Seguridad</h3>

                    <p className="light-text-montserrat">
                        Aplicamos medidas técnicas y organizativas derivadas del Decreto Supremo N° 50/2011, tales como:
                    </p>

                    <ul className="light-text-montserrat">
                        <li>Control de acceso físico y lógico a las instalaciones y sistemas.</li>
                        <li>Respaldo periódico de la información.</li>
                        <li>Protocolos de cifrado y autenticación para el tratamiento y almacenamiento.</li>
                    </ul>

                    <h3 className="bold-text-montserrat">8. Derechos ARCO</h3>

                    <p className="light-text-montserrat">Usted tiene derecho a solicitar en cualquier momento:</p>

                    <ul className="light-text-montserrat">
                        <li>Acceso a los datos que poseemos sobre usted.</li>
                        <li>Rectificación de datos inexactos o incompletos.</li>
                        <li>Cancelación (eliminación) cuando ya no sean necesarios o se haya revocado el consentimiento.</li>
                        <li>Oposición al tratamiento de sus datos por motivos legítimos.</li>
                    </ul>

                    <p className="light-text-montserrat">
                        Para ejercer estos derechos, diríjase a <strong>contacto@tamir.cl</strong> o a nuestro contacto telefónico.
                    </p>

                    <h3 className="bold-text-montserrat">9. Cambios en la Política</h3>

                    <p className="light-text-montserrat">
                        Cualquier modificación a esta Política de Privacidad será publicada en esta página, indicando la nueva fecha de actualización.
                    </p>

                    <h3 className="bold-text-montserrat">10. Aceptación</h3>

                    <p className="light-text-montserrat">
                        Al enviar sus datos mediante nuestro formulario, usted declara haber leído, entendido y aceptado íntegramente esta Política de
                        Privacidad conforme a la Ley N° 19.628 y su reglamento.
                    </p>
                </div>
            </section>

            <section className="boton-container">
                <BotonNav to="/" ariaLabel="Ir a la pagina de inicio" title="Haz clic para ir a la pagina de inicio">
                    IR AL INICIO
                </BotonNav>
            </section>
        </main>
    );
};

export default PoliticaPage;
