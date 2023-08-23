'use client'

import Image from "next/image";
import car1 from '../../../public/2021.png'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Bebas_Neue } from 'next/font/google'
import localFont from 'next/font/local'
const bebas_neue = Bebas_Neue({ subsets: ['latin'], weight: ['400'], })
const satoshi = localFont({ src: "./Satoshi-Bold.otf", display: 'swap', })
import 'react-tabs/style/react-tabs.css';

const CarBrands = () => {
    return (
        <div className='car-brands bg-[#0F131C] pt-10 xl:pt-[115px] -mt-[1px] '>
            <div className="page-wrapper">
                <h2 style={bebas_neue.style} className='text-center text-white text-[28px] xl:text-[66px] mb-[64px]'>Find The Cars Of Your Choice</h2>
            </div>
            <Tabs>
                <TabList className='bg-[#000]' >
                    <div className="max-w-[1170px] mx-auto w-full text-white md:px-4">
                        <Tab >Mercedes-Benz</Tab>
                        <Tab>Maruti Suzuki</Tab>
                        <Tab>Hyundai</Tab>
                        <Tab>Toyota</Tab>
                        <Tab>All Products</Tab>

                    </div>


                </TabList>
                <div className="max-w-[1170px] mx-auto w-full text-white mt-[82px] px-4 md:px-4 xl:px-0 ">
                    <TabPanel>
                        <div className='md:flex'>
                            <div className="car-image bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] md:mr-12 lg:mr-32 xl:mr-[112px]">
                                <Image className='ml-[30px] xl:ml-[50px] mt-[30px]' src='/2021.png' width={502} height={278} alt='Logo' />



                            </div>
                            <div className='flex '>
                                <div className='lg:mr-[67px] xl:mr-[97px]'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz 430XI AWD</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">Just as you would expect from Mercedes-Benz, the <br /> materials used are of the highest quality.</p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">847 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">479 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">3.2s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                                <div className="hidden lg:block relative -mr-12  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <div className="">
                                        <p className="alocation-btn">Apply Allocation </p>
                                        <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex  mt-[82px]'>
                            <div className='flex '>
                                <div className="hidden lg:block relative  xl:mr-[97px]  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <p className=" alocation-btn">Apply Allocation</p>
                                    <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </div>
                                <div className='lg:ml-[130px] xl:ml-0'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz Style G1930</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">There is a wide range of model cars – from classic <br /> cars to the ultra-modern Mercedes-AMG. </p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">497 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">709 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">4.3s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] xl:-mr-6 ml-10 lg:ml-[125px] xl:ml-[112px] ">
                                <Image className='-ml-[30px] xl:-ml-[50px] pt-[30px] xl:pt-0 mt-[30px] xl:mt-[87px]' src='/mercedes.png' width={480} height={198} alt='Logo' />


                            </div>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='md:flex'>
                            <div className="car-image bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] md:mr-12 lg:mr-32 xl:mr-[112px]">
                                <Image className='ml-[30px] xl:ml-[50px] mt-[30px]' src='/2021.png' width={502} height={278} alt='Logo' />



                            </div>
                            <div className='flex '>
                                <div className='lg:mr-[67px] xl:mr-[97px]'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz 430XI AWD</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">Just as you would expect from Mercedes-Benz, the <br /> materials used are of the highest quality.</p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">847 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">479 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">3.2s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                                <div className="hidden lg:block relative -mr-12  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <div className="">
                                        <p className="alocation-btn">Apply Allocation </p>
                                        <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex  mt-[82px]'>
                            <div className='flex '>
                                <div className="hidden lg:block relative  xl:mr-[97px]  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <p className=" alocation-btn">Apply Allocation</p>
                                    <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </div>
                                <div className='lg:ml-[130px] xl:ml-0'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz Style G1930</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">There is a wide range of model cars – from classic <br /> cars to the ultra-modern Mercedes-AMG. </p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">497 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">709 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">4.3s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] xl:-mr-6 ml-10 lg:ml-[125px] xl:ml-[112px] ">
                                <Image className='-ml-[30px] xl:-ml-[50px] pt-[30px] xl:pt-0 mt-[30px] xl:mt-[87px]' src='/mercedes.png' width={480} height={198} alt='Logo' />


                            </div>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='md:flex'>
                            <div className="car-image bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] md:mr-12 lg:mr-32 xl:mr-[112px]">
                                <Image className='ml-[30px] xl:ml-[50px] mt-[30px]' src='/2021.png' width={502} height={278} alt='Logo' />



                            </div>
                            <div className='flex '>
                                <div className='lg:mr-[67px] xl:mr-[97px]'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz 430XI AWD</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">Just as you would expect from Mercedes-Benz, the <br /> materials used are of the highest quality.</p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">847 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">479 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">3.2s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                                <div className="hidden lg:block relative -mr-12  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <div className="">
                                        <p className="alocation-btn">Apply Allocation </p>
                                        <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex  mt-[82px]'>
                            <div className='flex '>
                                <div className="hidden lg:block relative  xl:mr-[97px]  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <p className=" alocation-btn">Apply Allocation</p>
                                    <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </div>
                                <div className='lg:ml-[130px] xl:ml-0'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz Style G1930</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">There is a wide range of model cars – from classic <br /> cars to the ultra-modern Mercedes-AMG. </p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">497 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">709 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">4.3s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] xl:-mr-6 ml-10 lg:ml-[125px] xl:ml-[112px] ">
                                <Image className='-ml-[30px] xl:-ml-[50px] pt-[30px] xl:pt-0 mt-[30px] xl:mt-[87px]' src='/mercedes.png' width={480} height={198} alt='Logo' />


                            </div>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='md:flex'>
                            <div className="car-image bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] md:mr-12 lg:mr-32 xl:mr-[112px]">
                                <Image className='ml-[30px] xl:ml-[50px] mt-[30px]' src='/2021.png' width={502} height={278} alt='Logo' />



                            </div>
                            <div className='flex '>
                                <div className='lg:mr-[67px] xl:mr-[97px]'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz 430XI AWD</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">Just as you would expect from Mercedes-Benz, the <br /> materials used are of the highest quality.</p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">847 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">479 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">3.2s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                                <div className="hidden lg:block relative -mr-12  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <div className="">
                                        <p className="alocation-btn">Apply Allocation </p>
                                        <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex  mt-[82px]'>
                            <div className='flex '>
                                <div className="hidden lg:block relative  xl:mr-[97px]  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <p className=" alocation-btn">Apply Allocation</p>
                                    <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </div>
                                <div className='lg:ml-[130px] xl:ml-0'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz Style G1930</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">There is a wide range of model cars – from classic <br /> cars to the ultra-modern Mercedes-AMG. </p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">497 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">709 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">4.3s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] xl:-mr-6 ml-10 lg:ml-[125px] xl:ml-[112px] ">
                                <Image className='-ml-[30px] xl:-ml-[50px] pt-[30px] xl:pt-0 mt-[30px] xl:mt-[87px]' src='/mercedes.png' width={480} height={198} alt='Logo' />


                            </div>


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='md:flex'>
                            <div className="car-image bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] md:mr-12 lg:mr-32 xl:mr-[112px]">
                                <Image className='ml-[30px] xl:ml-[50px] mt-[30px]' src='/2021.png' width={502} height={278} alt='Logo' />



                            </div>
                            <div className='flex '>
                                <div className='lg:mr-[67px] xl:mr-[97px]'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz 430XI AWD</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">Just as you would expect from Mercedes-Benz, the <br /> materials used are of the highest quality.</p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">847 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">479 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">3.2s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                                <div className="hidden lg:block relative -mr-12  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <div className="">
                                        <p className="alocation-btn">Apply Allocation </p>
                                        <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='md:flex  mt-[82px]'>
                            <div className='flex '>
                                <div className="hidden lg:block relative  xl:mr-[97px]  ">
                                    <div className="xl:w-[60px] xl:h-[342px]  bg-allocation-gradient    ">

                                    </div>
                                    <p className=" alocation-btn">Apply Allocation</p>
                                    <span><svg className="absolute left-[22px] top-[195px]" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M15.8335 10.8334L10.0002 16.6667L4.16683 10.8334M15.8335 4.16675L10.0002 10.0001L4.16683 4.16675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></span>
                                </div>
                                <div className='lg:ml-[130px] xl:ml-0'>
                                    <h2 style={satoshi.style} className='xl:text-[30px] text-[#FFF] xl:mb-[12px]'>Mercedes-Benz Style G1930</h2>
                                    <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] xl:mb-[38px]">There is a wide range of model cars – from classic <br /> cars to the ultra-modern Mercedes-AMG. </p>
                                    <p style={satoshi.style} className="flex items-center gap-6 mb-[8px] xl:text-[20px] text-[#FFF]">Details <span className=" line-6"></span></p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Horsepower: <span className="text-[#FFF] xl:text-[18px]">497 HP</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Torque: <span className="text-[#FFF] xl:text-[18px]">709 IB-ft</span></p>
                                        </div>
                                        <div className="pr-5 md:pr-0">
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px] mb-[24px]">Acceleration: <span className="text-[#FFF] xl:text-[18px]">4.3s</span></p>
                                            <p style={satoshi.style} className="text-[#67738C] xl:text-[18px]">Type: <span className="text-[#FFF] xl:text-[18px]">Convertible</span></p>
                                        </div>
                                    </div>
                                    <div className="mt-[65px] flex justify-between items-center pr-4 md:pr-0">
                                        <a style={satoshi.style} className="flex items-center gap-2 xl:text-[20px]" href="">View All Features <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M9.75 3.75L15 9L9.75 14.25M3.75 3.75L9 9L3.75 14.25" stroke="#EB2520" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></span></a>
                                        <p className="xl:text-[30px]">$2617,1370</p>
                                    </div>

                                </div>
                            </div>
                            <div className="bg-brand-gradient rounded-[20px] w-[300px] h-[210px] xl:w-[495px] xl:h-[345px] xl:-mr-6 ml-10 lg:ml-[125px] xl:ml-[112px] ">
                                <Image className='-ml-[30px] xl:-ml-[50px] pt-[30px] xl:pt-0 mt-[30px] xl:mt-[87px]' src='/mercedes.png' width={480} height={198} alt='Logo' />


                            </div>


                        </div>
                    </TabPanel>


                </div>

            </Tabs>

        </div>

    );
};

export default CarBrands;