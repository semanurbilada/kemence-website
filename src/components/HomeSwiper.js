import "swiper/css";
import "../css/swiper.css";
import "swiper/css/pagination";
import { Link } from "react-scroll";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export default function HomeSwiper() {
    return (
        <Swiper
            className="w-full shadow-2xl"
            spaceBetween={0}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className="!bg-slide-1 shadow-3xl flex flex-col items-center justify-center gap-20 text-gray-200">
                <h1 className="text-[60px]">
                    <span className="md:!text-6xl text-4xl">Kemençe Hurda</span><br/><br/>
                    Demir, Çelik ve Metal hurda alım satımı!
                </h1>
                <Link 
                    to="info"
                    spy={true}
                    smooth={true}
                    offset={400}
                    duration={500}>
                    <button 
                        className="base-button w-36 text-xl">İletişim
                    </button>
                </Link>
            </SwiperSlide>

            <SwiperSlide className="!bg-slide-2 shadow-3xl">
                <h2 className="md:!text-[60px]">Geri dönüşüme katkı sağlıyoruz!</h2>
                <p className="md:text-xl text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis, praesentium sequi! Ipsum id natus deleniti earum, quis
                error? Dolore repellendus cupiditate aliquam debitis maxime nisi quae
                rerum dolorem consequuntur! Veniam.
                </p>
            </SwiperSlide>

            <SwiperSlide className="!bg-slide-3 shadow-3xl">
                <h2 className="md:!text-[60px]">Doğru adrestediniz!</h2>
                <p className="md:text-2xl text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perspiciatis, praesentium sequi! Ipsum id natus deleniti earum, quis
                error? Dolore repellendus cupiditate aliquam debitis maxime nisi quae
                rerum dolorem consequuntur! Veniam.
                </p>
            </SwiperSlide>
        </Swiper>
    );
}