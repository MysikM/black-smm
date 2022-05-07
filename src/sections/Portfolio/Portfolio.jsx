import React from 'react';
import './portfolio.scss';
import {portfolioImages} from "../../data/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay, Navigation} from "swiper";

const Portfolio = () => {
    const titleAnimation = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
    }
    const btnsAnimation ={
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
    }
    const subtitleAnimation = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -100 },
    }
    return (
        <section className='portfolio'>
            <div className="portfolio--container container">
                <motion.h2
                    initial="hidden"
                    animate="visible"
                    variants={titleAnimation}
                    transition={{ duration: 2, delay: 1 }}
                    className='portfolio--title'
                >
                    Портфолио
                </motion.h2>
                <div className="portfolio--images">
                    <Swiper
                        loop={true}
                        spaceBetween={2}
                        slidesPerView={4}
                        modules={[Autoplay, Navigation]}
                        autoplay={{delay: 2000}}
                        navigation={{
                            nextEl: ".button-next",
                            prevEl: ".button-prev"
                        }}
                        breakpoints={
                            {
                                2560: {
                                    slidesPerView: 5,
                                },
                                1200: {
                                    slidesPerView: 4,
                                },
                                960: {
                                    slidesPerView: 3,
                                },
                                640: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                }
                            }
                        }
                    >
                        {
                            portfolioImages.map((item) => (
                                <SwiperSlide key={item.title}>
                                    <img src={item.src} alt={item.title} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className='portfolio--description'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={btnsAnimation}
                        transition={{ duration: 2, delay: 1 }}
                        className='portfolio--navigation'
                    >
                        <button className='button-next'>Вперед</button>
                        <button className='button-prev'>Назад</button>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={subtitleAnimation}
                        transition={{ duration: 2, delay: 1 }}
                        className='portfolio--subtitle'
                    >
                        <p>Продвижение в социальных сетях — миссия, которую стоит доверить команде настоящих профессионалов.</p>
                        <p>Мы работаем с более 100+ проектами в различных нишах.
                            Привлечение новых клиентов, увеличение продаж и повышение узнаваемости бренда — яблочко,
                            в которое мы 100% попадаем.</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Portfolio;