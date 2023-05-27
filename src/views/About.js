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
            <div className="container flex flex-col items-center md:gap-20 gap-12 text-primary-400">
                <h4 className="md:text-4xl text-2xl underline underline-offset-8 decoration-4">
                    HAKKIMIZDA
                </h4>
                <div className="flex flex-col items-center justify-center md:gap-10 gap-5" data-aos="fade-in">
                    <p className="md:text-2xl text-base text-primary-900 text-center md:leading-10 leading-7">
                        <span className="text-primary-900 md:text-3xl text-lg">Ülke ekonomisine ve geri dönüşüme katkıda bulunmak bizim işimiz!</span>
                        <br/><br />
                        Müşterilerimizin ihtiyaçlarına en iyi şekilde yanıt vermek için, her türlü hurdayı değerinde alıyoruz. 
                        <br/>Üstün hizmet kalitemizle müşterilerimize güven veriyoruz ve onlarla uzun süreli iş birlikleri kuruyoruz.
                        Herhangi bir sorunuz için bize 7/24 ulaşabilirsiniz.
                        <br/><br/>
                        Hurda atıklarınızı değerlendirelim ve çevremize katkı sağlayalım!
                    </p>
                    <button
                        className="base-button md:text-xl text-white bg-secondary-400 border-none hover:scale-105 animation">
                        <a 
                            href="tel:905313566230" 
                            target='_blank' 
                            rel='noopener noreferrer nofollow'
                        >
                            İletişime geç!
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );   
}