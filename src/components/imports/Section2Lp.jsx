import { NavLink } from 'react-router-dom';

import { categoriasSection2 } from '../utils/categoriasSection2Lp';

export const Section2Lp = () => {
    return (
        <section className="section-2-lp-container">
            <header className="section-2-lp-titulo">
                <h2 className="bold-text-montserrat">Descubre Nuestras Galerías Fotográficas</h2>
                <h3 className="light-text-montserrat">Capturamos la magia de cada etapa</h3>
            </header>

            {/* Categorías */}
            <div className="section-2-lp-categorias">
                {categoriasSection2.map((categoria) => (
                    <div className="categoria-section-2-lp" key={categoria.nombre}>
                        <NavLink to={categoria.ruta} aria-label={`Ver todas las Sesiones de Fotos de ${categoria.nombre}`}>
                            <div className="categoria-overlay">
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

            <div className="section-2-lp-final">
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
