import { NavLink } from 'react-router-dom';

import { categoriasSection3 } from '../utils/categoriasSection3Lp';

export const Section3Lp = () => {
    return (
        <section className="section-3-lp-container">
            <header className="section-3-lp-titulo">
                <h2 className="bold-text-montserrat">Servicios de Fotografía Profesional en Santiago</h2>
                <h3 className="light-text-montserrat">Elige la sesión perfecta para cada ocasión</h3>
            </header>

            {/* Categorías */}
            <div className="section-3-lp-categorias">
                {categoriasSection3.map((categoria) => (
                    <div className="categoria-section-3-lp" key={categoria.nombre}>
                        <NavLink to={categoria.ruta} aria-label={`Ver todas las caracteristicas de las Sesiones de Fotos de ${categoria.nombre}`}>
                            <picture>
                                <source srcSet={categoria.imagenes.xl} media="(min-width: 1700px)" />
                                <source srcSet={categoria.imagenes.lg} media="(min-width: 1400px)" />
                                <source srcSet={categoria.imagenes.md} media="(min-width: 1200px)" />
                                <source srcSet={categoria.imagenes.sm} media="(min-width: 768px)" />
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

            <div className="section-3-lp-final">
                <p className="light-text-montserrat">Conoce nuestros servicios y encuentra la opción ideal para tus mejores momentos.</p>

                <NavLink to="/servicios" aria-label="Ver todos los servicios de Fotografía Profesional">
                    <button className="boton-1 bold-text-montserrat">VER SERVICIOS</button>
                </NavLink>
            </div>

            <hr />
        </section>
    );
};
