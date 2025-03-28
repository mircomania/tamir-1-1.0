import styles from '../../styles/modulos/section1Gp.module.css';

import { categoriasSection1Gp } from '../utils/categoriasSection1Gp';

import { NavLink } from 'react-router-dom';

export const Section1Gp = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="pacifico-text">Galería</h1>
                <h2 className="light-text-montserrat-b">Sigue tus sueños</h2>
            </header>

            {/* Categorías */}
            <section className={styles.sectionCategorias}>
                {categoriasSection1Gp.map((categoria) => (
                    <div className={styles.sectionCategoria} key={categoria.nombre}>
                        <NavLink to={`/galeria/${categoria.id}`} aria-label={`Ver todas la Galería de Fotos de ${categoria.nombre}`}>
                            <picture>
                                <source srcSet={categoria.imagenes.xl} media="(min-width: 1700px)" />
                                <source srcSet={categoria.imagenes.lg} media="(min-width: 1400px)" />
                                <source srcSet={categoria.imagenes.md} media="(min-width: 992px)" />
                                <source srcSet={categoria.imagenes.sm} media="(min-width: 768px)" />
                                <source srcSet={categoria.imagenes.xs} media="(min-width: 576px)" />
                                <img src={categoria.imagenes.default} alt={categoria.alt} />
                            </picture>

                            <div className={styles.sectionCategoriaTexto}>
                                <p className="bold-text-montserrat">{categoria.nombre}</p>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </section>

            <hr />

            <NavLink to="/contacto" aria-label="Ir a la página de contacto para agendar una Sesión de Fotos">
                <button className="boton-1 bold-text-montserrat">AGENDAR SESIÓN</button>
            </NavLink>
        </section>
    );
};
