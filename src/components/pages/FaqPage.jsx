import { TitleSEO } from '../utils/TitleSEO';

import styles from '../../styles/modulos/faqPage.module.css';

import { Breadcrumbs } from '../utils/Breadcrumbs';
import { getFaqStructuredData } from '../utils/getFaqStructuredData';
import { faqData } from '../utils/faqData';
import { BotonNav } from '../utils/BotonNav';

import LogoBurger from '../../assets/images/logos/logo-tamir-mobile-1.webp';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const faqStructuredData = getFaqStructuredData(faqData);

const replaceWithJSX = (text, faqId) => {
    const parts = text.split(/(formulario de contacto|TAMIR)/g);

    return parts.map((part, idx) => {
        const key = `${faqId}-${idx}`;
        if (part === 'TAMIR') return <React.Fragment key={key}>{URL_LINK}</React.Fragment>;
        if (part === 'formulario de contacto') return <React.Fragment key={key}>{LINK_CONTACTO}</React.Fragment>;
        return <React.Fragment key={key}>{part}</React.Fragment>;
    });
};

const URL_LINK = (
    <NavLink to="/" title="ir a tamir.cl" className="bold-text-montserrat">
        TAMIR
    </NavLink>
);

const LINK_CONTACTO = (
    <NavLink to="/contacto" title="ir al formulario de contacto" className="bold-text-montserrat">
        formulario de contacto
    </NavLink>
);

const FaqPage = () => {
    return (
        <main className="fade-in fondo1">
            <TitleSEO
                title="FAQ | TAMIR"
                description="Resolvemos tus dudas sobre nuestras sesiones de fotos en Santiago: preparación, duración, vestuario, y más. Todo lo que necesitas saber antes de tu sesión."
                canonical="https://tamir.cl/faq"
            />

            <HelmetProvider>
                <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
            </HelmetProvider>

            <Breadcrumbs />

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text-montserrat">PREGUNTAS FRECUENTES</h1>
                    <h2 className="light-text-montserrat-b">TAMIR</h2>
                </header>

                <img src={LogoBurger} alt="Logotipo de Tamir" />

                {/* PREGUNTAS */}

                <div className={styles.sectionContenido}>
                    {faqData.map(({ id, question, answer }) => (
                        <div key={id}>
                            <h3 className="bold-text-montserrat">{`${id}. ${question}`}</h3>
                            <p className="light-text-montserrat">{replaceWithJSX(answer, id)}</p>
                            <hr />
                        </div>
                    ))}
                    <div className={styles.textoAdicional}>
                        <h4 className="bold-text-montserrat">¿Tienes otra pregunta?</h4>

                        <p className="light-text-montserrat">
                            Escríbenos a <strong className="selectable">contacto@tamir.cl</strong> o por WhatsApp al número que aparece en nuestra
                            página.
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
