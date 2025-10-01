import styles from '../../styles/modulos/sectionGpd1.module.css';

import { Cargando } from '../utils/Cargando';
import { ErrorCarga } from '../utils/ErrorCarga';
import { BotonNav } from '../utils/BotonNav';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SectionGpd1 = () => {
    const { categoria } = useParams();

    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // http://localhost:5000
                const response = await fetch(`/api/galeria?categoria=${categoria}`);
                if (!response.ok) {
                    throw new Error('Error al obtener las imágenes');
                }
                const data = await response.json();
                setImagenes(data.galeria);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [categoria]);

    // Funciones para el modal
    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h1 className="pacifico-text">Galería de {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h1>
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

                {/* IMAGENES */}
                {!loading &&
                    !error &&
                    imagenes.length > 0 &&
                    imagenes.map((img, index) => (
                        <div key={categoria + index} className={styles.imagenWrapper} onClick={() => openModal(index)}>
                            <img src={img.url} alt={`Imagen ${index + 1} de ${categoria}`} className={styles.imagenesCategoria} />
                        </div>
                    ))}

                {!loading && !error && imagenes.length === 0 && (
                    <div className={styles.contenidoAdicional} aria-live="polite">
                        <p className="light-text-montserrat-b">No hay imágenes disponibles</p>
                    </div>
                )}
            </section>

            <hr />

            <section className="boton-container-3">
                <BotonNav dataCta={`galeria-${categoria}-btn`} />
            </section>

            {/* MODAL */}
            {isOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.prevBtn} onClick={prevImage}>
                            ‹
                        </button>
                        <img src={imagenes[currentIndex].url} alt={`Imagen ${currentIndex + 1} de ${categoria}`} className={styles.modalImage} />
                        <button className={styles.nextBtn} onClick={nextImage}>
                            ›
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};
