import { NavLink } from 'react-router-dom';

export const BotonAgendar = () => {
    return (
        <NavLink to="/contacto" aria-label="Ir a la página de contacto para agendar una Sesión de Fotos">
            <button className="boton-1 bold-text-montserrat">AGENDAR SESIÓN</button>
        </NavLink>
    );
};
