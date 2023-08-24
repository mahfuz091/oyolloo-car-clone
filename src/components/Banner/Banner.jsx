import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const satoshi = localFont({ src: "./Satoshi-Bold.otf", display: "swap" });

const Banner = () => {
  return (
    // h-[420px] md:h-[740px] lg:h-[750px] xl:h-[793px]
    <div className='banner px-4 md:px-2 pb-6 md:pb-16 lg:pb-0 overflow-hidden relative z-50 '>
      <div className='page-wrapper overflow-hidden'>
        <Image
          className='pt-[15px]  md:pt-[25px]  iconic-img'
          src='/iconic.png'
          width={1168}
          height={90}
          alt='Logo'
        />
        <h1
          style={bebas_neue.style}
          className='banner-title w-full mx-auto md:text-[79px] lg:text-[106px] xl:text-[123px] top-[20px] md:top-[50px] text-center'
        >
          Iconic Now Electric
        </h1>
        <Image
          className='mx-auto banner-img'
          src='/banner-bg.png'
          width={584}
          height={661}
          alt='banner'
        />
        <div className='hidden lg:block middle-circle absolute lg:left-[200px] xl:left-[277px] top-[450px]'></div>
        <div className='banner-car-img hidden xl:flex justify-between items-center '>
          <div className='banner-car-left-img'>
            <Image
              className='car-left absolute top-[352px] left-[9px] z-20'
              src='/purepng-1.png'
              width={246}
              height={141}
              alt='Logo'
            />
            <Image
              className='car-left-bg absolute top-[274px] left-0 z-10'
              src='/car-left-bg.png'
              width={206}
              height={213}
              alt='Logo'
            />
          </div>
          <div className='banner-car-right-img'>
            <Image
              className='absolute top-[352px] right-[9px] z-20'
              src='/blue-ford-focus-car-png.png'
              width={254}
              height={135}
              alt='Logo'
            />
            <Image
              className='absolute top-[274px] right-0 z-10'
              src='/car-right-bg.png'
              width={206}
              height={213}
              alt='Logo'
            />
          </div>
        </div>
        <div className='banner-car-description hidden lg:pb-10 xl:pb-[62px]  lg:flex justify-between items-center mt-8 '>
          <div className='next flex items-end gap-1'>
            <h6 style={satoshi.style}>Next</h6>
            <span></span>
            <p style={satoshi.style}>
              <span style={satoshi.style}>01/</span>07
            </p>
          </div>
          <div className='car-details flex lg:gap-[46px] md:gap-[20px]'>
            <div className='relative'>
              <Image
                className=''
                src='/car-details-bg.png'
                width={124}
                height={124}
                alt='Logo'
              />
              <div className='absolute top-[32px] left-[35px] lg:left-[28px]  '>
                <h6 style={bebas_neue.style}>450km</h6>
                <p style={satoshi.style}>Range</p>
              </div>
            </div>
            <div className='relative'>
              <Image
                className=''
                src='/car-details-bg.png'
                width={124}
                height={124}
                alt='Logo'
              />
              <div className='absolute top-[32px] left-[35px] lg:left-[28px] '>
                <h6 style={bebas_neue.style}>150km</h6>
                <p style={satoshi.style}>HP</p>
              </div>
            </div>
            <div className='relative'>
              <Image
                src='/car-details-bg.png'
                width={124}
                height={124}
                alt='Logo'
              />
              <div className='absolute top-[32px] left-[35px] lg:left-[28px]'>
                <h6 style={bebas_neue.style}>750km</h6>
                <p style={satoshi.style}>Speed</p>
              </div>
            </div>
          </div>
          <div>
            <a
              style={satoshi.style}
              className='flex items-center gap-1 apply-btn'
              href=''
            >
              Apply Allocation{" "}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
              >
                <path
                  d='M10.8332 4.16666L16.6665 9.99999L10.8332 15.8333M4.1665 4.16666L9.99984 9.99999L4.1665 15.8333'
                  stroke='#EB2520'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='hidden xl:block right-circle absolute top-[173px] right-3 xl:-right-[175px] overflow-hidden '></div>
      <svg
        className='hidden xl:block absolute top-[275px] left-0 '
        xmlns='http://www.w3.org/2000/svg'
        width='286'
        height='620'
        viewBox='0 0 286 620'
        fill='none'
      >
        <g opacity='0.16' filter='url(#filter0_f_24_61)'>
          <circle cx='-24' cy='310' r='110' fill='#EB2520' />
        </g>
        <defs>
          <filter
            id='filter0_f_24_61'
            x='-334'
            y='0'
            width='620'
            height='620'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              stdDeviation='100'
              result='effect1_foregroundBlur_24_61'
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Banner;
