import styles from '../../styles/modulos/sectionGpd1.module.css';

import { Cargando } from '../utils/Cargando';
import { ErrorCarga } from '../utils/ErrorCarga';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const SectionGpd1 = () => {
    const { categoria } = useParams();

    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/galeria?categoria=${categoria}`);
                if (!response.ok) {
                    throw new Error('Error al obtener las imágenes');
                }
                const data = await response.json();
                setImagenes(data.images);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [categoria]);

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

                {!loading &&
                    !error &&
                    imagenes.length > 0 &&
                    imagenes.map((url, index) => (
                        <div key={categoria + index} className={styles.imagenWrapper}>
                            <img src={url} alt={`Imagen ${index + 1} de ${categoria}`} className={styles.imagenesCategoria} />
                        </div>
                    ))}

                {!loading && !error && imagenes.length === 0 && (
                    <div className={styles.contenidoAdicional} aria-live="polite">
                        <p className="light-text-montserrat-b">No se encontraron imágenes para la categoría {categoria}</p>
                    </div>
                )}
            </section>

            <hr />
        </section>
    );
};
