import styles from '../../styles/modulos/sectionGp1.module.css';

import { categoriasSectionGp1 } from '../utils/categoriasSectionGp1';

import { NavLink } from 'react-router-dom';

export const SectionGp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="pacifico-text">Galería</h1>
                <h2 className="light-text-montserrat-b">Capturamos tu historia en cada imagen</h2>

                <h3 className="light-text-montserrat-b">
                    Los momentos, recuerdos y etapas más especiales inmortalizados con nuestras sesiones fotográficas
                </h3>
            </header>

            {/* Categorías */}
            <section className={styles.sectionCategorias}>
                {categoriasSectionGp1.map((categoria) => (
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

            <section className={styles.sectionTexto}>
                <p className="light-text-montserrat-b">
                    Cada imagen nos cuenta una historia, sesiones de fotos que realzan la emoción con nuestra galería de newborn, niños, embarazo,
                    familia y mas, destacándonos por nuestro enfoque único y profesional
                </p>
            </section>

            <hr />
        </section>
    );
};
