import styles from '../../styles/modulos/section2Lp.module.css';

import { categoriasSection2 } from '../utils/categoriasSection2Lp';

import { NavLink } from 'react-router-dom';

export const Section2Lp = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text-montserrat">Descubre Nuestras Galerías Fotográficas</h2>
                <h3 className="light-text-montserrat">Capturamos la magia de cada etapa</h3>
            </header>

            {/* Categorías */}
            <div className={styles.sectionCategorias}>
                {categoriasSection2.map((categoria) => (
                    <div className={styles.sectionCategoria} key={categoria.nombre}>
                        <NavLink to={categoria.ruta} aria-label={`Ver todas las Sesiones de Fotos de ${categoria.nombre}`}>
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
                <p className="light-text-montserrat">
                    ¡Inspírate con nuestra galería! <br /> Haz clic para ver todas las sesiones de fotos
                </p>

                <NavLink to="/galeria" aria-label="Ver todas las Sesiones de Fotos en nuestra galería">
                    <button className="boton-1 bold-text-montserrat">VER GALERÍA</button>
                </NavLink>
            </div>

            <hr />
        </section>
    );
};
