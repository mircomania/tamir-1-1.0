import styles from '../../styles/modulos/sectionLp4.module.css';

import img1Section4 from '../../assets/images/landing/section4/img-section-4.1-lp.webp';
import img2Section4 from '../../assets/images/landing/section4/img-section-4.2-lp.webp';
import img3Section4 from '../../assets/images/landing/section4/img-section-4.3-lp.webp';
import img4Section4 from '../../assets/images/landing/section4/img-section-4.4-lp.webp';

import { Form } from './Form';

export const SectionLp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text-montserrat">Agenda tu Sesión de Fotos</h2>
            </header>

            <div className={styles.sectionContenido}>
                <picture className={styles.imgSection4}>
                    <source srcSet={img4Section4} media="(min-width: 1700px)" />
                    <source srcSet={img3Section4} media="(min-width: 1400px)" />
                    <source srcSet={img2Section4} media="(min-width: 992px)" />
                    <img src={img1Section4} alt="Sesión de Fotos de bebe recién nacido durmiendo sobre una canasta" loading="lazy" decoding="async" />
                </picture>

                <div className={styles.form}>
                    <Form />
                </div>
            </div>
        </section>
    );
};
