import styles from '../../styles/modulos/sectionLp3.module.css';

import { categoriasSectionLp3 } from '../utils/categoriasSectionLp3';

import { NavLink } from 'react-router-dom';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text-montserrat">Servicios de Fotografía Profesional en Santiago</h2>
                <h3 className="light-text-montserrat-b">Elige la sesión perfecta para cada ocasión</h3>
            </header>

            {/* Categorías */}
            <div className={styles.sectionCategorias}>
                {categoriasSectionLp3.map((categoria) => (
                    <div className={styles.sectionCategoria} key={categoria.nombre}>
                        <NavLink to={categoria.ruta} aria-label={`Ver todas las caracteristicas de las Sesiones de Fotos de ${categoria.nombre}`}>
                            <picture>
                                <source srcSet={categoria.imagenes.xl} media="(min-width: 1700px)" />
                                <source srcSet={categoria.imagenes.md} media="(min-width: 1200px)" />
                                <source srcSet={categoria.imagenes.sm} media="(min-width: 768px)" />
                                <source srcSet={categoria.imagenes.xs} media="(min-width: 576px)" />
                                <img src={categoria.imagenes.default} alt={categoria.alt} loading="lazy" decoding="async" />
                            </picture>

                            <div>
                                <h3 className="bold-text-montserrat">{categoria.nombre}</h3>
                                <p className="light-text-montserrat">{categoria.precio}</p>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>

            <div className={styles.sectionFinal}>
                <p className="light-text-montserrat-b">Conoce nuestros servicios y encuentra la opción ideal para tus mejores momentos.</p>

                <NavLink to="/servicios" aria-label="Ver todos los servicios de Fotografía Profesional">
                    <button className="boton-1 bold-text-montserrat">VER SERVICIOS</button>
                </NavLink>
            </div>

            <hr />
        </section>
    );
};
