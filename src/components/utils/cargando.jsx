import camaraCargando from '../../assets/images/general/camara-cargando.webp';

export const Cargando = () => {
    return (
        <section className="cargando-container">
            <img src={camaraCargando} alt="Camara fotografica" className="camara" />

            <p className="pacifico-text typing">Cargando...</p>
        </section>
    );
};
