import React from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

import { assets } from '../../../assets/assets';

const Hero = () => {
  const slides = [
    {
      image: assets.banner_11,
      title: "Welcome to Hitech Files",
      subtitle: "Your One-Stop Solution for All Your Document Needs",
    },
    {
      image: assets.banner_1,
      title: "Your Documents, Simplified",
      subtitle: "Manage, Store, and Share with Ease",
    },
    {
      image: assets.banner_3,
      title: "Secure. Fast. Reliable.",
      subtitle: "Because Your Documents Deserve the Best",
    },
    {
      image: assets.HeroBanner3,
      title: "Try Hitech Files Today",
      subtitle: "Streamline Your Document Workflow",
    },
  ];

  return (
    <div className="hero-container">
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={`Slide-${index}`} />
              <div className="overlay" />
              <div className="slide-text">
                <h2 className='font-bold text-slate-100'>{slide.title}</h2>
                <p className='text-slate-200'>{slide.subtitle}</p>
                <Link to="/about">
                <button className="cta-btn md:p-3 text-lg rounded-md bg-cyan-400">Get Started</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
