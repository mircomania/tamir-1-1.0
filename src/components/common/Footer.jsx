import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logos/logo-tamir-footer-1.webp';
import LogoFacebook1 from '../../assets/images/logos/logo-fb-1.webp';
import LogoYoutube1 from '../../assets/images/logos/logo-yt-1.webp';
import LogoInstagram1 from '../../assets/images/logos/logo-ig-1.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <section>
                    {/* LOGO  */}
                    <div className="img-logo-footer">
                        <NavLink to="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn">
                            <img src={LogoNavbar} alt="Logo de Tamir en el pie de página" loading="lazy" decoding="async" />
                        </NavLink>
                    </div>

                    {/* REDES SOCIALES */}
                    <div className="redes-container">
                        <a
                            href="https://www.instagram.com/tamirfotografias/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            data-link="footer-instagram-btn"
                        >
                            <img src={LogoInstagram1} alt="Instagram" loading="lazy" decoding="async" />
                        </a>

                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            data-link="footer-youtube-btn"
                        >
                            <img src={LogoYoutube1} alt="Youtube" loading="lazy" decoding="async" />
                        </a>

                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            data-link="footer-facebook-btn"
                        >
                            <img src={LogoFacebook1} alt="Facebook" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </section>

                {/* COPYRIGHT */}
                <section className="utiles-footer light-text-montserrat">
                    <p>
                        <span className="tamir-2025">© TAMIR 2025 | </span>contacto@tamir.cl
                    </p>

                    <div className="links-footer">
                        <NavLink to="/politica-privacidad" title="Ver la política de privacidad" data-link="footer-politica-link">
                            Política de privacidad
                        </NavLink>

                        <NavLink to="/terminos-condiciones" title="Ver los términos y condiciones" data-link="footer-terminos-link">
                            Términos y condiciones
                        </NavLink>

                        <NavLink to="/faq" title="Ver las preguntas preguntas frecuentes" data-link="footer-faq-link">
                            FAQ
                        </NavLink>
                    </div>
                </section>
            </div>
        </footer>
    );
};
