/*
 * @Author: ryyyyy
 * @Date: 2021-05-14 11:20:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-05-14 11:40:08
 * @Description: Do not edit
 * @FilePath: /demo/src/swiper/index.js
 */
import React from 'react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import './index.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
console.log(Navigation, 2333)

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="first">1</div></SwiperSlide>
      <SwiperSlide><div className="second">2</div></SwiperSlide>
      <SwiperSlide><div className="third">3</div></SwiperSlide>
      <SwiperSlide><div className="fouth">4</div></SwiperSlide>
    </Swiper>
  );
};