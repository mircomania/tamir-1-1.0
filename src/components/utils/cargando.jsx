import camaraCargando from '../../assets/images/general/camara-cargando.webp';

export const Cargando = () => {
    return (
        <section className="cargando-container">
            <img src={camaraCargando} alt="Camara fotografica" className="camara" />

            <p className="light-text-montserrat-b typing">Cargando...</p>
        </section>
    );
};
