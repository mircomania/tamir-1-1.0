import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GaleriaCategoria = () => {
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

    if (loading) return <p>Cargando imágenes...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <main>
            <section>
                <h1>Galería de {categoria}</h1>
            </section>

            <section>
                {imagenes.length > 0 ? (
                    imagenes.map((url, index) => (
                        <img
                            key={id}
                            src={url}
                            alt={`Imagen ${index + 1} de ${categoria}`}
                            loading="lazy"
                            style={{ maxWidth: '100%', marginBottom: '1rem' }}
                        />
                    ))
                ) : (
                    <p>No se encontraron imágenes para la categoría {categoria}</p>
                )}
            </section>
        </main>
    );
};

export default GaleriaCategoria;
