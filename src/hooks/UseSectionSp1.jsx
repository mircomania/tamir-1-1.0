import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useSectionSp1 = () => {
    const location = useLocation();
    const [services, setServices] = useState([]);
    const [activeService, setActiveService] = useState(null);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleClose = (serviceId) => {
        setActiveService(null);
        setTimeout(() => {
            const cardEl = document.getElementById(`servicio-${serviceId.replace(/\s+/g, '-').toLowerCase()}`);
            if (cardEl) {
                const yOffset = -110;
                const y = cardEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 100);
    };

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

    useEffect(() => {
        if (filter) {
            setActiveService(filter);
            setTimeout(() => {
                const cardEl = document.getElementById(`servicio-${filter.replace(/\s+/g, '-').toLowerCase()}`);
                if (cardEl) {
                    const yOffset = -130;
                    const y = cardEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 150);
        } else {
            setActiveService(null);
        }
    }, [filter]);

    useEffect(() => {
        const path = location.pathname;
        const parts = path.split('/');
        const last = parts[parts.length - 1];
        const mapFallbacks = { ninos: 'niños' };

        if (last && last !== 'servicios') {
            setFilter(mapFallbacks[last] || last);
        }
    }, [location.pathname]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                // http://localhost:5000
                const res = await fetch('/api/servicios');
                const data = await res.json();
                if (data?.services) {
                    setServices(data.services);
                } else {
                    throw new Error('No se encontraron servicios');
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    /* logica de errores en el path  */

    const filteredServices = filter ? services.filter((svc) => svc.servicio.toLowerCase() === filter.toLowerCase()) : services;
    const servicesToDisplay = filteredServices.length > 0 ? filteredServices : services;

    return {
        services,
        servicesToDisplay,
        activeService,
        filter,
        setFilter,
        handleClick,
        handleClose,
        loading,
        error,
    };
};
