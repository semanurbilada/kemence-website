import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-scroll";

function LocationItem({ item }) {
    return(
        <p 
            className="locations"
        >
            <Link
                to="info"
                spy={true}
                smooth={true}
                duration={500}
            >
                {item}
            </Link>
        </p>
    );
}

export default function Services() {
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out-back'
    });
    return(
        <section className="section-default">
            <div className="container flex flex-col items-center md:gap-20 gap-12 text-primary-400">
                <h4 className="md:text-4xl text-2xl underline underline-offset-8 decoration-4">
                    HİZMETLERİMİZ
                </h4>

                <div className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-10">
                    <img 
                        className="rounded-2xl drop-shadow-2xl" 
                        src="/services.jpg"  alt="services"
                    />
                    
                    <div data-aos="fade-up">
                        <h5 className="text-primary-900 md:text-3xl text-xl">
                            Her türlü demir, çelik, profil ve sac alım satımı yapılır!
                        </h5><br/>
                        <p className="md:text-xl text-lg">
                            Firma olarak birçok farklı endüstri koluyla birlikte demir, çelik alım satımı gerçekleştiriyoruz.
                        </p>
                        <br/><br/>
                        <div className="flex flex-wrap items-center justify-center md:gap-16 gap-10 md:text-2xl text-xl text-primary-900"
                            data-aos="fade-up" data-aos-duration="1100"
                        >
                            <LocationItem item="GEBZE" />
                            <LocationItem item="KOCAELİ" />
                            <LocationItem item="PENDİK" />
                            <LocationItem item="TUZLA" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}