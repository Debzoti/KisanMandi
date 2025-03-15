import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card, CardContent } from "@/components/ui/card";

const banners = [
  { id: 1, image: 'https://picsum.photos/800/400?random=1', alt: 'Government Ad 1' },
  { id: 2, image: 'https://picsum.photos/800/400?random=2', alt: 'Government Ad 2' },
  { id: 3, image: 'https://picsum.photos/800/400?random=3', alt: 'Government Ad 3' }
];

export default function Banner() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-4 px-4 sm:px-6 lg:px-8">
      <Card className="rounded-xl shadow-xl dark:shadow-none dark:border dark:border-gray-800 overflow-hidden group">
        <CardContent className="p-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-muted-foreground/30',
              bulletActiveClass: '!bg-primary'
            }}
            autoplay={{ 
              delay: 5000, 
              pauseOnMouseEnter: true,
              disableOnInteraction: false 
            }}
            loop={true}
            speed={600}
            className="relative"
          >
            {banners.map((banner) => (
              <SwiperSlide key={banner.id}>
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className="w-full h-72 sm:h-80 object-cover object-center"
                />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Arrows */}
            <div className="swiper-button-next !text-primary !h-12 !w-6 right-2 after:text-[2rem] after:hover:scale-105 after:transition-transform" />
            <div className="swiper-button-prev !text-primary !h-12 !w-6 left-2 after:text-[2rem] after:hover:scale-105 after:transition-transform" />

            {/* Custom Pagination */}
            <div className="swiper-pagination !bottom-2" />
          </Swiper>
        </CardContent>
      </Card>
    </div>
  );
}