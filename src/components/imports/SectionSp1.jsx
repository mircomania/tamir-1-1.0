import styles from '../../styles/modulos/sectionSp1.module.css';

import { Cargando } from '../utils/Cargando';
import { ErrorCarga } from '../utils/ErrorCarga';
import { BotonAgendar } from '../utils/BotonAgendar';

import { useState, useEffect } from 'react';

export const SectionSp1 = () => {
    const [services, setServices] = useState([]);
    const [activeService, setActiveService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/servicios');
                const data = await res.json();
                if (data?.services) {
                    setServices(data.services);
                } else {
                    throw new Error('No se encontraron servicios');
                }
            } catch (err) {
                console.error('Error fetching services:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    const handleClick = (serviceId) => {
        const newActive = activeService === serviceId ? null : serviceId;
        setActiveService(newActive);

        if (newActive) {
            setTimeout(() => {
                const cardEl = document.getElementById(`servicio-${serviceId.replace(/\s+/g, '-').toLowerCase()}`);
                if (cardEl) {
                    const yOffset = -110;
                    const y = cardEl.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="pacifico-text">Servicios</h1>
            </header>

            <section className={styles.sectionContenido}>
                {loading && (
                    <div className={styles.contenidoAdicional}>
                        <Cargando />
                    </div>
                )}

                {!loading && error && (
                    <div className={styles.contenidoAdicional}>
                        <ErrorCarga />
                    </div>
                )}

                {!loading && !error && (
                    <section className={styles.sectionTabla}>
                        {services.length === 0 ? (
                            <div className={styles.contenidoAdicional}>
                                <p className="light-text">No hay servicios disponibles</p>
                            </div>
                        ) : (
                            <section className={styles.sectionCards}>
                                {services.map((service) => {
                                    const cardId = `servicio-${service.servicio.replace(/\s+/g, '-').toLowerCase()}`;
                                    return (
                                        <div key={service.servicio} id={cardId} className={styles.cardContainer}>
                                            <button
                                                onClick={() => handleClick(service.servicio)}
                                                className={styles.serviceButton}
                                                title={`Ver detalles de ${service.servicio}`}
                                                style={{
                                                    backgroundImage: `url(${service.imagen})`,
                                                }}
                                            >
                                                <h3 className="bold-text-montserrat">{service.servicio}</h3>
                                            </button>

                                            {activeService === service.servicio && (
                                                <div className={styles.detailCard}>
                                                    {service.intro && <p className="light-text-montserrat-b">{service.intro}</p>}

                                                    <h4 className="bold-text-montserrat">ESTUDIO</h4>
                                                    {service.estudio && <p className="light-text-montserrat-b">{service.estudio}</p>}

                                                    <div className={styles.paquetesContainer}>
                                                        <div>
                                                            <h5 className="bold-text-montserrat">BÁSICO</h5>

                                                            <p className="light-text-montserrat">
                                                                10 fotografías digitales <br />
                                                                Sin cambio de vestuario
                                                            </p>

                                                            {service.valorest1 && (
                                                                <p className="light-text-montserrat">
                                                                    $ <strong>{Number(service.valorest1).toLocaleString('es-CL')}</strong> <br />
                                                                    iva incluido
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <h5 className="bold-text-montserrat">FULL</h5>

                                                            <p className="light-text-montserrat">
                                                                20 fotografías digitales <br />1 cambio de vestuario
                                                            </p>

                                                            {service.valorest2 && (
                                                                <p className="light-text-montserrat">
                                                                    $ <strong>{Number(service.valorest2).toLocaleString('es-CL')}</strong> <br />
                                                                    iva incluido
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <h5 className="bold-text-montserrat">PREMIUM</h5>

                                                            <p className="light-text-montserrat">
                                                                30 fotografías digitales <br />2 cambios de vestuario
                                                            </p>

                                                            {service.valorest3 && (
                                                                <p className="light-text-montserrat">
                                                                    $ <strong>{Number(service.valorest3).toLocaleString('es-CL')}</strong> <br />
                                                                    iva incluido
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {service.instruest?.length > 0 && (
                                                        <ul className="light-text-montserrat">
                                                            {service.instruest.map((line, index) => (
                                                                <li key={`${service.servicio}-${line}-${index}`}>{line}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    <hr />

                                                    <h4 className="bold-text-montserrat">EXTERIOR</h4>
                                                    {service.exterior && <p className="light-text-montserrat-b">{service.exterior}</p>}

                                                    <div className={styles.paquetesContainer}>
                                                        <div>
                                                            <h5 className="bold-text-montserrat">BÁSICO</h5>

                                                            <p className="light-text-montserrat">
                                                                10 fotografías digitales <br />
                                                                Sin cambio de vestuario
                                                            </p>

                                                            {service.valorext1 && (
                                                                <p className="light-text-montserrat">
                                                                    $ <strong>{Number(service.valorext1).toLocaleString('es-CL')}</strong> <br />
                                                                    iva incluido
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <h5 className="bold-text-montserrat">FULL</h5>

                                                            <p className="light-text-montserrat">
                                                                20 fotografías digitales <br />1 cambio de vestuario
                                                            </p>

                                                            {service.valorext2 && (
                                                                <p className="light-text-montserrat">
                                                                    $ <strong>{Number(service.valorext2).toLocaleString('es-CL')}</strong> <br />
                                                                    iva incluido
                                                                </p>
                                                            )}
                                                        </div>

                                                        <div>
                                                            <h5 className="bold-text-montserrat">PREMIUM</h5>

                                                            <p className="light-text-montserrat">
                                                                30 fotografías digitales <br />2 cambios de vestuario
                                                            </p>

                                                            {service.valorext3 && (
                                                                <p className="light-text-montserrat">
                                                                    $ <strong>{Number(service.valorext3).toLocaleString('es-CL')}</strong> <br />
                                                                    iva incluido
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    {service.instruext?.length > 0 && (
                                                        <ul className="light-text-montserrat">
                                                            {service.instruext.map((line, index) => (
                                                                <li key={`${service.servicio}-ext-${line}-${index}`}>{line}</li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    <div className={styles.botonAgendar}>
                                                        <BotonAgendar />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </section>
                        )}
                    </section>
                )}
            </section>
        </section>
    );
};
