import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export const TitleSEO = ({ title, description, canonical, metaNoIndex }) => (
    <Helmet>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={canonical} />}
        {metaNoIndex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
);

TitleSEO.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    canonical: PropTypes.string,
    metaNoIndex: PropTypes.bool,
};
