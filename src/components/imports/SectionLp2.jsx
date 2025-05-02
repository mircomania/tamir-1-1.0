import styles from '../../styles/modulos/sectionLp2.module.css';

import { categoriasSectionLp2 } from '../utils/categoriasSectionLp2';
import { BotonNav } from '../utils/BotonNav';

import { NavLink } from 'react-router-dom';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text-montserrat">Descubre Nuestras Galerías Fotográficas</h2>
                <h3 className="light-text-montserrat-b">Capturamos la magia de cada etapa</h3>
            </header>

            {/* CATEGORIAS */}
            <div className={styles.sectionCategorias}>
                {categoriasSectionLp2.map((categoria) => (
                    <div className={styles.sectionCategoria} key={categoria.nombre}>
                        <NavLink to={`/galeria/${categoria.id}`} aria-label={`Ver todas las Sesiones de Fotos de ${categoria.nombre}`}>
                            <div className={styles.categoriaOverlay}>
                                <p className="pacifico-text">{categoria.nombre}</p>
                            </div>
                            <picture>
                                <source srcSet={categoria.imagenes.xl} media="(min-width: 1700px)" />
                                <source srcSet={categoria.imagenes.lg} media="(min-width: 1400px)" />
                                <source srcSet={categoria.imagenes.md} media="(min-width: 1200px)" />
                                <source srcSet={categoria.imagenes.sm} media="(min-width: 768px)" />
                                <img src={categoria.imagenes.default} alt={categoria.alt} loading="lazy" decoding="async" />
                            </picture>
                        </NavLink>
                    </div>
                ))}
            </div>

            <div className={styles.sectionFinal}>
                <p className="light-text-montserrat-b">
                    ¡Inspírate con nuestra galería! <br /> Haz clic para ver todas las sesiones de fotos
                </p>

                <BotonNav
                    to="/galeria"
                    ariaLabel="Ver todas las Sesiones de Fotos en nuestra galería"
                    title="Haz clic para ver todas la Galería de Fotos"
                >
                    VER GALERÍA
                </BotonNav>
            </div>

            <hr />
        </section>
    );
};
