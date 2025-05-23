import styles from '../../styles/modulos/sectionLp3.module.css';

import { categoriasSectionLp3 } from '../utils/categoriasSectionLp3';
import { BotonNav } from '../utils/BotonNav';

import { NavLink } from 'react-router-dom';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text-montserrat">Servicios de Fotografía Profesional en Santiago</h2>
                <h3 className="light-text-montserrat-b">Elige la sesión perfecta para cada ocasión</h3>
            </header>

            {/* CATEGORIAS */}
            <div className={styles.sectionCategorias}>
                {categoriasSectionLp3.map((categoria) => (
                    <div className={styles.sectionCategoria} key={categoria.nombre} itemScope itemType="https://schema.org/Service">
                        <NavLink
                            to={categoria.ruta}
                            aria-label={`Ver todas las caracteristicas de las Sesiones de Fotos de ${categoria.nombre}`}
                            itemProp="url"
                            data-link={categoria.dataLink}
                        >
                            <picture itemProp="image">
                                <source srcSet={categoria.imagenes.xl} media="(min-width: 1700px)" />
                                <source srcSet={categoria.imagenes.md} media="(min-width: 1200px)" />
                                <source srcSet={categoria.imagenes.sm} media="(min-width: 768px)" />
                                <source srcSet={categoria.imagenes.xs} media="(min-width: 576px)" />
                                <img src={categoria.imagenes.default} alt={categoria.alt} loading="lazy" decoding="async" />
                            </picture>

                            <div>
                                <h3 className="bold-text-montserrat" itemProp="name">
                                    {categoria.nombre}
                                </h3>

                                <p className="light-text-montserrat" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                    <span itemProp="price">{categoria.precio}</span>
                                </p>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>

            <div className={styles.sectionFinal}>
                <p className="light-text-montserrat-b">Conoce nuestros servicios y encuentra la opción ideal para tus mejores momentos</p>

                <BotonNav
                    to="/servicios"
                    ariaLabel="Ver todos los servicios de Fotografía Profesional"
                    title="Haz clic para ver todos los servicios de Fotografía"
                    dataLink="home-servicios-btn"
                >
                    VER SERVICIOS
                </BotonNav>
            </div>

            <hr />
        </section>
    );
};
