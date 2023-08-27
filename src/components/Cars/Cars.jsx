import Image from "next/image";
import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";
import img1 from "../../assets/image/purepng-11@2x.png";

const bebas_neue = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });
const satoshi = localFont({
  src: "../../assets/font/Satoshi-Bold.otf",
  display: "swap",
});

const Cars = () => {
  return (
    <div className='cars flex flex-row-reverse  relative -z-10 bg-[#0F131C]  overflow-hidden '>
      <div className='carsbg absolute -top-32 -right-20  -z-10 overflow-hidden'></div>
      <div className='page-wrapper pt-[122px] overflow-hidden'>
        <h1
          style={bebas_neue.style}
          className='cars-title uppercase pl-8 text-[40px] lg:text-[70px] md:mb-[40px] lg:mb-[70px] text-white'
        >
          Cars to suit <br /> your lifestyle
        </h1>

        <div className='cars-details-group grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3 md:gap-0 lg:gap-[45px] xl:gap-[119px] pl-[116px] mt-4 pb-[370px]  xl:pb-[115px]'>

          <div className='relative  '>
            <Image
              src='/cars-details-bg.png'
              className='absolute top-0 left-0'
              width={264}
              height={301}
              alt='Logo'
            />

            <div className=' absolute left-[31px] top-[14px] '>
              <h3
                style={satoshi.style}
                className='text-[#FFF] text-[30px] text-center '
              >
                New Car-B150
              </h3>
              <p
                style={satoshi.style}
                className='cars-details-price text-center text-[30px]  lg:text-[30px]   '
              >
                $124,100
              </p>
              <Image
                src='/purepng.png'
                className='absolute top-[113px] z-20 right-[0px]'
                width={350}
                height={202}
                alt='Logo'
              />
            </div>
          </div>




          <div className='relative mt-[350px] md:mt-24 xl:mt-[80px] '>
            <Image
              src='/cars-details-bg.png'
              className=''
              width={264}
              height={301}
              alt='Logo'
            />

            <div className='cars-content_two absolute left-[31px] top-[14px] z-20 '>
              <h3
                style={satoshi.style}
                className='text-[#FFF] text-[30px]  text-center '
              >
                New Car-A240
              </h3>
              <p
                style={satoshi.style}
                className='cars-details-price text-center text-[30px] lg:text-[30px] = '
              >
                $324,240
              </p>
              <Image
                src='/audi-png-car.png'
                className='absolute top-[126px] -right-[2px]'
                width={350}
                height={217}
                alt='Logo'
              />
            </div>
          </div>
          <div className='relative mt-14 xl:mt-[159px] '>
            <Image
              src='/cars-details-bg.png'
              className='absolute'
              width={264}
              height={301}
              alt='Logo'
            />

            <div className='cars-content_three absolute left-[31px] top-[14px] '>
              <h3
                style={satoshi.style}
                className='text-[#FFF] text-[30px]   text-center '
              >
                New Car-B150
              </h3>
              <p
                style={satoshi.style}
                className='cars-details-price text-center text-[30px]   '
              >
                $424,100
              </p>
              <Image
                src='/blue-ford-focus-car-png.png'
                className='absolute top-[111px] right-0'
                width={361}
                height={194}
                alt='Logo'
              />
            </div>
          </div>
          {/* <div className='cars-details relative md:mt-10 lg:mt-[80px] '>
            <div className='absolute top-0 left-0 right-0 bottom-0 rounded-t-[20px] rounded-b-none overflow-hidden bg-car-gradient '>
              <div className='absolute top-[2px] left-[2px] right-[2px] bottom-[2px] rounded-t-[20px] rounded-b-none bg-[#0F131C]'></div>
            </div>

            <div className='absolute bottom-4 md:bottom-8 lg:bottom-6'>
              <h3
                style={satoshi.style}
                className='text-[#FFF] text-[14px] md:text-[18px] lg:text-[30px]  text-center'
              >
                New Car-A240
              </h3>
              <p
                style={satoshi.style}
                className='cars-details-price text-center text-[14px] md:text-[18px] lg:text-[30px]  '
              >
                $324,240
              </p>
              <Image
                src='/audi-png-car.png'
                className='-ml-6 mt-2'
                width={350}
                height={217}
                alt='Logo'
              />
            </div>
          </div>
          <div className='cars-details relative md:mt-20  lg:mt-[159px]'>
            <div className='absolute top-0 left-0 right-0 bottom-0 rounded-t-[20px] rounded-b-none overflow-hidden bg-car-gradient '>
              <div className='absolute top-[2px] left-[2px] right-[2px] bottom-[2px] rounded-t-[20px] rounded-b-none bg-[#0F131C]'></div>
            </div>

            <div className='absolute bottom-6 md:bottom-10 lg:bottom-10'>
              <h3
                style={satoshi.style}
                className='text-[#FFF] text-[14px] md:text-[18px] lg:text-[30px] text-center '
              >
                New Car-B150
              </h3>
              <p
                style={satoshi.style}
                className='cars-details-price text-center text-[14px] md:text-[18px] lg:text-[30px]  '
              >
                $424,100
              </p>
              <Image
                src='/blue-ford-focus-car-png.png'
                className='-ml-6 mt-3'
                width={361}
                height={194}
                alt='Logo'
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cars;
