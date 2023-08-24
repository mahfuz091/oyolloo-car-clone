import React from 'react';
import Image from "next/image";
import localFont from "next/font/local";
const satoshi = localFont({ src: "./Satoshi-Bold.otf", display: "swap" });
const satoshiMedium = localFont({ src: "./Satoshi-Regular.ttf", weight: "400", display: "swap" });

const Footer = () => {
    return (

        <div className="footer">
            <div className="page-wrapper">
                <div className=" pt-4 xl:pt-16 px-4 xl:px-0 grid grid-cols-2 xl:grid-cols-5 xl:gap-[52px]">
                    <div className="footer-logo xl:w-[156px]">
                        <Image className="mb-4 lg:mb-[25px]" src='/logo.png' width={100.97} height={30} alt='Logo' />
                        <h5 style={satoshi.style}>Follow Us</h5>
                        <div className="flex gap-[10px]">
                            <Image src='/fb.png' width={34} height={34} alt='Logo' />
                            <Image src='/twiter.png' width={34} height={34} alt='Logo' />
                            <Image src='/youtube.png' width={34} height={34} alt='Logo' />
                        </div>
                    </div>
                    <div className="company xl:w-[165px]">
                        <h5 style={satoshi.style} className="title">Company</h5>
                        <ul style={satoshiMedium.style} >
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Store</a></li>
                            <li><a href="#">Features</a></li>
                        </ul>
                    </div>
                    <div className="partners xl:w-[165px]">
                        <h5 style={satoshi.style} className="title">Partners</h5>
                        <ul style={satoshiMedium.style}>
                            <li><a href="#">Affiliate Program</a></li>
                            <li><a href="#">Advertise</a></li>
                            <li><a href="#">Vendor Database</a></li>
                        </ul>
                    </div>
                    <div className="help xl:w-[165px]">
                        <h5 style={satoshi.style} className="title">Help</h5>
                        <ul style={satoshiMedium.style}>
                            <li><a href="#">Contacts Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="subscribe xl:w-[271px] font ">
                        <h5 style={satoshi.style} className="title">Subscribe Now </h5>
                        <p style={satoshiMedium.style} className="desc lg:mb-7 ">A newsletter is a tool used to communicate regularly with your subscribers</p>
                        <div className="subscribe-email">
                            <input className='bg-[#161b28] py-[10px] pl-[15px] text-[#67738C] ' type="email" name="" id="" placeholder='Enter your email' />
                            <button className="send-btn py-[13px] px-3 "><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9084 2.63236C18.8282 2.565 18.7142 2.54937 18.6176 2.59234L1.15569 10.3684C1.06168 10.4103 1.00115 10.5001 1.00002 10.5995C0.998886 10.6988 1.05743 10.7899 1.15053 10.8337L4.6 12.3258C4.69062 12.3685 11.8 8.77764 11.8 8.77764L7.43411 13.4654C7.34792 13.5579 7.3 13.6797 7.3 13.8062V17.2943C7.3 17.7444 7.84822 17.9653 8.1603 17.641L10.441 15.2706L14.0421 17.0175C14.1125 17.0497 14.194 17.0511 14.2655 17.0213C14.337 16.9914 14.3915 16.9333 14.4148 16.8621L18.9876 2.90349C19.0196 2.80601 18.9884 2.69971 18.9084 2.63236Z" fill="white" />
                            </svg></button>

                        </div>
                    </div>

                </div>
                <hr className="bg-[#67738C] opacity-5 lg:mt-[55px]  h-[0.75px]" />
                <div className="flex justify-between mt-[27px] pb-[30px]">
                    <div>
                        <p>© 2022 CreativePeoples</p>
                    </div>
                    <div className="flex gap-[18px]">
                        <p>Payment gateway</p>
                        <Image className="" src='/image-112.png' width={45.467} height={22} alt='Logo' />
                        <Image className="" src='/image-113.png' width={27.867} height={22} alt='Logo' />
                        <Image className="" src='/image-114.png' width={59.2} height={22} alt='Logo' />

                    </div>
                </div>
            </div >
        </div >
    );
};

export default Footer;