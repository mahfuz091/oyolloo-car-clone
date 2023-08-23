"use client";
import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <div className='testimonial bg-[#0F131C] pb-12'>
      <div className='page-wrapper pt-[50px] xl:pt-[160px] '>
        <h2
          style={bebas_neue.style}
          className='text-center text-[32px] md:text-[46px] xl:text-[66px] text-[#FFF] uppercase'
        >
          What Our Client Says
        </h2>
        <p className='testimonial-line text-center  mx-auto'></p>
        <div className='relative'>
          <p className='text-center mx-auto text-[14px] md:text-[18px] xl:text-[22px] text-[#67738C] mb-[46px] mt-6'>
            My experience was straightforward and Kieran was extremely <br />{" "}
            helpful and informative. There was no pressure and no hard sell <br />
            which I appreciated.{" "}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute -top-[30px] left-0 md:left-[100px] lg:left-[220px] xl:left-[240px]">
            <path d="M31.7533 15.9487C32.5742 13.8772 33.8718 11.8264 35.6095 9.85251C36.1625 9.22446 36.2327 8.32785 35.7841 7.62167C35.4386 7.07846 34.8576 6.76901 34.2423 6.76901C34.069 6.76901 33.8926 6.79343 33.7186 6.84409C30.0358 7.92014 21.4451 11.7422 21.2144 23.9589C21.1252 28.6764 24.5756 32.7291 29.0683 33.1856C31.5446 33.4335 34.022 32.629 35.8579 30.9695C37.6963 29.3081 38.751 26.9363 38.751 24.4613C38.751 20.3323 35.8201 16.7214 31.7533 15.9487ZM34.1819 29.1146C33.0143 30.1699 31.5446 30.732 29.9863 30.732C29.766 30.732 29.5438 30.721 29.321 30.6979C26.1124 30.3725 23.6497 27.4331 23.7143 24.0066C23.8737 15.5532 28.4507 11.7477 32.241 10.0454C31.0416 11.6677 30.0992 13.3364 29.4291 15.0277C29.1679 15.6863 29.2112 16.4223 29.5475 17.0473C29.8997 17.7029 30.5277 18.1679 31.2693 18.3236C34.1563 18.9272 36.251 21.509 36.251 24.4613C36.251 26.2301 35.4966 27.9262 34.1819 29.1146Z" fill="white" />
            <path d="M15.8206 7.62168C15.4751 7.07847 14.8941 6.76902 14.2788 6.76902C14.1055 6.76902 13.9297 6.79343 13.7551 6.84409C10.0723 7.92014 1.48219 11.7422 1.25147 23.959L1.25147 23.9596C1.16359 28.677 4.61329 32.7291 9.1067 33.1856C11.5859 33.4377 14.0591 32.6296 15.895 30.9695C17.7334 29.3081 18.7881 26.9363 18.7881 24.4613C18.7881 20.3323 15.8572 16.7214 11.791 15.9487C12.6125 13.8753 13.9102 11.8246 15.6472 9.85191C16.2002 9.22324 16.2698 8.32724 15.8206 7.62168ZM9.46682 15.0265C9.2056 15.685 9.24832 16.4211 9.58401 17.0461C9.9368 17.7022 10.5642 18.1673 11.3064 18.3236C14.1934 18.9272 16.2881 21.509 16.2881 24.4613C16.2881 26.2307 15.5337 27.9262 14.219 29.1146C13.052 30.1699 11.5823 30.732 10.0235 30.732C9.80374 30.732 9.58156 30.7211 9.35817 30.6979C6.15016 30.3726 3.68679 27.4331 3.75149 24.0066C3.91017 15.5526 8.48781 11.7477 12.2781 10.0454C11.0794 11.6665 10.1382 13.3352 9.46682 15.0265Z" fill="white" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="absolute -bottom-[30px] right-0 md:right-[100px] lg:right-[220px] xl:right-[240px]">
            <path d="M8.2467 24.0513C7.42577 26.1228 6.12817 28.1736 4.3905 30.1475C3.83752 30.7755 3.76732 31.6722 4.21594 32.3783C4.5614 32.9215 5.14245 33.231 5.75769 33.231C5.93102 33.231 6.10742 33.2066 6.28137 33.1559C9.96424 32.0799 18.5549 28.2578 18.7857 16.041C18.8748 11.3236 15.4244 7.27091 10.9317 6.81436C8.45544 6.56655 5.97802 7.371 4.14209 9.03055C2.30371 10.6919 1.24902 13.0637 1.24902 15.5387C1.24902 19.6677 4.17992 23.2786 8.2467 24.0513ZM5.81811 10.8854C6.98571 9.8301 8.45544 9.26796 10.0137 9.26796C10.234 9.26796 10.4562 9.27895 10.679 9.30214C13.8876 9.62745 16.3504 12.5669 16.2857 15.9934C16.1264 24.4468 11.5493 28.2523 7.75904 29.9546C8.95837 28.3323 9.90076 26.6636 10.5709 24.9723C10.8321 24.3137 10.7888 23.5777 10.4525 22.9527C10.1003 22.2971 9.47229 21.8321 8.73071 21.6764C5.84375 21.0728 3.74902 18.491 3.74902 15.5387C3.74902 13.7699 4.50341 12.0738 5.81811 10.8854Z" fill="white" />
            <path d="M24.1794 32.3783C24.5249 32.9215 25.1059 33.231 25.7212 33.231C25.8945 33.231 26.0703 33.2066 26.2449 33.1559C29.9277 32.0799 38.5178 28.2578 38.7485 16.041V16.0404C38.8364 11.323 35.3867 7.27089 30.8933 6.81435C28.4141 6.56228 25.9409 7.37038 24.105 9.03054C22.2666 10.6919 21.2119 13.0637 21.2119 15.5387C21.2119 19.6677 24.1428 23.2786 28.209 24.0513C27.3875 26.1247 26.0899 28.1754 24.3528 30.1481C23.7998 30.7768 23.7302 31.6728 24.1794 32.3783ZM30.5332 24.9735C30.7944 24.315 30.7517 23.5789 30.416 22.9539C30.0632 22.2978 29.4358 21.8327 28.6936 21.6764C25.8066 21.0728 23.7119 18.491 23.7119 15.5387C23.7119 13.7693 24.4663 12.0738 25.781 10.8854C26.948 9.83009 28.4177 9.26795 29.9765 9.26795C30.1963 9.26795 30.4184 9.27894 30.6418 9.30213C33.8498 9.62744 36.3132 12.5669 36.2485 15.9934C36.0898 24.4474 31.5122 28.2523 27.7219 29.9546C28.9206 28.3335 29.8618 26.6648 30.5332 24.9735Z" fill="white" />
          </svg>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            loop='true'
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 640px
              768: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}

            className='mySwiper '
          >
            <SwiperSlide>
              <div className='bg-testimonial1-gradient rounded-[100px]  h-[104px] w-[367px] flex gap-[68px] pl-[78px] items-center mx-auto  '>
                <div className='text-white text-center'>
                  <h5>Theresa Webb</h5>
                  <p>President of Sales</p>
                </div>
                <Image
                  className=''
                  src='/client1.png'
                  width={88}
                  height={88}
                  alt='Logo'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=' bg-testimonial2-gradient rounded-b-[100px] rounded-br-[100px] h-[215px] w-[216px] flex flex-col justify-center items-center mx-auto  '>
                <Image
                  className=''
                  src='/client1.png'
                  width={88}
                  height={88}
                  alt='Logo'
                />
                <div className='text-white text-center mt-[12px]'>
                  <h5>Theresa Webb</h5>
                  <p>President of Sales</p>
                </div>

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='bg-testimonial3-gradient rounded-[100px]  h-[104px] w-[367px] flex gap-[68px] pl-2 items-center mx-auto  '>
                <Image
                  className=''
                  src='/client1.png'
                  width={88}
                  height={88}
                  alt='Logo'
                />
                <div className='text-white text-center'>
                  <h5>Theresa Webb</h5>
                  <p>President of Sales</p>
                </div>

              </div>
            </SwiperSlide>

          </Swiper>
          <div class="text-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="4" viewBox="0 0 60 4" fill="none" className="mx-auto mt-[37px]">
              <rect width="24" height="4" rx="2" fill="url(#paint0_linear_24_313)" />
              <rect x="28" width="8" height="4" rx="2" fill="#67738C" />
              <rect x="40" width="8" height="4" rx="2" fill="#67738C" />
              <rect x="52" width="8" height="4" rx="2" fill="#67738C" />
              <defs>
                <linearGradient id="paint0_linear_24_313" x1="-1.11917" y1="-2.78788" x2="6.89385" y2="13.2049" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0474911" stop-color="#FF0019" />
                  <stop offset="1" stop-color="#9E0514" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
