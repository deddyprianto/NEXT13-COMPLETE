import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Slider({ dataPromoBanner }) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
    >
      {dataPromoBanner.map((promoBannersImage) => (
        <SwiperSlide key={promoBannersImage?.id}>
          <div className='w-full h-36 relative'>
            <Image
              alt='Signature Beef Stew 红烧牛肉'
              fill={true}
              placeholder='blur'
              src={promoBannersImage.defaultImageURL}
              blurDataURL={promoBannersImage.defaultImageURL}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
