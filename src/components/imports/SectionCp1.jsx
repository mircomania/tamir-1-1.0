import styles from '../../styles/modulos/sectionCp1.module.css';

import img1Section4 from '../../assets/images/landing/section4/img-section-4.1-lp.webp';
import img2Section4 from '../../assets/images/landing/section4/img-section-4.2-lp.webp';
import img3Section4 from '../../assets/images/landing/section4/img-section-4.3-lp.webp';
import img4Section4 from '../../assets/images/landing/section4/img-section-4.4-lp.webp';

import { Form } from './Form';

import { NavLink } from 'react-router-dom';

export const SectionCp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="pacifico-text">Contacto</h1>
                <h2 className="light-text-montserrat-b">Es momento de crear algo especial</h2>
                <h3 className="light-text-montserrat-b">
                    Déjanos tu mensaje y nosotros nos encargaremos de ofrecerte la sesión que mereces, cuidando cada imagen con profesionalismo y
                    pasión
                </h3>
            </header>

            <div className={styles.sectionContenido}>
                <picture className={styles.imgSection4}>
                    <source srcSet={img4Section4} media="(min-width: 1700px)" />
                    <source srcSet={img3Section4} media="(min-width: 1400px)" />
                    <source srcSet={img2Section4} media="(min-width: 992px)" />
                    <img src={img1Section4} alt="Sesión de Fotos de bebe recién nacido durmiendo sobre una canasta" />
                </picture>

                <div className={styles.form}>
                    <Form />
                </div>
            </div>

            <hr />

            <div className={styles.sectionFooter}>
                <p className="light-text-montserrat">
                    En Tamir Fotografía valoramos mucho tu confianza y protegemos tu privacidad, tus datos se usan principalmente para coordinar tu
                    sesión de fotos. Ofrecemos un servicio profesional y cercano, ideal para capturar la ternura de los primeros días, la magia de la
                    maternidad y el amor familiar. Si tienes alguna consulta, puedes visitar nuestras{' '}
                    <NavLink to="/faq" title="Ver las preguntas frecuentes">
                        Preguntas Frecuentes
                    </NavLink>
                    , como nuestros{' '}
                    <NavLink to="/terminos-condiciones" title="Ver los términos y condiciones">
                        Términos y Condiciones
                    </NavLink>{' '}
                    o{' '}
                    <NavLink to="/politica-privacidad" title="Ver la política de privacidad">
                        Política de Privacidad
                    </NavLink>
                    .
                </p>
            </div>
        </section>
    );
};
