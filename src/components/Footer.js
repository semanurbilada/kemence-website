import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-scroll";
import Icons from "./Icons.js";

export default function Footer() {
    AOS.init();
    return(
        <section className="min-h-auto w-full bg-primary-default z-10" id="info">
            <div className="container py-20 flex flex-col items-center md:gap-20 gap-10 text-xl">
                <div>
                    <Link 
                        className="container md:flex hidden"
                        to="start" 
                        smooth={true}
                        duration={500}>
                        <img 
                            className="h-auto md:w-56 w-48 hover:scale-105 animation cursor-pointer md:pointer-events-auto pointer-events-none"
                            src="/logo.png" alt="Navbar Logo" 
                        />
                    </Link> 
                </div>

                <div className="container flex md:flex-row flex-col items-center justify-between md:gap-0 gap-14 md:text-lg text-base text-primary-900">
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
        </section>
    );
}