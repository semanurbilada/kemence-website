import AOS from 'aos';
import 'aos/dist/aos.css';
import Icons from "./Icons.js";

export default function Footer() {
    AOS.init({
        once: true,
        duration: 800,
        easing: 'ease-in-out-back'
    });
    return(
        <footer className="section-default relative bg-primary-default z-10" id="info">
            <div className="container py-20 grid items-center md:gap-32 gap-10">
                <h3 
                    className="w-full md:text-4xl text-2xl text-primary-900 underline md:underline-offset-8 md:decoration-4">
                    İLETİŞİM
                </h3>

                <div className="container grid grid-cols-1 md:grid-cols-3 items-center md:gap-0 gap-14 md:text-xl text-base text-primary-900">
                    <div className="contact-items" data-aos="zoom-in">
                        <Icons 
                            iconName="whatsapp" 
                            className="w-10 md:w-auto h-10 md:h-auto"
                        />
                        <a
                            href="https://api.whatsapp.com/send?phone=905313566230" 
                            target='_blank' rel='noopener noreferrer nofollow'>
                            WhatsApp için tıklayınız!
                        </a>
                    </div>

                    <div className="contact-items" data-aos="zoom-in">
                        <Icons 
                            iconName="users"
                            className="w-8 md:w-auto h-8 md:h-auto"
                        />
                        <p>Orhan Yıldırım<br/><br/>Kemal Yıldırım</p>
                    </div>

                    <div className="contact-items" data-aos="zoom-in">
                        <Icons 
                            iconName="mail" 
                            className="w-12 md:w-auto h-12 md:h-auto"
                        />
                        <a
                            href="mailto:kemencebusiness@gmail.com" 
                            target='_blank' rel='noopener noreferrer nofollow'>
                            Mail için tıklayınız!
                        </a>
                    </div>
                </div>
            </div>
            <ul className="absolute bottom-7 text-sm md:text-base text-primary-900 font-bold">
                <li>Copyright © 2023 | Kemençe Hurdacılık</li>
            </ul>
        </footer>
    );
}