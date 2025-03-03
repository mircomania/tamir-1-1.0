import { NavLink } from 'react-router-dom';

export const Section1Lp = () => {
    return (
        <section className="section-1-lp-container">
            <header className="section-1-lp-titulo">
                <h1 className="pacifico-text">Sesión de Fotos</h1>
                <h2 className="light-text-montserrat">Para bebés, embarazadas y toda tu familia</h2>
            </header>

            <div className="section-1-lp-boton">
                <NavLink to="/contacto" aria-label="Ir a la página de contacto para agendar una Sesión de Fotos">
                    <button className="boton-1 bold-text-montserrat">AGENDAR SESIÓN</button>
                </NavLink>
            </div>

            {/* Fondos animados */}
            <div className="bg bg-1"></div>
            <div className="bg bg-2"></div>
            <div className="bg bg-3"></div>
        </section>
    );
};
