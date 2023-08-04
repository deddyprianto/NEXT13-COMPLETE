import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { promoBannersImage } from '@/helper/myDummyData';
import Image from 'next/image';
export default function Slider() {
  // const { data, isError, isLoading } = useFetchDataClient('promobanners/load');
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
      {promoBannersImage.map((promoBannersImage) => (
        <SwiperSlide
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
          key={promoBannersImage}
        >
          <Image
            src={promoBannersImage.defaultImageURL}
            alt='Picture of the author'
            placeholder='blur'
            fill={true}
            blurDataURL={promoBannersImage.defaultImageURL}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
