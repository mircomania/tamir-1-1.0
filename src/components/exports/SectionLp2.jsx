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
                    <NavLink
                        to={`/galeria/${categoria.id}`}
                        aria-label={`Ver todas las Sesiones de Fotos de ${categoria.nombre}`}
                        key={categoria.nombre}
                        className="pacifico-text"
                        data-link={categoria.dataLink}
                    >
                        <div className={styles.categoriaOverlay}>{categoria.nombre}</div>
                    </NavLink>
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
                    dataLink="home-galeria-btn"
                >
                    VER GALERÍA
                </BotonNav>
            </div>

            <hr />
        </section>
    );
};
