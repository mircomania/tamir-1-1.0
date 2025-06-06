import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BotonNav = ({
    to = '/contacto',
    ariaLabel = 'Ir a la página de contacto para agendar una Sesión de Fotos',
    className = 'boton-1 bold-text-montserrat',
    title = 'Haz clic para ir a la página de contacto',
    children = 'AGENDAR SESIÓN',
    dataCta,
    dataLink,
}) => {
    return (
        <NavLink to={to} aria-label={ariaLabel}>
            <button
                className={className}
                title={title}
                {...(dataCta ? { 'data-cta': dataCta } : {})}
                {...(dataLink ? { 'data-link': dataLink } : {})}
            >
                {children}
            </button>
        </NavLink>
    );
};

BotonNav.propTypes = {
    to: PropTypes.string,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    dataCta: PropTypes.any,
    dataLink: PropTypes.any,
};
