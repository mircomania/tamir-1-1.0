import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import LogoBurger from '../../assets/images/logos/logo-tamir-mobile-1.webp';
import LogoFacebook2 from '../../assets/images/logos/logo-fb-2.webp';
import LogoYoutube2 from '../../assets/images/logos/logo-yt-2.webp';
import LogoInstagram2 from '../../assets/images/logos/logo-ig-2.webp';

import { navLinks } from '../utils/navBarMenu';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            {/* ICONO  */}

            <FontAwesomeIcon icon={faBars} className="burger-menu-icon" aria-label="Abrir o cerrar menú" onClick={toggleMenu} />

            {/* CONTENEDOR LISTA */}

            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* LISTA  */}

                <ul className="burger-menu-nav light-text-montserrat">
                    {navLinks.map((link) => (
                        <div className="link-container" key={link.id}>
                            <li>
                                <NavLink to={link.to} onClick={toggleMenu} title={link.title}>
                                    {link.label}
                                </NavLink>
                            </li>
                        </div>
                    ))}
                </ul>

                <div className="container-bajo-mobile">
                    {/* LOGO  */}

                    <div className="logo-mobile-menu">
                        <img src={LogoBurger} alt="Logotipo de Tamir" loading="lazy" decoding="async" />
                    </div>

                    {/* REDES SOCIALES */}

                    <div className="redes-container">
                        <a href="https://www.instagram.com/tamirfotografias/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src={LogoInstagram2} alt="Instagram" loading="lazy" decoding="async" />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                            <img src={LogoYoutube2} alt="Youtube" loading="lazy" decoding="async" />
                        </a>

                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src={LogoFacebook2} alt="Facebook" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
