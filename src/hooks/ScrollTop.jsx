import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(1, 0);
    }, [location]);

    return null;
};
