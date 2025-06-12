import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

 
const Home = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <img src="../images/image1.jpg" className="w-full h-screen object-cover" alt="Slide 1" />

        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/image2.jpg" className="w-full h-screen object-cover" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images//image3.jpg" className="w-full h-screen object-cover" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="absolute bottom-20 w-full text-center text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold"> Technical</h1>
        <p className="text-xs sm:text-sm mt-2">Please Like, Share & Subscribe</p>
      </motion.div>
    </div>
  );
};

export default Home;