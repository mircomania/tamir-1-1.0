import styles from '../../styles/modulos/landingPage.module.css';

import { Section1Lp } from '../imports/Section1Lp';
import { Section2Lp } from '../imports/Section2Lp';
import { Section3Lp } from '../imports/Section3Lp';
import { Section4Lp } from '../imports/Section4Lp';

export const LandingPage = () => {
    return (
        <main>
            <section>
                <Section1Lp />
            </section>

            <section className={styles.fondo1}>
                <section>
                    <Section2Lp />
                </section>

                <section>
                    <Section3Lp />
                </section>

                <section>
                    <Section4Lp />
                </section>
            </section>
        </main>
    );
};
