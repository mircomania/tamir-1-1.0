// evita que se pueda hacer clic derecho en las imágenes
import { useEffect } from 'react';

export const UseDisableImg = () => {
    useEffect(() => {
        const handleContextMenu = (e) => {
            if (e.target.tagName === 'IMG') {
                e.preventDefault();
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
        };
    }, []);
};
