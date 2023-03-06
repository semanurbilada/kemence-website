import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
    AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-in-out-back'
    });
    return(
        <section className="section-default">
            <div className="container flex flex-col items-center gap-20 text-primary-400">
                <h4 className="md:text-4xl text-2xl underline underline-offset-8 decoration-4">
                    HAKKIMIZDA
                </h4>
                <p className="md:text-2xl text-xl text-primary-900 text-center md:leading-10 leading-7" data-aos="fade-in">
                    Kurucu ve genç girişimci Orhan ve Kemal kardeşler tarafından kurulmuş olup,
                    bu zamana kadar biriktirdiğimiz tecrübelerimizle yolumuza devam etmekteyiz.
                </p>
            </div>
        </section>
    );   
}