import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import shoppingCart from './shopping_cart.png';
import example from './example.webp';

const BestSellingSwiper: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false); 

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div ref={prevRef} className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <div ref={nextRef} className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer p-2 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      {isReady && ( 
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            if (prevRef.current && nextRef.current && swiper.navigation) {
              swiper.navigation.prevEl = prevRef.current;
              swiper.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="relative flex flex-col items-center text-center">
              <Image src={example} alt="Example product" width={266} height={266} className="object-cover" />
              <Image src={shoppingCart} alt="Shopping cart" width={32} height={32} className="absolute bottom-2 right-2" />
              <p className="mt-2 text-gray-800 font-semibold">Product Name</p>
              <span className="text-red-600 font-bold">350.000 ₫</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col items-center text-center">
              <Image src={example} alt="Example product" width={266} height={266} className="object-cover" />
              <Image src={shoppingCart} alt="Shopping cart" width={32} height={32} className="absolute bottom-2 right-2" />
              <p className="mt-2 text-gray-800 font-semibold">Product Name</p>
              <span className="text-red-600 font-bold">350.000 ₫</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex flex-col items-center text-center">
              <Image src={example} alt="Example product" width={266} height={266} className="object-cover" />
              <Image src={shoppingCart} alt="Shopping cart" width={32} height={32} className="absolute bottom-2 right-2" />
              <p className="mt-2 text-gray-800 font-semibold">Product Name</p>
              <span className="text-red-600 font-bold">350.000 ₫</span>
            </div>
          </SwiperSlide>         
        </Swiper>
      )}
    </div>
  );
};

export default BestSellingSwiper;
