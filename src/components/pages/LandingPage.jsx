import { Section1Lp } from '../imports/Section1Lp';
import { Section2Lp } from '../imports/Section2Lp';
import { Section3Lp } from '../imports/Section3Lp';
import { Section4Lp } from '../imports/Section4Lp';

const LandingPage = () => {
    return (
        <main className="fade-in">
            <section>
                <Section1Lp />
            </section>

            <section className="fondo1">
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

export default LandingPage;
