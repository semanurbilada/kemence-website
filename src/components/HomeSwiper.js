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
                delay: 4500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className="!bg-slide-1 shadow-3xl flex flex-col items-center justify-center gap-20 text-gray-200">
                <h1 className="md:!text-5xl text-4xl">
                    <span className="md:!text-7xl text-4xl">Kemençe Hurda</span><br/><br/>
                    Demir, Çelik ve Metal Hurda alım satımı!
                </h1>
            </SwiperSlide>

            <SwiperSlide className="!bg-slide-2 shadow-3xl">
                <h2 className="md:!text-[60px]">
                    Bizden fiyat almadan hurdalarınızı vermeyin !
                </h2>
                <Link 
                    to="info"
                    spy={true}
                    smooth={true}
                    offset={400}
                    duration={500}>
                    <button 
                        className="base-button md:w-36 w-auto text-xl">İletişim
                    </button>
                </Link>
            </SwiperSlide>

            <SwiperSlide className="!bg-slide-3 shadow-3xl">
                <h2 className="md:!text-[60px]">Doğru adrestesiniz !</h2>
                <p className="md:text-4xl text-2xl">
                    Hem doğayı koruyun hem de gelir elde edin.
                </p>
            </SwiperSlide>
        </Swiper>
    );
}