import Image from "next/image";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });
const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

const satoshi = localFont({ src: "./Satoshi-Bold.otf", display: "swap" });

const Sales = () => {
  return (
    <div className='sales z-30  '>
      <div className='page-wrapper  relative md:flex  '>
        <Image
          src='/sales-bg.png'
          className='opacity-5 md:opacity-100 z-20'
          width={587}
          height={401}
          alt='Logo'
        />
        <div className='sales-content absolute md:relative z-10 md:z-20 top-[65px] md:top-[84px] left-[30px] text-white md:-ml-40 lg:-ml-24 xl:-ml-24'>
          <h2
            style={bebas_neue.style}
            className='text-[36px] md:text-[40px] lg:text-[50px] xl:text-[66px]  uppercase font-bold'
          >
            Grab <span className='text-[#FFA901]'>50% Off</span> On All <br />{" "}
            Brand Car
          </h2>
          <a
            style={satoshi.style}
            className='inline-flex gap-1 pt-[12px] pb-[14px] px-[20px] shop-btn mt-4 md:mt-[33px]'
            href=''
          >
            Shop Now{" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M21 12L3 12M17 8L21 12L17 8ZM21 12L17 16L21 12Z'
                stroke='white'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </a>
        </div>

        <div className='hidden md:flex md:ml-16 lg:ml-28  xl:ml-[152px] relative'>
          <svg
            className=''
            xmlns='http://www.w3.org/2000/svg'
            width='82'
            height='239'
            viewBox='0 0 82 239'
            fill='none'
          >
            <path d='M0 0H82V239L41 216.5L0 239V0Z' fill='#FFA901' />
          </svg>
          <p
            style={inter.style}
            className=' absolute top-24 -right-10 md:-ml-[50px] xl:-ml-[100px] uppercase text-2xl flash-sale text-white '
          >
            Flash Sales
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
