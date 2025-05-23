import { Link, useLocation } from 'react-router-dom';

const routeNameMap = {
    galeria: 'Galería',
    servicios: 'Servicios',
    contacto: 'Contacto',
    faq: 'Preguntas Frecuentes',
    'terminos-condiciones': 'Términos y Condiciones',
    'politica-privacidad': 'Política de Privacidad',
};

export const Breadcrumbs = () => {
    const location = useLocation();

    const pathnames = location.pathname.split('/').filter((x) => x); // Divide  ruta en segmentos

    if (pathnames.length === 0) return null; // No mostrar nada en "/"

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-container" itemScope itemType="https://schema.org/BreadcrumbList">
            <ol className="breadcrumb light-text-montserrat">
                <li className="breadcrumb-item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                    <Link to="/" itemProp="item" data-link="bread-home-link">
                        <span itemProp="name">Inicio</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>
                {pathnames.map((segment, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const name = routeNameMap[segment] || decodeURIComponent(segment);

                    const isLast = index === pathnames.length - 1;
                    return (
                        <li
                            key={to}
                            className={`breadcrumb-item ${isLast ? 'active' : ''}`}
                            aria-current={isLast ? 'page' : undefined}
                            itemProp="itemListElement"
                            itemScope
                            itemType="https://schema.org/ListItem"
                        >
                            {isLast ? (
                                <span itemProp="name">{name}</span>
                            ) : (
                                <Link to={to} itemProp="item" data-link="bread-back-link">
                                    <span itemProp="name">{name}</span>
                                </Link>
                            )}
                            <meta itemProp="position" content={`${index + 2}`} />
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
