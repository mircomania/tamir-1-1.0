import { NavLink } from 'react-router-dom';

import img1Section2Lp from '../../assets/images/fondo categorias landing cel 1.webp';

export const Section2Lp = () => {
    return (
        <section className="section-2-lp-container">
            {/* Títulos */}
            <div className="section-2-lp-titulo">
                <h2 className="bold-text-montserrat">Descubre Nuestras Galerías Fotográficas</h2>
                <p className="light-text-montserrat">Capturamos la magia de cada etapa</p>
            </div>

            {/* Categorías */}
            <div className="section-2-lp-categorias">
                <div className="categoria-section-2-lp">
                    <NavLink to="/galeria/bebes" aria-label="Ver todas las sesiones de fotos de bebés">
                        <div className="categoria-overlay">
                            <p className="pacifico-text">Bebés</p>
                        </div>
                        <img
                            src={img1Section2Lp}
                            alt="Sesión de fotos para bebés: captura momentos adorables e inolvidables."
                            loading="lazy"
                            decoding="async"
                        />
                    </NavLink>
                </div>

                <div className="categoria-section-2-lp">
                    <NavLink to="/galeria/embarazo" aria-label="Ver todas las sesiones de fotos de embarazo">
                        <div className="categoria-overlay">
                            <p className="pacifico-text">Embarazo </p>
                        </div>
                        <img
                            src={img1Section2Lp}
                            alt="Fotografía de embarazo: un recuerdo inolvidable de la maternidad."
                            loading="lazy"
                            decoding="async"
                        />
                    </NavLink>
                </div>

                <div className="categoria-section-2-lp">
                    <NavLink to="/galeria/familia" aria-label="Ver todas las sesiones de fotos de familias">
                        <div className="categoria-overlay">
                            <p className="pacifico-text">Familia</p>
                        </div>
                        <img src={img1Section2Lp} alt="Fotografía familiar: retratos llenos de amor y conexión." loading="lazy" decoding="async" />
                    </NavLink>
                </div>
            </div>

            {/* CTA Final */}
            <div className="section-2-lp-final">
                <p className="light-text-montserrat">
                    ¡Inspírate con nuestra galería! <br /> Haz clic para ver todas las sesiones de fotos
                </p>

                <div className="section-2-lp-boton">
                    <NavLink to="/galeria" aria-label="Ver todas las sesiones de fotos en nuestra galería">
                        <button className="boton-1 bold-text-montserrat">VER GALERÍA </button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};
