import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/logos/logo-tamir-navbar-1.webp';
import LogoFacebook1 from '../../assets/images/logos/logo-fb-1.webp';
import LogoYoutube1 from '../../assets/images/logos/logo-yt-1.webp';
import LogoInstagram1 from '../../assets/images/logos/logo-ig-1.webp';

import { navLinks } from '../utils/navBarMenu';

import { BurgerMenu } from './BurgerMenu';

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar" aria-label="Menú de navegación principal">
                {/* LOGO  */}

                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal">
                        <img src={LogoNavbar} alt="Logotipo de Tamir" className="logo-navbar" />
                    </NavLink>
                </div>

                {/* LISTA  */}

                <ul className="menu-nav light-text-montserrat">
                    {navLinks.map((item, index) => (
                        <li key={item.id}>
                            <NavLink to={item.to} title={item.title} className={({ isActive }) => (isActive ? 'active' : '')}>
                                {item.label}
                            </NavLink>
                            {index < navLinks.length - 1 && <span className="linea-separadora">|</span>}
                        </li>
                    ))}
                </ul>

                {/* REDES SOCIALES */}

                <div className="redes-container-navbar">
                    <a href="https://www.instagram.com/tamirfotografias/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <img src={LogoInstagram1} alt="Instagram" />
                    </a>

                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <img src={LogoYoutube1} alt="Youtube" />
                    </a>

                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src={LogoFacebook1} alt="Facebook" />
                    </a>
                </div>

                {/* BURGERMENU */}

                <BurgerMenu />
            </nav>
        </header>
    );
};
