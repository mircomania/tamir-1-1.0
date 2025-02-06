import { Section1Lp } from '../imports/Section1Lp';
import { Section2Lp } from '../imports/Section2Lp';
import { Section3Lp } from '../imports/Section3Lp';
import { Section4Lp } from '../imports/Section4Lp';

export const LandingPage = () => {
    return (
        <main className="landing-container">
            <section>
                <Section1Lp />
            </section>

            <section>
                <Section2Lp />
            </section>

            <section>
                <Section3Lp />
            </section>

            <section>
                <Section4Lp />
            </section>
        </main>
    );
};
