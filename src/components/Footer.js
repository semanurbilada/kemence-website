import AOS from 'aos';
import 'aos/dist/aos.css';
import Icons from "./Icons.js";

export default function Footer() {
    AOS.init();
    return(
        <footer className="section-default relative bg-primary-default z-10" id="info">
            <div className="container py-20 flex flex-col items-center md:gap-32 gap-10">
                <h3 
                    className="md:text-4xl text-2xl text-primary-900 underline md:underline-offset-8 md:decoration-4">İLETİŞİM
                </h3>

                <div className="container flex md:flex-row flex-col items-center justify-between md:gap-0 gap-14 md:text-xl text-base text-primary-900">
                    <div 
                        className="contact-items" 
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        <Icons iconName="phone" />
                        <a
                            href="https://api.whatsapp.com/send?phone=905313566230" 
                            target='_blank' rel='noopener noreferrer nofollow'>
                            WhatsApp için tıklayınız!
                        </a>
                    </div>

                    <div 
                        className="contact-items" 
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Icons iconName="users" />
                        <p>Orhan Yıldırım<br/><br/>Kemal Yıldırım</p>
                    </div>

                    <div 
                        className="contact-items" 
                        data-aos="zoom-in"
                        data-aos-duration="800"
                    >
                        <Icons iconName="mail" />
                        <a
                            href="mailto:" 
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