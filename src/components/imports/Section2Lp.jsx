import { NavLink } from 'react-router-dom';

import img1c1Section2Lp from '../../assets/images/landing/section2/categoria1/fondo-1-categoria-landing-2.1.webp';
import img1c2Section2Lp from '../../assets/images/landing/section2/categoria2/fondo-2-categoria-landing-2.1.webp';
import img1c3Section2Lp from '../../assets/images/landing/section2/categoria3/fondo-3-categoria-landing-2.1.webp';

import img2c1Section2Lp from '../../assets/images/landing/section2/categoria1/fondo-1-categoria-landing-2.2.webp';

import img3c1Section2Lp from '../../assets/images/landing/section2/categoria1/fondo-1-categoria-landing-2.3.webp';

import img4c1Section2Lp from '../../assets/images/landing/section2/categoria1/fondo-1-categoria-landing-2.4.webp';

import img5c1Section2Lp from '../../assets/images/landing/section2/categoria1/fondo-1-categoria-landing-2.5.webp';

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
                        <picture>
                            <source srcSet={img5c1Section2Lp} media="(min-width: 1700px)" />
                            <source srcSet={img4c1Section2Lp} media="(min-width: 1400px)" />
                            <source srcSet={img3c1Section2Lp} media="(min-width: 1200px)" />
                            <source srcSet={img2c1Section2Lp} media="(min-width: 768px)" />
                            <img
                                src={img1c1Section2Lp}
                                alt="Sesión de fotos para bebés: captura momentos adorables e inolvidables."
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>
                    </NavLink>
                </div>

                <div className="categoria-section-2-lp">
                    <NavLink to="/galeria/embarazo" aria-label="Ver todas las sesiones de fotos de embarazo">
                        <div className="categoria-overlay">
                            <p className="pacifico-text">Embarazo </p>
                        </div>
                        <picture>
                            <source srcSet={img5c1Section2Lp} media="(min-width: 1700px)" />
                            <source srcSet={img4c1Section2Lp} media="(min-width: 1400px)" />
                            <source srcSet={img3c1Section2Lp} media="(min-width: 1200px)" />
                            <source srcSet={img2c1Section2Lp} media="(min-width: 768px)" />
                            <img
                                src={img1c2Section2Lp}
                                alt="Fotografía de embarazo: un recuerdo inolvidable de la maternidad."
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>
                    </NavLink>
                </div>

                <div className="categoria-section-2-lp">
                    <NavLink to="/galeria/familia" aria-label="Ver todas las sesiones de fotos de familias">
                        <div className="categoria-overlay">
                            <p className="pacifico-text">Familia</p>
                        </div>
                        <picture>
                            <source srcSet={img5c1Section2Lp} media="(min-width: 1700px)" />
                            <source srcSet={img4c1Section2Lp} media="(min-width: 1400px)" />
                            <source srcSet={img3c1Section2Lp} media="(min-width: 1200px)" />
                            <source srcSet={img2c1Section2Lp} media="(min-width: 768px)" />
                            <img
                                src={img1c3Section2Lp}
                                alt="Fotografía familiar: retratos llenos de amor y conexión."
                                loading="lazy"
                                decoding="async"
                            />
                        </picture>
                    </NavLink>
                </div>
            </div>

            {/* CTA Final */}
            <div className="section-2-lp-final">
                <p className="light-text-montserrat">
                    ¡Inspírate con nuestra galería! <br /> Haz clic para ver todas las sesiones de fotos
                </p>

                <div>
                    <NavLink to="/galeria" aria-label="Ver todas las sesiones de fotos en nuestra galería">
                        <button className="boton-1 bold-text-montserrat">VER GALERÍA </button>
                    </NavLink>
                </div>
            </div>
        </section>
    );
};
