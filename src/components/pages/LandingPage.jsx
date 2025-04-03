import { SectionLp1 } from '../imports/SectionLp1';
import { SectionLp2 } from '../imports/SectionLp2';
import { SectionLp3 } from '../imports/SectionLp3';
import { SectionLp4 } from '../imports/SectionLp4';

const LandingPage = () => {
    return (
        <main className="fade-in">
            <section>
                <SectionLp1 />
            </section>

            <section className="fondo1">
                <section>
                    <SectionLp2 />
                </section>

                <section>
                    <SectionLp3 />
                </section>

                <section>
                    <SectionLp4 />
                </section>
            </section>
        </main>
    );
};

export default LandingPage;
