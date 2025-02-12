import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logos/logo-tamir-footer-1.webp';
import LogoFacebook1 from '../../assets/images/logos/logo-fb-1.webp';
import LogoYoutube1 from '../../assets/images/logos/logo-yt-1.webp';
import LogoInstagram1 from '../../assets/images/logos/logo-ig-1.webp';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                {/* Logo y Redes Sociales */}
                <section>
                    <div className="img-logo-footer">
                        <NavLink to="/" aria-label="Ir a la página de inicio">
                            <img src={LogoNavbar} alt="Logo de Tamir en el pie de página" loading="lazy" decoding="async" />
                        </NavLink>
                    </div>

                    {/* Redes Sociales */}
                    <div className="redes-container">
                        <a href="https://www.instagram.com/tamirfotografias/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={LogoInstagram1} alt="Instagram" loading="lazy" decoding="async" />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <img src={LogoYoutube1} alt="Youtube" loading="lazy" decoding="async" />
                        </a>

                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src={LogoFacebook1} alt="Facebook" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </section>

                {/* Copyright */}
                <section className="poli-copy light-text-montserrat">
                    <p>
                        <span className="tamir-2025">© TAMIR 2025 | </span>contacto@tamir.cl
                    </p>

                    <NavLink to="/politica-privacidad" title="Ver la política de privacidad">
                        Política de privacidad
                    </NavLink>
                </section>
            </div>
        </footer>
    );
};
