import Features from "../Features/Features";
import Qus from "./Qus";
import Lottie from "lottie-react";
import animation from "../../../public/Animation.json"
import animation2 from "../../../public/Animation2.json"
import animation3 from "../../../public/Animation3.json"
import animation4 from "../../../public/Animation4.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Comment from "../Comment/Comment";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";


const Home = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <section>
            <div  className=" lg:mx-10 my-5 ">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, EffectCoverflow, Pagination, Autoplay, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={3}
                    // navigation
                    
                    autoplay
                    loop
                    effect={'coverflow'}
                    grabCursor={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,

                    }}
                    pagination={true}
                    scrollbar={{ draggable: true }}
                className=""
                >
                    <SwiperSlide><Lottie animationData={animation}></Lottie></SwiperSlide>
                    <SwiperSlide><Lottie animationData={animation2}></Lottie></SwiperSlide>
                    <SwiperSlide><Lottie animationData={animation3}></Lottie></SwiperSlide>
                    <SwiperSlide><Lottie animationData={animation4}></Lottie></SwiperSlide>
                </Swiper>

            </div>
            <div>
                <Features></Features>
            </div>
            <div>
                <Qus></Qus>
            </div>
            <div>
                <Comment></Comment>
            </div>

        </section>

    );
};

export default Home;